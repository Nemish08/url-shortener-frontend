import { useEffect, useState } from 'react'
import './App.css'

import {Route,Router,Routes,BrowserRouter, Outlet} from 'react-router-dom'
import Home from './componets/Home'
import Loggin from './componets/Loggin'
function App() {
  
  return (
   <>
     <div>this is header</div> 
    <Outlet/>
    <div>footer </div>
   </>
  )
}

export default App
