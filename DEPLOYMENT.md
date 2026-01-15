# Deployment Guide - Personal Finance App

This guide covers multiple options for deploying your personal finance app online.

## Option 1: Railway (Recommended - Easiest)

Railway provides a simple all-in-one deployment solution with PostgreSQL hosting.

### Steps:

1. **Sign up for Railway**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository

3. **Add PostgreSQL**
   - In your project, click "New"
   - Select "Database" → "PostgreSQL"
   - Railway will create a PostgreSQL instance

4. **Configure Backend Service**
   - Click "New" → "GitHub Repo"
   - Select your repository
   - Add these environment variables:
     ```
     PORT=5000
     DB_HOST=${{Postgres.PGHOST}}
     DB_PORT=${{Postgres.PGPORT}}
     DB_NAME=${{Postgres.PGDATABASE}}
     DB_USER=${{Postgres.PGUSER}}
     DB_PASSWORD=${{Postgres.PGPASSWORD}}
     ```
   - Set root directory to `backend`
   - Set start command: `npm install && npm start`

5. **Initialize Database**
   - Go to PostgreSQL service
   - Click "Connect" → "PostgreSQL CLI"
   - Copy and paste the contents of `backend/init-db.sql`

6. **Configure Frontend Service**
   - Click "New" → "GitHub Repo"
   - Select your repository (add again)
   - Set root directory to `frontend`
   - Add environment variable:
     ```
     VITE_API_URL=https://your-backend-url.railway.app
     ```
   - Set build command: `npm install && npm run build`
   - Set start command: `npx serve -s dist -p $PORT`

7. **Update Frontend Code**
   Update `frontend/src/App.jsx` to use environment variable:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || '/api'
   ```

---

## Option 2: Render

Render offers free hosting with PostgreSQL support.

### Steps:

1. **Sign up for Render**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create PostgreSQL Database**
   - Click "New +" → "PostgreSQL"
   - Name: `personal-finance-db`
   - Select free plan
   - Click "Create Database"
   - Save the Internal Database URL

3. **Initialize Database**
   - In database dashboard, click "Connect" → "External Connection"
   - Use provided connection details with your PostgreSQL client:
     ```bash
     psql postgres://[connection-string] < backend/init-db.sql
     ```

4. **Deploy Backend**
   - Click "New +" → "Web Service"
   - Connect your repository
   - Settings:
     - Name: `personal-finance-backend`
     - Root Directory: `backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add environment variables:
     ```
     PORT=5000
     DB_HOST=[from database internal URL]
     DB_PORT=[from database internal URL]
     DB_NAME=[from database internal URL]
     DB_USER=[from database internal URL]
     DB_PASSWORD=[from database internal URL]
     ```
   - Click "Create Web Service"

5. **Deploy Frontend**
   - Click "New +" → "Static Site"
   - Connect your repository
   - Settings:
     - Name: `personal-finance-frontend`
     - Root Directory: `frontend`
     - Build Command: `npm install && npm run build`
     - Publish Directory: `dist`
   - Add environment variable:
     ```
     VITE_API_URL=https://personal-finance-backend.onrender.com
     ```
   - Click "Create Static Site"

6. **Update Frontend Code** (same as Railway option above)

---

## Option 3: Vercel (Frontend) + Supabase (Backend + Database)

### Steps:

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Sign up and create new project
   - Copy database connection details
   - Go to SQL Editor and run `backend/init-db.sql`

2. **Create Supabase Edge Functions (API)**
   - Install Supabase CLI: `npm install -g supabase`
   - Run `supabase init`
   - Create functions for each API endpoint in `supabase/functions/`

   Alternative: Deploy backend to Vercel as serverless functions

3. **Deploy Frontend to Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Settings:
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add environment variable:
     ```
     VITE_API_URL=https://your-backend-url
     ```
   - Deploy

---

## Option 4: Heroku Alternative - Fly.io

### Steps:

1. **Install Fly CLI**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign up and authenticate**
   ```bash
   fly auth signup
   fly auth login
   ```

3. **Deploy PostgreSQL**
   ```bash
   fly postgres create
   ```
   - Name: `personal-finance-db`
   - Select region and configuration

4. **Deploy Backend**
   ```bash
   cd backend
   fly launch
   ```
   - Follow prompts
   - Attach the PostgreSQL database
   - Set environment variables when prompted

5. **Deploy Frontend**
   - Similar process for frontend
   - Update API URL to point to backend

---

## Environment Variables for Production

Update `backend/server.js` to handle production URLs:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

Update `frontend/vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'http://localhost:5000/api')
  }
})
```

---

## Quick Start Summary

**Easiest Option: Railway**
1. Push code to GitHub
2. Sign up at railway.app
3. Deploy from GitHub
4. Add PostgreSQL
5. Configure environment variables
6. Done!

**Cost Comparison:**
- Railway: $5/month free credits
- Render: Free tier with sleep after inactivity
- Vercel: Free for frontend
- Supabase: Free tier (500MB database)
- Fly.io: Free allowance

---

## Production Checklist

Before deploying:

- [ ] Add CORS configuration for your frontend domain
- [ ] Set up environment variables properly
- [ ] Change database password from default
- [ ] Test API endpoints
- [ ] Set up SSL/HTTPS (usually automatic on these platforms)
- [ ] Configure domain name (optional)
- [ ] Set up monitoring/logging
- [ ] Back up your database regularly

---

## Troubleshooting

**Database connection errors:**
- Verify all DB environment variables are correct
- Check if database allows external connections
- Ensure SSL mode is configured if required

**CORS errors:**
- Add your frontend URL to CORS configuration
- Check that backend is running and accessible

**Build failures:**
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check build logs for specific errors
