import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import '../components-css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

const CheckoutProduct = (props) => {
  
  const[{Cart},dispatch]=useStateValue();
  const RemoveFromCart=()=>
  {
    dispatch({
      type:'Remove_from_cart',
      id:props.id
    })
    
  }
    
  return (
    
    <div className='checkoutproduct'>
        <img className='checkoutproduct_img' alt='' src={props.image}/> 

        <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>
                    {props.title}
                </p>
                <p className='checkoutproduct_price'>
                    <small>&#8377;</small> 
                    <strong>{props.price}</strong>

                </p>

            <div className='checkoutproduct_rating'>

            {Array(props.rating).fill().map((_,i)=>{
                return <p className='star'><StarIcon/></p>
              })}
             
                
            </div>
            {!props.hideButton && (<button className='btn' onClick={RemoveFromCart}>Remove</button>)}

            

        </div>

    </div>
    
  )
}

export default CheckoutProduct