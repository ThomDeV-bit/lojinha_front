import './App.css'
import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loginRouter } from './modules/login/routes';
import type { Router as RemixRouter } from '@remix-run/router'
import { useNotification } from './shared/hooks/useNotification';


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

export function App() {
  const { contextHolder } = useNotification()
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>

  )
}

export default App
