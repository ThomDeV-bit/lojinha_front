import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from './modules/login/index.ts';
import type { Router as RemixRouter } from '@remix-run/router'
import { loginRouter } from './modules/login/routes.tsx';


const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <div>Erro</div>
  }
];

const router: RemixRouter = createBrowserRouter(
  [
    ...mainRouter,
    ...loginRouter
  ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
