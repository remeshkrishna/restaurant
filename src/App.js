
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
//import About from "./components/About";  --> we will import this using lazy loading
import Error from "./components/Error";
import Contact, { NewContact } from "./components/Contact";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy,Suspense } from "react";
import RestContext from "./utils/restContext";
import { useState } from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const About =  lazy(()=>import("./components/About"));

const AppLayout = ()=>{
  const [newFilterData,setNewFilterData] = useState([])
  const [allData,setAllData] = useState([])
    return (
    <div className="applayout">
      <Provider store={appStore}>
        <RestContext.Provider value={{allData:allData,filterData: newFilterData,setNewFilterData,setAllData}}>
          <HeaderComponent/>
          <Outlet/>
        </RestContext.Provider>
      </Provider>
        
            
        </div>
    );}

const NewComponent = NewContact(Contact);

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
        element: <Suspense fallback={<div>Loading....</div>}><About/></Suspense>
      },
      {
        path: '/contact',
        element: <NewComponent label="new label"/>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
  
]);
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<RouterProvider router={appRouter}/>)
