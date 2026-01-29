# MedGym PT - Research Dashboard

A sleek, modern research dashboard built with React, Vite, Tailwind CSS, and Framer Motion. Features a liquid glass UI effect with smooth transitions.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── src/
    ├── main.tsx        # App entry point
    ├── App.tsx         # Main application component
    ├── index.css       # Global styles (Tailwind)
    └── utils/
        └── cn.ts       # Utility for className merging
```

## 🛠 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Push this code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select your repository
6. Build settings are auto-detected:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy"

### Deploy to Vercel

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Settings are auto-detected
6. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📝 License

MIT License - feel free to use this for your projects.
