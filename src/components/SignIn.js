import React, {useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  const inputRef = useRef()

  function clearData(){
    setEmail('')
    setPassword('')
  }

  async function checkData(e){ 
      e.preventDefault()
      const res = await axios.patch('http://localhost:3000/user',{email,password})   
      if(res.status===200){
        alert("You are successfully logged in")
        navigate('/Detail',{state:res.data})
      }else{
        alert("Incorrect email or password. Sign in again")
        clearData()
        inputRef.current.focus()
      }
  }
  useEffect(()=>{
     inputRef.current.focus()
  },[])

  return (
    <>
     <div className='maincontainer'>  
        <div className='formdiv'>
          <h3><u>SIGN IN</u></h3>
          <Form onSubmit={checkData}>
            <Form.Group >
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control className='input' style={{ "borderBottom": "2px solid blue", "margin-bottom":"20px" }} ref={inputRef} value={email} type="text" required placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group >
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control className='input' style={{ "borderBottom": "2px solid blue", "margin-bottom":"20px"  }} value={password} type="text" required placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <input className='signinbtn' type="Submit" value="SUBMIT"/>
            <button className='signinbtn' onClick={()=>navigate('/')}>BACK</button>
          </Form>  
        </div>
        </div>
    </>
  )
}

export default SignIn