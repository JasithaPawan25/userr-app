import React, { Component, useState } from "react";
//import 'bootstrap';
import axios from "axios";
import {setUserSession} from "../utiles/common"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CLogin(props){

  const [username,setUsername] =useState('');
  const[password,setPassword]=useState('');
  const [error,setError]=useState(null);
 const [loading,setLoading]=useState(false);





  const handleLogin =()=>
  {
    setError(null);
    setLoading(true);

    axios.post("http://localhost:5000/logincounter",
   {  cname:username,
    cpassword:password
    }
    ).then(response=>{
      setLoading(false);
    //  props.history.push('/issue')
   //  setUserSession(response.data.token);
     localStorage.setItem('jwt',response.data.token)

     const userToken= localStorage.getItem('jwt')



    console.log("userToken", userToken)

    // setUserSession
      //response.data.name
      props.history.push('/countercheker')
   //   console.log("response >>>",response);
    }).catch(error=>{
      setLoading(false)

      if(error.response.status === 401 || error.response.status === 400)
      {
        setError(error.response.data.message);
        setError("Unable to login !!! Please try again");
      }
      else{
        setError("Somethig went wrong !!! Please try again");
      }

     // console.error("error >>>",error)
    });

  //  props.history.push('/issue')
    
  }


    return(
        <div>
            

            <div className="container">
            <h1 style={{marginTop:"25px"}}>Welcome to TellBell Counter</h1>
   
<div class="card" style={{width: "50%",marginTop:"10%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Counter Login</h5>
    </div>

    <div class="mb-4">
    <input type="text" 
      value={username}
      onChange={e=>setUsername(e.target.value)}
      class="form-control" id="exampleFormControlInput1" placeholder="User Name" />
    </div>

    <div class="mb-4">
    <input type="password" 
     value={password}
     onChange={e=>setPassword(e.target.value)}
    
    class="form-control" id="exampleFormControlInput1" placeholder="Password" />
    </div>
    <br/>
    {error && <div className="error"  style={{marginTop:"-10px",color:"red"}} >{error}</div>}

    <div class="mb-4">
    {/* <button   class="btn btn-primary">Login</button>  <button  class="btn btn-primary">Register</button> */}
    <input type="button"  class="btn btn-primary" 
    value={loading ?"Loading...": "Login"} 
    disabled={loading}
    onClick={handleLogin}
    />  <input type="button"  class="btn btn-primary" value="Register" onClick={""}  />
    </div>
  </div>
</div>



</div>

        </div>
    )
}
export default CLogin;