import React from "react";

export default function Text({text1, text2, text3, span, subtext}){
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
            <div style={{fontWeight:"bold", fontSize:"1.6rem"}}>
                <p style={{margin:"0"}}>{text1}</p>
                <p style={{margin:"1vw 0"}}>{text2}<span style={{color:"var(--primary-color)"}}>{span}</span>{text3}</p>
            </div>
            <p style={{color:"#C9CBD2", fontSize:"0.9rem"}}>{subtext}</p>
        </div>
    )
}