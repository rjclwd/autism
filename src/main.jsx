import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import App from './App.jsx';
import Autism from './pages/autism/Autism.jsx';
import MensCare from './pages/menscare/MensCare.jsx';
import ThemeProvider from './components/ThemeProvider/ThemeProvider.jsx';
import FemaleCare from './pages/femalecare/FemaleCare.jsx';
import SkinCare from './pages/skincare/SkinCare.jsx';
import DigestiveCare from './pages/digestivecare/DigestiveCare.jsx';
import EntCare from './pages/entcare/EntCare.jsx';
import UrologyCare from './pages/urologycare/UrologyCare.jsx';
import RespiratoryCare from './pages/respiratorycare/RespiratoryCare.jsx';
import NervmindCare from './pages/nervmindcare/NervmindCare.jsx';
import HairbeautyCare from './pages/hairbeautycare/HairbeautyCare.jsx';
import ChildCare from './pages/childcare/ChildCare.jsx';
import AutoimuneCare from './pages/autoimunecare/AutoimuneCare.jsx';
import OrthoCare from './pages/orthocare/OrthoCare.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='awareness'>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="autism" element={<Autism />} />
            <Route path="menscare" element={<MensCare />} />
            <Route path="femalecare" element={<FemaleCare />} />
            <Route path="skincare" element={<SkinCare />} />
            <Route path="digestivecare" element={<DigestiveCare />} />
            <Route path="nervmindcare" element={<NervmindCare />} />
            <Route path="urologycare" element={<UrologyCare />} />
            <Route path="autoimmunecare" element={<AutoimuneCare />} />
            <Route path="entcare" element={<EntCare />} />
            <Route path="hairbeautycare" element={<HairbeautyCare />} />
            <Route path="childcare" element={<ChildCare />} />
            <Route path="orthocare" element={<OrthoCare />} />
            <Route path="respiratorycare" element={<RespiratoryCare />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
