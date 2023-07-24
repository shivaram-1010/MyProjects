import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './FireBase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './components/Orders';
import Ordered_items from './components/Ordered_items';

function App() {
  const[{},dispatch]=useStateValue();
  const promise=loadStripe('pk_test_51NU1LTSCyHoY8vHXVfpJk8zTftPBthQNz1lOkMdivtM34lNV7u6DrhuNiUjx4xCGTfSer0QkktWOM6QoKOkC3nUV00AuHxvyOZ');


  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('the user is >>>',authUser);

        if(authUser)
        {
            dispatch({
              type:'SET_USER',
              user:authUser
            })
        }
        else{
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  },[])

  return (
    <Router>
      
    <div className="app">
      <Routes>
        <Route path='/' element={<><Header/><Home/></>}/>
        <Route path='/orders' element={<><Header/><Orders/></>}/>
        <Route path='/Ordered_items' element={<Ordered_items/>}/>
        <Route path='/checkout' element={<><Header/><Checkout/></>}/>
        <Route path='/payment' element={<><Header/><Elements stripe={promise}>
        <Payment/></Elements></>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
    
    </Router>
  );
}

export default App;
