# Contributing to US-SPURS Website

Thank you for your interest in contributing to the US Department of SPURS website! This document provides guidelines for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Accessibility Requirements](#accessibility-requirements)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)

## Code of Conduct

This is a US Government project. We expect all contributors to:

- Be respectful and professional
- Focus on constructive feedback
- Prioritize accessibility and security
- Follow federal web standards and guidelines
- Respect the official nature of this website

## Getting Started

### Prerequisites

- Git
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with web accessibility standards (WCAG 2.1)
- Text editor or IDE

### Local Setup

1. **Fork the repository** (if you're an external contributor)

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/US-SPURS.github.io.git
   cd US-SPURS.github.io
   ```

3. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Serve locally:**
   ```bash
   python -m http.server 8000
   # Or use your preferred local server
   ```

5. **Open in browser:**
   ```
   http://localhost:8000
   ```

## Development Workflow

### 1. Create an Issue

Before making changes, create an issue to discuss:
- Use the appropriate issue template
- Describe the problem or enhancement
- Wait for feedback from maintainers

### 2. Make Changes

- Keep changes focused and minimal
- Follow existing code style
- Ensure accessibility compliance
- Test in multiple browsers
- Update documentation if needed

### 3. Test Your Changes

- Visual testing in different browsers
- Keyboard navigation testing
- Screen reader testing (if possible)
- Responsive design testing (mobile, tablet, desktop)
- HTML validation
- Accessibility validation (WAVE, axe)

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add descriptive commit message"
```

**Good commit messages:**
- "Add skip navigation link to all pages"
- "Fix color contrast issue in header"
- "Update privacy policy with new data practices"

**Avoid:**
- "Fix stuff"
- "Update"
- "Changes"

### 5. Submit a Pull Request

- Push your branch to your fork
- Create a pull request against the `main` branch
- Fill out the pull request template
- Link related issues
- Request review from maintainers

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Include ARIA labels where needed
- Always include `alt` text for images
- Use `lang` attribute on `<html>` tag
- Validate with [W3C Validator](https://validator.w3.org/)

**Example:**
```html
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="index.html">Home</a></li>
  </ul>
</nav>
```

### CSS

- Follow existing CSS structure
- Use CSS custom properties (variables)
- Mobile-first responsive design
- Maintain WCAG 2.1 AA color contrast ratios
- Avoid `!important` unless absolutely necessary
- Group related styles together

**Example:**
```css
.button {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
}
```

### JavaScript

- Progressive enhancement approach
- Don't break functionality for users without JavaScript
- Use vanilla JavaScript (no frameworks)
- Add proper event listeners
- Handle errors gracefully
- Comment complex logic

**Example:**
```javascript
// Good: Progressive enhancement
if ('querySelector' in document) {
  const button = document.querySelector('.button');
  if (button) {
    button.addEventListener('click', handleClick);
  }
}
```

## Accessibility Requirements

All contributions MUST meet these accessibility standards:

### Required Standards

- **WCAG 2.1 Level AA compliance**
- **Section 508 compliance**
- **Keyboard accessibility** - All functionality available via keyboard
- **Screen reader support** - Proper ARIA labels and semantic markup
- **Color contrast** - Minimum 4.5:1 for text, 3:1 for large text
- **Focus indicators** - Visible focus for keyboard users
- **Alternative text** - All images have descriptive alt text
- **Form labels** - All form inputs properly labeled
- **Skip links** - Skip navigation available on all pages

### Testing Tools

- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Screen readers: NVDA (free), JAWS, VoiceOver

### Accessibility Checklist

Before submitting:

- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Space)
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have descriptive alt text
- [ ] Forms have proper labels
- [ ] Headings are in logical order
- [ ] ARIA attributes are used correctly
- [ ] Page works with screen reader
- [ ] No content relies on color alone

## Testing

### Browser Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at these breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Accessibility Testing

1. **Automated Testing:**
   ```bash
   # Run in browser DevTools
   - Lighthouse accessibility audit
   - WAVE extension
   - axe DevTools
   ```

2. **Manual Testing:**
   - Keyboard navigation
   - Screen reader (NVDA recommended)
   - Color contrast checker
   - Focus order verification

### Performance Testing

- Page load time < 3 seconds
- Images optimized
- CSS/JS minified (if needed)

## Pull Request Process

1. **Self-review your changes**
   - Re-read your code
   - Test all functionality
   - Check for console errors

2. **Update documentation**
   - Update README if needed
   - Add code comments
   - Update CHANGELOG (if applicable)

3. **Submit PR with:**
   - Clear title describing the change
   - Detailed description
   - Link to related issue(s)
   - Screenshots/videos for UI changes
   - Test results (accessibility, browser testing)

4. **Address review feedback**
   - Respond to comments
   - Make requested changes
   - Re-request review

5. **After approval:**
   - Maintainers will merge
   - Delete your branch (if appropriate)

## Issue Guidelines

### Creating Issues

Use the appropriate template:
- **Page Creation** - New pages or sections
- **Component Development** - UI components
- **Bug Report** - Report bugs
- **Accessibility Issue** - Accessibility problems
- **Documentation** - Documentation updates
- **CI/CD** - Pipeline/deployment issues

### Writing Good Issues

**Include:**
- Clear, descriptive title
- Detailed description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots/videos
- Environment details (browser, OS, device)

**Example:**

```markdown
### Bug: Color contrast issue in footer links

**Description:**
Footer links have insufficient color contrast against the dark background.

**Location:** Footer on all pages

**Current:** Links are #71767a on #162e51 (contrast ratio: 2.8:1)
**Expected:** Minimum 4.5:1 contrast ratio

**WCAG:** Fails 1.4.3 Contrast (Minimum) Level AA

**Browser:** All browsers
**Screenshot:** [attached]
```

## Security

### Reporting Security Issues

**DO NOT** create public issues for security vulnerabilities.

Instead, email: security@spurs.gov

### Security Checklist

- [ ] No API keys or secrets in code
- [ ] No personal information exposed
- [ ] XSS prevention implemented
- [ ] Content Security Policy configured
- [ ] HTTPS only
- [ ] No eval() or innerHTML with user input

## Questions?

If you have questions:
1. Check existing issues
2. Review documentation
3. Create a new issue with the "question" label
4. Contact via the [contact page](/contact.html)

## Recognition

Contributors will be recognized in:
- Git commit history
- CONTRIBUTORS.md file (if created)
- Project acknowledgments

Thank you for contributing to the US Department of SPURS website!

---

**Last Updated:** December 2025
