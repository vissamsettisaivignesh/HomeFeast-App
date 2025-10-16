import React from "react";
import  "./ItemTypes.css"
import Foodcard from "./Foodcard";
import Search from "./Search";

import Roti from "../images/Roti.png";
import PaneerBiryani from "../images/PaneerBiryani.png";
import VegSoupBowl from "../images/VegSoupBowl.png";
import GrainBowl from "../images/GrainBowl.png";
import MushroomCurry from "../images/MushroomCurry.png";
import AlooFry from "../images/AlooFry.png";
import MuddhaPappu from "../images/MuddhaPappu.png";

const VegList = [
  { name: "Mushroom Curry", type: "Veg", discount: "35%", price: "225/-", pic: MushroomCurry},
  { name: "Aloo Fry", type: "Veg", discount: "10%", price: "129/-", pic: AlooFry },
  { name: "Muddha Pappu(Mango Pickle)", type: "Veg", discount: "25%", price: "149/-", pic: MuddhaPappu },
  { name: "Paneer Biryani", type: "Veg", discount: "-", price: "249/-", pic: PaneerBiryani },
  { name: "Roti(3pcs)", type: "Veg", discount: "-", price: "59/-", pic: Roti },
  { name: "Grain Bowl", type: "Veg", discount: "15%", price: "149/-", pic: GrainBowl },
  { name: "Vegetable Soup Bowl", type: "Veg", discount: "20%", price: "129/-", pic: VegSoupBowl },
  ];



const SweetsList = [
  { name: "Mushroom Curry", type: "Veg", discount: "35%", price: "225/-", pic: MushroomCurry},
  { name: "Aloo Fry", type: "Veg", discount: "10%", price: "129/-", pic: AlooFry },
  { name: "Muddha Pappu(Mango Pickle)", type: "Veg", discount: "25%", price: "149/-", pic: MuddhaPappu },
  { name: "Paneer Biryani", type: "Veg", discount: "-", price: "249/-", pic: PaneerBiryani },
  { name: "Roti(3pcs)", type: "Veg", discount: "-", price: "59/-", pic: Roti },
  { name: "Grain Bowl", type: "Veg", discount: "15%", price: "149/-", pic: GrainBowl },
  { name: "Vegetable Soup Bowl", type: "Veg", discount: "20%", price: "129/-", pic: VegSoupBowl },
  ];

const NonVegList = [
  { name: "Mushroom Curry", type: "Veg", discount: "35%", price: "225/-", pic: MushroomCurry},
  { name: "Aloo Fry", type: "Veg", discount: "10%", price: "129/-", pic: AlooFry },
  { name: "Muddha Pappu(Mango Pickle)", type: "Veg", discount: "25%", price: "149/-", pic: MuddhaPappu },
  { name: "Paneer Biryani", type: "Veg", discount: "-", price: "249/-", pic: PaneerBiryani },
  { name: "Roti(3pcs)", type: "Veg", discount: "-", price: "59/-", pic: Roti },
  { name: "Grain Bowl", type: "Veg", discount: "15%", price: "149/-", pic: GrainBowl },
  { name: "Vegetable Soup Bowl", type: "Veg", discount: "20%", price: "129/-", pic: VegSoupBowl },
  ];

const TiffinsList = [
  { name: "Mushroom Curry", type: "Veg", discount: "35%", price: "225/-", pic: MushroomCurry},
  { name: "Aloo Fry", type: "Veg", discount: "10%", price: "129/-", pic: AlooFry },
  { name: "Muddha Pappu(Mango Pickle)", type: "Veg", discount: "25%", price: "149/-", pic: MuddhaPappu },
  { name: "Paneer Biryani", type: "Veg", discount: "-", price: "249/-", pic: PaneerBiryani },
  { name: "Roti(3pcs)", type: "Veg", discount: "-", price: "59/-", pic: Roti },
  { name: "Grain Bowl", type: "Veg", discount: "15%", price: "149/-", pic: GrainBowl },
  { name: "Vegetable Soup Bowl", type: "Veg", discount: "20%", price: "129/-", pic: VegSoupBowl },
  ];
function VegItems(){
    return(
        <>
        <div>
            
            <div id="veg-container">
                <Search/>
                <div className="items">
                    {VegList.map((item, index) => (
                        <Foodcard
                        key={index}
                        name={item.name}
                        type={item.type}
                        discount={item.discount}
                        price={item.price}
                        pic={item.pic}/>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}


export function NonVegItems(){
    return(
        <>
        <div>
            <Search/>
            <div className="veg-container">
                
                <div className="items">
                    {NonVegList.map((item, index) => (
                        <Foodcard
                        key={index}
                        name={item.name}
                        type={item.type}
                        discount={item.discount}
                        price={item.price}
                        pic={item.pic}/>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export function Sweets(){
    return(
        <>
        <div>
            <Search/>
            <div className="veg-container">
                
                <div className="items">
                    {SweetsList.map((item, index) => (
                        <Foodcard
                        key={index}
                        name={item.name}
                        type={item.type}
                        discount={item.discount}
                        price={item.price}
                        pic={item.pic}/>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export function Tiffins(){
    return(
        <>
            <div id="veg-container">
                <Search/>
                <div className="items">
                    {TiffinsList.map((item, index) => (
                        <Foodcard
                        key={index}
                        name={item.name}
                        type={item.type}
                        discount={item.discount}
                        price={item.price}
                        pic={item.pic}/>
                    ))}
                </div>
            </div>
            
        </>
    )
}




export default VegItems