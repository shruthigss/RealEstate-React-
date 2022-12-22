import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
//import axios from 'axios'

export default function Signup() {

    const history=useHistory()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")
    
     
    const PostData=async()=>{
         await fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password,
            })
        }).then(res=>res.json())
        .then(data=>{
              if(data.error){
                M.toast({html:data.error})
              }else{
                M.toast({html:data.message})
                history.push('/')
              }
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className="mycard">
    <div className="card auth-card">
      <img  src="https://graphicsfamily.com/wp-content/uploads/edd/2021/01/Free-Real-Estate-Logo-Template-PNG-Transparent-scaled.jpg" alt=""/>
      <input type="text" placeholder="Mail ID" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       />

      <input type="password" placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       />

      <input type="password" placeholder="Confirm Password"
      value={confirmpassword}
      onChange={(e)=>setConfirmpassword(e.target.value)}
       />
     { password===confirmpassword&&
      <button
        className="btn waves-effect waves-light" 
         onClick={()=>PostData()}
         >
            Sign Up
      </button>
     }
      <h5>
        <Link to='/'><span className='dont'>Already have an account?</span>Sign In</Link>
      </h5>
    </div>
  </div>
  )
}
