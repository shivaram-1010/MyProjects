import React from 'react'
import '../components-css/Header.css'
import AmazonLogo from '../components-img/Amazon-Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../FireBase';

const Header = () => {
  const [{Cart,user}]=useStateValue()
  const handleAuthentication=()=>
  {
    if(user)
    {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to={!user && '/login'}>
      <img className='header_logo' alt='' src={AmazonLogo}/>
      </Link>
        
        <div className='header_search'>
            <input type="teaxt" className="header_input" id="header_search" />
            <SearchIcon className='search_icon'/>
        </div>

        <div className='header_nav'>
          <Link to='/login'>
          <div className='header_options' onClick={handleAuthentication}>
              <span className='header-optionLone'>
                Hello {!user ? 'Guest':user.email}
              </span>

              <span className='header-optionLtwo'>
                {user ? 'Sign Out':'Sign In'}
              </span>
          </div>
          </Link>

        <Link to='/Orders'>
            <div className='header_options'>
              <span className='header-optionLone'>
                Returns
              </span>

              <span className='header-optionLtwo'>
                & Orders
              </span>
            
            </div>
        </Link> 

          <div className='header_options'>

              <span className='header-optionLone'>
                Your
              </span>

              <span className='header-optionLtwo'>
                Prime
              </span>
            
          </div>
          <Link to='/checkout'>
          <div className='header_basket'>
              <LocalMallIcon/>
              <span className='header-optionLtwo header_Count'>{Cart.length}</span>
          </div>
          
          </Link>
        

        </div>
     </div>
  )
}

export default Header