import React from 'react'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import BookNow from "./pages/BookNow"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const Layout = () => {
    return (
      <div className="">

        <Navigation />
        <Outlet/>
     <Footer/>
      </div>
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
    
         {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/book-now",
          element:<BookNow/>
         }
      ]
    
  },
]);
  return (
   <div className="mx-auto max-[1400px]" >
       <RouterProvider router={router} />
      
      </div> 
  )
}

export default App
