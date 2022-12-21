import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Addproperty() {
    const history=useHistory()
    return (
    <div>
    <button style={{marginTop:"20px",marginLeft:"1250px"}}
    className="btn waves-effect waves-light red"
    onClick={()=>{
      localStorage.clear()
    
      history.push('/')
    }} >
    
    Logout
  </button>
         <div className="container">
           <header>Add New Property</header>
           <div className="form-outer">

             <form action="#">
               <div className="page">
                <div className="title">Basic Info:</div>
                  <div className="field">
                     <div className="label">First Name</div>
                       <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">Last Name</div>
                       <input type="text"/>
                  </div>
                  <div className="field">
                     <button>Next</button>
                  </div>
                </div>

               <div className="page">
                <div className="title">Contact Info</div>
                  <div className="field">
                     <div className="label">Email Address</div>
                       <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">Phone Number</div>
                       <input type="text"/>
                  </div>
                  <div className="field btns">
                     <button className="prev-1 prev">Back</button>
                     <button className="next-1 next">Next</button>
                  </div>
                </div>

               <div className="page">
                <div className="title">Date of Birth:</div>
                  <div className="field">
                     <div className="label">Date</div>
                       <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">Gender</div>
                       <select>
                         <option>Male</option>
                         <option>Female</option>
                         <option>Other</option>
                       </select>
                  </div>
                  <div className="field btns">
                     <button className="prev-2 prev">Back</button>
                     <button className="next-2 next">Next</button>
                  </div>
                </div>

               <div className="page">
                <div className="title">Login Details</div>
                  <div className="field">
                     <div className="label">Username</div>
                       <input type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">password</div>
                  </div>
                  <div className="field btns">
                     <button className="prev-2 prev">Back</button>
                     <button class="next-2 next">Submit</button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        <div>
    <button style={{marginTop:"100px"}}
    className="btn waves-effect waves-light blue"
    onClick={()=>{
      localStorage.clear()
    
      
    }} >
    
     Save & Continue
  </button>
  </div>

    </div>
  )
}
