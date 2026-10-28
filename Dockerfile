# Step 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package configuration
COPY package*.json ./

# Install dependencies with retry settings
RUN npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && (npm ci || npm install)

# Copy source code and assets
COPY . .

# Build production bundle
RUN npm run build

# Step 2: Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
