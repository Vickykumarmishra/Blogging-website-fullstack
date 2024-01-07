import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Login from './Login';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
 
 const navigate=useNavigate()
 async function handleClick(){
     var fullname=document.getElementById("name").value;
     var email=document.getElementById("exampleInputEmail1").value;
     var Ask=document.getElementById("exampleFormControlTextarea1").value;

    if(fullname==''||email==''||Ask==''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All field are required",
        footer: 'you must fill all details before sending'
      });
    }

    else{
      const url="https://pranpratistha.onrender.com/contact"

      const response=await fetch(url, {
         method:'POST',
         headers:{
          "Content-Type":"application/json",

         },
         body:JSON.stringify({fullname, email, Ask})
      })

      if(response.ok){
        
        Swal.fire(
          'saved',
          'Message sent successfully',
          'success'
        )

        document.getElementById("name").value='';
        document.getElementById("exampleInputEmail1").value='';
        document.getElementById("exampleFormControlTextarea1").value='';

      }
     
    }
  }



  
  return (
    <center>  <div className='container' >
        <Navigation></Navigation>
       
        <div className='container'> <h6>we are here to help and answer any question you might have. We look forward to hearing from you</h6></div>
      <div className='row ' style={{border:"0.1rem solid #F28705",borderRadius:"0.5rem"}}>

      <div className='col-sm-12 col-md-12 col-lg-6' style={{float:"left"}}>
        <img src="form3.png" className='img-fluid'></img>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6' style={{}}>

      <form style={{padding:'1rem'}}>

      <div class="form-floating mb-3">
    
    <input type="text" class="form-control " id="name" style={{border:"0.1rem solid #F28705"}} placeholder="Full Name"  />
    <label for="floatingInput">Full Name</label>
  </div>
      <div class=" form-floating mb-3">
    
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{border:"0.1rem solid #F28705"}} placeholder="name@example.com"/>
    <label for="floatingInput">Email address</label>
  </div>
      <div class=" form-floating mb-3" style={{backgroundColor:"transparent"}}>
  
  <textarea class="form-control " id="exampleFormControlTextarea1" rows="3" style={{border:"0.1rem solid #F28705"}} placeholder='Ask your doubt'></textarea>
  <label for="floatingPassword">Ask your doubt</label>
</div>

<button class="btn btn-primary faram" style={{border:'0.1rem solid #F28705'}} type="button" onClick={handleClick}>Send Message</button>


      </form>
    
      </div>
        
    </div>

    </div></center>
  )
}
