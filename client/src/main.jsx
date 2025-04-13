import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'; // ✅ use react-router-dom here

import Home from './pages/Home.jsx';
import Layout from './Layout.jsx';
import Newsletters from './pages/Newsletter.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* ✅ index is better than empty path */}
      <Route path="newsletter" element={<Newsletters />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
