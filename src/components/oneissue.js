import axios from "axios";
import React, { useEffect,useState } from "react";
import  io  from "socket.io-client";


const socket =io.connect("http://localhost:5000");

function Ccall(props){

  const issueIDNo = props.match.params.iid;
  const [post,setpost] =useState({})
  const [nextposts,setNextpost] =useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/one/${issueIDNo}`)
    .then(respose=>{
      console.log(respose)
      setpost(respose.data)
      localStorage.setItem("couter_id",respose.data.count_Id)
      console.log("counter",localStorage.getItem("couter_id"))
  }).catch(err=>{
    console.log(err)
    
  })

  },[issueIDNo])


  const counter_idforUpdate = localStorage.getItem("couter_id")
  const countertPersonId =localStorage.getItem("CounterPersonId")
  console.log("counterPersonId",countertPersonId)

  const counterNO=localStorage.getItem("counterNo")

  console.log("counterNo",counterNO)

//   .then(respose=>{
//     console.log(respose)
// }).catch(err=>{
//   console.log(err)
// })

// localStorage.setItem("couter_id",respose.data.count_Id)
//console.log("counter",localStorage.getItem("couter_id"))

const handleDone = ()=>{

  axios.put(`http://localhost:5000/counterupdate/${counter_idforUpdate}`,{
    queueNo:2,
    
    }
    ).then(respose=>{
      console.log(respose)
     // localStorage.setItem('issueNo',respose.data.IssueNo)

    //  localStorage.setItem('publicjwt',response.data.token)

    //   const publicIssueNo= localStorage.getItem('issueNo')
    if(countertPersonId==1)
    {
      props.history.push('/cissuecounter')
    }
    else if(countertPersonId==2)
    {
      props.history.push('/cissuecountertwo')
    }
    else
    {
      props.history.push('/cissuecounterthree')
    }
   
  
   
    //  console.log("publicIssueNo", publicIssueNo)

     // alert(" Issue is solved!")

    }).catch(error=>{
      console.log(error)
    })



}




const handleLogin =()=>
{
  props.history.push('/cissuecounter')

}

const handleCounterAll = ()=>{
  props.history.push('/callissue')
}




 

