import React, {useState, useEffect, useContext} from 'react'
import './CoffeeDetails.css'
import coffe1 from '../../assets/coffe1.jpeg'
import coffe2 from '../../assets/coffe2.jpeg'
import coffe3 from '../../assets/coffe3.jpeg'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import { CartContext } from '../../Context/CartContext'

function CoffeeDetails() {
      const coffeeBeansArray = [
        {
          id: 1,
          name: 'Costa Rica Single Origin',
          imgUrl: coffe1,
          price: 24,
          from: 'Costa Rica',
          description: 'A silky, mild-bodied, balanced medium roast, this proudly fair trade, sustainably-grown, organic Arabica coffee with distinctive flavor is incomparable on every level. A century-old coffee farm grows coffee cherries that feature a complex blend of sweet cocoa, smooth caramel, and warm pumpkin pie spiced flavors.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 2,
          name: 'Brazil Medium Roast',
          imgUrl: coffe2,
          price: 35,
          from: 'Brazil',
          description: 'Enjoy the smooth and rich flavors of this medium roast, single origin coffee from Brazil. The natural process brings out the delicious notes of toasted walnut, toffee, and chocolate in every sip. Perfect for coffee connoisseurs, this Brazilian coffee is sure to satisfy.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 3,
          name: 'Colombia Single Origin',
          imgUrl: coffe3,
          price: 40,
          from: 'Colombia',
          description: 'This single origin is exactly the way it is described. Chocolatey, smooth, with an almost indescribable “special something” that makes the guests rave. Using my Aeropress to brew the Colombia makes a smooth, flavorful cup of coffee with just the right amount of sweetness.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 4,
          name: 'Costa Rica Single Origin',
          imgUrl: coffe1,
          price: 24,
          from: 'Costa Rica',
          description: 'A silky, mild-bodied, balanced medium roast, this proudly fair trade, sustainably-grown, organic Arabica coffee with distinctive flavor is incomparable on every level. A century-old coffee farm grows coffee cherries that feature a complex blend of sweet cocoa, smooth caramel, and warm pumpkin pie spiced flavors.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 5,
          name: 'Brazil Medium Roast',
          imgUrl: coffe2,
          price: 35,
          from: 'Brazil',
          description: 'Enjoy the smooth and rich flavors of this medium roast, single origin coffee from Brazil. The natural process brings out the delicious notes of toasted walnut, toffee, and chocolate in every sip. Perfect for coffee connoisseurs, this Brazilian coffee is sure to satisfy.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 6,
          name: 'Colombia Single Origin',
          imgUrl: coffe3,
          price: 40,
          from: 'Colombia',
          description: 'This single origin is exactly the way it is described. Chocolatey, smooth, with an almost indescribable “special something” that makes the guests rave. Using my Aeropress to brew the Colombia makes a smooth, flavorful cup of coffee with just the right amount of sweetness.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 7,
          name: 'Costa Rica Single Origin',
          imgUrl: coffe1,
          price: 24,
          from: 'Costa Rica',
          description: 'A silky, mild-bodied, balanced medium roast, this proudly fair trade, sustainably-grown, organic Arabica coffee with distinctive flavor is incomparable on every level. A century-old coffee farm grows coffee cherries that feature a complex blend of sweet cocoa, smooth caramel, and warm pumpkin pie spiced flavors.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 8,
          name: 'Brazil Medium Roast',
          imgUrl: coffe2,
          price: 35,
          from: 'Brazil',
          description: 'Enjoy the smooth and rich flavors of this medium roast, single origin coffee from Brazil. The natural process brings out the delicious notes of toasted walnut, toffee, and chocolate in every sip. Perfect for coffee connoisseurs, this Brazilian coffee is sure to satisfy.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        },
        {
          id: 9,
          name: 'Colombia Single Origin',
          imgUrl: coffe3,
          price: 40,
          from: 'Colombia',
          description: 'This single origin is exactly the way it is described. Chocolatey, smooth, with an almost indescribable “special something” that makes the guests rave. Using my Aeropress to brew the Colombia makes a smooth, flavorful cup of coffee with just the right amount of sweetness.',
          quantity: 1,
          inStock: [1, 2, 3, 4, 5]
        }
      ];
      const {coffeeId} = useParams()
      const [currentCoffee, setCurrentCoffee] = useState({})
      

      // Calling the Global State from CartContext
      const {cartItems, addItem, removeItem} = useContext(CartContext)
      // Need a state to control the items added
      const [isInTheCart, setIsOnTheCart] = useState(false)

      useEffect(
        () => {
          // Is this item in the cart?
          setIsOnTheCart(cartItems.find(item => item?.id == currentCoffee?.id))
        }, [cartItems]
      )

      // Get the user Data
      const [user] = useAuthState(auth)

      useEffect(
        () => {
            setCurrentCoffee(coffeeBeansArray.find(element => element.id == coffeeId))
        }, []
      )

      const handleSelect = (e) => {
        currentCoffee.quantity = e;
      }


  return (
    <div className='coffee-details-page'>
        <div className='coffee-details-container'>
            <img src={currentCoffee?.imgUrl}/>
            <div className='coffee-name'>
                <h2>{currentCoffee?.name} (2LB)</h2>
                <p>Price: ${currentCoffee?.price}</p>
            </div>
            <h2>Description:</h2>
            <p>{currentCoffee?.description}</p>
            <div className='addToCart-container'>
              <div className='quantity-container'>
                <p>Qty:</p>
                <select onChange={(e) => handleSelect(e.target.value)}>
                  {
                    currentCoffee.inStock &&
                    currentCoffee.inStock.map(item => <option value={item}>{item}</option>)
                  }
                </select>
              </div>
              <button>{
                user 
                ? isInTheCart
                  ? <p onClick={() => removeItem(currentCoffee?.id)}>Remove from Cart</p>

                  : <p onClick={() => addItem(currentCoffee)}>Add to Cart</p>
                : <Link to={'/signup'}>BUY</Link>
              }</button>
            </div>
        </div>
    </div>
  )
}

export default CoffeeDetails