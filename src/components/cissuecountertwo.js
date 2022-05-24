import axios from "axios";
import React, { useEffect, useState } from "react";

function CissueCountertwo(props){

  //

  const [posts,setposts] =useState([])
  const [count,setcount] =useState({})

  useEffect(()=>{
    axios.get("http://localhost:5000/counttwo")
    .then(res=>{
    console.log(res)
    setposts(res.data)
    //  var length = setposts(res.length)
    //  console.log(length)
   // setcounts(res.data)
  }).catch(err=>{
    console.log(err)
  })

},[])



        useEffect(()=>{
         axios.get("http://localhost:5000/counttwopeople")
        .then(res=>{
        console.log(res)
       setcount(res.data)
       localStorage.setItem('countertwopeople',res.data)

    //    const counteronepeople = localStorage.getItem('counteronepeople')
    //    console.log("counteronepeople", counteronepeople)



        }).catch(err=>{
        console.log(err)
        })

        },[])



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

  const countertwopeople = localStorage.getItem('countertwopeople')




    return(
        <div>
            <input type="button" 
            value={ "Issue"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin} style={{marginLeft:"75%"}} />

<input type="button" 
            value={"All Issue"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleLogin}  />

<input type="button" 
            value={"Issue Counter 001"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleOne}  />

            <input type="button" 
            value={"Issue Counter 002"} 
          //  disabled={}
          class="btn btn-primary active"
            onClick={handleTwo}  />

            <input type="button" 
            value={"Issue Counter 003"} 
          //  disabled={}
          class="btn btn-primary"
            onClick={handleThree}  />

          
           

            

            <h1 style={{marginTop:"5%",marginBottom:"5%",marginLeft:"-50%"}}>Counter<br />
           #002</h1>
           <h1 style={{marginTop:"-13%",marginBottom:"5%",marginLeft:"50%"}} >PeopleWaiting:- {countertwopeople}</h1>

           
           {posts.map(post=>(
              //  <li key={post.id}>{post.IssueNo}{post.issuename}{post.telephone}</li>
              
            
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",height:"1%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
      
             <h1 style={{textDecoration:"none"}} >({post.IssueNo}){post.length} {post.issuename}</h1><h3>{post.telephone}</h3>
         
            { <a href={`http://localhost:3000/call/${post.id}`}>      
             <input type="button" 
            value={ "Issue Detail"} 
          //  disabled={}   onClick={handleIssue}
          class="btn btn-primary"
           style={{marginLeft:"6%",marginTop:"1%"}} />

 </a>}

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
export default CissueCountertwo;