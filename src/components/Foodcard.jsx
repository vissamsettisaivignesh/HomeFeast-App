import React from "react";
import   "./Foodcard.css"


function Foodcard({pic,name,price,type,discount}){
    return(
        <>
            <div id="fc-container">
                <img id="productpic"
                src={pic} alt="Image"/>
                <div id="fc-details">
                    <h3>{name}</h3>
                    <p>Price : {price}</p>
                    <p>Type : {type}</p>
                    <p>Discount :{discount}</p>
                    <a id="cartbtn" href="">Add to Cart</a>
                </div>
            </div>
        
        </>
    )
}

export default Foodcard