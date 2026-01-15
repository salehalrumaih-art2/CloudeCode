# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication with Google Sign-In for your Personal Finance App.

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "Personal Finance App")
4. (Optional) Enable Google Analytics
5. Click "Create project" and wait for it to finish

## Step 2: Enable Google Authentication

1. In your Firebase project, click on "Authentication" in the left sidebar
2. Click "Get started" if this is your first time
3. Click on the "Sign-in method" tab
4. Click on "Google" in the list of providers
5. Toggle the "Enable" switch to ON
6. Select a "Project support email" from the dropdown
7. Click "Save"

## Step 3: Register Your Web App

1. In the Firebase Console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (`</>`  - it looks like angle brackets)
5. Enter an app nickname (e.g., "Personal Finance Web")
6. Check "Also set up Firebase Hosting" (optional)
7. Click "Register app"

## Step 4: Get Your Firebase Configuration

After registering your app, you'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

**Copy these values** - you'll need them in the next step!

## Step 5: Configure Your Frontend Environment Variables

1. In your `frontend` folder, create a `.env` file:
   ```bash
   cd frontend
   cp .env.example .env
   ```

2. Open `frontend/.env` and add your Firebase configuration:
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com/api

   # Replace these with YOUR values from Firebase Console
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-app
   VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

## Step 6: Add Environment Variables to Render (For Deployment)

### Frontend (Static Site)

1. Go to your Render dashboard
2. Click on your **"personal-finance-frontend"** service
3. Click **"Environment"** in the left sidebar
4. Add each Firebase variable:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
5. Click **"Save Changes"**

### Backend (Web Service)

Firebase Admin SDK will automatically use Application Default Credentials on Render. No additional configuration needed!

## Step 7: Configure Authorized Domains

1. In Firebase Console, go to **Authentication** → **Settings** → **Authorized domains**
2. Add your deployed frontend URL:
   - `personal-finance-frontend-lo8w.onrender.com` (your actual Render URL)
3. Click **"Add domain"**

This allows Firebase to work with your deployed app!

## Step 8: Test Your Authentication

1. **Local Testing:**
   ```bash
   # In your project root
   cd frontend
   npm run dev
   ```
   - Open http://localhost:3000
   - You should see the login screen
   - Click "Sign in with Google"
   - Sign in with your Google account

2. **Production Testing:**
   - Visit your deployed frontend URL
   - Try signing in with Google
   - You should be redirected to your transactions page

## Troubleshooting

### "Firebase: Error (auth/unauthorized-domain)"
**Solution:** Add your domain to Firebase Console → Authentication → Settings → Authorized domains

### "Error initializing Firebase"
**Solution:** Check that all environment variables are correctly set in `.env` and Render

### "Failed to register user"
**Solution:**
- Check that your backend is running
- Verify backend logs on Render for errors
- Ensure DATABASE_URL is set correctly

### Backend says "Unauthorized: Invalid token"
**Solution:**
- Make sure Firebase Admin SDK is initialized
- Check that the frontend is sending the Authorization header
- Verify the token hasn't expired (tokens expire after 1 hour)

## Security Best Practices

1. **Never commit `.env` files** - they're in `.gitignore` already
2. **Use environment variables** for all secrets
3. **Restrict API keys** (optional):
   - Go to Google Cloud Console
   - Navigate to APIs & Services → Credentials
   - Restrict your API key to specific websites

## Additional Resources

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase Admin SDK Docs](https://firebase.google.com/docs/admin/setup)
- [Google Sign-In](https://firebase.google.com/docs/auth/web/google-signin)

## What's Next?

Once authentication is working:
- ✅ Users can sign in with Google
- ✅ Each user has their own transactions
- ✅ Data is private and secure
- ✅ Users can sign out

You can now add more features like:
- Email/password authentication
- Password reset
- User profile editing
- Multi-factor authentication

---

**Need Help?** Check the console logs in your browser (F12) and Render logs for your backend service for detailed error messages.
