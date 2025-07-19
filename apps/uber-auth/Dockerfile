FROM node:18-alpine AS deps

WORKDIR /app

# Copy root-level package config files (if any workspaces are defined in root)
COPY ../../package.json ../../package-lock.json ./ 
COPY ../../packages ./packages
COPY ../../apps ./apps

# Go to the correct app directory
WORKDIR  /app/apps/uber-auth

# Install all workspace dependencies
RUN npm install

# Build only this app
RUN npm run build

# -- Production Image --
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app/apps/uber/public ./public
COPY --from=deps /app/apps/uber/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/uber/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
