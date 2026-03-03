# US Department of SPURS

**Official Website of the United States Department of Special Projects and Unified Response Services**

---

## 📋 Information Architecture

### Site Structure

```
US-SPURS.gov
│
├── Home (/)
│   ├── Hero Section
│   ├── Mission Statement
│   ├── Quick Links
│   └── Latest Updates
│
├── About (/about.html)
│   ├── Department Overview
│   ├── Leadership
│   ├── History
│   └── Organization Chart
│
├── Services (/services.html)
│   ├── Special Projects
│   ├── Unified Response
│   ├── Emergency Services
│   └── Citizen Resources
│
├── Contact (/contact.html)
│   ├── Contact Form
│   ├── Office Locations
│   ├── Phone Directory
│   └── Public Affairs
│
├── Privacy Policy (/privacy.html)
└── Accessibility (/accessibility.html)
```

---

## 🎨 Wireframe Overview

### Homepage Layout
```
┌─────────────────────────────────────────────────────────┐
│                    HEADER / NAVIGATION                   │
│  [US-SPURS Logo]  Home | About | Services | Contact    │
└─────────────────────────────────────────────────────────┘
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │              HERO SECTION                        │   │
│  │  Department of Special Projects and              │   │
│  │       Unified Response Services                  │   │
│  │           [Call to Action Button]                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Mission  │  │ Services │  │ Contact  │              │
│  │   Box    │  │   Box    │  │   Box    │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │           LATEST UPDATES SECTION                 │   │
│  │  • Update 1                                      │   │
│  │  • Update 2                                      │   │
│  │  • Update 3                                      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
┌─────────────────────────────────────────────────────────┐
│                       FOOTER                             │
│  About | Privacy Policy | Accessibility | Contact       │
│  Official US Government Website                         │
└─────────────────────────────────────────────────────────┘
```

### Content Pages Layout (About/Services/Contact)
```
┌─────────────────────────────────────────────────────────┐
│                    HEADER / NAVIGATION                   │
└─────────────────────────────────────────────────────────┘
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │              PAGE TITLE                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────────────┐  ┌───────────────────────┐       │
│  │                   │  │                        │       │
│  │  SIDEBAR          │  │   MAIN CONTENT         │       │
│  │  NAVIGATION       │  │                        │       │
│  │  • Section 1      │  │   Content sections     │       │
│  │  • Section 2      │  │   with headers,        │       │
│  │  • Section 3      │  │   paragraphs, and      │       │
│  │                   │  │   structured info      │       │
│  │                   │  │                        │       │
│  └──────────────────┘  └───────────────────────┘       │
│                                                           │
┌─────────────────────────────────────────────────────────┐
│                       FOOTER                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/US-SPURS/US-SPURS.github.io.git
   cd US-SPURS.github.io
   ```

2. **Open locally:**
   ```bash
   # Open index.html in your browser
   open index.html  # macOS
   xdg-open index.html  # Linux
   start index.html  # Windows
   ```

3. **Use a local server (recommended):**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

### Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL:** https://us-spurs.github.io/

---

## 🏗️ Technical Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Responsive design with mobile-first approach
- **JavaScript**: Progressive enhancement (no frameworks required)
- **GitHub Pages**: Static site hosting
- **GitHub Actions**: CI/CD pipeline for validation and deployment

---

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets federal accessibility requirements
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full site navigation without mouse
- **Skip Links**: Quick navigation to main content
- **Color Contrast**: Meets minimum contrast ratios
- **Responsive Design**: Mobile, tablet, and desktop support

---

## 🔒 Security & Privacy

- **HTTPS Only**: Secure connection required
- **No User Tracking**: Privacy-first approach
- **Content Security Policy**: Protection against XSS attacks
- **Privacy Policy**: Clear data handling practices
- **Regular Updates**: Security patches and updates

---

## 📁 Project Structure

```
US-SPURS.github.io/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── accessibility.html      # Accessibility statement
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design rules
├── js/
│   ├── main.js            # Core functionality
│   └── navigation.js      # Navigation logic
├── assets/
│   ├── images/            # Images and graphics
│   └── fonts/             # Web fonts (if needed)
├── .github/
│   ├── workflows/
│   │   └── deploy.yml     # CI/CD pipeline
│   └── ISSUE_TEMPLATE/    # Issue templates
├── docs/
│   ├── CONTRIBUTING.md    # Contribution guidelines
│   └── DEPLOYMENT.md      # Deployment documentation
└── README.md              # This file
```

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Create an issue for your proposed change
2. Fork the repository
3. Create a feature branch (`git checkout -b feature/your-feature`)
4. Make your changes following our coding standards
5. Test for accessibility and responsiveness
6. Submit a pull request

---

## 📝 Issue Templates

We use GitHub Issues for project management and tracking. Available templates:

- **Page Creation**: For new pages or sections
- **Component Development**: For reusable UI components
- **Bug Report**: For reporting issues
- **Accessibility Issue**: For accessibility improvements
- **Documentation**: For documentation updates
- **CI/CD**: For pipeline and deployment tasks

---

## ✅ Testing

### Accessibility Testing
- **WAVE**: Browser extension for accessibility evaluation
- **axe DevTools**: Automated accessibility testing
- **Keyboard Navigation**: Manual testing for keyboard-only users
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (macOS)

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## 📄 License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](LICENSE).

---

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Email: info@spurs.gov (example)
- Visit: [Contact Page](/contact.html)

---

## 🔗 Related Resources

- [US Web Design System (USWDS)](https://designsystem.digital.gov/)
- [Section 508 Standards](https://www.section508.gov/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Official US Government Website** • Last Updated: December 2025
