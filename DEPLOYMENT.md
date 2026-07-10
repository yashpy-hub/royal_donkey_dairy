# Rudra Dairy & Farm - Vercel Deployment Guide

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier available)
- Node.js 18+ installed locally

## Step 1: Prepare Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Rudra Dairy & Farm website"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/rudra-dairy-farm.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

## Step 3: Configure Environment Variables

In Vercel Dashboard:

1. Go to **Settings → Environment Variables**
2. Add the following variables:

```
VITE_EMAILJS_SERVICE_ID=service_janddhl
VITE_EMAILJS_TEMPLATE_ID=template_xi3zd4c
VITE_EMAILJS_PUBLIC_KEY=Ghzb7FbKl2QdBXLi8
VITE_PRIMARY_EMAIL=info@rudradairyandfarm.shop
VITE_WEBSITE_URL=https://rudradairyandfarm.shop
VITE_WEBSITE_NAME=Rudra Dairy & Farm
```

## Step 4: Connect Custom Domain (Optional)

1. In Vercel Dashboard, go to **Settings → Domains**
2. Add your custom domain: `rudradairyandfarm.shop`
3. Follow DNS configuration instructions
4. Update nameservers at your domain registrar

## Step 5: Verify Deployment

- ✅ Check homepage loads correctly
- ✅ Test navigation between all pages
- ✅ Test contact form (should send emails to info@rudradairyandfarm.shop)
- ✅ Test WhatsApp floating button
- ✅ Test dark/light mode toggle
- ✅ Test responsive design on mobile

## Build & Performance

- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (recommended)
- **Package Manager**: pnpm

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
vercel --prod --force
```

### EmailJS Not Working

- Verify public key in Environment Variables
- Check EmailJS template exists in dashboard
- Ensure service ID is correct

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Check nameserver settings at domain registrar
- Verify DNS records in Vercel dashboard

## Monitoring

- **Analytics**: Vercel provides built-in analytics
- **Error Tracking**: Check Vercel logs in dashboard
- **Performance**: Use Vercel's Web Vitals dashboard

## Automatic Deployments

Vercel automatically deploys on:

- Push to `main` branch → Production
- Push to other branches → Preview deployments
- Pull requests → Preview deployments

## Rollback

To rollback to previous version:

1. Go to Vercel Dashboard
2. Click **Deployments**
3. Find previous deployment
4. Click **Promote to Production**

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **EmailJS Docs**: https://www.emailjs.com/docs/

## Security

- ✅ All sensitive keys stored in Vercel Environment Variables
- ✅ No hardcoded secrets in code
- ✅ HTTPS enabled by default
- ✅ Security headers configured in vercel.json

---

**Website**: rudradairyandfarm.shop  
**Contact**: info@rudradairyandfarm.shop  
**WhatsApp**: +91 9112327322
