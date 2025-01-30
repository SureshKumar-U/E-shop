import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import store from "./redux/store.js"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import Cart from "./pages/CartPage"
import Product from "./pages/ProductDetails"
import CheckoutPage from './pages/checkoutPage.jsx'
import ProtectedRoute from './components/protectedRoute.jsx'


const router = createBrowserRouter([{
  path: '/', 
  element : <App/>,      //here app is Rootlayout
  children: [
    {index:true,element:<Home/>},
    {path: 'login',element:<Login/>},
    {path: 'signup',element:<Signup/>},
    {path: 'cart',element:<Cart/>},
    {path: 'product/:id',element:<Product/>},
    {path: "", element :<ProtectedRoute/>,
    children:[{path:"shipping", element:<CheckoutPage/>}] }

  ]
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={ router} />
  </Provider>
)
