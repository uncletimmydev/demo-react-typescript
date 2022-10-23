import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from '../App'
import Yolo from '../pages/Yolo'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home title="Home" subTitle="Sub title home demo" />,
  },
  {
    path: '/yolo',
    element: <Yolo title="Yolo title" subTitle="Sub title yolo demo" />,
  },
])

export default router
