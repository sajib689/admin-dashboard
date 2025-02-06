import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../components/Users";
import Products from "../components/Products";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
           {
             path: '/users',
             element: <Users/>
           },
           {
            path: '/products',
            element: <Products/>
           }
        ]
    }
])

export default router