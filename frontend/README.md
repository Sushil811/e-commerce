# E-Commerce Frontend

A modern React frontend for the e-commerce backend API.

## Features

- 🛍️ **Product Management**: View, add, edit, and delete products
- 🎨 **Modern UI**: Beautiful design with Tailwind CSS
- 📱 **Responsive**: Works on desktop, tablet, and mobile
- ⚡ **Fast**: Optimized performance with React hooks
- 🔄 **Real-time**: Instant updates after CRUD operations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── ProductList.js  # Product listing page
│   ├── AddProduct.js   # Add product form
│   └── EditProduct.js  # Edit product form
├── services/           # API services
│   └── api.js         # Axios configuration and API calls
├── App.js             # Main app component with routing
├── index.js           # App entry point
└── index.css          # Global styles with Tailwind CSS
```

## API Integration

The frontend connects to your backend API at `http://localhost:5000/api/products` and supports:

- **GET** `/api/products` - Fetch all products
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product
- **DELETE** `/api/products/:id` - Delete a product

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

## Customization

### Styling
The app uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom components

### API Configuration
Update the API base URL in `src/services/api.js` if your backend runs on a different port or host.

## Troubleshooting

### Common Issues

1. **Backend not running**: Make sure your backend server is running on port 5000
2. **CORS errors**: Ensure your backend has CORS enabled
3. **Port conflicts**: If port 3000 is busy, React will automatically use the next available port

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your backend is running and accessible
3. Ensure all dependencies are installed correctly
