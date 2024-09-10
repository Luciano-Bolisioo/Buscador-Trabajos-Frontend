import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/public/Home";
import { Login } from "../pages/public/Login";
import { Register } from "../pages/public/Register";
import { Reclutador } from "../pages/private/Reclutador";
import { LayoutPublico } from "../layout/LayoutPublico";
import { NotFound } from "../pages/NotFound";
import { LayoutReclutador } from "../layout/LayoutReclutador";
import { PrivateRoute } from "../components/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublico/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },
    {
        path: '/reclutador',
        element: (
          <PrivateRoute roles={['reclutador']}>
            <LayoutReclutador />
          </PrivateRoute>
        ),
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Reclutador />,
          },
        ],
      },
    
])