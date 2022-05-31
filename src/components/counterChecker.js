import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CounterChecker(props) {

    const [username,setUsername] =useState('')

    
  const counter_person_Token= localStorage.getItem('jwt')



  console.log("counter_person_Token", counter_person_Token)

  const token =counter_person_Token;


    const handleTwo =()=>{
        
        if(username==3)
        {

        props.history.push('/cissuecounterthree')
        }
        else if(username==2)
        {

        props.history.push('/cissuecountertwo')
        }
        else if(username==1)
        {

        props.history.push('/cissuecounter')
        }
        else
        {alert("Please Type Correct Counter No.")}

        localStorage.setItem("CounterPersonId",username)

    }

    const handleLoginn =()=>
    {
      localStorage.removeItem('jwt')
      props.history.push('/clogin')
  
    } 

    if(token ==null)
  {
   // window.location.href = `/`;
    props.history.push('/clogin');
  }





    return(
       <div>
             <input type="button" 
            value={ "Logout"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLoginn} style={{marginLeft:"75%"}} />

<div className="container">
            <h1 style={{marginTop:"25px"}}>Select Your Counter</h1>
   
<div class="card" style={{width: "50%",marginTop:"10%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">People awiating for you... :)</h5>
    </div>

    <div class="mb-4">
    <input type="text"
               
               value={username}
      onChange={e=>setUsername(e.target.value)}
               //   onChange={e=>setcounterNum(e, "value")} 
                  placeholder="typecounter" />
    </div>

 
    <br/>
      <div className="error"  style={{marginTop:"-10px",color:"red"}} >
        </div>

    <div class="mb-4">
    {/* <button   class="btn btn-primary">Login</button>  <button  class="btn btn-primary">Register</button> */}
    <input type="button"  class="btn btn-primary" 
     value={"Go"} 
    // disabled={loading}
    onClick={handleTwo} 
    /> 
     {/* <input type="button"  class="btn btn-primary" value="Register" onClick={""}  /> */}
    </div>
  </div>
</div>



</div>
      
  </div>


    )

}
export default CounterChecker