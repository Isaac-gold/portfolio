# Isaac Uwamahoro - Portfolio Website

A modern, responsive portfolio website showcasing Isaac Uwamahoro's multidisciplinary skills in Industrial Electricity, Automation (CIMA), and Web Development.

## 🌟 Features

### Design & User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) and custom micro-interactions
- **Accessibility**: Semantic HTML5 and keyboard navigation support

### Sections & Content
1. **Hero Section**: Animated typing effect with role cycling
2. **About**: Timeline of professional journey and fun facts
3. **Skills**: Interactive tabs for Electricity, Automation, and Web Development
4. **Projects**: Filterable project grid with live demos and GitHub links
5. **CV**: Downloadable resume and certification badges
6. **Contact**: Contact form with social media integration

### Technical Features
- **Performance Optimized**: Debounced scroll handlers and resource preloading
- **SEO Optimized**: Meta tags, semantic HTML, and structured data
- **Cross-browser Compatible**: Works on all modern browsers
- **PWA Ready**: Service worker registration for offline capabilities

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local web server (for development)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in Browser**
   - For development: Use a local server (recommended)
   - For production: Upload files to web hosting

3. **Local Development Server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the Website**
   Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and other assets (create as needed)
    ├── images/
    ├── icons/
    └── documents/
```

## 🎨 Customization

### Colors & Theme
The website uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #1e3a8a;      /* Dark blue */
    --secondary-color: #fbbf24;    /* Yellow accent */
    --accent-color: #3b82f6;       /* Blue accent */
    /* ... other colors */
}
```

### Content Updates
1. **Personal Information**: Update content in `index.html`
2. **Projects**: Modify the projects grid in the projects section
3. **Skills**: Add/remove skills in the skills tabs
4. **Social Links**: Update URLs in `script.js`

### Adding New Projects
```html
<div class="project-card" data-category="web" data-aos="fade-up">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-demo-url" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-url" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Project description goes here</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
        </div>
    </div>
</div>
```

## 🔧 Configuration

### Social Media Links
Update the social media URLs in `script.js`:

```javascript
const urls = {
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-handle',
    whatsapp: 'https://wa.me/your-phone-number'
};
```

### Contact Form
The contact form currently simulates submission. To make it functional:

1. **Backend Integration**: Connect to your preferred backend service
2. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
3. **API Endpoint**: Replace the simulation with actual API calls

### CV Download
Replace the placeholder CV download with your actual CV file:

```javascript
link.href = 'path/to/your/cv.pdf'; // Update this path
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify Assets**: Minify CSS and JavaScript for production
3. **CDN Usage**: Use CDNs for external libraries
4. **Lazy Loading**: Implement lazy loading for images
5. **Caching**: Set appropriate cache headers

## 📈 SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta tags for social sharing
- Open Graph tags
- Structured data markup
- Optimized heading hierarchy
- Alt text for images

## 🔒 Security Considerations

- Input validation on contact form
- XSS prevention
- HTTPS enforcement (for production)
- Content Security Policy headers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: [isaac7.greta@gmail.com](mailto:isaac7.greta@gmail.com)
- Phone: [+33 7 53 15 74 56](tel:+33753157456)
- WhatsApp: [+33 7 53 15 74 56](https://wa.me/33753157456)
- LinkedIn: [Isaac Uwamahoro](https://www.linkedin.com/in/isaac-uwamahoro-9b7107318/)
- GitHub: [Isaac-gold](https://github.com/Isaac-gold)
- Instagram: [@gold.web7](https://www.instagram.com/gold.web7/)

## 🎯 Roadmap

- [ ] Add blog section
- [ ] Implement contact form backend
- [ ] Add portfolio filtering by technology
- [ ] Create admin panel for content management
- [ ] Add analytics integration
- [ ] Implement newsletter subscription
- [ ] Add multi-language support

---

**Built with ❤️ by Isaac Uwamahoro**

*Industrial Electrician | Automation Technician | Web Developer* #   p o r t f o l i o  
 