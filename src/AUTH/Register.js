import React, { useState } from 'react'
import LoginRegisterParent from "./LoginRegisterParent"
import { useFireAuthContext } from '../context/fireAuthContext'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
    const [email , setEmail] = useState("") 
    const [password , setPassword] = useState("") 
    const navigate =useNavigate()
    const fireAuthContext = useFireAuthContext()

    const handleSubmit = async(e) =>{
        e.preventDefault()
try {
    await fireAuthContext.Register(email , password)
    await fireAuthContext.userProfile(name , phone)
message.success("account created")
navigate("/")
} catch (error) {
    message.error('error')
    console.error(error)
}
    }
  return (
    <>
<LoginRegisterParent>
    <h1>Signup</h1>
<form onSubmit={handleSubmit}>
<div className="mb-3">
          <input type="text" className="form-control" value={name} id="exampleInputEmail11" aria-describedby="emailHelp" placeholder='name' onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
       <div className="mb-3">
          <input type="text" className="form-control" value={phone} id="phone" placeholder='phone' onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className='text-center mb-3 '>

        <button type="submit" className='btn btn-primary formbtn font2rem mt-3' >Signup</button>
        </div>
        </form>
</LoginRegisterParent>
      
    </>
  )
}

export default Register
