import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../components/Users";
import Products from "../components/Products";
import ViewUser from "../components/ViewUser";
import ViewProduct from "../components/ViewProduct";
import AddProduct from "../components/AddProduct";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../Main/Main";
import AdminHome from './../components/AdminHone';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: 'auth/login', // Changed to '/auth/login'
        element: <Login/>
      },
      {
        path: 'auth/register', // Changed to '/auth/register'
        element: <Register/>
      }
    ]
  },
  {
    path: '/admin', // All admin routes will now be under '/admin'
    element: <App />,
    children: [
      {
        path: 'adminhome', // Access admin home at '/admin/adminhome'
        element: <AdminHome/>
      },
      {
        path: 'users', // Access users at '/admin/users'
        element: <Users/>
      },
      {
        path: 'products', // Access products at '/admin/products'
        element: <Products/>
      },
      {
        path: 'users/:id', // View a specific user at '/admin/users/:id'
        element: <ViewUser/>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: 'products/:id', // View a specific product at '/admin/products/:id'
        element: <ViewProduct/>,
        loader: ({ params }) => fetch(`https://api.restful-api.dev/objects/${params.id}`)
      },
      {
        path: 'addproduct', // Add a new product at '/admin/addproduct'
        element: <AddProduct/>
      },
    ]
  }
]);

export default router;
