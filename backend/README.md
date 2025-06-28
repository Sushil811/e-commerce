# E-Commerce Backend API

A Node.js backend API for the e-commerce application built with Express, MongoDB, and Mongoose.

## Features

- 🛍️ **Product Management**: CRUD operations for products
- 🗄️ **MongoDB Integration**: MongoDB database with Mongoose ODM
- 🔒 **CORS Enabled**: Configured for React frontend
- 🚀 **RESTful API**: Clean REST endpoints
- 📝 **Input Validation**: Request validation and error handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   Create a `.env` file in the backend directory with:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

### Products

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product
- **DELETE** `/api/products/:id` - Delete a product

### Health Check

- **GET** `/` - API health check

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
NODE_ENV=development
```

## Project Structure

```
backend/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   └── product.controller.js  # Product CRUD operations
├── models/
│   └── product.model.js       # Product schema
├── routes/
│   └── product.route.js       # Product routes
├── server.js           # Main server file
├── package.json        # Dependencies
└── README.md           # This file
```

## Database Schema

### Product Model
```javascript
{
  name: String (required),
  price: Number (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**: 
   - Check your MongoDB connection string
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Verify network connectivity

2. **Port Already in Use**:
   - Change the PORT in .env file
   - Kill the process using the port

3. **CORS Errors**:
   - Ensure frontend is running on http://localhost:3000
   - Check CORS configuration in server.js

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify your .env file is properly configured
3. Ensure all dependencies are installed
4. Check MongoDB connection string format 