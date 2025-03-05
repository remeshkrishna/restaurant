
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";

const AppLayout = ()=>{
    return (
    <div className="applayout">
            <HeaderComponent/>
            <Outlet/>
        </div>
    );}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <BodyComponent/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ],
    errorElement: <Error/>
  },
  
]);
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter}/>)
