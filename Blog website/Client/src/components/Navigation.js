import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navigation() {
  const navigate=useNavigate()
  function protection(){
  
 localStorage.setItem('token',null)
 localStorage.removeItem("login");//login key will be deleted
 localStorage.removeItem("username");
 localStorage.removeItem("email");
 localStorage.removeItem("role")
 
 navigate("/Login");

    
  }
  
  
  return (
   <center> <div className='container' style={{marginTop:"0rem",marginBottom:'1rem'}}>


<nav >
<div className='row'>
  
  <div className='col-sm-6 col-md-4 col-lg-4'> <a class="nav-link" href="/published" style={{color:"#ED7D31"}}><motion.b whileHover={{opacity:'0.8'}}><u>ALL BLOGS</u></motion.b></a></div>
  
  <div className='col-sm-6 col-md-4 col-lg-4'> <a class="nav-link" href="/Contact" style={{color:"#ED7D31"}}><motion.b whileHover={{opacity:'0.8'}}><u>CONTACT US</u></motion.b></a></div>
  <div className='col-sm-6 col-md-4 col-lg-4'> <a class="nav-link" href='/Login' style={{color:"#ED7D31"}} onClick={protection}><motion.b whileHover={{opacity:'0.8'}}><u>LOGOUT</u></motion.b></a></div>
</div>
  
 {/* <button onClick={toaster}>check</button> */}
 
 
  
</nav>
      <ToastContainer/>
    </div></center>
  )
}
