import axios from "axios";
import React, { useState } from "react";

function AddIssue(props){

  const[ Issuename,setIssuename] =useState('');
  const[ Telephone,setTelephone] =useState('');
  const[ Email,setEmail] =useState('');
  const[ Detail,setDetail] =useState('');
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);


  const publicuserToken= localStorage.getItem('publicjwt')



  console.log("publicuserToken", publicuserToken)

  const token = publicuserToken;

  axios.interceptors.request.use(
    config  => {
        config.headers.authorization =`Bearer ${token}`;
        console.log(config)
        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)




  const handlePostIssue = ()=>{

    axios.post("http://localhost:5000/addissue",{
    issuename:Issuename,
    telephone:Telephone,
    email:Email,
    detail:Detail

    }
    ).then(respose=>{
      console.log(respose)
      localStorage.setItem('issueNo',respose.data.IssueNo)

    //  localStorage.setItem('publicjwt',response.data.token)

    //   const publicIssueNo= localStorage.getItem('issueNo')
   
   
   
    //  console.log("publicIssueNo", publicIssueNo)

      alert("Your Issue is submitted!")

    }).catch(error=>{
      console.log(error)
    })

  }

  




  const handleLogout  = ()=>{
    props.history.push('/');
  }


    return(
        <div>

            <div className="container">
            {/* <h1 style={{marginTop:"25px"}}>Add issue details:</h1> */}
   
<div class="card" style={{width: "50%",marginTop:"5%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Add issue details:</h5>
    </div>

    <div class="mb-4">
    <input type="text" class="form-control" 
      value={Issuename}
      onChange={e=>setIssuename(e.target.value)}
    id="exampleFormControlInput1" placeholder="Name" />
    </div>

    <div class="mb-4">
    <input type="number" class="form-control" 
     value={Telephone}
     onChange={e=>setTelephone(e.target.value)}
    id="exampleFormControlInput1" placeholder="Telephone" />
    </div>

    <div class="mb-4">
    <input type="email" class="form-control"
     value={Email}
     onChange={e=>setEmail(e.target.value)}
    id="exampleFormControlInput1" placeholder="Email" />
    </div>

    <div class="mb-4">
    <textarea type="textarea"  rows="3" 
     value={Detail}
     onChange={e=>setDetail(e.target.value)}
    class="form-control" id="exampleFormControlInput1" placeholder="Issue Detail" />
    </div>

    <div class="mb-4">
    {/* <button  class="btn btn-primary">Send Issue</button> handlePostIssue */}
    <input
    type="button"
    value="Send Issue"
    onClick={handlePostIssue}  class="btn btn-primary"  style={{ position:"absolute",
      bottom:" 5%",
      right:"20%"}} />
    

    </div>
  </div>
</div>



</div>

<input
    type="button"
    value="Logout"
    onClick={handleLogout}  class="btn btn-dark"  style={{ position:"absolute",
      bottom:" 5%",
      right:"20%"}} />


        </div>
    )
}
export default AddIssue;