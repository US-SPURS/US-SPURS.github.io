# Deployment Documentation

This document describes the deployment process for the US Department of SPURS website.

## Table of Contents

- [Overview](#overview)
- [Deployment Platform](#deployment-platform)
- [Automated Deployment](#automated-deployment)
- [Manual Deployment](#manual-deployment)
- [Environment Configuration](#environment-configuration)
- [Monitoring and Maintenance](#monitoring-and-maintenance)
- [Troubleshooting](#troubleshooting)

## Overview

The US-SPURS website is a static site deployed to GitHub Pages. The deployment process is automated through GitHub Actions and triggered on every push to the `main` branch.

### Key Features

- **Automated CI/CD** - GitHub Actions workflow
- **Zero downtime** - Rolling deployment
- **HTTPS enabled** - Automatic SSL/TLS
- **Custom domain ready** - Can be configured
- **Version controlled** - All changes tracked in Git

## Deployment Platform

### GitHub Pages

**URL:** https://us-spurs.github.io/

**Features:**
- Free hosting for public repositories
- Automatic HTTPS
- Global CDN
- Built-in DDoS protection
- 99.9% uptime SLA

**Limitations:**
- Static content only (no server-side processing)
- 1 GB repository size limit
- 100 GB monthly bandwidth soft limit
- 10 builds per hour

## Automated Deployment

### GitHub Actions Workflow

The deployment is automated through `.github/workflows/deploy.yml`

#### Workflow Steps

1. **Validate** - HTML validation and accessibility checks
2. **Security** - Security header verification and sensitive data scanning
3. **Build** - Prepare artifacts for deployment
4. **Deploy** - Deploy to GitHub Pages
5. **Test** - Verify deployment and file structure

#### Trigger Events

The workflow runs on:
- **Push to main** - Automatic deployment
- **Pull requests** - Validation only (no deployment)
- **Manual trigger** - Via GitHub Actions UI

### Workflow Configuration

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

### Permissions

Required GitHub Pages permissions:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Manual Deployment

If automated deployment fails or manual deployment is needed:

### Option 1: Via GitHub UI

1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Under **Source**, select branch: `main`
4. Select folder: `/ (root)`
5. Click **Save**

### Option 2: Via Command Line

```bash
# Ensure you're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Push to trigger deployment
git push origin main
```

### Option 3: Force Rebuild

If the site isn't updating:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch: `main`
5. Click **Run workflow**

## Environment Configuration

### GitHub Pages Settings

**Required Settings:**

1. **Repository Settings → Pages**
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Enforce HTTPS: ✓ (enabled)

2. **Repository Settings → Actions**
   - Allow all actions: ✓
   - Workflow permissions: Read and write permissions

### Custom Domain (Optional)

To use a custom domain:

1. **DNS Configuration:**
   ```
   Type: CNAME
   Name: www
   Value: us-spurs.github.io
   
   Type: A (for apex domain)
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **GitHub Configuration:**
   - Go to Settings → Pages
   - Add custom domain: `www.spurs.gov`
   - Wait for DNS check
   - Enable "Enforce HTTPS"

3. **Add CNAME file:**
   ```bash
   echo "www.spurs.gov" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

### Environment Variables

This static site doesn't require environment variables. All configuration is in the code.

## Monitoring and Maintenance

### Health Checks

Monitor the site:

1. **GitHub Status Page**
   - https://www.githubstatus.com/

2. **Manual Checks**
   - Visit: https://us-spurs.github.io/
   - Check all pages load
   - Verify no broken links
   - Test forms and interactive elements

3. **Automated Monitoring** (Recommended)
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

### Performance Monitoring

Check performance regularly:

1. **Lighthouse Audits** (Chrome DevTools)
   - Performance score
   - Accessibility score
   - Best practices
   - SEO score

2. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **WebPageTest**
   - https://www.webpagetest.org/

### Security Updates

Regular security maintenance:

- **Monthly:** Review dependencies (if any)
- **Quarterly:** Security audit
- **Annually:** Comprehensive penetration testing
- **As needed:** Apply security patches

### Content Updates

Standard content update process:

1. Create feature branch
2. Make changes
3. Test locally
4. Create pull request
5. Review and approve
6. Merge to main (auto-deploys)

## Troubleshooting

### Common Issues

#### Issue: Site Not Updating

**Symptoms:** Changes pushed but site shows old content

**Solutions:**
1. Check GitHub Actions for errors
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 5-10 minutes for CDN propagation
4. Check GitHub Pages is enabled
5. Manually trigger workflow

#### Issue: 404 Error

**Symptoms:** Page not found errors

**Solutions:**
1. Verify file exists in repository
2. Check filename case (case-sensitive)
3. Ensure file is in root directory
4. Check for `.html` extension
5. Review repository structure

#### Issue: CSS/JS Not Loading

**Symptoms:** Unstyled content, JavaScript not working

**Solutions:**
1. Check file paths are relative
2. Verify files exist in correct folders
3. Check browser console for errors
4. Clear cache
5. Verify CSP headers aren't blocking

#### Issue: Deployment Failed

**Symptoms:** GitHub Actions workflow fails

**Solutions:**
1. Review workflow logs in Actions tab
2. Check for syntax errors in YAML
3. Verify permissions are correct
4. Check GitHub Pages is enabled
5. Review error messages

#### Issue: Slow Load Times

**Symptoms:** Pages load slowly

**Solutions:**
1. Optimize images (compress, resize)
2. Minify CSS/JS (if needed)
3. Check file sizes
4. Review network tab in DevTools
5. Consider CDN for assets

### Debug Mode

To debug deployment issues:

1. **Check Workflow Logs:**
   - Go to Actions tab
   - Click on failed workflow
   - Review each step's logs

2. **Local Testing:**
   ```bash
   # Test locally before deploying
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Validate Files:**
   ```bash
   # Check HTML validity
   html-validate *.html
   
   # Check for broken links
   # (Use online tools or install link checker)
   ```

### Getting Help

If issues persist:

1. **Check GitHub Status:** https://www.githubstatus.com/
2. **Review GitHub Pages Documentation:** https://docs.github.com/pages
3. **Open an Issue:** Use CI/CD issue template
4. **Contact Support:** via contact page

## Rollback Procedure

If a deployment causes issues:

### Quick Rollback

```bash
# Find the last working commit
git log

# Revert to previous commit
git revert HEAD

# Or reset to specific commit
git reset --hard <commit-hash>

# Force push (use with caution)
git push -f origin main
```

### Safe Rollback

1. Create revert commit:
   ```bash
   git revert <bad-commit-hash>
   git push origin main
   ```

2. Wait for auto-deployment (2-5 minutes)

3. Verify site is restored

## Deployment Checklist

Before deploying to production:

- [ ] All pages load correctly locally
- [ ] HTML validation passed
- [ ] Accessibility tests passed
- [ ] All links work
- [ ] Forms function properly
- [ ] Responsive design verified
- [ ] Browser testing completed
- [ ] No console errors
- [ ] Security headers configured
- [ ] Documentation updated
- [ ] Stakeholders notified (if major update)

## Best Practices

1. **Always test locally first**
2. **Use feature branches**
3. **Write descriptive commit messages**
4. **Review changes before merging**
5. **Monitor after deployment**
6. **Keep documentation updated**
7. **Maintain backup procedures**
8. **Document custom configurations**

## Backup and Recovery

### Backup Strategy

**Automatic Backups:**
- Git repository history (complete version control)
- GitHub automatically backs up repositories

**Manual Backups:**
```bash
# Clone repository to local backup
git clone https://github.com/US-SPURS/US-SPURS.github.io.git backup/

# Create archive
tar -czf us-spurs-backup-$(date +%Y%m%d).tar.gz backup/
```

### Recovery Process

1. Repository completely lost (rare):
   ```bash
   # Restore from backup
   git clone <backup-location>
   git remote set-url origin https://github.com/US-SPURS/US-SPURS.github.io.git
   git push -u origin main
   ```

2. Restore specific files:
   ```bash
   # Find file in history
   git log -- path/to/file
   
   # Restore from specific commit
   git checkout <commit-hash> -- path/to/file
   ```

## Contact

For deployment issues or questions:
- **Technical Issues:** Create issue with CI/CD template
- **Urgent Issues:** Contact via emergency procedures
- **General Questions:** See contact page

---

**Last Updated:** December 2025
**Maintained By:** US-SPURS DevOps Team
