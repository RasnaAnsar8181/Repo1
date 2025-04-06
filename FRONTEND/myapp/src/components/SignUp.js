import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const inputRef = useRef()
    const navigate = useNavigate()
    const [items,setItems] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })

  async function saveData(){
     await axios.post('http://localhost:3000/user',{fname:items.fname,lname:items.lname,email:items.email,password:items.password})
     alert('Data successfully saved')
     navigate('/')
  }
  function dataChange(e){
    const name = e.target.name
    const value = e.target.value
    setItems({...items,[name]:value})
  }
  useEffect(()=>{
       inputRef.current.focus()
  },[])
  return (
    <>
        <div>
        <div className='maincontainer'>
                {/* <div className='imgdiv'>                        
                    <Form.Group>
                        <Image src={image} className='imgpro' alt='no'/>
                        <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="file" onChange={(e)=>setImage(URL.createObjectURL(e.target.file))}></Form.Control>
                    </Form.Group>
                </div> */}
                <div className='content'>
                <h3><u>SIGN UP</u></h3>
                <br/>
                <br/>
                    <div className='formdiv'>
                        <Form.Group >
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} ref={inputRef} required type="text" name='fname' value={items.fname} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="text" name='lname' value={items.lname} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Email ID</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="email" name='email' value={items.email} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "margin-bottom": "20px" }} required type="password" name='password' value={items.password} onChange={dataChange}/>
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