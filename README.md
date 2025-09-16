# 🚀 TNEB PWA - One Command Free Deployment

## ⚡ Quick Start (5 Minutes)

Deploy your complete TNEB PWA for **FREE** with just one command!

### Prerequisites
- Node.js 18+ installed
- Git installed
- Gmail account (for magic links)

### 🎯 One-Command Deployment

```bash
curl -fsSL https://raw.githubusercontent.com/yourusername/tneb-pwa/main/deploy.sh | bash
```

**Or download and run locally:**

```bash
# Download the deployment script
wget https://raw.githubusercontent.com/yourusername/tneb-pwa/main/deploy.sh

# Make it executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

### 🎮 Manual Step-by-Step

If you prefer manual control:

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tneb-pwa-backend.git
cd tneb-pwa-backend
```

#### 2. Run the Deployment Script
```bash
./deploy.sh
```

#### 3. Follow the Prompts
- Enter your app name (e.g., `tneb-pwa`)
- Provide Gmail credentials for magic links
- Wait for automatic deployment

#### 4. That's It! 🎉
Your app will be live at:
- **Frontend**: `https://your-app.netlify.app`
- **Backend**: `https://your-app.railway.app`

---

## 🆓 What You Get (All FREE)

### ✅ Backend (Railway)
- **Node.js API** with Express
- **PostgreSQL Database** (1GB storage)
- **Redis Cache** (100MB)
- **Background Jobs** with Bull Queue
- **Auto SSL** and domain

### ✅ Frontend (Netlify)
- **React PWA** with Vite
- **CDN hosting** (100GB bandwidth)
- **Auto SSL** and domain
- **SPA routing** support

### ✅ Features Included
- 🔐 **Magic Link Authentication**
- 👥 **Role-based Access** (Admin/TL/MSP)
- 📊 **Bill Scraping & Analysis**
- ⚡ **Power Factor Calculator**
- 📈 **Report Generation**
- 🔔 **Real-time Notifications**
- 📱 **PWA Support** (installable)
- 🌐 **Responsive Design**

### ✅ Free Limits
- **Railway**: $5 credit/month (~500 hours)
- **Netlify**: 100GB bandwidth/month  
- **Gmail**: 500 emails/day
- **Database**: 1GB PostgreSQL
- **Cache**: 100MB Redis

**Can handle**: 100-500 daily users easily!

---

## 🔧 Post-Deployment

### Access Your App
1. Visit your frontend URL
2. Click "Login" and enter `admin@tneb.com`
3. Check your email for magic link
4. Start using the app!

### Add Sample Data
```bash
# Connect to your Railway app
railway shell

# Run the seeder
npm run seed

# Check deployment status
npm run status
```

### Monitor Usage
- **Railway Dashboard**: https://railway.app/dashboard
- **Netlify Dashboard**: https://app.netlify.com

---

## 📁 Project Structure After Deployment

```
tneb-pwa/
├── backend/
│   ├── server.js              # Main API server
│   ├── workers/main.js        # Background jobs
│   ├── scripts/
│   │   ├── migrate.js         # Database setup
│   │   ├── seed.js           # Sample data
│   │   └── status.js         # Health check
│   ├── package.json
│   ├── railway.json          # Railway config
│   └── DEPLOYMENT_REPORT.md  # Your deployment info
└── frontend/
    ├── src/App.jsx           # React app
    ├── package.json
    ├── netlify.toml          # Netlify config
    └── dist/                 # Built files
```

---

## 🚨 Troubleshooting

### Common Issues

#### "Railway command not found"
```bash
npm install -g @railway/cli
```

#### "Netlify command not found"
```bash
npm install -g netlify-cli
```

#### Backend not responding
```bash
# Check Railway logs
railway logs

# Check environment variables
railway variables
```

#### Frontend not loading
```bash
# Check Netlify deployment
netlify status

# View build logs
netlify logs
```

#### Database connection issues
```bash
# Check database connection
railway connect postgresql

# Run migration again
railway run npm run migrate
```

### Reset Deployment
If something goes wrong, you can start over:

```bash
# Delete Railway project
railway project delete

# Delete Netlify site
netlify sites:delete

# Run deployment again
./deploy.sh
```

---

## 🎯 Environment Variables

The script automatically sets these for you:

### Backend (Railway)
```bash
NODE_ENV=production
DATABASE_URL=postgresql://...    # Auto-generated
REDIS_URL=redis://...           # Auto-generated
JWT_SECRET=...                  # Auto-generated
FRONTEND_URL=...               # Your Netlify URL
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend (Netlify)
```bash
VITE_API_URL=...               # Your Railway URL
VITE_APP_NAME=your-app-name
```

---

## 🔒 Security Notes

### Gmail App Password Setup
1. Enable 2-Factor Authentication on Gmail
2. Go to **Google Account** → **Security** → **App passwords**
3. Generate password for "Mail"
4. Use this 16-character password (not your Gmail password)

### Production Security
- All communications encrypted (HTTPS/WSS)
- JWT tokens for authentication
- CORS properly configured
- Rate limiting enabled
- Input validation on all endpoints

---

## 📊 Monitoring & Maintenance

### Health Checks
```bash
# Check if everything is running
npm run status

# View recent activity
railway logs --tail

# Check database size
railway connect postgresql
\dt+
```

### Usage Monitoring
- **Railway**: Monitor credit usage in dashboard
- **Netlify**: Check bandwidth usage
- **Database**: Keep under 1GB with cleanup

### Regular Maintenance
```bash
# Weekly database cleanup (auto-scheduled)
DELETE FROM activity_logs WHERE timestamp < NOW() - INTERVAL '30 days';

# Monthly backup
npm run backup
```

---

## 🆙 Upgrading Later

When you outgrow free limits, easy upgrades:

### Railway
- Upgrade to **Hobby**: $5/month
- Upgrade to **Pro**: $20/month

### Netlify  
- Upgrade to **Pro**: $19/month

### Database
- Railway PostgreSQL scales automatically
- Or migrate to dedicated database

### Alternative Upgrades
- Move to AWS/GCP for enterprise scale
- Add CDN for global performance  
- Implement Redis Cluster for high availability

---

## 📞 Support

### Getting Help
1. Check **DEPLOYMENT_REPORT.md** for your specific URLs
2. Review Railway/Netlify dashboards
3. Check GitHub issues for common problems

### Useful Links
- [Railway Docs](https://docs.railway.app/)
- [Netlify Docs](https://docs.netlify.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Frontend loads at your Netlify URL
- [ ] Backend health check passes
- [ ] Admin login with magic link works
- [ ] Database has sample data
- [ ] PWA can be installed on mobile
- [ ] All services show "healthy" status

**Congratulations! Your TNEB PWA is live and free! 🚀**

---

*Need help? Open an issue on GitHub or contact support.*
