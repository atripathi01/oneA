import { Navigate, redirect } from "react-router-dom";
import AppLayout from "../components/appLayout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Order from "../pages/order";
import Register from "../pages/register";

export const routerConfig = [
    // here you can configure the routes as you like
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/order',
        element: <Order />,
      }
    ],
  },
  {
    element:<NotFound />,
    path: '*',
  },
  {
    element:<Login />,
    path: '/login',
  },
  {
    element:<Register />,
    path: '/register',
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  }

  
];
