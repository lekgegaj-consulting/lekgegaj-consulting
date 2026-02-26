# LEKGEGAJ CONSULTING
## Deployment Instructions

---

## QUICK START - LOCAL DEVELOPMENT

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

### Installation Steps

1. **Navigate to project directory:**
```bash
cd lekgegaj-consulting
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Create environment file:**
```bash
cp .env.example .env.local
```

4. **Start development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser:**
Visit `http://localhost:3000`

---

## DEPLOYMENT TO VERCEL (RECOMMENDED)

Vercel is the optimal platform for Next.js applications. Deployment is seamless and automatic.

### Step 1: Prepare Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Lekgegaj Consulting website"
```

2. Push to GitHub/GitLab/Bitbucket:
```bash
git remote add origin https://github.com/yourusername/lekgegaj-consulting.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Visit Vercel:**
   - Go to https://vercel.com
   - Sign up or log in with GitHub/GitLab/Bitbucket

2. **Import Project:**
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment:**
   - Add environment variables from `.env.example`
   - Set `NEXT_PUBLIC_SITE_URL` to your domain

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site is live!

### Step 3: Custom Domain

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., lekgegaj-consulting.com)

2. **Update DNS Records:**
   - Point your domain registrar to Vercel's nameservers
   - Or add CNAME record as instructed by Vercel

3. **SSL Certificate:**
   - Automatically provisioned by Vercel (free)

---

## ALTERNATIVE DEPLOYMENT OPTIONS

### Option 1: Netlify

1. **Connect Repository:**
   - Visit https://netlify.com
   - Click "New site from Git"
   - Select your repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy:**
   - Netlify automatically deploys on push to main

### Option 2: Self-Hosted (VPS/Dedicated Server)

1. **Build for Production:**
```bash
npm run build
```

2. **Install PM2 (Process Manager):**
```bash
npm install -g pm2
```

3. **Start Application:**
```bash
pm2 start npm --name "lekgegaj" -- start
pm2 save
pm2 startup
```

4. **Setup Nginx Reverse Proxy:**
```nginx
server {
    listen 80;
    server_name lekgegaj-consulting.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL with Let's Encrypt:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d lekgegaj-consulting.com
```

### Option 3: Docker Deployment

1. **Create Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build Docker Image:**
```bash
docker build -t lekgegaj-consulting .
```

3. **Run Container:**
```bash
docker run -p 3000:3000 lekgegaj-consulting
```

---

## PERFORMANCE OPTIMIZATION

### Image Optimization
- All images are automatically optimized by Next.js
- WebP format for modern browsers
- Responsive images with srcset

### Code Splitting
- Automatic code splitting per page
- Lazy loading of components
- Optimized bundle size

### Caching Strategy
- Static pages cached at CDN edge
- ISR (Incremental Static Regeneration) for dynamic content
- Browser caching headers configured

### Lighthouse Scores Target
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## MONITORING & MAINTENANCE

### Vercel Analytics
- Built-in performance monitoring
- Real User Monitoring (RUM)
- Error tracking and alerts

### Uptime Monitoring
- Use services like UptimeRobot
- Monitor https://lekgegaj-consulting.com
- Set up email alerts

### Regular Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update major versions (carefully)
npm install package@latest
```

---

## ENVIRONMENT VARIABLES

### Required Variables
```
NEXT_PUBLIC_SITE_URL=https://lekgegaj-consulting.com
NEXT_PUBLIC_COMPANY_NAME=Lekgegaj Consulting
NEXT_PUBLIC_COMPANY_EMAIL=info@lekgegaj-consulting.com
NEXT_PUBLIC_COMPANY_PHONE_LEGAL=+355 69 208 2624
NEXT_PUBLIC_COMPANY_PHONE_BUSINESS=+355 68 208 2624
```

### Optional Variables
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX
```

---

## TROUBLESHOOTING

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Image Not Loading
- Ensure image path is correct
- Check image file exists in `/public` directory
- Verify image format is supported (JPG, PNG, WebP, SVG)

### Slow Performance
- Check Lighthouse report
- Optimize images further
- Review bundle size with `npm run analyze`

---

## SECURITY CHECKLIST

- [x] HTTPS enabled (automatic on Vercel)
- [x] Security headers configured
- [x] XSS protection enabled
- [x] CSRF protection ready
- [x] Content Security Policy headers set
- [x] No sensitive data in code
- [x] Environment variables secured
- [x] Dependencies regularly updated

---

## BACKUP & RECOVERY

### Backup Strategy
1. **Code Repository:**
   - Hosted on GitHub/GitLab (automatic backups)
   - Regular commits to main branch

2. **Database (if added):**
   - Regular automated backups
   - Point-in-time recovery enabled

3. **Static Assets:**
   - Stored in version control
   - CDN caching for redundancy

### Recovery Procedure
1. Revert to previous commit if needed
2. Redeploy from Vercel dashboard
3. Restore from backup if necessary

---

## SCALING CONSIDERATIONS

### Current Setup
- Suitable for 10,000+ monthly visitors
- Auto-scaling on Vercel
- Global CDN distribution

### Future Scaling
- Add database (PostgreSQL/MongoDB)
- Implement caching layer (Redis)
- Add API routes for dynamic content
- Consider microservices architecture

---

## SUPPORT & RESOURCES

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

### Community
- Next.js Discord: https://discord.gg/nextjs
- Stack Overflow: Tag `next.js`
- GitHub Discussions

### Contact
- Email: info@lekgegaj-consulting.com
- Phone: +355 69 208 2624

---

## DEPLOYMENT CHECKLIST

Before going live:

- [ ] All pages tested locally
- [ ] Mobile responsiveness verified
- [ ] SEO metadata configured
- [ ] Analytics set up
- [ ] Contact form tested
- [ ] Images optimized
- [ ] Performance tested (Lighthouse 95+)
- [ ] Security headers verified
- [ ] SSL certificate active
- [ ] DNS records configured
- [ ] Email notifications working
- [ ] Backup strategy in place
- [ ] Monitoring tools configured
- [ ] Team access granted
- [ ] Documentation updated

---

**Deployment Guide Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Ready for Production
