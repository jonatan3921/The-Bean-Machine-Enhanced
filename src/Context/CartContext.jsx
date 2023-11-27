import {useState, createContext, useEffect} from 'react'


export const CartContext = createContext()

export default function CartContextProvider(props) {
    // Create Global state here
    const [cartItems, setCartItems] = useState([])

    useEffect(
        () => {
            // Is there a value in localStorage?
            const storedProducts = localStorage.getItem('cartList')
            // Only use if there was a value
            if(storedProducts) {
                // Use this to initalize
                setCartItems(JSON.parse(storedProducts))
            }
        }, []
    )

    useEffect(
        () => {
            // Save new value to localStorage
            localStorage.setItem('cartList', JSON.stringify(cartItems))
        }, [cartItems] //Runs anytime cartItems changes
    )

    const addItem = (itemToAdd) => {
        // Add itemToAdd to the Cart
        let newCart = [...cartItems, itemToAdd]
        setCartItems(newCart)
    }

    const removeItem = (productId) => {
        // Remove productId
        // Keep all the ones that are NOT productId
        let newCart = cartItems.filter(item => item.id != productId)
        // Replace state
        setCartItems(newCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addItem, removeItem, setCartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}