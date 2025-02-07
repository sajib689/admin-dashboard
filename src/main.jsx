import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <RouterProvider router={router}>
  
  </RouterProvider>
 </AuthProvider>
)
