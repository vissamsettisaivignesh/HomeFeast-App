import React from "react";
import  "./About.css"

function About(){
    return(
        <>
            <div id="about-out">
                <h1 id="abouttit">HomeFeast : The Authentic Taste of Home</h1>
                <div id="sidemain">
                    
                    <img id="aboutimg" src="logo2.png" alt="logo"/>
                    <article className="sideart">
                        At HomeFeast, our mission is simple: 
                        to bring the authentic, comforting 
                        taste of home-cooked food directly 
                        to your table. We understand that in
                         today's busy world, finding a meal
                        that tastes genuinely homemade can be a challenge.
                        We built OmeFeast to bridge that gap, 
                        prioritizing traditional recipes and the
                        genuine care that only a home kitchen provides.
                    </article>
                    
                </div>
                <div className="art">
                    <h2>Prepared by Our Kitchen Mothers</h2>
                    <article >
                        The heart of OmeFeast lies with our dedicated "kitchen mothers"—talented cooks who pour generations of culinary wisdom and affection into every dish. Unlike commercial kitchens focused on mass production, our process ensures that every order is prepared with the finest ingredients, exactly as it would be made for their own family. This dedication ensures the home authenticity shines through in every bite.
                    </article>
                    <h2>A Feast of Home Flavors</h2>
                    <article >
                        HomeFeast offers an unparalleled variety of dishes, covering the full spectrum of homemade food traditions:

Starters & Snacks: Explore traditional treats like authentic Pindi Vantalu and crispy appetizers.

Tiffins & Main Meals: From hearty breakfast Tiffins to complete Vegetarian and Non-Vegetarian curries and accompaniments.

Dairy Delights: We offer a fresh selection of homemade dairy items, including fresh buttermilk, thick curd items, and special dairy dishes.

Sweets & Desserts: Indulge in classic Sweets that evoke festive memories, alongside delicious modern Desserts.

Beverages: Quench your thirst with fresh Juices and traditional cooling drinks.

Every aspect of home cooking—from quick items to elaborate family feasts—is available for order through our service.
                    </article>

                    <h2>Our Promise of Authenticity</h2>
                    <article>
                        HomeFeast is more than just a delivery service; it’s a commitment to preserving the joy and health benefits of genuine home food. If it can be made with love in a home kitchen, you’ll find it here, delivered conveniently and ready to be enjoyed. We are here to ensure that the wholesome, authentic taste of home is never far away.
                    </article>
                </div>
            </div>
        
        </>
    )
}

export default About