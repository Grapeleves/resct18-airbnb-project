import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home/home'))
const Detail = React.lazy(() => import("@/views/detail/detail"))
const Entire = React.lazy(() => import("@/views/entire/entire"))
const Demo = React.lazy(() => import("@/views/demo"))


const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/detail",
    element: <Detail></Detail>
  },
  {
    path: "/entire",
    element: <Entire></Entire>
  },
  {
    path: "/demo",
    element: <Demo></Demo>
  }
]

export default routes