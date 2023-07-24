import React, { useEffect, useState } from 'react'
import '../components-css/Orders.css'
import { db } from '../FireBase';
import Ordered_items from './Ordered_items';
import { useStateValue } from '../StateProvider';


const Orders = () => {
    const[{user}]=useStateValue();
    const[orders,setOrders]=useState([]);

    useEffect(()=>
    {
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>{
            setOrders(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()            
                })))
            })
        }
        else{
            setOrders([]);
        }
       
    },[user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className='order_container'>
            {orders?.map(order=>(
                <Ordered_items order={order}/>
            ))}
        </div>

    </div>
  )
}

export default Orders
