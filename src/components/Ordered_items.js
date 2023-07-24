import React from 'react'
import '../components-css/Ordered_items.css'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import Currencyformat from "react-currency-format";

const Ordered_items = ({order}) => {
  return (
    <div className='ordered_items'>
        <h2>
           Orders 
        </h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
        <p className='order_id'>
            <small>{order.id}</small>
        </p>
        {order.data.Cart?.map(item=>{
            return <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating} 
            hideButton           
          />
        })}
            <Currencyformat
            renderText={(value)=> (
                <>
                    <p>
                        <h3 className='order_total'>Order total:{value}</h3>      
                    </p>  
                    
                </>
                
  )}
            value={order.data.amount}
            thousandSeparator={true}
            displayType={'text'}
            prefix={'₹ '}
            />
        
  </div>
  )
}

export default Ordered_items