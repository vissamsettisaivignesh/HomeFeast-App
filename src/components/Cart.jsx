import React from "react";
import { useState,useEffect } from "react";

import  "./Cart.css"
import cfr from "../images/sp-cfr.png";
import GingerTea from "../images/GingerTea.png";
import gidli from "../images/g-idli.png";
import ccicken from "../images/c-c.png";
import Desserts from "../images/Desserts.png";
import Veg from "../images/Veg.png";
import NonVeg from "../images/Non-Veg.png";
import Sweets from "../images/Sweets.png";
import Fruits from "../images/Fruits.png";


const mockCartItems = [
    
    { id: 101, name: "Special Chicken Rice", price: 125, type: "Non-Veg", imglink: cfr },
    { id: 102, name: "Ginger Tea", price: 30, type: "Beverage", imglink: GingerTea },
    { id: 103, name: "Ghee Idli (3pcs)", price: 55, type: "Veg", imglink: gidli },
    { id: 104, name: "Crispy Chicken Wings", price: 199, type: "Non-Veg", imglink: ccicken },
    { id: 105, name: "Chocolate Brownie", price: 85, type: "Dessert", imglink: Desserts },
    { id: 106, name: "Chef's Salad Bowl", price: 150, type: "Veg", imglink: Veg },
    { id: 107, name: "Mutton Biryani", price: 240, type: "Non-Veg", imglink: NonVeg },
    { id: 108, name: "Gulab Jamun (2pcs)", price: 60, type: "Sweets", imglink: Sweets },
    { id: 109, name: "Fresh Fruit Platter", price: 110, type: "Fruits", imglink: Fruits },
];


export function Counter(){
    
    const[quantity,setQuantity]=useState(1);

    function Addclick(){
        setQuantity(quantity+1);
    }

    function Removeclick(){
        setQuantity(quantity>1  ? quantity-1:1);
    }

    return(
        <>
            <div id="item-counter-box">
                
                    <button onClick={Removeclick}>-</button>
                    
                    <p> {quantity}  </p>
                    <button onClick={Addclick}>+</button>
                
            </div>
        </>
    )
}

export function Bill(){
    return(
        <>
        <div id="bill-card">
            <h2>Order Summary</h2>
            <p>Subtotal: </p>
            <p>Tax: </p>
            <h3>Total: </h3>
            <button id="checkout-button">Proceed to Checkout</button>
        </div>
        </>
    )
}


export function FD({item}){
    return(
        <>
            <div className="cart-item-container">

                <div className="item-image">
                    <img src={item.imglink} alt={item.name} id="cartproductimg"></img> 
                </div>

                <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">Price: Rs {item.price}/-</p>
                    <p className="item-type">Type: {item.type}</p>
                    {/* <p>Quantity : 1</p> */}
                    
                </div>
                <div id="item-controls"> <Counter/> </div>
            </div>
        
        </>
    )
}

function Cart(){
    

    return(
        <>
        <h1 id="carth1">Your Choice is here 🛒</h1>
        <div id="cart-full-layout">
            
            <div id="cart-items-list">
               
                    {
                        mockCartItems.map((item)=>(
                            <FD key={item.id} item={item} />
                            
                        ))
                       
                    }
                
                

            </div>
               <div id="cart-bill-summary"> <Bill/></div>
            </div>
        </>
    )
}

export default Cart