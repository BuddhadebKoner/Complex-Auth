# Complex Authentication System
## Project Overview

This project is a full-featured **Authentication System** designed to manage user registration, login, and secure authentication flows. It includes several key technologies for client-side validation, routing, form handling, and server-side communication with Appwrite for backend services. The system supports both session management and security using **JWT tokens** (access and refresh tokens) with robust form validation and responsive UI.

## Key Features

- **User Authentication**: Registration, login, logout, and secure authentication with Appwrite integration.
- **Client-Side Validation**: Powered by `react-hook-form` and `zod`, ensuring the correctness of user inputs.
- **JWT Session Management**: Securely handling access and refresh tokens.
- **Responsive UI**: Built with `tailwindcss` and Radix UI for clean, accessible design.
- **Optimistic Updates & Caching**: Using `react-query` to manage server state efficiently.
- **Toast Notifications**: Real-time feedback to users with Radix Toast.
- **Form Handling**: Advanced form state management and validation with `react-hook-form`.
  
## Technologies Used

### Frontend Dependencies

- **React**: Core UI framework for building interactive user interfaces.
- **React Router DOM**: Handling routing and navigation between different pages like login, register, dashboard, etc.
- **React Hook Form**: Efficiently manage and validate forms with less boilerplate.
- **Zod**: A validation library used with `react-hook-form` for schema validation of form inputs.
- **Appwrite**: Backend-as-a-Service (BaaS) to handle user authentication, database, and cloud storage.
- **TanStack React Query**: For efficient server-state data fetching, caching, and synchronization.
- **Radix UI**: Accessible and unstyled components that allow custom styling, used for icons, labels, toasts, and more.
- **Lucide React**: Modern and customizable icon library for adding SVG-based icons to the UI.
- **Tailwind CSS**: Utility-first CSS framework for quickly styling the UI with `tailwind-merge` to manage class composition.

### Additional Libraries

- **Clsx**: A utility for conditionally applying class names, useful for dynamic styling.
- **Class Variance Authority (CVA)**: Provides control over the styling of component variants, ensuring a scalable and maintainable style system.
- **Spline**: For rendering 3D models and interactive scenes in the application.
- **Tailwind CSS Animate**: A plugin that adds reusable animations to the Tailwind CSS setup.

## Installation

To run the project locally, ensure you have **Node.js** and **npm** installed. Then follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/auth-system.git
   cd auth-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create an `.env` file** for environment variables, typically including:

   ```bash
   VITE_APPWRITE_PROJECT_ID=''
   VITE_APPWRITE_URL=''

   VITE_APPWRITE_DATABASE_ID=''
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build the project** for production deployment:

   ```bash
   npm run build
   ```

## Folder Structure

```
root/
│
├── components.json           # Components configuration
├── node_modules/             # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── src/                      # Source code directory
│   ├── App.tsx               # Main App component
│   ├── _auth/                # Authentication-related logic
│   ├── components/           # Reusable components
│   ├── context/              # Context API for global state
│   ├── globals.css           # Global CSS styles
│   ├── hooks/                # Custom hooks for app logic
│   ├── lib/                  # Utility libraries and helper functions
│   ├── mian.tsx              # Main entry point for the app
│   ├── _root/                # Root components and routing logic
│   ├── types/                # TypeScript types definitions
│   ├── vite-env.d.ts         # Vite environment types
├── eslint.config.js          # ESLint configuration
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Version lockfile for npm
├── public/                   # Static assets (HTML, icons, images)
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.app.json         # TypeScript configuration for app
├── tsconfig.json             # Global TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node
├── vite.config.ts            # Vite configuration
├── index.html                # HTML template for the app
└── README.md                 # Project documentation
```

## Features Breakdown

### 1. **Authentication Flow**
- Users can register, log in, and log out securely.
- The system manages user sessions using JWT tokens (access and refresh tokens).
- Tokens are securely stored, and session expiration handling is built-in.

### 2. **Form Management**
- The forms are handled with `react-hook-form` to minimize re-renders and improve performance.
- Validation is enforced using `zod` schemas to ensure input data integrity.

### 3. **Server-Side Communication**
- All API calls and server-state management are done using **React Query** for efficient data fetching, caching, and synchronization with Appwrite.

### 4. **UI & Styling**
- The UI is built using `tailwindcss` for responsive design and `clsx` for conditional class handling.
- The system includes components for toast notifications, icons, labels, and more using Radix UI.

### 5. **Optimized Performance**
- React Query manages caching and background updates for better performance.
- Tailwind Merge ensures efficient class name handling, reducing CSS conflicts.
