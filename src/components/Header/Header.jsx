import React, {useContext} from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../../Context/CartContext'


function Header() {
  const navigate = useNavigate();

  // Global State
  const {cartItems} = useContext(CartContext)

  // Get the user Data
  const [user] = useAuthState(auth)

  let amountOfItems = 0;

  for (let i = 0; i < cartItems.length; i++) {
    amountOfItems += Number(cartItems[i].quantity);
    console.log(amountOfItems)
  }

  return (
    <div className='header-container'>
        <Link className='logo' to={'/'}><h3>The Bean Machine</h3></Link>
        <nav>
            <Link className='header-links' to={'/about'}>About</Link>
            <Link className='header-links' to={'/selection'}>Selection</Link>
            {/* <button className='login-btn'><Link to={'/signup'}>LOG IN</Link></button> */}
            {
              user
              ? <div className='user-container'>
                <Link className='username' to={`/account/${user.displayName}`}>{
                  user.displayName
                  ? user.displayName
                  : user.email
                }</Link>
                <div className='cart-container'>
                  <FiShoppingCart className='cart' onClick={() => navigate(`/checkout/${user.displayName}`)}/>
                  {
                    cartItems.length > 0
                    ? <p className='cart-items-amount'>{amountOfItems}</p> 
                    : <p></p>
                  }
                </div>
              </div>
              : <button className='login-btn'><Link to={'/signup'}>LOG IN</Link></button>
            }
        </nav>
    </div>
  )
}

export default Header