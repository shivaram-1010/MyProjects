import React from 'react' 
import '../components-css/Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
// import { Rating } from '@mui/material';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';


const Product = (props) => {
  const[{Cart},dispatch]=useStateValue();
  console.log('this is cart',Cart)
  
  const AddToCart=()=>
  {
      dispatch({
        type:"Add_to_cart",
        item:{
          id:props.id,
          title:props.title,
          image:props.image,
          price:props.price,
          rating:props.rating
        },
      });
  }
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{props.title}</p>
            <p className='product_price'>
                <small>&#8377;</small>
                <strong>{props.price}</strong>
            </p>
            <div className='product_rating'>
              {Array(props.rating).fill().map((_,i)=>{
                return <p className='star'><StarIcon/></p>
              })}
               
               
                
              
            </div>
        </div>

        <img  alt="" src={props.image}/>
        <button className='btn' onClick={AddToCart} >Add to cart</button>
        <button className='btn'>Buy now</button>

    </div>
  ) 
}

export default Product