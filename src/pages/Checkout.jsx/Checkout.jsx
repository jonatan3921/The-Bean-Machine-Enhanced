import React, {useState, useEffect, useContext} from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      borderRadius: '20px'
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
  };

//Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility)
Modal.setAppElement(document.getElementById('root'));

function Checkout() {
    // Call the global state from the context
    const {cartItems, removeItem, setCartItems} = useContext(CartContext)

    // State to control Modal
    const [isOpen, setIsOpen] = useState(false)
    // State for the total price
    const [totalPrice, setTotalPrice] = useState(0)

    const [currentValue, setCurrentValue] = useState(1)

    
    let total = 0;
    // Effect to Change the total price when the user changes the quantity 
    useEffect(() => {
      for (let i = 0; i < cartItems.length; i++) {
        total += (cartItems[i]?.price * cartItems[i]?.quantity);
        console.log(total)
      }
      setTotalPrice(total)
    }, [currentValue, cartItems])

    const handleSelect = (e, itemId) => {
      const currentItem = cartItems.find(item => item.id == itemId);
      currentItem.quantity = e;
      setCurrentValue(e)
    }


  return (
    <div className='checkout-page'>
        <div className='checkout-container'>
           {
            cartItems.length > 0
            ? cartItems.map(item => (
            <div className='item'>
                <img className='image' src={item?.imgUrl} alt={item?.name}/>
                <p className='title'>{item?.name}</p>
                <p className='price'>${item?.price}</p>

                <div className='quantity'>
                  <p>Qty: </p>
                  <select onChange={e => handleSelect(e.target.value, item?.id)}>
                    <option value="currentValue">{item?.quantity}</option>
                    {
                      item?.inStock &&
                      item?.inStock.map((item) => 
                          <option value={item}>{item}</option>
                      )
                    }
                  </select>
                </div>

                <button onClick={() => removeItem(item?.id)}>Remove</button>
            </div>))
            : <p className='no-items'>No Items added yet</p>
            }
            <div className='total-container'>
                <h3>Total</h3>
                <h3>${totalPrice}</h3>
            </div>
            <div className='checkout'>
                {
                  cartItems.length > 0
                  ? <button onClick={() => setIsOpen(true)}>Checkout</button>
                  : null
                }
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Contact Us Modal"
                    >
                        <div className='modal-container'>
                          <h3 className='modal-header'>The Bean Machine</h3>
                          <p className='modal-content'>Your order is almost complete.</p>
                          <p>Please, check if everything looks fine before submitting your order.</p>
                          <p>Your total is <span>${totalPrice}</span></p>
                          <div>
                              <button className='cancel-btn' onClick={() => setIsOpen(false)}>Cancel</button>

                              <Link to='/'><button className='checkout-btn' onClick={() => setCartItems([])}>Checkout</button></Link>
                          </div>
                        </div>
                    </Modal>
            </div>
        </div>
    </div>
  )
}

export default Checkout