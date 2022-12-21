import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


export default function Signin() {

  
  const history=useHistory()

  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const PostData = ()=>{
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     return M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"})
    }
    fetch("/signin" , {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({

        password,
        email
      })
    }).then(res=>res.json())
    .then(data=>{
           console.log(data)
           if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            //dispatch({type:"USER",payload:data.user})
            M.toast({html:"signed in successfully",classes:"#689f38 light-green darken-2"})
            history.push('/home')
           }
    })
    .catch(err=>{
      console.log(err)
    })
  
  }

      
   

  return (
    <div className="mycard">
    <div className="card auth-card">
      <h2>Real Estate</h2>

      <input type="text" placeholder="User ID"
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}
      
       />

      <input type="password" placeholder="Password"
      value={password} 
      onChange={(e)=>setPassword(e.target.value)}
       />


      <button
        className="btn waves-effect waves-light"
         onClick={()=>{PostData()}}>
        
        Sign In
      </button>
      <h5>
    <Link to='/signup'><span className='dont'>Don't have  an account?</span> Sign Up</Link>
      </h5>
    </div>
  </div>
  )
}
