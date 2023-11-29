import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from "./Components/Pages/Home/Home.jsx"
import Login from './Components/Pages/Login/Login.jsx'
import SignUp from './Components/Pages/SignUp/SignUp.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<SignUp />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
