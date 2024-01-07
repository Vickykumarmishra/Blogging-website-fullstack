import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Navigation() {
  const navigate=useNavigate()
  function protection(){
    
 localStorage.setItem('token',null)
 localStorage.removeItem("login");//login key will be deleted
 navigate("/Login");
    
  }
  return (
    <div className='container' style={{marginTop:"1rem",marginBottom:'1rem'}}>


<nav class="">
<div className='row'>
  <div className='col-sm-4 col-md-3 col-lg-3'><a class="nav-link active" aria-current="page" href="/Mainpage" style={{color:"#F28705"}}><b>Create Blog</b></a></div>
  <div className='col-sm-4 col-md-3 col-lg-3'> <a class="nav-link" href="/published" style={{color:"#F28705"}}><b>All Blogs</b></a></div>
  <div className='col-sm-4 col-md-3 col-lg-3'> <a class="nav-link" href="/Contact" style={{color:"#F28705"}}><b>ContactUs</b></a></div>
  <div className='col-sm-4 col-md-3 col-lg-3'> <a class="nav-link" href='/Login' style={{color:"#F28705"}} onClick={protection}><b>Logout</b></a></div>
</div>
  
 
 
 
  
</nav>
      
    </div>
  )
}
