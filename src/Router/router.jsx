import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../components/Users";
import Products from "../components/Products";
import ViewUser from "../components/ViewUser";
import ViewProduct from "../components/ViewProduct";


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
           },
           {
            path: '/users/:id',
            element: <ViewUser/>,
            loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
           },
           {
            path: '/products/:id',
            element: <ViewProduct/>,
            loader: ({params}) => fetch(`https://api.restful-api.dev/objects/${params.id}`)
           }
        ]
    }
])

export default router