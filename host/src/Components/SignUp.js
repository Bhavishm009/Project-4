import React from 'react'
import { useState } from 'react'
import Button from '../Atoms/Button'

import CustomInput from '../Atoms/Input'

const SignUp = () => {
    const [first, setfirst] = useState('')

    function handleAlert(){
        alert('Morning')
    }
  return (
    <>
    <div style={{backgroundColor:'lightgreen'}}>
    <h3>{first}</h3>
    <CustomInput value={first} placeholder='Name' onChange={(e)=>setfirst(e.target.value)}/>
    <Button onClick={handleAlert} Text='Submit'/>
    
    </div>
    </>
  )
}

export default SignUp