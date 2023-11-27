import React, {useState, useEffect} from 'react'
import './Selection.css'
import coffe1 from '../../assets/coffe1.jpeg'
import coffe2 from '../../assets/coffe2.jpeg'
import coffe3 from '../../assets/coffe3.jpeg'
import { Link } from 'react-router-dom'

function Selection() {
    // Coffee Beans Array
    const coffeeBeansArray = [
        {
            id: 1,
            name: 'Costa Rica Single Origin',
            imgUrl: coffe1,
            price: 24
        },
        {
            id: 2,
            name: 'Brazil Medium Roast',
            imgUrl: coffe2,
            price: 35
        },
        {
            id: 3,
            name: 'Colombia Single Origin',
            imgUrl: coffe3,
            price: 40
        },
        {
            id: 4,
            name: 'Costa Rica Single Origin',
            imgUrl: coffe1,
            price: 24
        },
        {
            id: 5,
            name: 'Brazil Medium Roast',
            imgUrl: coffe2,
            price: 35
        },
        {
            id: 6,
            name: 'Colombia Single Origin',
            imgUrl: coffe3,
            price: 40
        },
        {
            id: 7,
            name: 'Costa Rica Single Origin',
            imgUrl: coffe1,
            price: 24
        },
        {
            id: 8,
            name: 'Brazil Medium Roast',
            imgUrl: coffe2,
            price: 35
        },
        {
            id: 9,
            name: 'Colombia Single Origin',
            imgUrl: coffe3,
            price: 40
        }
    ];

    // States in used

    // This state will contain the array of the coffee Options 
    const [coffeeOptions, setCoffeeOptions] = useState(coffeeBeansArray);
    // This state will contain the selected value of the user
    const [selectedOption, setSelectedOption] = useState('')

    
    // This function would take the current value of the select tag 
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    // This useEffect will sort the coffee options based on the selected Option tha the user choose
    useEffect(
        () => {
            if (selectedOption === 'low') {
                setCoffeeOptions(coffeeBeansArray.sort((a,b) => {return a.price - b.price}))

            } else if (selectedOption === 'high') {
                setCoffeeOptions(coffeeBeansArray.sort((a,b) => {return b.price - a.price}))
            } else {
                setCoffeeOptions(coffeeBeansArray)
            }
        }, [selectedOption]
    ) 

  return (
    <div className='selection-container'>
        <div className='selection-heading'>
            <h2>Selection</h2>
            <div className='sort-container'>
                <p>Sort</p>
                <select className='sort' onChange={handleSelectChange} >
                    <option value="price">Price</option>
                    <option value="low">Low-to-High</option>
                    <option value="high">High-to-Low</option>
                </select>
            </div>
        </div>
        {/* Coffee Cards */}
        <div className='coffee-cards-container'>
            {
                coffeeOptions &&
                coffeeOptions.map(item => 
                    <div className='coffee-card'>
                        <img src={item?.imgUrl} alt={item?.name}/>
                        <div className='coffee-label'>
                            <Link className='link' to={`/coffeedetails/${item?.id}`}><p>{item?.name}</p></Link>
                            <p>${item?.price}</p>
                        </div>
                        <div className='origin'>
                            <p>Origin</p>
                        </div>
                        <button><Link to={`/coffeedetails/${item?.id}`}>BUY</Link></button>
                        <div className='availability'>
                            <p>Available</p>
                        </div>
                    </div>
                ) 
            }
        </div>
    </div>
  )
}

export default Selection