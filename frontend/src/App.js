import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load components to avoid build issues
const Navbar = React.lazy(() => import('./components/Navbar'));
const ProductList = React.lazy(() => import('./components/ProductList'));
const AddProduct = React.lazy(() => import('./components/AddProduct'));
const EditProduct = React.lazy(() => import('./components/EditProduct'));
const ErrorBoundary = React.lazy(() => import('./components/ErrorBoundary'));

// Loading component
const Loading = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <React.Suspense fallback={<Loading />}>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/edit/:id" element={<EditProduct />} />
              </Routes>
            </main>
          </div>
        </React.Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;