import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
   <Toaster/>
  </RouterProvider>,
)
