import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import Home from '@pages/Home.tsx';
import Scrapped from '@pages/Scrapped.tsx';
import Layout from '@components/layout/Layout.tsx';
import { RecoilRoot } from 'recoil';
import Modal from '@components/modal/Modal.tsx';

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
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Modal />
    </RecoilRoot>
  </React.StrictMode>
);
