# Setup Guide - Smart Factory Teachers Portal

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- Your PDF documents ready
- TIA Portal project exported and zipped

## 🚀 Step-by-Step Setup

### 1. Prepare Your Content

Before uploading to GitHub, gather all your materials:

**Documents (place in `assets/documents/`):**
- [ ] `specification.pdf`
- [ ] `curriculum.pdf`
- [ ] `teachers-guide.pdf`
- [ ] `user-manual.pdf`

**Downloads (place in `assets/downloads/`):**
- [ ] `smart-factory-tia-portal.zip` (TIA Portal project)

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `smart-factory-teachers-portal`
4. Description: "Teachers resource hub for Smart Factory curriculum"
5. Choose "Public" (required for free GitHub Pages)
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### 3. Upload Your Project to GitHub

Open terminal/command prompt in the project folder:

```bash
# Navigate to your project folder
cd "C:\Users\Hamed\Documents\Smart Factory Teachers Portal"

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Smart Factory Teachers Portal"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/smart-factory-teachers-portal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/smart-factory-teachers-portal/`

### 5. Update Links (Optional)

Edit `README.md` and replace placeholder links:
- GitHub repository URL
- Live demo URL
- Contact information

## 🎨 Customization

### Update Branding

**Edit `index.html`:**
```html
<!-- Change the title -->
<h1>🏭 Your Company Name - Teachers Portal</h1>

<!-- Update footer -->
<p>&copy; 2026 Your Company Name | Smart Factory Teachers Portal</p>
```

**Edit `css/styles.css`:**
```css
/* Change colors in :root section */
:root {
    --primary-color: #YOUR-COLOR;
    --success-color: #YOUR-COLOR;
    /* ... */
}
```

### Add Custom Content

**Edit `js/main.js`:**

Find the `resources` object and update the content:
```javascript
const resources = {
    'specification': {
        title: 'Your Custom Title',
        content: `
            <h2>Your Content Here</h2>
            <p>Add your own HTML content...</p>
        `
    },
    // ... update other resources
};
```

## 📦 Handling Large Files

### Problem: GitHub has file size limits
- Single file limit: 100 MB
- Repository limit: 1 GB recommended

### Solutions for TIA Portal Project

**Option 1: GitHub Releases**
1. Go to your repository → Releases → "Create a new release"
2. Upload `smart-factory-tia-portal.zip` as a release asset
3. Copy the download URL
4. Update link in `js/main.js`:
   ```javascript
   <a href="https://github.com/YOUR-USERNAME/smart-factory-teachers-portal/releases/download/v1.0/smart-factory-tia-portal.zip">
   ```

**Option 2: Cloud Storage**
1. Upload to Google Drive, Dropbox, or OneDrive
2. Get shareable download link
3. Update link in `js/main.js`

**Option 3: Git LFS (Large File Storage)**
```bash
git lfs install
git lfs track "*.zip"
git add .gitattributes
git commit -m "Track zip files with LFS"
```

## 🔄 Making Updates

After making changes:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Updated curriculum document"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild (may take 1-2 minutes).

## 🐛 Troubleshooting

### Site not loading after enabling Pages
- Wait 2-5 minutes for initial build
- Check Settings → Pages for any errors
- Ensure `index.html` is in the root folder

### Download links not working
- Check file names match exactly (case-sensitive)
- Verify files are in correct folders
- Clear browser cache

### Tiles not appearing correctly
- Check browser console for errors (F12)
- Ensure all CSS and JS files are loaded
- Try different browser

## 📱 Testing

Before going live:
1. Test on desktop browser
2. Test on mobile device
3. Check all download links
4. Verify all modal content displays correctly
5. Test responsive design at different screen sizes

## 🔒 Security Note

**DO NOT commit sensitive information:**
- Passwords or API keys
- Private student data
- Proprietary code or documents marked confidential

Add sensitive files to `.gitignore` if needed.

## ✅ Launch Checklist

- [ ] All documents uploaded to correct folders
- [ ] TIA Portal project available for download
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled and working
- [ ] All links tested and working
- [ ] Contact information updated
- [ ] README.md customized
- [ ] Tested on multiple devices/browsers
- [ ] Shared link with team for review

## 🎉 You're Done!

Share your portal URL:
`https://YOUR-USERNAME.github.io/smart-factory-teachers-portal/`

---

**Need Help?** Check GitHub Pages documentation or open an issue in your repository.
