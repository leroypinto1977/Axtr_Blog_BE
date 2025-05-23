import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from '../src/models/Blog.js';

// Load environment variables
dotenv.config();

// Sample authors and avatars
const authors = [
  {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
  },
  {
    name: 'Sarah Williams',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d3d0cf477953'
  },
  {
    name: 'Robert Brown',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  }
];

// Sample blog data
const sampleBlogs = [
  {
    title: 'Getting Started with Next.js',
    author: authors[0].name,
    avatar: authors[0].avatar,
    date: new Date('2025-05-01'),
    readTime: '5 min read',
    imgURL: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    description: 'A comprehensive guide to building web applications with Next.js',
    content: `# Getting Started with Next.js

Next.js is a powerful framework for building server-side rendered React applications. In this guide, we'll explore the basics of setting up a Next.js project and creating your first page.

## Installation

To get started with Next.js, you'll need to have Node.js installed on your system. Once you have Node.js, you can create a new Next.js project using the following command:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Features

Next.js comes with many built-in features that make development easier:

- Server-side rendering
- Static site generation
- API routes
- File-based routing
- Built-in CSS and Sass support
- Automatic code splitting

## Getting Started

After creating your project, you can start the development server by running:

\`\`\`bash
npm run dev
\`\`\`

This will start the development server on http://localhost:3000`,
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Modern JavaScript Features',
    author: authors[1].name,
    avatar: authors[1].avatar,
    date: new Date('2025-04-25'),
    readTime: '8 min read',
    imgURL: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d',
    description: 'Explore the latest features in JavaScript ES2023',
    content: `# Modern JavaScript Features

JavaScript continues to evolve with new features that make development more efficient and enjoyable. In this article, we'll explore some of the latest features in ES2023.

## Decorators

Decorators are a powerful new feature that allow you to modify or enhance classes and class members. They can be used for:

- Adding metadata
- Modifying behavior
- Creating mixins
- Implementing aspect-oriented programming

## Class Fields

Class fields make it easier to define properties and methods in your classes. You can now use:

- Public fields
- Private fields
- Static fields
- Getter and setter methods

## Top-Level Await

Top-level await allows you to use the await keyword at the top level of your modules, making it easier to work with asynchronous code.

## Conclusion

These new features make JavaScript more powerful and easier to work with. As the language continues to evolve, we can expect even more exciting features in the future.`,
    slug: 'modern-javascript-features'
  },
  {
    title: 'React Best Practices',
    author: authors[2].name,
    avatar: authors[2].avatar,
    date: new Date('2025-04-20'),
    readTime: '6 min read',
    imgURL: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    description: 'Best practices for building scalable React applications',
    content: `# React Best Practices

React is a powerful library for building user interfaces, but with great power comes great responsibility. In this article, we'll explore some best practices for building scalable and maintainable React applications.

## Component Structure

- Keep components small and focused
- Use functional components with hooks
- Extract common logic into custom hooks
- Use proper naming conventions

## State Management

- Use useState for simple state
- Use useEffect for side effects
- Use React Context for global state
- Consider Redux for complex state management

## Performance Optimization

- Use React.memo for expensive components
- Implement proper error boundaries
- Use code splitting
- Optimize rendering with shouldComponentUpdate

## Testing

- Write unit tests with Jest
- Use React Testing Library
- Test edge cases
- Test user interactions

## Conclusion

Following these best practices will help you build more maintainable and scalable React applications. Remember that the key to success is consistency and proper documentation.`,
    slug: 'react-best-practices'
  },
  {
    title: 'Understanding TypeScript',
    author: authors[3].name,
    avatar: authors[3].avatar,
    date: new Date('2025-04-15'),
    readTime: '7 min read',
    imgURL: 'https://images.unsplash.com/photo-1542744095-6f8a1d75928b',
    description: 'A comprehensive guide to TypeScript for JavaScript developers',
    content: `# Understanding TypeScript

TypeScript is a superset of JavaScript that adds static typing and other features to make development more reliable and maintainable.

## Key Features

- Static typing
- Interfaces and types
- Classes and inheritance
- Generics
- Decorators

## Getting Started

To start using TypeScript, install it using npm:

\`\`\`bash
npm install -g typescript
\`\`\`

## Best Practices

- Use strict mode
- Write type-safe code
- Use interfaces for complex objects
- Avoid any type
- Use enums for fixed sets of values`,
    slug: 'understanding-typescript'
  },
  {
    title: 'Node.js Performance Optimization',
    author: authors[4].name,
    avatar: authors[4].avatar,
    date: new Date('2025-04-10'),
    readTime: '9 min read',
    imgURL: 'https://images.unsplash.com/photo-1518452868416-b9b117e7714b',
    description: 'Tips and tricks for optimizing Node.js applications',
    content: `# Node.js Performance Optimization

Node.js is a powerful runtime environment, but proper optimization is crucial for high-performance applications.

## Common Bottlenecks

- Memory leaks
- CPU bottlenecks
- I/O blocking
- Database performance

## Optimization Strategies

1. Use async/await
2. Implement proper error handling
3. Use caching
4. Optimize database queries
5. Use proper data structures

## Monitoring Tools

- Node Inspector
- Chrome DevTools
- PM2
- New Relic`,
    slug: 'nodejs-performance-optimization'
  },
  {
    title: 'CSS Grid Layout',
    author: authors[1].name,
    avatar: authors[1].avatar,
    date: new Date('2025-04-05'),
    readTime: '6 min read',
    imgURL: 'https://images.unsplash.com/photo-1501088430049-71c7d68c339e',
    description: 'Mastering CSS Grid for modern web layouts',
    content: `# CSS Grid Layout

CSS Grid is a powerful layout system that makes creating complex layouts easy and maintainable.

## Basic Concepts

- Grid container
- Grid items
- Grid lines
- Grid tracks
- Grid cells

## Common Properties

- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-gap
- justify-items
- align-items`,
    slug: 'css-grid-layout'
  },
  {
    title: 'Git Best Practices',
    author: authors[2].name,
    avatar: authors[2].avatar,
    date: new Date('2025-04-01'),
    readTime: '5 min read',
    imgURL: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    description: 'Best practices for using Git in your projects',
    content: `# Git Best Practices

Git is a powerful version control system that helps teams collaborate effectively.

## Basic Commands

- git clone
- git add
- git commit
- git push
- git pull
- git branch
- git merge

## Best Practices

1. Write clear commit messages
2. Use feature branches
3. Keep commits small
4. Review code before merging
5. Use Git hooks
6. Document your workflow`,
    slug: 'git-best-practices'
  },
  {
    title: 'React Hooks Deep Dive',
    author: authors[0].name,
    avatar: authors[0].avatar,
    date: new Date('2025-03-25'),
    readTime: '8 min read',
    imgURL: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Understanding React Hooks in depth',
    content: `# React Hooks Deep Dive

React Hooks are a powerful feature that allow you to use state and other React features without writing a class.

## Core Hooks

- useState
- useEffect
- useContext
- useRef
- useCallback
- useMemo

## Custom Hooks

- Creating custom hooks
- Sharing logic between components
- Best practices
- Common patterns

## Best Practices

- Keep hooks simple
- Use descriptive names
- Follow naming conventions
- Handle cleanup properly
- Avoid conditionally calling hooks`,
    slug: 'react-hooks-deep-dive'
  },
  {
    title: 'Web Performance Optimization',
    author: authors[3].name,
    avatar: authors[3].avatar,
    date: new Date('2025-03-20'),
    readTime: '7 min read',
    imgURL: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Optimizing web application performance',
    content: `# Web Performance Optimization

Web performance is crucial for user experience and SEO. Here are some tips to optimize your web application:

## Key Metrics

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

## Optimization Strategies

1. Optimize images
2. Minimize JavaScript
3. Use proper caching
4. Implement lazy loading
5. Optimize fonts
6. Use proper CDN

## Tools

- Lighthouse
- PageSpeed Insights
- WebPageTest
- Chrome DevTools`,
    slug: 'web-performance-optimization'
  },
  {
    title: 'API Security Best Practices',
    author: authors[4].name,
    avatar: authors[4].avatar,
    date: new Date('2025-03-15'),
    readTime: '9 min read',
    imgURL: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee',
    description: 'Securing your web APIs',
    content: `# API Security Best Practices

API security is crucial for protecting your application and user data.

## Common Threats

- Authentication bypass
- SQL injection
- XSS attacks
- CSRF attacks
- Rate limiting

## Security Measures

1. Use HTTPS
2. Implement proper authentication
3. Validate all inputs
4. Use rate limiting
5. Monitor API usage
6. Keep dependencies updated

## Best Practices

- Use proper error handling
- Implement proper logging
- Use security headers
- Regular security audits
- Keep documentation updated`,
    slug: 'api-security-best-practices'
  },
  {
    title: 'Modern CSS Techniques',
    author: authors[1].name,
    avatar: authors[1].avatar,
    date: new Date('2025-03-10'),
    readTime: '6 min read',
    imgURL: 'https://images.unsplash.com/photo-1501088430049-71c7d68c339e',
    description: 'Exploring modern CSS features and techniques',
    content: `# Modern CSS Techniques

CSS continues to evolve with new features that make styling easier and more powerful.

## New Features

- CSS Variables
- CSS Grid
- CSS Flexbox
- CSS Modules
- CSS Custom Properties

## Best Practices

- Use CSS preprocessors
- Implement proper naming conventions
- Use CSS frameworks
- Keep code maintainable
- Document your styles`,
    slug: 'modern-css-techniques'
  },
  {
    title: 'JavaScript Promises',
    author: authors[2].name,
    avatar: authors[2].avatar,
    date: new Date('2025-03-05'),
    readTime: '5 min read',
    imgURL: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d',
    description: 'Understanding JavaScript Promises',
    content: `# JavaScript Promises

Promises are a powerful way to handle asynchronous operations in JavaScript.

## Basic Concepts

- Promise states
- Promise methods
- Promise chaining
- Error handling
- Promise.all

## Best Practices

- Use async/await
- Handle errors properly
- Keep code readable
- Avoid callback hell
- Use proper error messages`,
    slug: 'javascript-promises'
  },
  {
    title: 'Building RESTful APIs',
    author: authors[0].name,
    avatar: authors[0].avatar,
    date: new Date('2025-03-01'),
    readTime: '8 min read',
    imgURL: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee',
    description: 'Creating RESTful APIs with Node.js and Express',
    content: `# Building RESTful APIs

REST (Representational State Transfer) is a set of architectural principles for building web services.

## Key Principles

- Stateless
- Client-server architecture
- Cacheable
- Uniform interface
- Layered system

## Best Practices

- Use proper HTTP methods
- Implement proper error handling
- Use proper status codes
- Document your API
- Implement rate limiting`,
    slug: 'building-restful-apis'
  },
  {
    title: 'React State Management',
    author: authors[3].name,
    avatar: authors[3].avatar,
    date: new Date('2025-02-25'),
    readTime: '7 min read',
    imgURL: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Managing state in React applications',
    content: `# React State Management

State management is crucial for building complex React applications.

## Options

- useState
- Redux
- MobX
- Context API
- Zustand

## Best Practices

- Keep state minimal
- Use proper naming
- Document state changes
- Handle errors properly
- Keep components pure`,
    slug: 'react-state-management'
  },
  {
    title: 'Web Accessibility',
    author: authors[4].name,
    avatar: authors[4].avatar,
    date: new Date('2025-02-20'),
    readTime: '6 min read',
    imgURL: 'https://images.unsplash.com/photo-1501088430049-71c7d68c339e',
    description: 'Making your web applications accessible',
    content: `# Web Accessibility

Web accessibility is crucial for ensuring your website can be used by everyone.

## Key Principles

- WCAG guidelines
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast

## Best Practices

- Use semantic HTML
- Provide alternative text
- Use proper headings
- Implement proper focus
- Test with assistive technologies`,
    slug: 'web-accessibility'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.mongo_uri);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Insert sample data
    const createdBlogs = await Blog.insertMany(sampleBlogs);
    console.log(`Created ${createdBlogs.length} blogs`);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
