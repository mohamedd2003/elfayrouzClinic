import React from 'react'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



let routes = createBrowserRouter((
  [
    {
    path: '/', element: <Layout />, children:
      [
        { index: true, element: <Home /> }
      ]
  }
  ]
))
export default function App() {
  return <RouterProvider router={routes} ></RouterProvider>
}
