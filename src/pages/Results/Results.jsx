import React, {useState, useEffect} from 'react'
import './Results.css'
import { useParams } from 'react-router-dom'
import coffe1 from '../../assets/coffe1.jpeg'
import coffe2 from '../../assets/coffe2.jpeg'
import coffe3 from '../../assets/coffe3.jpeg'
import arrow from '../../assets/arrow_right.png'
import { Link } from 'react-router-dom'


function Results() {
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

    const {coffee} = useParams()
    const [query, setQuery] = useState('')
    const [resultCoffee, setResultCoffee] = useState([])
    const results = [];
    const coffees = []
    
    for (let i = 0; i < coffeeBeansArray.length; i++) {
      if(coffeeBeansArray[i].from.toLowerCase() == coffee.toLowerCase()) {
          results.push(coffeeBeansArray[i]);
      }
    }

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
    <div className='results-page'>
        <h1>Results</h1>
        <div className='searching-container2'>
          <input name='search' type='text' placeholder='Search for a coffee bean' onChange={getUserQuery}/>
          <button className='arrow-results-btn'><Link to={`/results/${query.toLowerCase()}`}><img src={arrow} alt='submit'/></Link></button>
        </div>
        <div className='results-container'>
            {
                results.length != 0 
                ? 
                  results.map(item => 
                    <div className='coffee-card'>
                      <img src={item?.imgUrl} alt={item?.name}/>
                        <div className='coffee-label'>
                            <Link className='link' to={`/coffeedetails/${item?.id}`}><p>{item?.name}</p></Link>
                            <p>${item?.price}</p>
                        </div>
                        <div>
                            <p>Origin</p>
                        </div>
                        <button><Link to={`/coffeedetails/${item?.id}`}>BUY</Link></button>
                        <div className='availability'>
                            <p>Available</p>
                        </div>
                    </div>
                  )
                
                : <p className='no-results'>No Results</p>
            }
        </div>
    </div>
  )
}

export default Results