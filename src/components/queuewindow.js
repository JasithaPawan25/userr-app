import React,{useEffect, useState} from "react";
import  io  from "socket.io-client";
import axios from "axios";

const socket =io.connect("http://localhost:5000");

function QueueWindow(props){



    const publicuserToken= localStorage.getItem('publicjwt')



  console.log("publicuserToken", publicuserToken)

  const token = publicuserToken;

//   axios.interceptors.request.use(
//     config  => {
//         config.headers.authorization =`Bearer ${token}`;
//         console.log(config)
//         return config;
//     },
//     error =>{
//         return Promise.reject(error)
//     }
// )





    const [issuNo,setIssuNo]=useState("")

    const publicIssueNo= localStorage.getItem('issueNo')

    useEffect(()=>{
        socket.on("receive_queueNo",(data)=>{
            console.log(data.issueNo)
         //  if((data.messageNo)===publicUserNo){
          //   console.log(data.messageNo)
        //  alert(data.message)
      //  setMessage([...messge,data])
      setIssuNo(data.issueNo)

      localStorage.setItem('QueueNo',data.issueNo)
    
    //  const QueueNo= localStorage.getItem('QueueNo')
     
    //  console.log("QueueNo", QueueNo)
 
        //  }
        })
      },[socket])



      const QueueNo= localStorage.getItem('QueueNo')
      const QueueNoo= parseInt(QueueNo)+1
     
     console.log("QueueNoo", QueueNoo)
   
   
   
   
    console.log("publicIssueNo", publicIssueNo)

    if(token ==null)
    {
     // window.location.href = `/`;
      props.history.push('/');
    }

  //   if(token ==null)
  // {
  //   return(
  //     <h1>ERROR</h1>
  //   )
  // }
  // else
  // {

    return(
        <div>
            {/* <h1>Ongoing Queue</h1> */}

            <div class="card" style={{marginTop:"5%",width:"50%",marginLeft:"25%"}} >
  
  <div class="card-body">
  <h1>Ongoing Queue</h1>

    <h1 class="card-title"  style={{color:"red",fontSize:"150px"}}>{QueueNo}</h1>
   <h2> Next :</h2> <h1 class="card-title"  style={{color:"red",fontSize:"50px"}}>{QueueNoo}</h1>

   <h1 class="card-title"  style={{color:"green",fontSize:"50px"}}>Your No :- {publicIssueNo}</h1>

  </div>
</div>



        </div>
    )

  }
//}
export default QueueWindow;