import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import App from './App.jsx';
import Autism from './pages/autism/Autism.jsx';
// import other landing pages as needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="autism" element={<Autism />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
