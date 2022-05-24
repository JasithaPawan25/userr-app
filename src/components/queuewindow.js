import React from "react";

function QueueWindow(){


    const publicIssueNo= localStorage.getItem('issueNo')
   
   
   
    console.log("publicIssueNo", publicIssueNo)

    return(
        <div>
            {/* <h1>Ongoing Queue</h1> */}

            <div class="card" style={{marginTop:"5%",width:"50%",marginLeft:"25%"}} >
  
  <div class="card-body">
  <h1>Ongoing Queue</h1>

    <h1 class="card-title"  style={{color:"red",fontSize:"150px"}}>25</h1>
   <h2> Next :</h2> <h1 class="card-title"  style={{color:"red",fontSize:"50px"}}>25</h1>

   <h1 class="card-title"  style={{color:"green",fontSize:"50px"}}>Your No :- {publicIssueNo}</h1>

  </div>
</div>



        </div>
    )
}
export default QueueWindow;