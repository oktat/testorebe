import { createBrowserRouter } from "react-router-dom"
import { Home } from "./Pages/Home"
import Cookies from 'js-cookie'
import { ProtectedRoute } from "./ProtectedRoute"
import { Login } from "./Pages/Login"
import { Layout } from "./Pages/Layout"
import { Products } from "./Pages/Products"
import { About } from "./Pages/About"


const getAccessToken = () => {
  return Cookies.get('token')  
}

const isAuthenticated = () => {
  return !!getAccessToken()
}

export const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
    {
      path: '/',
      element: <Home />,
      index: true
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
      children: [
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    },
    {
      path: '*',
      element: <p>404 Hiba - Nincs ilyen oldal</p>
    }
  ]}
], { basename: '/m/testorebe' })
