import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom'

function Search({coffee, setQuery}) {
  return (
    <div className='search-results-item'>
      <img src={coffee?.imgUrl} alt='coffee-img'/>
      <Link className='link' to={`/coffeedetails/${coffee?.id}`}><p>{coffee?.name}  ${coffee?.price}</p></Link>
      <button onClick={() => {setQuery('')}} className="results-btn"><Link to={`/coffeedetails/${coffee?.id}`}>BUY</Link></button>
    </div>
  )
}

export default Search