import React, { useEffect, useRef, useState } from 'react'
import { Form, Image } from 'react-bootstrap'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [image,setImage] = useState('./machine.webp')
  const inputRef = useRef()
  const navigate = useNavigate()

  async function saveData(){
     clearData()
     await axios.post('http://localhost:3000/user',{fname:fname,lname:lname,email:email,password:password})
     alert('Data successfully saved')
     navigate('/')
  }
  function clearData(){  
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
  }
  useEffect(()=>{
       inputRef.current.focus()
  },[])
  return (
    <>
        <div>
        <div className='maincontainer'>
                <div className='imgdiv'>                        
                    <Form.Group>
                        <Image src={image} className='imgpro' alt='no'/>
                        <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="file" onChange={(e)=>setImage(URL.createObjectURL(e.target.file))}></Form.Control>
                    </Form.Group>
                </div>
                <div className='content'>
                <h3><u>SIGN UP</u></h3>
                <br/>
                <br/>
                    <div className='formdiv'>
                        <Form.Group >
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} ref={inputRef} required type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Email ID</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <button className='signinbtn' onClick={saveData}>SAVE</button>
                        <button className='signinbtn' onClick={()=>navigate('/')}>BACK</button>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default SignUp