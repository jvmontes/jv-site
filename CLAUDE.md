# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Jorge Viramontes built with Gatsby.js. The site showcases professional web development work, music, and includes a blog. It's a static site generator that uses React, GraphQL, and markdown for content management.

## Development Commands

### Essential Commands
- `npm run develop` or `npm start` - Start development server at http://localhost:8000
- `npm run build` - Build the site for production
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean Gatsby cache and public folder
- `npm run format` - Format code with Prettier

### GraphQL Development
- Development server includes GraphQL explorer at `http://localhost:8000/___graphql`
- Use this to test and develop GraphQL queries for components

## Architecture & Structure

### Core Gatsby Files
- `gatsby-config.js` - Main configuration including plugins, site metadata, and Google Analytics
- `gatsby-node.js` - Build-time API for dynamic page creation (blog posts)
- `gatsby-browser.js` - Browser APIs and global styles
- `gatsby-ssr.js` - Server-side rendering APIs

### Site Structure
- `src/pages/` - Auto-generated routes (index.js, about.js, blog.js, etc.)
- `src/components/` - Reusable React components with modular CSS
- `src/templates/` - Page templates (blogTemplate.js for markdown posts)
- `src/markdown-pages/` - Blog content in markdown format
- `src/images/` - Static assets processed by gatsby-plugin-image
- `src/styles/` - Global CSS files

### Component Architecture
- Components use CSS Modules (`.module.css` files) for scoped styling
- Layout component provides consistent header/footer structure
- SEO component handles meta tags and social sharing
- Uses gatsby-plugin-image for optimized image handling

### Content Management
- Blog posts are markdown files in `src/markdown-pages/`
- Each post has frontmatter with slug, title, date, description
- GraphQL queries pull markdown content and transform to HTML
- Blog template renders individual posts with consistent layout

### Styling Approach
- Global styles in `src/styles/global.css`
- Component-specific styles use CSS Modules
- SASS support enabled via gatsby-plugin-sass
- Custom fonts loaded via @fontsource packages

### Key Integrations
- Google Analytics via gatsby-plugin-google-gtag (tracking ID: G-G44ZQL8KZ3)
- Progressive Web App capabilities via gatsby-plugin-manifest
- Responsive breakpoints handled by gatsby-plugin-breakpoints
- External links automatically open in new tabs via gatsby-remark-external-links

## TypeScript Support
- TypeScript configuration present but project primarily uses JavaScript
- One TypeScript example page at `src/pages/using-typescript.tsx`
- Can add TypeScript files as needed with `.ts` or `.tsx` extensions

## Testing
- No test framework currently configured
- Test script in package.json points to Gatsby testing documentation

## Deployment
- Configured for Gatsby Cloud deployment
- Static build outputs to `public/` directory
- No special deployment requirements beyond static hosting