import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import cartlogo from "../images/shopping-cart.png";

function Header() {
  const navigate = useNavigate();
  const[scrolled,setScrolled]=useState(0);

  useEffect(()=>{
    const handleScroll=()=>setScrolled(window.scrollY>10);
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll);
  },[]);

  function cartclick(){
    navigate("/cart")
  }
  return (
    <>
      <div id="outer" className={scrolled ? 'scrolled' : ''}>
        <div id="inner">
          <h1 id="tit"><Link to="/">HomeFeast</Link></h1>
        </div>

        <div id="nav-bar">
          <ul>
            
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/profile">PROFILE</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/orders">ORDERS</Link></li>
            
            
          </ul>

          
        </div>

        <div id="cart">
          <a onClick={cartclick}><img id="cartimg" src={cartlogo} alt="CART" /></a>
        </div>
      </div>

    </>
  );
}



export default Header;
