import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Currencyformat from "react-currency-format"
import {CartTotal} from '../Reducer'
import '../components-css/Payment.css'
import { Link, useNavigate } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../Axios'
import {db} from '../FireBase';
// import {doc,collection} from 'firebase/firestore'

const Payment = () => {

    const navigate=useNavigate();
    const stripe=useStripe();
    const elements=useElements();
    const[{user,Cart},dispatch]=useStateValue();
    const[error,seterror]=useState(null);
    const[disabled,setdisabled]=useState(null);
    const[processing,setprocessing]=useState();
    const[succeeded,setsucceeded]=useState(false);
    const[Clientsecret,setClientsecret]=useState(true)

    useEffect(()=>{
        const getclientSecret=async ()=>
        {
            const response=await axios(
                {
                    method:"post",
                    url:`/payments/create?total=${CartTotal(Cart)}`
                }
            );
            setClientsecret(response.data.Clientsecret)
        }
        getclientSecret();
    },[Cart])

    console.log("the secret is >>>",Clientsecret)

    const HandelSubmit=async (e)=>
    {
        e.preventDefault();
        setprocessing(true);

        const payload=await stripe.confirmCardPayment(Clientsecret,{
            payment_method:
            {
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>
        {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set(
                {
                    Cart:Cart,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                }
            )

            setsucceeded(true);
            seterror(null);
            setprocessing(false);

                dispatch({
                    type:'Empty_Cart'

                })

            navigate('/orders');
        })
        
    }

    const HandleChange=(event)=>
    {
        setdisabled(event.empty);
        seterror(event.error? event.error.message:"");
    }

   
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout
                (<Link className='a' to='/checkout'>{Cart?.length} items</Link>)
            </h1>
            
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                </div>
                
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment_item'>
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

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment method</h3>
                </div>
                <div className='payment_details'>
                        <form onSubmit={HandelSubmit}>
                            <CardElement onChange={HandleChange}/>

                            <div className='Total_payment'>
                            <Currencyformat
                                 renderText={(value)=> (
                        <>
                           <h3>Order Total{value}</h3>
                        </>
                
  )}
            value={CartTotal(Cart)}
            thousandSeparator={true}
            displayType={'text'}
            prefix={'₹ '}
            
        
        />
            <button className ='btn-btn' disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing!!!</p>:"Buy now"}
                </span>
            </button>
                            </div>
                            {error && <div>{error}</div>}
                     </form>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Payment