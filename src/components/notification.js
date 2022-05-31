import React,{useEffect , useState} from "react";
import  io  from "socket.io-client";
import axios from "axios";

const socket =io.connect("http://localhost:5000");

function Notification(props){

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


    const publicUserNo= localStorage.getItem('publicUserNo')

    const [messge,setMessage] = useState([]);
    const [notis,setNotis] = useState([]);
    const [items, setItems] = useState([]);

    //send_queueNo

    useEffect(()=>{ 
        socket.on("receive_message",(data)=>{
            console.log(data.messageNo)
           if((data.messageNo)===publicUserNo){
          //   console.log(data.messageNo)
        //  alert(data.message)
        setMessage([...messge,data])

        //  const storeNotifi = ([...notis,data.message])
        // localStorage.setItem('notifications',storeNotifi)

      
      
     //   setMessage(data.message)
     localStorage.setItem('notifications',[data.message])

    // const xox = localStorage.getItem('notifications')
   //  console.log(xox)


          }
        })
      })

    //  const xox = localStorage.getItem('notifications')
    //  console.log(xox)

      if(token ==null)
      {
       // window.location.href = `/`;
        props.history.push('/');
      }

      //[socket]

  //     if(token ==null)

  


              

  //   return(
  //     <h1>ERROR</h1>
  //   )
  // }
  // else
  // {

  const xox = localStorage.getItem('notifications')
    console.log(xox)


    return(
        <div>
            <h1 style={{marginBottom:"5%"}}>Notifications</h1>

          

            {messge.map((data,index)=>{
          return(
            <div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
             
          
                       <h1>{data.message}</h1>
                      

            </div>
            </div>
          )

                })} 


<div class="card"  style={{backgroundColor:"#318C86",color:"white",width:"60%",marginLeft:"20%",marginTop:"5px",borderRadius:"40rem"}}>
            <div class="card-body"  style={{fontFamily:"sans-serif"}}>
             
          
                       <h1>{xox}</h1>
                      

            </div>
            </div>

            


        </div>
    )

           //   }
}
export default Notification;