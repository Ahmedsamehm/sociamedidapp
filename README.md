# 🚀 Social Media App

<img width="1920" height="917" alt="localhost_3000_" src="https://github.com/user-attachments/assets/ec1c589c-4375-42a0-857c-03480d71cec9" />


A modern **Social Media App** built with **Next.js** and **TypeScript**, designed to handle large datasets efficiently and deliver a smooth user experience.

👉 **Demo:** [Website](https://sociamedidapp.vercel.app/)

---

## 🧪 Why This Project?

I wanted to build a **scalable social media app** and solve real-world performance problems:  
- Handling **large posts** with **200–500 comments each**  
- Avoiding heavy DOM rendering that slows down the UI  
- Optimizing **data fetching** and reducing API load  
- Securing routes with middleware  

The main goal was to combine **TanStack Virtual** + **Infinite Scroll** + **React Query caching** for performance optimization.

---

## 🛠️ Tech Stack

- **Next.js 15** – frontend, routing, and middleware  
- **TypeScript** – type safety and maintainability  
- **TailwindCSS + ShadCN UI** – modern UI styling and components  
- **React Query + Axios** – data fetching, caching, and synchronization  
- **TanStack Virtual** – efficient rendering of large lists  
- **Context + Custom Hooks** – global state management  
- **Middleware** – route protection and authentication  

---

## 🧩 Challenges & Highlights

### 📊 Handling Large Data
- Each post contained **200–500 comments**.  
- Rendering all comments at once caused **serious performance issues**.  
- Solved with **TanStack Virtual**, rendering only the visible items in the viewport.  

### ⚡ Slow API Responses
- API was slow and fetching all data at once was impractical.  
- Used **React Query caching** to reduce repeated calls and update data in the background.  

### 🔄 Infinite Scroll
- Combined **virtualization + infinite scroll** to load only what the user needs.  
- Seamless navigation through large datasets.  

### 🔐 Route Protection
- Implemented **Next.js Middleware** to secure private routes.  

---

## 🚀 Key Features

- Virtualized list with **TanStack Virtual**  
- **Infinite scroll** for smooth navigation  
- **React Query caching** for performance and responsiveness  
- Modular and reusable components with **shadcn/ui**  
- Global state with **Context + custom hooks**  
- **Responsive design** with theme toggling  
- Middleware for **secure route protection**  

---

## 📂 Folder Structure
```
├── 📁 _components/
│   ├── 📄 ProfileHeader.tsx
│   └── 📄 ProfilePosts.tsx
├── 📁 _hooks/
│   ├── 📄 useProfileData.ts
│   └── 📄 useUserPosts.ts
├── 📁 _services/
│   └── 📄 fetchUserPosts.ts
└── 📄 page.tsx
```
---

Thanks for reading!  
This project helped me improve my skills in **Next.js architecture**, **data optimization with TanStack Virtual**
