import { useRoutes,BrowserRouter } from 'react-router-dom'
import { ShoppingCartContextProvider } from '../../Context'
import Home from '../Home'
import MyAcount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:<Home/>},
    { path: '/clothes', element:<Home/>},
    { path: '/electronics', element:<Home/>},
    { path: '/furnitures', element:<Home/>},
    { path: '/toys', element:<Home/>},
    { path: '/others', element:<Home/>},
    { path: '/MyAcount', element:<MyAcount/>},
    { path: '/MyOrder', element:<MyOrder/>},
    { path: '/MyOrders', element:<MyOrders/>},
    { path: '/MyOrders/last', element:<MyOrder/>},
    { path: '/MyOrders/:id', element:<MyOrder/>},
    { path: '/*', element:<NotFound/>},
    { path: '/SignIn', element:<SignIn/>}
  ])

  return routes
}


const App = () => {
  return (
    <ShoppingCartContextProvider>
      <BrowserRouter>
          <AppRoutes />
          <Navbar/>
          <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartContextProvider>
  )
}

export default App
