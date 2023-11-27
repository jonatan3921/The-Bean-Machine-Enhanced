import React, {useState, useEffect} from 'react'
import './CoffeeCards.css'
import coffe1 from '../../assets/coffe1.jpeg'
import coffe2 from '../../assets/coffe2.jpeg'
import coffe3 from '../../assets/coffe3.jpeg'
import { Link } from 'react-router-dom'


function CoffeeCards() {
    const coffeeArray = [
        {
            id: 1,
            name: 'Costa Rica Single Origin',
            imgUrl: coffe1
        },
        {
            id: 2,
            name: 'Brazil Medium Roast',
            imgUrl: coffe2
        },
        {
            id: 3,
            name: 'Colombia Single Origin',
            imgUrl: coffe3
        }
    ];

  return (
    <div className='coffee-card-container'>
        {
            coffeeArray.map(item => 
                <div className='box-offer' key={item.id}>
                    <img src={item.imgUrl} alt={item.name}/>
                    <Link to={`/coffeedetails/${item?.id}`} className='link'><p>{item.name}</p></Link>
                    <button><Link to={`/coffeedetails/${item?.id}`}>BUY</Link></button>
                </div>
            )
        }
    </div>
  )
}

export default CoffeeCards