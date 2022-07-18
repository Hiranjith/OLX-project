import React, {useContext} from 'react';
import { AuthContext, FirebaseContext } from '../../storage/firabaseContext';
import { useHistory } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
function Header() {

const {user} = useContext(AuthContext);
const {firebase} = useContext(FirebaseContext)
const history = useHistory();

const handleLogout = ()=>{

  firebase.auth().signOut().then(()=>history.push('/'))
  .then(()=>{
    alert('Logged out successfully')
  })
}
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div   className="loginPage">
         { user ? <span >{user.displayName}</span> : <button onClick={()=>history.push('/login')}>Login</button> }
          <hr />
        </div>

        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>history.push('/create')} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
