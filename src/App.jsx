import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer'
import Selection from './pages/Selection/Selection'
import About from './pages/About/About'
import CoffeeDetails from './pages/CoffeeDetails/CoffeeDetails'
import SignUp from './pages/SignUp/SignUp'
import Results from './pages/Results/Results'
import Account from './pages/Account/Account'
import CartContextProvider from './Context/CartContext'
import Checkout from './pages/Checkout.jsx/Checkout'

function App() {
  

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Header/>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/selection' element={<Selection/>}/>
        <Route path='coffeedetails/:coffeeId' element={<CoffeeDetails/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/results/:coffee' element={<Results/>}/>
        <Route path='/account/:user' element={<Account/>}/>
        <Route path='checkout/:user' element={<Checkout/>}/>
      </Routes>
      
      <Footer/>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
