import React, { useState } from 'react'
import LoginRegisterParent from "./LoginRegisterParent"
import { useFireAuthContext } from '../context/fireAuthContext'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email , setEmail] = useState("") 
    const [password , setPassword] = useState("") 
    const navigate =useNavigate()
    const fireAuthContext = useFireAuthContext()

    
    const handleSubmit = async(e) =>{
        e.preventDefault()
try {
    await fireAuthContext.login(email , password)
message.success("login successfully")
navigate("/")

} catch (error) {
    message.error('error')
    console.error(error)
}
    }
  return (
    <>
      <LoginRegisterParent>
    <h1>Login</h1>
<form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
       
        <div className='text-center mb-3 '>

        <button type="submit" className='btn btn-primary formbtn font2rem mt-3' >Login</button>
        </div>
        </form>
</LoginRegisterParent>
    </>
  )
}

export default Login
