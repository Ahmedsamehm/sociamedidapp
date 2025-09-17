# SocialMediaApp

A modern social media application built with Next.js and TypeScript, designed to efficiently handle large datasets and provide a smooth user experience.

## Technologies & Tools Used

## Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and responsive design.
- **shadcn/ui**: Modern UI components built on top of Radix UI and Tailwind, used for building accessible and customizable interfaces.

## Frontend Framework
- **Next.js**: React-based framework for server-side rendering, routing, and optimized performance.
- **TypeScript**: Strongly typed language for better code quality and maintainability.

## State Management & Data Fetching
- **React Query**: Handles data fetching, caching, and synchronization with the server, improving performance and UX.

## Virtualization & Infinite Scroll
- **TanStack Virtual**: Efficiently renders only visible items in large lists, reducing DOM load and improving performance.
- **Custom Infinite Scroll**: Loads more items as the user scrolls, combined with virtualization for smooth UX.

## Routing & Middleware
- **Next.js Middleware**: Protects routes and handles authentication logic.

## Components & Architecture
- **shadcn/ui Components**: Used for dropdowns, buttons, cards, skeleton loaders, and more.
- **Custom Hooks & Context**: For managing global state and reusable logic.
- **Modular Component Structure**: Organized codebase for scalability and maintainability.

## Solutions to Challenges
- **Performance with Large Data**: Used virtualization and infinite scroll to render only what's needed.
- **Slow API Responses**: Leveraged React Query for caching and background updates.
- **Route Protection**: Implemented middleware for secure access control.
- **Consistent UI**: Used Tailwind and shadcn/ui for a cohesive, responsive design.

## Challenges Faced
- **Large Data Sets**: Posts with huge arrays of comments caused performance issues and slow rendering
- **Slow API Responses**: Waiting for all data to load negatively impacted UX
- **Efficient Infinite Scroll**: Needed a way to load and render only visible items

## Solutions Implemented
- **Virtualization with TanStack Virtual**: Only 5 items are rendered in the viewport at a time. As the user scrolls, older items are removed and new ones are added, creating a seamless infinite scroll experience.
- **React Query Caching**: All data is cached, reducing unnecessary API calls and improving performance.
- **Infinite Scroll**: Dynamically loads more items as the user scrolls, without overwhelming the DOM.
- **Middleware for Route Protection**: Ensures only authenticated users can access protected routes.

## Additional Features
- Modular and reusable components for scalability
- Context and custom hooks for state management
- Responsive design and theme toggling

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---
