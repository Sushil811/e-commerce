# 🚀 Deploy MERN E-commerce to Vercel

This guide will help you deploy your MERN e-commerce application to Vercel.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com)
- Your project pushed to GitHub

## 🔧 Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 1.2 Create Environment Variables
You'll need to set up environment variables in Vercel for both frontend and backend.

## 🎯 Step 2: Deploy Backend

### 2.1 Deploy Backend to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Node.js
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### 2.2 Set Backend Environment Variables
In your Vercel project settings, add these environment variables:
```
MONGO_URI=mongodb+srv://sushilkumarprajapati689:EHGvMCH3SLsMWK2D@cluster0.ir6nmdq.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
```

### 2.3 Deploy
Click "Deploy" and wait for the deployment to complete.

### 2.4 Get Backend URL
After deployment, copy your backend URL (e.g., `https://your-backend.vercel.app`)

## 🎨 Step 3: Deploy Frontend

### 3.1 Deploy Frontend to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository again (same repo, different configuration)
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### 3.2 Set Frontend Environment Variables
In your Vercel project settings, add this environment variable:
```
REACT_APP_API_URL=https://your-backend.vercel.app/api
```
Replace `your-backend.vercel.app` with your actual backend URL.

### 3.3 Deploy
Click "Deploy" and wait for the deployment to complete.

## 🔗 Step 4: Update CORS Configuration

### 4.1 Update Backend CORS
Update your `backend/server.js` to allow your frontend domain:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-frontend.vercel.app'],
  credentials: true
}));
```

### 4.2 Redeploy Backend
After updating CORS, redeploy your backend.

## 🌐 Step 5: Test Your Deployment

1. **Test Backend**: Visit `https://your-backend.vercel.app`
   - Should show: `{"message":"E-commerce API is running! 🚀"}`

2. **Test Frontend**: Visit `https://your-frontend.vercel.app`
   - Should load your React app

3. **Test API**: Visit `https://your-backend.vercel.app/api/products`
   - Should return your products (empty array if no products)

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Ensure frontend URL is added to CORS configuration
   - Check environment variables are set correctly

2. **Build Failures**:
   - Check all dependencies are in package.json
   - Ensure Node.js version is compatible

3. **API Not Working**:
   - Verify MONGO_URI is correct
   - Check MongoDB Atlas network access

4. **Environment Variables**:
   - Ensure variables are set in Vercel dashboard
   - Frontend variables must start with `REACT_APP_`

### Useful Commands:
```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Redeploy
vercel --prod
```

## 📱 Final URLs

After successful deployment, you'll have:
- **Backend**: `https://your-backend.vercel.app`
- **Frontend**: `https://your-frontend.vercel.app`
- **API**: `https://your-backend.vercel.app/api/products`

## 🎉 Success!

Your MERN e-commerce application is now live on Vercel! 🚀

---

**Need Help?**
- Check Vercel documentation: https://vercel.com/docs
- Review deployment logs in Vercel dashboard
- Ensure all environment variables are set correctly 