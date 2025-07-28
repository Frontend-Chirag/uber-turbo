#!/bin/bash

set -e


echo "🔍 Debugging Docker build issues..."

if [ ! -f "package.json" ]; then
    echo "Error: Must run from monorepo root"
    exit 1
fi


echo "📁 Checking required files..."
required_files=(
    "package.json"
    "pnpm-lock.yaml"
    "pnpm-workspace.yaml"
    "turbo.json"
    "apps/uber/package.json"
    "apps/uber-auth/package.json"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ Found: $file"
    else
        echo "❌ Missing: $file"
        exit 1
    fi
done


echo -e "\n🔧 Testing turbo locally..."
if command -v turbo &> /dev/null; then
    echo "✅ Turbo is installed globally"
else
    echo "⚠️  Turbo not found globally, checking local..."
    if [ -f "node_modules/.bin/turbo" ]; then
        echo "✅ Turbo found in node_modules"
    else
        echo "📦 Installing dependencies..."
        pnpm install
    fi
fi


echo -e "\n🧪 Testing turbo prune..."
pnpm turbo prune uber-auth --docker
if [ -d "out" ]; then
    echo "✅ Turbo prune successful"
    echo "📂 Contents of out directory:"
    find out -type f -name "*.json" | head -20
    rm -rf out
else
    echo "❌ Turbo prune failed"
fi



# Build with debug output
echo -e "\n🏗️  Building with debug output..."

# Create a test Dockerfile with extra debugging
cat > Dockerfile.debug <<EOF
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="\$PNPM_HOME:\$PATH"
RUN corepack enable

# Debug: Show pnpm version
RUN pnpm --version

FROM base AS pruner
RUN pnpm install -g turbo
COPY . .
RUN turbo --version
RUN turbo prune uber-auth --docker

FROM base AS installer
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./

# Debug: Show what files we have
RUN echo "=== Files in root ===" && ls -la
RUN echo "=== Package.json files ===" && find . -name "package.json" -type f
RUN echo "=== Installing dependencies ===" 
RUN pnpm install --frozen-lockfile

# Debug: Show installed packages
RUN echo "=== Checking node_modules ===" && ls -la node_modules | head -20
RUN echo "=== Checking for next ===" && find . -name "next" -type d | head -10

FROM base AS builder
COPY --from=pruner /app/out/full/ .
COPY --from=installer /app/node_modules ./node_modules

# Debug: Verify structure
RUN echo "=== Builder stage files ===" && ls -la
RUN echo "=== Apps directory ===" && ls -la apps/
RUN echo "=== Uber-auth directory ===" && ls -la apps/uber-auth/
RUN echo "=== Node modules in apps ===" && ls -la apps/uber-auth/node_modules || echo "No node_modules in app"

# Try to install in the app directory if needed
RUN cd apps/uber-auth && pnpm install

# Now build
RUN pnpm turbo build --filter=uber-auth
EOF

echo "Building debug image..."
docker build -t uber-auth-debug -f Dockerfile.debug .

# Clean up
rm -f Dockerfile.debug

echo -e "\n✅ Debug script complete!"