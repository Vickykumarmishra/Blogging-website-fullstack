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
    <div className='container' style={{marginTop:"0rem",marginBottom:'1rem'}}>


<nav >
<div className='row'>
  <div className='col-sm-6 col-md-3 col-lg-3' ><a class="nav-link active" aria-current="page" href="/Mainpage" style={{color:"#F28705"}}><b><u>Create Blog</u></b></a></div>
  <div className='col-sm-6 col-md-3 col-lg-3'> <a class="nav-link" href="/published" style={{color:"#F28705"}}><b><u>All Blogs</u></b></a></div>
  
  <div className='col-sm-6 col-md-3 col-lg-3'> <a class="nav-link" href="/Contact" style={{color:"#F28705"}}><b><u>ContactUs</u></b></a></div>
  <div className='col-sm-6 col-md-3 col-lg-3'> <a class="nav-link" href='/Login' style={{color:"#F28705"}} onClick={protection}><b><u>Logout</u></b></a></div>
</div>
  
 
 
 
  
</nav>
      
    </div>
  )
}
