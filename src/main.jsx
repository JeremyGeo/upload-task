import React from 'react'
import ReactDOM from 'react-dom/client'
import About from "./pages/about-page.jsx"
import Home from "./pages/home-page.jsx"


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  [
    {path: "", element: <App />, 
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />}
    ]},
    
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
