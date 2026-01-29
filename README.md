# 🏭 Smart Factory Teachers Portal

A comprehensive web-based resource hub for teachers delivering Smart Factory and Industry 4.0 curriculum.

## 🌟 Features

- **📋 Specification Document** - Complete technical specifications and learning outcomes
- **📚 Curriculum** - Structured lesson plans and assessment criteria
- **👨‍🏫 Teachers Guide** - Step-by-step teaching instructions and best practices
- **📖 User Manual** - Detailed operational instructions and troubleshooting
- **⬇️ TIA Portal Project** - Download ready-to-use Siemens PLC software projects
- **🚀 Quick Start Guide** - Get up and running in minutes

## 🚀 Quick Start

### Live Demo

Visit the live portal: [Your GitHub Pages URL]

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/smart-factory-teachers-portal.git
   cd smart-factory-teachers-portal
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server package)
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

## 📁 Project Structure

```
smart-factory-teachers-portal/
├── index.html              # Main dashboard page
├── css/
│   └── styles.css         # Styling and animations
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── documents/         # PDF documents (specs, guides, manuals)
│   └── downloads/         # TIA Portal projects and other downloads
└── README.md
```

## 📝 Adding Content

### Documents

Place PDF documents in the `assets/documents/` folder:
- `specification.pdf` - Technical specification document
- `curriculum.pdf` - Full curriculum guide
- `teachers-guide.pdf` - Teaching methodology and tips
- `user-manual.pdf` - System operation manual

### TIA Portal Project

Place the Siemens TIA Portal project ZIP file in `assets/downloads/`:
- `smart-factory-tia-portal.zip` - Complete PLC project

## 🎨 Customization

### Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --success-color: #10b981;
    --info-color: #06b6d4;
    /* ... */
}
```

### Content

Update resource content in `js/main.js` by modifying the `resources` object.

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/smart-factory-teachers-portal/`

### Other Hosting

This is a static site and can be hosted on:
- Netlify
- Vercel
- AWS S3
- Any web server

## 🔧 Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 📱 Responsive Design

Fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[Your License Here - e.g., MIT License]

## 📞 Support

For questions or support:
- Email: support@matrixtsl.com
- Website: [Your Website]

## 🙏 Acknowledgments

Developed by Matrix Technology Solutions for Smart Factory education.

---

**Last Updated:** January 2026  
**Version:** 1.0.0
