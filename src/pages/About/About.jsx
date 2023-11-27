import React from 'react'
import './About.css'
import banner from '../../assets/illustration.png'
import coffee from '../../assets/coffee_beans.png'
import coffee1 from '../../assets/coffe1.jpeg'
import coffee2 from '../../assets/coffe2.jpeg'
import coffee3 from '../../assets/coffe3.jpeg'

function About() {
  return (
    <div className='about-page-container'>
        <div className='banner-heading'>
            <h1>The Bean Machine</h1>
            <img src={banner} className='img-banner'/>
        </div>
        <section className='about-container'>
            <div className='quick-description'>
                <h2>About Us</h2>
                <p>We are a specialty Coffee Bean Shop based in Barcelona, Spain.</p>
                <p>We are passionate about the coffee bean quality so we source our beans from all over the world in order to give you the best out there!</p>
                <p>Visit our specailty coffee shop at <span className="address">La Rambla 204</span>, where we serve the best coffee in Barcelona.</p>
            </div>
            <img src={coffee}/>
        </section>
        <section className='coffee-beans-description'>
            <div className='description'>
                <img src={coffee1}/>
                <div>
                    <h2>Costa Rica Single Origin</h2>
                    <p>A silky, mild-bodied, balanced medium roast, this proudly fair trade, sustainably-grown, organic Arabica coffee with distinctive flavor is incomparable on every level. A century-old coffee farm grows coffee cherries that feature a complex blend of sweet cocoa, smooth caramel, and warm pumpkin pie spiced flavors.</p>
                </div>
            </div>
            <div className='Brazil-description'>
                <img src={coffee2}/>
                <div>
                    <h2>Brazil Medium Roast</h2>
                    <p>Enjoy the smooth and rich flavors of this medium roast, single origin coffee from Brazil. The natural process brings out the delicious notes of toasted walnut, toffee, and chocolate in every sip. Perfect for coffee connoisseurs, this Brazilian coffee is sure to satisfy.</p>
                </div>
            </div>
            <div className='description'>
                <img src={coffee3} className='Colombia-img'/>
                <div>
                    <h2>Colombia Single Origin</h2>
                    <p>This single origin is exactly the way it is described. Chocolatey, smooth, with an almost indescribable “special something” that makes the guests rave. Using my Aeropress to brew the Colombia makes a smooth, flavorful cup of coffee with just the right amount of sweetness.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About