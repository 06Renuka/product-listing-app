# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Product Listing App
This is a simple React application that allows users to sign up, log in, and view a list of products. The app features a search functionality, pagination, and displays the products in a grid layout.

Features
-User Signup
-User Login with JWT Authentication
-Product Listing with Pagination
-Product Search
-Responsive Design
=Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Axios for API requests
Authentication: JWT-based Authentication
-----Setup Instructions
1. Clone the repository:

git clone
2. Navigate to the project directory:

cd product-listing-app

3. Install dependencies:

npm install

4. Run the development server:

npm start
The app should now be running on http://localhost:3000.

5. Build the app for production:

npm run build
This will create an optimized production build in the build folder.

Deployment
You can deploy the production build to any hosting service (e.g., Netlify, Vercel, GitHub Pages). Here's how you can deploy to Netlify:

Run the npm run build command.
Drag and drop the build folder to Netlify.
Alternatively, use this guide to deploy to Vercel or GitHub Pages.

API Endpoints
This project interacts with the following API endpoints:

Signup: POST https://intern-task-api.bravo68web.workers.dev/auth/signup
Login: POST https://intern-task-api.bravo68web.workers.dev/auth/login
Products: GET https://intern-task-api.bravo68web.workers.dev/api/products
current user:https://intern-task-api.bravo68web.workers.dev/api/me

