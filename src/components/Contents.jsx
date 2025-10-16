import React from "react";
import  "./Contents.css"


function Contents({cpic,contentname}){
    const imgstyle={
        borderRadius: "50%",
        width: "150px",
        height: "130px",
        boxShadow: "2px 4px 18px rgba(0,0,0,0.7)",
    };
    const pstyle={
        color:"black",
        margin:"10px 0",
        fontSize:"20px",
        
        
    };
    const cstyle={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "5px",
        cursor:"pointer"

    }
    return(
        <> 
            <div className="contents-item">
                <img src={cpic} alt={contentname} />
                <p>{contentname}</p>
            </div>
 
        </>
    )
}

export default Contents