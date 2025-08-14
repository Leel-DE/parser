import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/root';

import './index.css';

import ErrorPage from './views/error-page/error-page.tsx';
import App from './App.tsx';
import AboutPage from './views/about-page/about-page.tsx';

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
