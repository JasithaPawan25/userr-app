import axios from "axios";
import React, { useEffect,useState } from "react";

function Ccall(props){

  const issueIDNo = props.match.params.iid;
  const [post,setpost] =useState({})

  useEffect(()=>{
    axios.get(`http://localhost:5000/one/${issueIDNo}`)
    .then(respose=>{
      console.log(respose)
      setpost(respose.data)
  }).catch(err=>{
    console.log(err)
    
  })

  },[issueIDNo])
//   .then(respose=>{
//     console.log(respose)
// }).catch(err=>{
//   console.log(err)
// })


const handleLogin =()=>
{
  props.history.push('/cissuecounter')

}

const handleCounterAll = ()=>{
  props.history.push('/callissue')
}

const handleDoneNext = ()=>{
  props.history.push('/callissue')
}

const handleDone = ()=>{
  props.history.push('/callissue')
}





    return(
        <div>
            <h1 style={{marginBottom:"5%"}}>Issue Detail</h1>
          
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"80%",height:"auto",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
             <h1>({post.IssueNo}) {post.issuename}</h1>
             <h3>{post.telephone}</h3>
             <h3>{post.email}</h3><br />
             <h2>{post.detail}</h2>
            </div>
            </div>

          
            <input type="button" 
            value={"Counter One"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin}  />

<input type="button" 
            value={"Counter All"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleCounterAll}  />

<input type="button" 
            value={"Done"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleDone}  />

<input type="button" 
            value={"Done and Next"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleDoneNext}  />

          

        </div>
    )
}
export default Ccall;