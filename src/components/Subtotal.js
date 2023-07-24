import React from 'react'
import '../components-css/Subtotal.css'
import Currencyformat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import {CartTotal} from '../Reducer'
import { useNavigate } from 'react-router-dom'


const Subtotal = () => {
    const navigate=useNavigate()
    const[{Cart}]=useStateValue();
  return (
    <div className='subtotal'>
        
        <Currencyformat
            renderText={(value)=> (
                <>
                    <p>
                        Subtotal ({Cart.length}items):<strong>{value}</strong>    
                    </p>  
                    <small className='subtotal_gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </>
                
  )}
            value={CartTotal(Cart)}
            thousandSeparator={true}
            displayType={'text'}
            prefix={'₹ '}
            
        
        />
        <button onClick={e=>navigate('/payment')} className='btn'>Proceed to Checkout</button>
    </div>

  )
}

export default Subtotal