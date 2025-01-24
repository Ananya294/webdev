import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { ParamComp } from './components/ParamComp';
import Course from './components/Course';
import { Test } from './components/Test';
import NotFound from './components/NotFound';
const router = createBrowserRouter(
  [
    { 
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'course',
          element:<Course/>
        },
        {
          path:'tests',
          element:<Test/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App