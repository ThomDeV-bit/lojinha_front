import './App.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loginRouter } from './modules/login/routes';
import type { Router as RemixRouter } from '@remix-run/router'
import { useNotification } from './shared/hooks/useNotification';
import { firstScreenRouter } from './modules/firstScreen/routes';
import { producstsRouter } from './modules/products/routes';



const router: RemixRouter = createBrowserRouter(
  [
    ...firstScreenRouter,
    ...loginRouter,
    ...producstsRouter
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
