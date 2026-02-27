# ── Stage 1: Build ─────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Accept API URL as build arg (passed by CI/CD)
ARG VITE_API_URL=https://www.thetrinityservices.in
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ── Stage 2: Serve with Nginx ───────────────────────────────────────
FROM nginx:alpine

# Copy built React app
COPY --from=builder /app/build /usr/share/nginx/html

# SPA fallback: all routes → index.html
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { try_files $uri $uri/ /index.html; } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ { expires 1y; add_header Cache-Control "public, immutable"; } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
