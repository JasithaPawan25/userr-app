import axios from "axios";
import React, { useEffect, useState } from "react";

function CallissueCounter(props){

  const [posts,setposts] =useState([])
  const [requestError,setRequestError]= useState()

  const userToken= localStorage.getItem('jwt')



  console.log("userToken", userToken)

  const token = userToken;
  //const accessToken = token;

//  axios.interceptors.request.use((request)=>{
//     console.log(request)
//  })

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

  useEffect(()=>{
    axios.get("http://localhost:5000/alll",
    // {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer + ${token}'
    //     },      
    // }
   
    )
    .then(res=>{
    console.log(res)
   // console.log(JSON.stringify(res))
   // console.log(res.data.headers)
    setposts(res.data)
    // var length = setposts(res.data.length)
   // setcounts(res.data)
  }).catch(err=>{
    console.log(err)
    setRequestError(err)
  })

},[])


// axios.interceptors.request.use((request)=>{
//     console.log(request)
//     return request
//  })

// useEffect(()=>{
//   const datacounter = axios.get("http://localhost:5000/countonepeople")
//   .then(res=>{
//   console.log(datacounter)
//   //setcounts(res.datacounter)
// }).catch(err=>{
//   console.log(err)
// })

// },[])


    const handleLogin =()=>
  {
    props.history.push('/cissuecounter')

  }

  const handleIssue =()=>
  {
    props.history.push('/cissuecounter')

  }



    return(
        <div>
            <input type="button" 
            value={ "Issue"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin} style={{marginLeft:"75%"}} />
 <input type="button" 
            value={"Counter One"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin}  /> 

          
           

            

            <h1 style={{marginBottom:"5%",marginLeft:"-50%"}}> All Issues<br />
           </h1>

           
           {posts.map(post=>(
              //  <li key={post.id}>{post.IssueNo}{post.issuename}{post.telephone}</li>
              
            
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
             <h1>({post.IssueNo}){post.length} {post.issuename}</h1><h3>{post.telephone}</h3>


             { <a href={`http://localhost:3000/call/${post.id}`}>   
             <input type="button" 
            value={ "Issue Detail"} 
          //  disabled={}
          class="btn btn-primary"
          style={{marginLeft:"6%",marginTop:"5%"}} />

</a>}

            </div>
            </div>

            ))}


  
            {/* <button>Next</button>
            <input type="button" 
            value={ "Issssue"} 
          //  disabled={}
            onClick={handleLogin}/> */}


        </div>
    )
}
export default CallissueCounter;