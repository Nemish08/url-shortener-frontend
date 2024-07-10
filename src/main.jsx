import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Home from './componets/Home.jsx'
import Loggin from './componets/Loggin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route path='/' element = {<Home/>}/>
    <Route path='/home' element = {<Home/>}/>
    <Route path="/loggin" element={<Loggin/>}/>

  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
