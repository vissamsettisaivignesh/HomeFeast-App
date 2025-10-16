import React from "react";
import aboutlogo from "../images/logo2.png";


function Mainarticle(){
    return(
        <>
        <div id="mainart">
            <img src={aboutlogo} alt="logo"/>
            <article id="matter">
                
                    <p>- HomeFeast is more than just a delivery service </p>
                    <p>- Comforting taste of home-cooked food</p>
                    <p>- Unparalleled variety of dishes, covering the full spectrum of homemade food traditions</p>
                    <p>- Made for every Family </p>
                
            </article>
        </div>
        
        </>
    )
}

export default Mainarticle