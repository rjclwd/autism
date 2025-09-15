import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import App from './App.jsx';
import Autism from './pages/autism/Autism.jsx';
import MensCare from './pages/menscare/MensCare.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='awareness'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="autism" element={<Autism />} />
          <Route path="menscare" element={<MensCare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
