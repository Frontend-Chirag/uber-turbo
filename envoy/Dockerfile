# envoy/Dockerfile
FROM envoyproxy/envoy:v1.27-latest AS base

# Install protoc for descriptor generation
FROM golang:1.21-alpine AS proto-builder
RUN apk add --no-cache protobuf protobuf-dev

WORKDIR /proto
COPY packages/proto/*.proto ./
COPY envoy/generate-descriptor.sh ./

# Generate proto descriptor for gRPC JSON transcoding
RUN chmod +x generate-descriptor.sh && ./generate-descriptor.sh

# Final image
FROM base

# Copy Envoy configuration
COPY envoy/envoy.yaml /etc/envoy/envoy.yaml

# Copy proto descriptor
COPY --from=proto-builder /proto/service_descriptor.pb /etc/envoy/proto/service_descriptor.pb

# Copy startup script
COPY envoy/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80 9901

ENTRYPOINT ["/docker-entrypoint.sh"]

# envoy/generate-descriptor.sh
#!/bin/sh
# Generate proto descriptor for Envoy gRPC JSON transcoding

protoc \
  --include_imports \
  --include_source_info \
  --descriptor_set_out=service_descriptor.pb \
  auth.proto \
  ride.proto \
  payment.proto

# envoy/docker-entrypoint.sh
#!/bin/sh
set -e

# Replace environment variables in config
# Convert JWT secret to base64 if not already
if [ -n "$JWT_SECRET" ]; then
  JWT_SECRET_BASE64=$(echo -n "$JWT_SECRET" | base64 | tr -d '\n')
  export JWT_SECRET_BASE64
fi

# Replace variables in envoy.yaml
envsubst < /etc/envoy/envoy.yaml > /tmp/envoy.yaml
cp /tmp/envoy.yaml /etc/envoy/envoy.yaml

# Start Envoy
exec envoy -c /etc/envoy/envoy.yaml