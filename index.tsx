import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
// Import your other components here

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Add blog route */}
        <Route path="/blog" element={<Blog />} />
        
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
