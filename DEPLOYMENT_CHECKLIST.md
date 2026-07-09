# Rudra Dairy & Farm - Pre-Deployment Checklist

## Before Deploying to Vercel

### Code Quality
- [ ] Run `pnpm check` - No TypeScript errors
- [ ] Run `pnpm format` - Code is formatted
- [ ] Run `pnpm build` - Production build succeeds
- [ ] Review all pages in production build
- [ ] No console errors or warnings

### Functionality Testing
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Dark/Light mode toggle works
- [ ] Floating WhatsApp button appears
- [ ] Contact form submits successfully
- [ ] Email received at info@rudradairyandfarm.shop
- [ ] All images load properly
- [ ] Animations are smooth (60 FPS)

### Content Verification
- [ ] Company name: "Rudra Dairy & Farm"
- [ ] Tagline: "Trusted Suppliers Since 2022"
- [ ] Primary email: info@rudradairyandfarm.shop
- [ ] WhatsApp number: +91 9112327322
- [ ] Website URL: rudradairyandfarm.shop
- [ ] All certifications mentioned (FSSAI, ISO, IEC, HACCP)
- [ ] Production capacity correct (100+ liters, 1000+ kg)

### Mobile Responsiveness
- [ ] Test on iPhone (375px width)
- [ ] Test on iPad (768px width)
- [ ] Test on Desktop (1024px+ width)
- [ ] Navigation menu collapses on mobile
- [ ] Touch targets are large enough
- [ ] No horizontal scrolling

### Performance
- [ ] Lighthouse score > 90
- [ ] Page load time < 2 seconds
- [ ] Images are optimized
- [ ] No unused CSS or JavaScript
- [ ] Fonts load correctly

### Security
- [ ] No hardcoded secrets in code
- [ ] Environment variables configured
- [ ] HTTPS will be enabled (Vercel default)
- [ ] Security headers configured in vercel.json
- [ ] No sensitive data in git history

### SEO & Meta Tags
- [ ] Page titles are descriptive
- [ ] Meta descriptions present
- [ ] Open Graph tags configured
- [ ] Favicon displays correctly
- [ ] robots.txt exists

### Git & Repository
- [ ] All changes committed
- [ ] No uncommitted files
- [ ] Repository pushed to GitHub
- [ ] Branch is main/master
- [ ] .gitignore is complete

---

## Vercel Deployment Steps

### Step 1: Create Vercel Account
- [ ] Sign up at vercel.com
- [ ] Connect GitHub account
- [ ] Authorize Vercel to access repositories

### Step 2: Import Project
- [ ] Go to vercel.com/new
- [ ] Select GitHub repository
- [ ] Vercel auto-detects Vite
- [ ] Framework preset: Vite
- [ ] Build command: `pnpm build`
- [ ] Output directory: `dist`

### Step 3: Environment Variables
- [ ] Add VITE_EMAILJS_SERVICE_ID
- [ ] Add VITE_EMAILJS_TEMPLATE_ID
- [ ] Add VITE_EMAILJS_PUBLIC_KEY
- [ ] Add VITE_PRIMARY_EMAIL
- [ ] Add VITE_WEBSITE_URL
- [ ] Add VITE_WEBSITE_NAME

### Step 4: Deploy
- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Verify deployment successful
- [ ] Test live website

### Step 5: Custom Domain (Optional)
- [ ] Go to Settings → Domains
- [ ] Add domain: rudradairyandfarm.shop
- [ ] Update DNS records at registrar
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Verify domain works

---

## Post-Deployment Testing

### Functionality
- [ ] All pages load
- [ ] Navigation works
- [ ] Contact form sends emails
- [ ] WhatsApp button links correctly
- [ ] Dark/Light mode works
- [ ] Images display properly

### Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Animations are smooth
- [ ] Mobile is responsive

### Email Integration
- [ ] Test contact form submission
- [ ] Verify email received
- [ ] Check email formatting
- [ ] Test all business types

### Analytics (Optional)
- [ ] Set up Vercel Analytics
- [ ] Monitor page views
- [ ] Track user interactions
- [ ] Check error rates

---

## Monitoring & Maintenance

### Weekly
- [ ] Check Vercel dashboard
- [ ] Review error logs
- [ ] Monitor page performance
- [ ] Check email submissions

### Monthly
- [ ] Update dependencies (if needed)
- [ ] Review analytics
- [ ] Check for security updates
- [ ] Test all features

### Quarterly
- [ ] Full functionality audit
- [ ] Performance optimization
- [ ] Content updates
- [ ] Security review

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
vercel --prod --force
```

### Emails Not Sending
- Verify EmailJS public key
- Check template ID exists
- Verify service ID correct
- Test in development first

### Custom Domain Not Working
- Check DNS records
- Wait for propagation
- Verify nameservers updated
- Check Vercel domain settings

### Performance Issues
- Check bundle size
- Optimize images
- Enable caching
- Use CDN (Vercel default)

---

## Rollback Plan

If deployment has issues:
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "Promote to Production"
5. Verify website works

---

## Success Criteria

✅ Website is live and accessible  
✅ All pages load correctly  
✅ Contact form works  
✅ Emails send successfully  
✅ Mobile responsive  
✅ Performance is good  
✅ No console errors  
✅ Custom domain works (if configured)  

---

**Ready to deploy!** 🚀
