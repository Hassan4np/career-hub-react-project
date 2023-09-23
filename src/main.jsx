import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './conponenst/Root/Roots.jsx';
import Home from './conponenst/Root/Home/Home.jsx';
import Applaidjobs from './conponenst/Root/Applaidjobs/Applaidjobs.jsx';
import Errorpage from './conponenst/Root/Errorpage/Errorpage.jsx';
import Jobsdetais from './conponenst/Root/JobsDetais/Jobsdetais.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/applied",
        element:<Applaidjobs></Applaidjobs>,
        loader:()=>fetch('jobs.json'),
      },
      {
        path:"/job/:id",
        element:<Jobsdetais></Jobsdetais>,
        loader:()=>fetch('jobs.json'),
      }
    ]  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
