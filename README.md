# portfolio

A modern, responsive personal portfolio website built with React and TypeScript, showcasing project works with smooth animations and a clean design.

## ✨ Features

- **Responsive Design** - Optimized for all device sizes with mobile-first approach
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Modern UI** - Clean, minimal design with Tailwind CSS v4
- **Alternating Layouts** - Dynamic left/right image layouts for visual interest
- **Project Showcase** - Display projects with images, tags, descriptions, and links

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon set

## 📦 Installation

**Prerequisites:** Node.js (v16 or higher recommended)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🚀 Available Scripts

```bash
# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint

# Clean build artifacts
npm run clean
```

## 📁 Project Structure

```
src/
├── App.tsx        # Main application component with project data
├── main.tsx       # Application entry point
└── index.css      # Global styles

public/            # Static assets
├── index.html     # HTML template
└── ...
```

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `src/App.tsx`:

```typescript
const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    demoLink: "https://demo-url.com",
    githubLink: "https://github.com/...",
    imageSrc: "image-url",
    tags: ["React", "TypeScript"],
    descriptionItems: [
      "Description point 1",
      "Description point 2"
    ]
  }
];
```

### Styling

The project uses a custom green color scheme. Main colors are defined in Tailwind classes:
- Primary: `#3a6351`
- Accent: `#428b65`

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📄 License

This project is open source and available for personal and commercial use.
