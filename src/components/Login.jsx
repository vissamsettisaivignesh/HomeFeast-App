import React from "react";
import { useState } from "react";
import  "./Login.css"
import { Link } from "react-router-dom";

function Login(){
    const[uname,setUname]=useState('')
    const[pass,setPass]=useState('')
    const[msg,setMsg]=useState('')
    console.log(uname,pass);

    

    const submitClick= (event)=>{
        event.preventDefault();
        if(uname =="Nani" && pass == "1234"){
            console.log("success");
            setMsg("Login Success !!");
        }
        else{
            setMsg("Invalid Credentials");
        }
    }

    const unameModify=(event)=>{
        setUname(event.target.value);
        console.log(event.target.value);
    }
    const passModify=(event)=>{
        setPass(event.target.value);
        console.log(event.target.value);
    }
    return(
        <>  
        <div id="login-outline">
            <div id="Login-container">
                <h1>LOGIN</h1>
                <form onSubmit={submitClick}>
                    {msg && <p style={{ color: msg.includes('Success') ? 'green' : 'red' }}>{msg}</p>}
                    <div id="login-box">
                    <div className="login-fields"><label className="lbl" htmlFor="unamelink">USERNAME</label>
                    <input className="inp"  type="text" id="unamelink" value={uname} onChange={unameModify} required/></div>
                    <div className="login-fields"><label className="lbl" htmlFor="passlink">PASSWORD</label>
                    <input className="inp"  id="passlink" type="password" onChange={passModify} value={pass} required/></div>
                    
                    <button type="submit">Login</button>
                    <p id="endline">No Account ?! <Link to= "/register">Register</Link></p>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default Login