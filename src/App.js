import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";
import { Outlet } from "react-router";
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router";
import { createBrowserRouter } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";




const Grocery = lazy(() => import("./components/Grocery"))


const AppLayout = () => {

  const [userName, setuserName] = useState()
  useEffect(() => {
    const data = {
      name: "Lakshya Shahi"
    }
    setuserName(data.name)
  }, [])

  return (
    <Provider store={appStore} >
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div></UserContext.Provider>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading Grocery</h1>}><Grocery /></Suspense>
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />

  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
