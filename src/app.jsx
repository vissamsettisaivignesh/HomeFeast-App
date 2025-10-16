import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import  "./app.css"
import Search from "./components/Search";
import Quote from "./components/Quote";
import Banner from "./components/Banner";
import Mainarticle from "./components/MainArticle";
import Foodcard from "./components/Foodcard";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import VegItems from "./components/Itemtypes";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import cfr from "./images/sp-cfr.png";
import GingerTea from "./images/GingerTea.png";
import gidli from "./images/g-idli.png";
import ccicken from "./images/c-c.png";
import Contents from "./components/Contents";
import Desserts from "./images/Desserts.png";
import Veg from "./images/Veg.png";
import NonVeg from "./images/Non-Veg.png";
import Sweets from "./images/Sweets.png";
import Fruits from "./images/Fruits.png";
import Bobbatlu from  "./images/Bobbatlu.png";

import Dairy from "./images/Dairy.png";
import Starters from "./images/Starters.png";

import Tiffins from "./images/Tiffins.png";
import Healthy from "./images/Healthy.png";
import Others from "./images/Others.png";

import { Routes,Route,Link } from "react-router-dom";


//data
const foodList = [
 { id: 1, name: "Chicken Rice", type: "Non-Veg", discount: "35%", price: 125, pic: cfr }, // Changed price to number
 { id: 2, name: "Ghee Idli(2pcs)", type: "Tiffins", discount: "10%", price: 49, pic: gidli }, // Changed price to number
 { id: 3, name: "Chettinad Chicken", type: "Non-Veg", discount: "25%", price: 149, pic: ccicken }, // Changed price to number
 { id: 4, name: "Ginger Tea", type: "Cafe", discount: "-", price: 29, pic: GingerTea }, // Changed price to number
 { id: 5, name: "Bobbattlu(2pcs)", type: "Sweets", discount: "-", price: 59, pic: Bobbatlu }, // Changed price to number
 { id: 6, name: "Vanilla IceCream", type: "Desserts", discount: "15%", price: 75, pic: Desserts }, // Changed price to number
];

const contentsList = [
  { cpic: Veg, contentname: "Vegetarian" },
  { cpic: Sweets, contentname: "Sweets" },
  { cpic: NonVeg, contentname: "NonVeg" },
  { cpic: Tiffins, contentname: "Tiffins" },
  { cpic: Dairy, contentname: "Dairy" },
  { cpic: Starters, contentname: "Snacks" },
  { cpic: Fruits, contentname: "Fruits" },
  { cpic: Desserts, contentname: "Desserts" },
  { cpic: Healthy, contentname: "Healthy" },
  { cpic: Others, contentname: "Others" },
  ];

function MainContent() {
  return (
    <>
      <div id="app">
        
        <div id="banner">
          <div id="interface">
          <Quote/>
          <Search/>
          </div>
          <div id="ban-con"><Banner/></div>
        </div>
        
        <div id="content-tit"><p>What's on your mind?</p></div>
        <div id="cont-container">
          
          {contentsList.map((item, index) => (
            <Link key={index} to={item.contentname === "Vegetarian" ? "/VegItems" : "#"}>
            <Contents
            cpic={item.cpic}
            contentname={item.contentname}
              />
            </Link>
          ))}
        </div>

        <div id="fd-full">
                    <Mainarticle/>

          <p id="fd-up">Most Trending Food Items today</p>
        <div id="fd-carry">
          
          {foodList.map((item, index) => (
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
          <div>
            <Footer/>
          </div>
      </div>
    </>
  )
}

function App(){
  return(
    <>
      <div id="up"><Header /></div>

    <Routes>
      <Route path="/" element={<MainContent/>}></Route>
      <Route path="/profile" element={<Login/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/orders" element={<p>Orders Page</p>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/VegItems" element={<VegItems/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  )
}
export default App
