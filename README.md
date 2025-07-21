# Software Development Engineer Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing the skills, experience, and projects of a software development engineer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Components**: Engaging user interactions and hover effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Animated progress bars for technical skills
- **Timeline Experience**: Visual timeline of work experience
- **Achievements Section**: Awards, certifications, and accomplishments
- **Social Integration**: Links to professional social media profiles

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Experience**: Work history with timeline visualization
4. **Skills**: Technical skills with progress indicators
5. **Projects**: Portfolio of projects with filtering
6. **Achievements**: Awards and certifications
7. **Contact**: Contact form and information
8. **Footer**: Social links and copyright

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **React Scroll**: Smooth scrolling navigation
- **CSS3**: Modern styling with Flexbox and Grid
- **Responsive Design**: Mobile-first approach

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient color schemes
- **Card-based Layout**: Clean card components with shadows
- **Hover Effects**: Interactive hover animations
- **Loading Animations**: Smooth page load animations
- **Custom Scrollbar**: Styled scrollbar for better UX
- **Accessibility**: Focus states and semantic HTML

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx`: Name, title, and description
- `src/components/About.tsx`: Personal background and stats
- `src/components/Experience.tsx`: Work experience timeline
- `src/components/Skills.tsx`: Technical skills and proficiency levels
- `src/components/Projects.tsx`: Portfolio projects
- `src/components/Achievements.tsx`: Awards and certifications
- `src/components/Contact.tsx`: Contact information and social links

### Styling
- Modify color schemes in CSS files
- Update gradients and backgrounds
- Customize animations and transitions
- Adjust responsive breakpoints

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `src/App.tsx`
4. Update navigation in `src/components/Navbar.tsx`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

**Made with ❤️ using React and TypeScript** 