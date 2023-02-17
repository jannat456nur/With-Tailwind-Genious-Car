import { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main/Main'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,

    Children: [
      { path: '/', element: <Home></Home> },
      {
        path: '/login',
        element: <Login></Login>,
      },
 
    ],
    
  },

])