const handleDoneNext = ()=>{


  //useEffect(()=>{
    if(counterNO==1)
    {
      axios.get("http://localhost:5000/counternext")
     .then(res=>{
     console.log(res)
     //setpost(res.data)
     if(!(res.data==null))
     {
    //  props.history.push('/cissuecounter')
      setpost(res.data)
      socket.emit("send_queueNo",{ issueNo:`${res.data.IssueNo}`,nextIssueNo:`${res.data.IssueNo}`})
  
     }
     else
     {
      props.history.push('/cissuecounter')
    }

    //  if(res.data.IssueNo==null){

    //   props.history.push('/cissuecounter')

    //  }
    //setcount(res.data)

    localStorage.setItem("couter_id_finding",res.data.count_Id)
console.log("countercouter_id_finding",localStorage.getItem("couter_id_finding"))
    //localStorage.setItem('counteronepeople',res.data)
    
    //    const counteronepeople = localStorage.getItem('counteronepeople')
    //    console.log("counteronepeople", counteronepeople)
    
    
    
     }).catch(err=>{
     console.log(err)
     })

     const counter_idforUpdateNext = localStorage.getItem("couter_id_finding")
 

   

    


   axios.put(`http://localhost:5000/counterupdate/${counter_idforUpdateNext}`,{
    queueNo:2,
    
    }
    ).then(respose=>{
      console.log(respose)
     // localStorage.setItem('issueNo',respose.data.IssueNo)

   

    }).catch(error=>{
      console.log(error)
    })


    }
    else if(counterNO==2)
    {
      axios.get("http://localhost:5000/counternexttwo")
     .then(res=>{
     console.log(res)
     //setpost(res.data)
     if(!(res.data==null))
     {
    //  props.history.push('/cissuecounter')
      setpost(res.data)
      socket.emit("send_queueNo",{ issueNo:`${res.data.IssueNo}`,nextIssueNo:`${res.data.IssueNo}`})
  
     }
     else
     {
      props.history.push('/cissuecounter')
    }

    //  if(res.data.IssueNo==null){

    //   props.history.push('/cissuecounter')

    //  }
    //setcount(res.data)

    localStorage.setItem("couter_id_finding",res.data.count_Id)
console.log("countercouter_id_finding",localStorage.getItem("couter_id_finding"))
    //localStorage.setItem('counteronepeople',res.data)
    
    //    const counteronepeople = localStorage.getItem('counteronepeople')
    //    console.log("counteronepeople", counteronepeople)
    
    
    
     }).catch(err=>{
     console.log(err)
     })

     const counter_idforUpdateNext = localStorage.getItem("couter_id_finding")
 

   

    


   axios.put(`http://localhost:5000/counterupdate/${counter_idforUpdateNext}`,{
    queueNo:2,
    
    }
    ).then(respose=>{
      console.log(respose)
     // localStorage.setItem('issueNo',respose.data.IssueNo)

   

    }).catch(error=>{
      console.log(error)
    })


    }
    else
    {
      axios.get("http://localhost:5000/counternextthree")
     .then(res=>{
     console.log(res)
     //setpost(res.data)
     if(!(res.data==null))
     {
    //  props.history.push('/cissuecounter')
      setpost(res.data)
      socket.emit("send_queueNo",{ issueNo:`${res.data.IssueNo}`,nextIssueNo:`${res.data.IssueNo}`})
  
     }
     else
     {
      props.history.push('/cissuecounter')
    }

    //  if(res.data.IssueNo==null){

    //   props.history.push('/cissuecounter')

    //  }
    //setcount(res.data)

    localStorage.setItem("couter_id_finding",res.data.count_Id)
console.log("countercouter_id_finding",localStorage.getItem("couter_id_finding"))
    //localStorage.setItem('counteronepeople',res.data)
    
    //    const counteronepeople = localStorage.getItem('counteronepeople')
    //    console.log("counteronepeople", counteronepeople)
    
    
    
     }).catch(err=>{
     console.log(err)
     })

     const counter_idforUpdateNext = localStorage.getItem("couter_id_finding")
 

   

    


   axios.put(`http://localhost:5000/counterupdate/${counter_idforUpdateNext}`,{
    queueNo:2,
    
    }
    ).then(respose=>{
      console.log(respose)
     // localStorage.setItem('issueNo',respose.data.IssueNo)

   

    }).catch(error=>{
      console.log(error)
    })

    }

//     axios.get("http://localhost:5000/counternext")
//      .then(res=>{
//      console.log(res)
//      //setpost(res.data)
//      if(!(res.data==null))
//      {
//     //  props.history.push('/cissuecounter')
//       setpost(res.data)
//       socket.emit("send_queueNo",{ issueNo:`${res.data.IssueNo}`,nextIssueNo:`${res.data.IssueNo}`})
  
//      }
//      else
//      {
//       props.history.push('/cissuecounter')
//     }

//     //  if(res.data.IssueNo==null){

//     //   props.history.push('/cissuecounter')

//     //  }
//     //setcount(res.data)

//     localStorage.setItem("couter_id_finding",res.data.count_Id)
// console.log("countercouter_id_finding",localStorage.getItem("couter_id_finding"))
//     //localStorage.setItem('counteronepeople',res.data)
    
//     //    const counteronepeople = localStorage.getItem('counteronepeople')
//     //    console.log("counteronepeople", counteronepeople)
    
    
    
//      }).catch(err=>{
//      console.log(err)
//      })

//      const counter_idforUpdateNext = localStorage.getItem("couter_id_finding")
 

   

    


//    axios.put(`http://localhost:5000/counterupdate/${counter_idforUpdateNext}`,{
//     queueNo:2,
    
//     }
//     ).then(respose=>{
//       console.log(respose)
//      // localStorage.setItem('issueNo',respose.data.IssueNo)

   

//     }).catch(error=>{
//       console.log(error)
//     })

 




//   axios.get("http://localhost:5000/counternext")
//  .then(res=>{
//  console.log(res)
//  setpost(res.data)

//  }).catch(err=>{
//  console.log(err)
//  })





 // props.history.push('/callissue')
}







    return(
        <div>
            <h1 style={{marginBottom:"5%"}}>Issue Detail</h1>
          
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"80%",height:"auto",marginLeft:"10%",marginRight:"10%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
                
             <h1>({post.IssueNo}) {post.issuename}</h1>
             <h3>{post.telephone}</h3>
             <h3>{post.email}</h3><br />
             <h2>{post.detail}</h2>
        


            </div>
            </div>

      <div class="buttonspace"  style={{marginTop:"5%"}}>
          
            <input type="button" 
            value={"Counter One"} 
          //  disabled={}
          class="btn btn-primary"
      //    style={{marginTop:"5%"}}
      style={{marginRight:"2%"}}
            onClick={handleLogin}  />

<input type="button" 
            value={"Counter All"} 
          //  disabled={}
          style={{marginRight:"2%"}}
          class="btn btn-primary"
            onClick={handleCounterAll}  />

<input type="button" 
            value={"Done"} 
          //  disabled={}
          style={{marginRight:"2%"}}
          class="btn btn-primary"
            onClick={handleDone}  />

<input type="button" 
            value={"Done and Next"} 
         //   value={ `${post.IssueNo}`} 

            //  disabled={}   
        //    onClick={e => handleDoneNext(e, "value")} 

          //  disabled={}
          class="btn btn-primary"
           onClick={handleDoneNext} 
           />

</div>

          

        </div>
    )
}
export default Ccall;