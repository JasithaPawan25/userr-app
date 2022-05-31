import axios from "axios";
import React, { useEffect, useState } from "react";
//import { Socket,io } from "socket.io";
import  io  from "socket.io-client";


const socket =io.connect("http://localhost:5000");


  // <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
  //   <script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script>
 

function CissueCounter(props){

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

    axios.get("http://localhost:5000/countone")
    .then(res=>{
    console.log(res)
    setposts(res.data)

  //  const  xxx = setposts (res.data.IssueNo)
    // var length = setposts(res.data.length)
   // setcounts(res.data)
  }).catch(err=>{
    console.log(err)
  })

},[])



useEffect(()=>{
  axios.get("http://localhost:5000/countonepeople")
 .then(res=>{
 console.log(res)
setcount(res.data)
localStorage.setItem('counteronepeople',res.data)

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

const [xx,setxx] =useState({})




const sndMsg =(e)=>{
 // console.log(value)

  console.log(e.target.value);
 
  socket.emit("send_message",{ messageNo:`${(e.target.value)}`, message : `Hello!!! Customser you are next.Please waiting`})

}




const issueNoMsg =(e)=>{
  localStorage.setItem("counterNo",1)

  console.log(e.target.value);
  socket.emit("send_queueNo",{ issueNo:`${e.target.value}`,nextIssueNo:`${e.target.value}`})

}




  

    const handleLogin =()=>
  {
    props.history.push('/callissue')

  }

  const handleLoginn =()=>
  {
    localStorage.removeItem('jwt')
    props.history.push('/clogin')

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

  const counteronepeople = localStorage.getItem('counteronepeople')

  //const socket =io.connect("http://localhost:5000");

  if(token ==null)
  {
   // window.location.href = `/`;
    props.history.push('/clogin');
  }
  // const sendMsg =()=>{
  //   socket.emit("send_message",{ message :"Hello"})

  // }

  // const sndMsg =()=>{
  //   socket.emit("send_message",{ message :"Hello"})

  // }

    // useEffect(()=>{
    //   socket.on("receive_message",(data)=>{
    //     if((data.message.e.target.value)==13){
    //     alert(data.message)
    //     }
    //   })
    // },[socket])
 
//   const sendMsg =()=>
//   {
//   const socket = io("http://localhost:5000/")

//   socket.on("message",(data) => {
// console.log(data)
//   });





  // var socket = io();

  // socket.on('fromServer', function(data) {
                
  //   console.log( 'ON: fromServer')
            
  // });

  //  function sendMsg() {
  //   socket.emit('fromClient', { "message":"Sent from client!" });
  //   console.log( 'EMIT: fromClient');
  // }


//   socket.on("message",(data) => {
//     console.log(data)
//       });

//       function sendMsg() {
//         socket.emit("message", "HELLO WORLD")
//       }
   

//  socket.on("message", (data) => {
//   console.log(data)
//     });

//   }
  




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
          //  disabled={}
          class="btn btn-primary active"
            onClick={handleOne}  />

            <input type="button" 
            value={"Issue Counter 002"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleTwo}  />

            <input type="button" 
            value={"Issue Counter 003"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleThree}  />

          
           
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js'></script>
 

    



<h1 style={{marginTop:"5%",marginBottom:"5%",marginLeft:"-50%"}}>Counter<br />
           #001</h1>
           <h1 style={{marginTop:"-13%",marginBottom:"5%",marginLeft:"50%"}} >PeopleWaiting:- {counteronepeople}</h1>


           
           {posts.map(post=>(
              //  <li key={post.id}>{post.IssueNo}{post.issuename}{post.telephone}</li>
              
            
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",height:"1%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
      
             <h1 style={{textDecoration:"none"}} >({post.IssueNo}){post.length} {post.issuename}</h1><h3>{post.telephone}</h3>
         
            { <a href={`http://localhost:3000/call/${post.id}`}>      
             {/* <input type="button"  */}
             <button
            value={ `${post.IssueNo}`} 

          //  disabled={}   
          onClick={e => issueNoMsg(e, "value")} 
         //  onClick={handleIssue}
          class="btn btn-primary"
           style={{marginLeft:"6%",marginTop:"1%"}} >View Issue {post.IssueNo}</button>

 </a>}


 {/* <input type="button"  */}
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



            

           

           {/* <button  onClick={sndMsg} class="btn btn-dark" style={{marginLeft:"6%",marginTop:"1%"}}>Call2</button> */}
            



            

          
            {/* <button>Next</button> */}
            {/* <input type="button" 
            value={ "Issue"} 
          //  disabled={}
            onClick={handleLogin}/> */}


        </div>
    )
}
export default CissueCounter;