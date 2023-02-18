import React  from "react";



export default function CustomInput({placeholder,type,onChange}){
    return (
        <>
    <input placeholder={placeholder} type={type} onChange={onChange}/>
        
        
        </>
    )
}