import Header from './components/Header'
import Body from './components/Body'
import AboutUs from './components/AboutUs'
import Error from './components/Error'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RestaurantMenu from './components/RestaurantMenu'

function App() {

  return (
    <>
    <Header/>
    {/* {} */}
    <Outlet />
    <Footer />
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
])

export default App


//using client side routing in this not server side 
//SPA - single page responsiblity