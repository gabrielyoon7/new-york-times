import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Scrapped from './pages/Scrapped.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/scrapped',
          element: <Scrapped />,
        },
      ],
    },
  ],
  {
    basename: '/new-york-times/',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
