# Trinity Deployment Guide

## GCP VM + Docker + SSL + CI/CD
**Domain:** `thetrinityservices.in` (DNS hosted at Square Brothers)
**Docker Hub:** `jeromedesliva`

---

## Step 1 — Create GCP VM

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. **Compute Engine → VM Instances → Create Instance**
   - **Name:** `trinity-prod`
   - **Machine:** `e2-medium` (2 vCPU, 4 GB RAM)
   - **OS:** Ubuntu 22.04 LTS (x86/64)
   - **Disk:** 30 GB SSD
   - **Firewall:** ✅ Allow HTTP, ✅ Allow HTTPS
3. Click **Create** and note the **External IP**

---

## Step 2 — Configure DNS (Square Brothers)

In your Square Brothers DNS panel, add:

| Type | Host | Value              | TTL  |
|------|------|--------------------|------|
| A    | @    | `YOUR_VM_IP`       | 3600 |
| A    | www  | `YOUR_VM_IP`       | 3600 |

Wait 10–30 minutes for propagation. Test: `nslookup thetrinityservices.in`

---

## Step 3 — Set Up VM

SSH into the VM:
```bash
gcloud compute ssh trinity-prod --zone=YOUR_ZONE
```

Install Docker:
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose v2
sudo apt install -y docker-compose-plugin

# Verify
docker --version
docker compose version
```

---

## Step 4 — Upload Files to VM

```bash
# Create app directory
sudo mkdir -p /opt/trinity
sudo chown $USER:$USER /opt/trinity
cd /opt/trinity

# Upload docker-compose and nginx config from your local machine:
# (Run from your local PowerShell)
gcloud compute scp docker-compose.prod.yml trinity-prod:/opt/trinity/ --zone=YOUR_ZONE
gcloud compute scp -r nginx/ trinity-prod:/opt/trinity/ --zone=YOUR_ZONE
```

---

## Step 5 — Create Environment File

On the VM:
```bash
cd /opt/trinity
nano .env.prod
```

Paste and fill in (based on `.env.prod.example`):
```env
POSTGRES_USER=trinity
POSTGRES_PASSWORD=YOUR_STRONG_PASSWORD_HERE
POSTGRES_DB=trinity_db
DATABASE_URL=postgresql://trinity:YOUR_STRONG_PASSWORD_HERE@postgres:5432/trinity_db
JWT_SECRET=YOUR_64_CHAR_RANDOM_SECRET_HERE
JWT_EXPIRES_IN=7d
PORT=8080
NODE_ENV=production
CORS_ORIGIN=https://www.thetrinityservices.in
ADMIN_EMAIL=admin@thetrinityservices.in
ADMIN_PASSWORD=YOUR_ADMIN_PASSWORD
ADMIN_NAME=Trinity Admin
```

Generate a secure JWT secret:
```bash
openssl rand -base64 48
```

---

## Step 6 — Install SSL (Let's Encrypt)

Install Certbot:
```bash
sudo apt install -y certbot python3-certbot-nginx
```

Get certificate (DNS must be pointing to VM first):
```bash
sudo certbot certonly --standalone \
  -d thetrinityservices.in \
  -d www.thetrinityservices.in \
  --email admin@thetrinityservices.in \
  --agree-tos \
  --non-interactive
```

Enable auto-renewal:
```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

# Test renewal
sudo certbot renew --dry-run
```

---

## Step 7 — First Deployment

```bash
cd /opt/trinity

# Pull images
docker pull jeromedesliva/trinity-backend:latest
docker pull jeromedesliva/trinity-frontend:latest
docker pull nginx:alpine
docker pull postgres:15-alpine

# Start all services
docker compose -f docker-compose.prod.yml up -d

# Check status
docker compose -f docker-compose.prod.yml ps
```

---

## Step 8 — Seed Admin Account

Run after containers are up (only needed once):
```bash
docker compose -f docker-compose.prod.yml exec backend \
  node -e "
  const { PrismaClient } = require('@prisma/client');
  const bcrypt = require('bcryptjs');
  const prisma = new PrismaClient();
  bcrypt.hash(process.env.ADMIN_PASSWORD, 12).then(pw => {
    return prisma.user.upsert({
      where: { email: process.env.ADMIN_EMAIL },
      create: { name: process.env.ADMIN_NAME, email: process.env.ADMIN_EMAIL, password: pw, role: 'ADMIN' },
      update: {}
    });
  }).then(() => { console.log('Admin seeded!'); process.exit(0); });
  "
```

Or use the seed script during development:
```bash
# Inside backend folder (dev only)
npm run seed
```

---

## Step 9 — Set Up GitHub Actions CI/CD

In your GitHub repo → **Settings → Secrets and variables → Actions**, add:

| Secret Name       | Value                                   |
|-------------------|-----------------------------------------|
| `DOCKERHUB_TOKEN` | Your Docker Hub access token            |
| `VM_HOST`         | Your GCP VM external IP (e.g. 34.x.x.x)|
| `VM_USER`         | Your VM username (usually your GCP username) |
| `VM_SSH_KEY`      | Your private SSH key (contents of `~/.ssh/id_rsa`) |

Generate SSH key pair if needed:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-trinity"
# Add public key to VM: ~/.ssh/authorized_keys
# Add private key contents as VM_SSH_KEY GitHub secret
```

**After this, every push to `main` automatically:**
1. Builds Docker images
2. Pushes to Docker Hub
3. SSHs into VM and restarts containers

---

## Step 10 — Add VITE_API_URL to Frontend .env

In your local `trinity_ai_hub/` folder, update `.env`:
```env
VITE_API_URL=https://www.thetrinityservices.in
```

---

## Verification Checklist

```bash
# Health check
curl https://www.thetrinityservices.in/api/health

# SEO endpoint
curl "https://www.thetrinityservices.in/api/seo?page=home"

# Sitemap
curl https://www.thetrinityservices.in/sitemap.xml

# robots.txt
curl https://www.thetrinityservices.in/robots.txt

# Test login
curl -X POST https://www.thetrinityservices.in/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@thetrinityservices.in","password":"YOUR_ADMIN_PASSWORD"}'
```

---

## Admin Panel Access

```
URL:  https://www.thetrinityservices.in/admin/login
User: admin@thetrinityservices.in
Pass: (set in .env.prod ADMIN_PASSWORD)
```

---

## Monitoring

```bash
# View all container logs
docker compose -f docker-compose.prod.yml logs -f

# Backend logs only
docker compose -f docker-compose.prod.yml logs -f backend

# Restart a service
docker compose -f docker-compose.prod.yml restart backend

# Check disk usage
docker system df
```

---

## Monthly Cost Estimate

| Resource     | Cost    |
|--------------|---------|
| GCP e2-medium| ~$25/mo |
| Docker Hub   | Free    |
| DNS (Square) | Existing|
| SSL (Certbot)| Free    |
| **Total**    | **~$25/mo** |
