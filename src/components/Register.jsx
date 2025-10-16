import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//

function Register(){
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        cpassword: "",
        emailid: "",
        mobileno: "", 
        address: ""
    });
    const[regmsg,setRegmsg]=useState("");

    const { username, password, cpassword, mobileno, emailid, address } = formData; 

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value, 
        }));
    };

    const RegisterClick= (event)=>{
        event.preventDefault();
        
        const allFieldsValid = Object.values(formData).every(value => value.toString().trim() !== "");
        
        if(!allFieldsValid){
            setRegmsg("Fill all details please !");
            return;
        }

        if (password.trim() !== cpassword.trim()) {
             setRegmsg("Passwords do not match!");
             return;
        }
        
        setRegmsg("Registration Successful !! Redirecting to Login...");

    
        setTimeout(() => {
            navigate('/profile'); 
        }, 3000); 
    }

    return(
        <>
            <div id="reg-outline">
                <div id="reg-container">
                    <h1>REGISTER</h1>
                    <form onSubmit={RegisterClick}>
                    {regmsg && <p style={{ color: regmsg.includes('Successful') ? 'green' : 'red' }}>{regmsg}</p>}
                    <div id="reg-box">
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="usernamelink">USERNAME</label>
                        <input 
                            className="inp" 
                            type="text" 
                            id="usernamelink" 
                            name="username" 
                            
                            minLength="5" 
                            maxLength="15" 
                            value={username} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="passwordlink">PASSWORD</label>
                        <input 
                            className="inp" 
                            id="passwordlink" 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="cpasswordlink">CONFIRM PASSWORD</label>
                        <input 
                            className="inp" 
                            id="cpasswordlink" 
                            type="password" 
                            name="cpassword" 
                            value={cpassword} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="mobilelink">MOBILE NUMBER</label>
                        <input 
                            className="inp" 
                            id="mobilelink" 
                            type="tel" 
                            name="mobileno" 
                            maxLength="10" 
                            minLength="10" 
                            value={mobileno} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="mailidlink">E-MAIL </label>
                        <input 
                            className="inp" 
                            id="mailidlink" 
                            type="email" 
                            name="emailid" 
                            value={emailid} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <div className="reg-fields">
                        <label className="lbl" htmlFor="addresslink">CURRENT ADDRESS </label>
                        <textarea 
                            className="inp" 
                            id="addresslink" 
                            name="address" 
                            minLength="5" 
                            value={address} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    
                    <button type="submit">Register</button>
                    
                    </div>
                        <p id="bottomline">By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
