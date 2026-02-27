# Trinity — Start Here 🚀

Open a **Command Prompt or PowerShell** (not the Antigravity terminal) in this folder and follow these steps in order.

---

## ✅ Step 1 — Install Backend

```cmd
cd backend
npm install --legacy-peer-deps
npx prisma generate
cd ..
```

---

## ✅ Step 2 — Start Local Database + Backend (Docker)

Make sure **Docker Desktop is running**, then:

```cmd
docker compose up -d
```

Check everything started:
```cmd
docker compose ps
```
You should see `postgres` and `backend` both `running`.

---

## ✅ Step 3 — Run Database Migration + Seed Admin

```cmd
docker compose exec backend npx prisma migrate deploy
docker compose exec backend npm run seed
```

Expected output:
```
✅ Admin created: admin@thetrinityservices.in
✅ Homepage SEO seeded
✅ Sample blog post seeded
🎉 Seeding complete!
```

---

## ✅ Step 4 — Test the Backend

```cmd
curl http://localhost:8080/api/health
```
Expected: `{"status":"ok","timestamp":"...","service":"Trinity Backend API"}`

```cmd
curl http://localhost:8080/api/seo?page=home
```
Expected: JSON with `metaTitle`, `metaDesc`, `keywords`

---

## ✅ Step 5 — Start the Frontend

Open a **second terminal** in this folder:

```cmd
npm run start
```

Frontend opens at: http://localhost:4028

---

## ✅ Step 6 — Access Admin Panel

Open browser → http://localhost:4028/admin/login

```
Email:    admin@thetrinityservices.in
Password: Trinity@Admin2024
```

---

## ✅ Step 7 — Commit & Push to GitHub

```cmd
git add -A
git commit -m "feat: add backend, admin CMS, SEO, tracking, Docker, CI/CD"
git push origin main
```

Pushing to `main` triggers the GitHub Actions CI/CD which:
1. Builds both Docker images
2. Pushes them to `jeromedesliva` Docker Hub
3. SSHs into your GCP VM and deploys

---

## ✅ Step 8 — Deploy to GCP (one-time)

Follow the full guide → **[DEPLOYMENT.md](./DEPLOYMENT.md)**

Quick summary:
1. Create GCP e2-medium VM (Ubuntu 22.04, HTTP + HTTPS firewall on)
2. Add DNS A records in Square Brothers → VM External IP
3. SSH into VM → copy `.env.prod.example` → fill in real passwords
4. Run certbot for SSL
5. Add 4 GitHub Secrets → any future `git push main` deploys automatically

---

## GitHub Repository Secrets Required

Go to: **GitHub → Your Repo → Settings → Secrets → Actions**

| Secret | Value |
|--------|-------|
| `DOCKERHUB_TOKEN` | Docker Hub → Account Settings → Access Tokens → New Token |
| `VM_HOST` | GCP VM External IP address |
| `VM_USER` | Your GCP VM Linux username |
| `VM_SSH_KEY` | Contents of `~/.ssh/id_rsa` private key |

---

## Troubleshooting

**Backend not starting?**
```cmd
docker compose logs backend
```

**DB connection error?**
```cmd
docker compose logs postgres
```

**Port 8080 in use?** Stop whatever is using it:
```cmd
netstat -ano | findstr :8080
```

**Restart everything clean:**
```cmd
docker compose down
docker compose up -d
```
