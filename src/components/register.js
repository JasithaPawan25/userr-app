import React from "react";

function Register(){
    return(
        <div>
            
            <div className="container">
            <h1 style={{marginTop:"25px"}}>Welcome to TellBell.Register Here</h1>
   
<div class="card" style={{width: "50%",marginTop:"10%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Register</h5>
    </div>

    <div class="mb-4">
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
    </div>

    <div class="mb-4">
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
    </div>

    <div class="mb-4">
    <button  class="btn btn-primary">Register</button> 
    <button style={{float:"right",borderRadius:"25rem"}} class="btn btn-secondary">Login</button>
    </div>
  </div>
</div>



</div>


        </div>
    )
}
export default Register;