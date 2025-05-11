import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Layout from './Layout.jsx';
import Newsletters from './pages/Newsletter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="newsletter" element={<Newsletters />} />
        </Route>
      </Routes>
    </HashRouter>
    <ToastContainer/>
  </StrictMode>
);
