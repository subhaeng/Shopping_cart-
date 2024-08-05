import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import './App.css'

const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [show, setShoW] = useState(true);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id)
        isPresent = true;
    })
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false)
      }, 2000);
      return
    }
    setCart([...cart, item])
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShoW} />
      {
        show ? <Shop handleClick={handleClick} /> :
          <Cart cart={cart} setCart={setCart} />
      }

      
{warning && <div className='warning'>
        Item is already present in your cart!!!

      </div>}


    </div>
  )
}

export default App
