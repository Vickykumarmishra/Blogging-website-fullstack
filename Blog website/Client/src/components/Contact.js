import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Login from './Login';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {motion} from 'framer-motion'
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
        footer: 'you must fill all details before sending',
        iconColor: "#ED7D31",
        customClass: {
          popup: 'error-modal', // Add a class for custom styling
          title: "tit",
          icon: "iconic",
          footer:'foot',
          confirmButton: 'confirm',
        },
        
      });
    }

    else{
      const url="https://blogging-website-fullstack.onrender.com/contact"

      const response=await fetch(url, {
         method:'POST',
         headers:{
          "Content-Type":"application/json",

         },
         body:JSON.stringify({fullname, email, Ask})
      })

      if(response.ok){
        
        Swal.fire({
          title:'sent',
          text:'Message sent successfully',
          icon:'success',
          iconColor: "#ED7D31",
          customClass: {
            popup: 'error-modal', // Add a class for custom styling
            title: "tit",
            icon: "iconic",
            footer:'foot',
            confirmButton: 'confirm',
          },
      })

        document.getElementById("name").value='';
        document.getElementById("exampleInputEmail1").value='';
        document.getElementById("exampleFormControlTextarea1").value='';

      }
     
    }
  }



  
  return (
    <>
    <Navbar></Navbar>
    <center>  <div className='container' >
        <Navigation></Navigation>
       
        <div className='container'> <p style={{color:'#ED7D31'}}>we are here to help and answer any question you might have. We look forward to hearing from you</p></div>
      <div className='row ' style={{borderRadius:"0.5rem"}}>

      <div className='col-sm-12 col-md-12 col-lg-6' style={{float:"left"}}>
        <img src="form3.png" className='img-fluid'></img>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6' style={{}}>

      <form style={{padding:'1rem'}}>

      <div class="form-floating mb-3">
    
    <input type="text" class="form-control " id="name" style={{border:'0.1rem solid #ED7D31'}} placeholder="Full Name"  />
    <label for="floatingInput">Full Name</label>
  </div>
      <div class=" form-floating mb-3">
    
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{border:'0.1rem solid #ED7D31'}} placeholder="name@example.com"/>
    <label for="floatingInput">Email address</label>
  </div>
      <div class=" form-floating mb-3" style={{backgroundColor:"transparent"}}>
  
  <textarea class="form-control " id="exampleFormControlTextarea1" rows="3" style={{border:'0.1rem solid #ED7D31'}} placeholder='Ask your doubt'></textarea>
  <label for="floatingPassword">Ask your doubt</label>
</div>

<button class="btn btn-primary" style={{border:'0.1rem solid #ED7D31',backgroundColor:'#ED7D31'}} type="button" onClick={handleClick}>Send Message</button>


      </form>
    
      </div>
        
    </div>
   <div className='row' style={{marginTop:"2rem"}}>
    <div className='col-sm-12 col-md-6 col-lg-6'><p> <h6 style={{color:"#ED7D31"}}> <img src='emailing.png' style={{height:'2rem'}}></img>Email Us:Blogvista123@gmail.com</h6></p></div>
    <div className='col-sm-12 col-md-6 col-lg-6'><p> <h6 style={{color:"#ED7D31"}}><img src='phonecall.png' style={{height:'2rem'}}></img> Call Us:123456789</h6></p></div>
   </div>
    </div></center></>
  )
}
