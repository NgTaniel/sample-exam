// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import BlankoPage from '../pages/BlankoPage'
import ShrekoPage from '../pages/ShrekoPage'
import TetroPage from '../pages/TetroPage'
import Footer from '../components/Footer'

const App = () => {

  // const navigate = useNavigate();

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blanko' element={<BlankoPage/>}/>
        <Route path='/slido' element={<ShrekoPage/>}/>
        <Route path='/tetro' element={<TetroPage/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
