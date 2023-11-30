import React, {useState, useEffect} from 'react'
import './Homepage.css'
import banner from '../../assets/illustration.png'
import arrow from '../../assets/arrow_right.png'
import coffe1 from '../../assets/coffe1.jpeg'
import coffe2 from '../../assets/coffe2.jpeg'
import coffe3 from '../../assets/coffe3.jpeg'
import CoffeeCards from '../../components/CoffeeCards/CoffeeCards'
import { Link } from 'react-router-dom'
function Homepage() {
  const coffeeBeansArray = [
    {
      id: 1,
      name: 'Costa Rica Single Origin',
      imgUrl: coffe1,
      price: 24,
      from: 'Costa Rica'
    },
    {
      id: 2,
      name: 'Brazil Medium Roast',
      imgUrl: coffe2,
      price: 35,
      from: 'Brazil'
    },
    {
      id: 3,
      name: 'Colombia Single Origin',
      imgUrl: coffe3,
      price: 40,
      from: 'Colombia'
    },
    {
      id: 4,
      name: 'Costa Rica Single Origin',
      imgUrl: coffe1,
      price: 24,
      from: 'Costa Rica'
    },
    {
      id: 5,
      name: 'Brazil Medium Roast',
      imgUrl: coffe2,
      price: 35,
      from: 'Brazil'
    },
    {
      id: 6,
      name: 'Colombia Single Origin',
      imgUrl: coffe3,
      price: 40,
      from: 'Colombia'
    },
    {
      id: 7,
      name: 'Costa Rica Single Origin',
      imgUrl: coffe1,
      price: 24,
      from: 'Costa Rica'
    },
    {
      id: 8,
      name: 'Brazil Medium Roast',
      imgUrl: coffe2,
      price: 35,
      from: 'Brazil'
    },
    {
      id: 9,
      name: 'Colombia Single Origin',
      imgUrl: coffe3,
      price: 40,
      from: 'Colombia'
    }
  ];

  const [query, setQuery] = useState('')
  const [resultCoffee, setResultCoffee] = useState([])

  const coffees = []

  useEffect(() => {
    for (let i=0; i < coffeeBeansArray.length; i++) {
      if (coffeeBeansArray[i]?.from.toLowerCase() === query.toLowerCase()) {
        coffees.push(coffeeBeansArray[i])
      }
    }
    setResultCoffee(coffees)
  }, [query])


  const getUserQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className='homepage-container'>
      {/* Banner */}
      <div className='banner-container'>
        <div className='banner'>
            <h1>The Bean Machine</h1>
            <h2>Coffee Bean Shop</h2>
            <div className='searching-container'>
                <input name='search' type='text' placeholder='Search for a coffee bean' onChange={getUserQuery}/>
                <button className='arrow-btn'><Link to={`/results/${query.toLowerCase()}`}><img src={arrow} alt='submit'/></Link></button>
            </div>
        </div>
        <aside>
            <img src={banner} alt='banner'/>
        </aside>
      </div>
        {/* About Section */}
        <section className='about-section'>
          <h2>About</h2>
          <p>We are a specialty Coffee Bean Shop based in Barcelona, Spain.</p>
          <p>We are passionate about the coffee bean quality so we source our beans from all over the world in order to give you the best out there!</p>
          <p>Visit our specailty coffee shop at <span className="address">La Rambla 204</span>, where we serve the best coffee in Barcelona.</p>
        </section>
        {/* Special Offer Section */}
        <section className='special-offer-section'>
          <h2>Special Offers</h2>
          <div className='offers-container'>
            <CoffeeCards />
          </div>
        </section>
    </div>
  )
}

export default Homepage