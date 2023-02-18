import React  from "react";



export default function Button({Text,onClick}){
    return (
        <>
        <button onClick={onClick}>{Text}</button>
        
        
        </>
    )
}