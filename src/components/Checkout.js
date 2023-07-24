import React from 'react'
import '../components-css/Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'


const Checkout = () => {
  const[{Cart,user}]=useStateValue();
  return (
    <>
    <div className='checkout'>
      <div className='checkout_left'>
      
        <div className='title'>
          <h3>Hello!! {user?.email}</h3>
          <h2 className='checkout_title'>
            Your basket
          </h2>
          {Cart.map(item=>{
            
            return <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}            
            />
          })}
          


        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
    </>
  )
}

export default Checkout