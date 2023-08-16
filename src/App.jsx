import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './component/home/Home'
// import NavBar from './component/header/Navbar'
import Footer from './component/Footer/Footer'
import About from './component/taiwind_practice/About'
import MovieContainer from './component/home/MovieContainer'
function App() {

  return (
    <>
      <Router>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/movie' element={<MovieContainer/>}/>
          
        </Routes>
        <Footer/>
      </Router>



    </>
  )
}

export default App
