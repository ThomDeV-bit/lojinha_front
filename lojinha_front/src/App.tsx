import './App.css'
import { createBrowserRouter, RouteObject, RouterProvider, useNavigate } from 'react-router-dom';
import { loginRouter } from './modules/login/routes';
import type { Router as RemixRouter } from '@remix-run/router'
import { useNotification } from './shared/hooks/useNotification';
import { firstScreenRouter } from './modules/firstScreen/routes';
import { producstsRouter } from './modules/products/routes';
import { useGlobalContext } from './shared/hooks/useGlobal';
import { verifyLoggedIn } from './shared/functions/auth';



export function App() {

  const { contextHolder } = useNotification()

  const { user, setUser } = useGlobalContext()


  const routes: RouteObject[] = [...loginRouter, ...firstScreenRouter]

  const routesLoginIn: RouteObject[] = [...producstsRouter].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user)
  }))

  const router: RemixRouter = createBrowserRouter(
    [
      ...routes,
      ...routesLoginIn
    ])
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>

  )
}
export default App
