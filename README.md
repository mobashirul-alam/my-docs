# My Docs - Real-time Collaborative Document Editor

My Docs is a modern, real-time collaborative document editing platform built with Next.js. Create, edit, and collaborate on documents with others in real-time, using a variety of pre-built templates to kickstart your work.

🌐 **Live Link**: [https://my-docs-web.vercel.app](https://my-docs-web.vercel.app)

## Features

- ✨ Real-time collaboration using Liveblocks
- 📄 Rich text editing with TipTap
- 🎨 Multiple document templates
- 🔍 Full-text search capabilities
- 💾 Automatic saving and version control
- 🎯 Modern, responsive UI using Radix UI
- 🔒 Authentication with Clerk
- ⚡ Powered by Convex backend

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:
    - Create a `.env.local` file
    - Add your Clerk, Liveblocks, and Convex credentials

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Tech Stack

- **Frontend**: Next.js 15+ with TypeScript
- **Real-time Collaboration**: Liveblocks
- **Backend**: Convex
- **Authentication**: Clerk
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Font**: Inter

## Development

The project structure follows Next.js 15 App Router conventions:

- `/app` - Application routes and pages
- `/components` - Reusable UI components
- `/convex` - Backend API and schema definitions
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and helpers
