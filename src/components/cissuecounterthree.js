import axios from "axios";
import React, { useEffect, useState } from "react";
import  io  from "socket.io-client";

const socket =io.connect("http://localhost:5000");

function CissueCounterthree(props){

  //

  const [posts,setposts] =useState([])
  const [count,setcount] =useState({})


  const counter_person_Token= localStorage.getItem('jwt')



  console.log("counter_person_Token", counter_person_Token)

  const token = counter_person_Token;

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
    axios.get("http://localhost:5000/countthree")
    .then(res=>{
    console.log(res)
    setposts(res.data)
    // var length = setposts(res.data.length)
   // setcounts(res.data)
  }).catch(err=>{
    console.log(err)
  })

},[])



useEffect(()=>{
    axios.get("http://localhost:5000/countthreepeople")
   .then(res=>{
   console.log(res)
  setcount(res.data)
  localStorage.setItem('counterthreepeople',res.data)

//    const counteronepeople = localStorage.getItem('counteronepeople')
//    console.log("counteronepeople", counteronepeople)



   }).catch(err=>{
   console.log(err)
   })

   },[])


// useEffect(()=>{
//   const datacounter = axios.get("http://localhost:5000/countonepeople")
//   .then(res=>{
//   console.log(datacounter)
//   //setcounts(res.datacounter)
// }).catch(err=>{
//   console.log(err)
// })

// },[])


const sndMsg =(e)=>{
  // console.log(value)
   console.log(e.target.value);
  
   socket.emit("send_message",{ messageNo:`${(e.target.value)}`, message : `Hello!!! Customser you are next.Please waiting`})
 
 }
 
 const issueNoMsg =(e)=>{
 
  localStorage.setItem("counterNo",3)
   console.log(e.target.value);
   socket.emit("send_queueNo",{ issueNo:`${e.target.value}`,nextIssueNo:`${e.target.value}`})
 
 
 }

 const handleLoginn =()=>
 {
  localStorage.removeItem('jwt')
   props.history.push('/clogin')

 }

    const handleLogin =()=>
  {
    props.history.push('/callissue')

  }



  const handleOne =()=>
  {
    props.history.push('/cissuecounter')

  }

  const handleTwo =()=>
  {
    props.history.push('/cissuecountertwo')

  }

  const handleThree =()=>
  {
    props.history.push('/cissuecounterthree')

  }

  const counterthreepeople = localStorage.getItem('counterthreepeople')

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

<input type="button" 
            value={"Sloved Issues"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin}  /><br />

<input type="button" 
            value={"Issue Counter 001"} 
          //  disabled={} class="nav-link active"
          class="btn btn-primary"
            onClick={handleOne}  />

            <input type="button" 
            value={"Issue Counter 002"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleTwo}  />

            <input type="button" 
            value={"Issue Counter 003"} 
          //  disabled={}
          class="btn btn-primary active"
            onClick={handleThree}  />

          
           

            

<h1 style={{marginTop:"5%",marginBottom:"5%",marginLeft:"-50%"}}>Counter<br />
           #003</h1>
           <h1 style={{marginTop:"-13%",marginBottom:"5%",marginLeft:"50%"}} >PeopleWaiting:- {counterthreepeople}</h1>


           
           {posts.map(post=>(
              //  <li key={post.id}>{post.IssueNo}{post.issuename}{post.telephone}</li>
              
            
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",height:"1%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
      
             <h1 style={{textDecoration:"none"}} >({post.IssueNo}){post.length} {post.issuename}</h1><h3>{post.telephone}</h3>
         
            { <a href={`http://localhost:3000/call/${post.id}`}>      
            <button
            value={ `${post.IssueNo}`} 

          //  disabled={}   
          onClick={e => issueNoMsg(e, "value")} 
         //  onClick={handleIssue}
          class="btn btn-primary"
           style={{marginLeft:"6%",marginTop:"1%"}} >View Issue {post.IssueNo}</button>

 </a>}

        <button 
            value={ `${post.user_id}`} 
         //   hidden ={`${post.id}`}
      //   xxx={`${post.user_id}`}
        // onClick={e => sndMsg(e, "value")} 
        onClick={e => sndMsg(e, "value")} 
          //  disabled={}   onClick={handleIssue}
       //   onClick={sndMsg}
          class="btn btn-dark"
           style={{marginLeft:"6%",marginTop:"1%"}} >Call {post.user_id} </button>


            </div>
            </div>

            ))}



            

          
            {/* <button>Next</button> */}
            {/* <input type="button" 
            value={ "Issue"} 
          //  disabled={}
            onClick={handleLogin}/> */}


        </div>
    )
}
export default CissueCounterthree;