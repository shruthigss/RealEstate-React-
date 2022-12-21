import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home() {

    const history=useHistory()
  return (
    <div >
    <button style={{marginTop:"20px",marginLeft:"1250px"}}
    className="btn waves-effect waves-light red"
    onClick={()=>{
      localStorage.clear()
    
      history.push('/')
    }} >
    
    Logout
  </button>
  <div>
    <button style={{marginTop:"100px",marginLeft:"1250px"}}
    className="btn waves-effect waves-light blue"
    onClick={()=>{
      localStorage.clear()
    
      history.push('/addproperty')
    }} >
    
    Add New Property
  </button>
  </div>

         <div className='card home-card' style={{marginTop:"100px"}}>
             
            <h6><span style={{marginLeft:"20px"}}>PPD ID</span>
                <span style={{marginLeft:"100px"}}>Image</span>
                <span style={{marginLeft:"100px"}}>Property</span>
                <span style={{marginLeft:"100px"}}>Contact</span>
                <span style={{marginLeft:"100px"}}>Area</span>
                <span style={{marginLeft:"100px"}} >Views</span>
                <span style={{marginLeft:"100px"}}>Status</span>
                <span style={{marginLeft:"100px"}}>Days Left</span>
                <span style={{marginLeft:"100px"}}>Action</span>
            </h6>

         </div>
    </div>
  )
}
