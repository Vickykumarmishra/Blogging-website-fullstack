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

<nav class="nav">
  <a class="nav-link active" aria-current="page" href="/Mainpage" style={{color:"black"}}><b>Create Blog</b></a>
  <a class="nav-link" href="/published" style={{color:"black"}}><b>All Blogs</b></a>
  <a class="nav-link" href="/Contact" style={{color:"black"}}><b>ContactUs</b></a>
  <a class="nav-link" href='/Login' style={{color:"black"}} onClick={protection}><b>Logout</b></a>
  
</nav>
      
    </div>
  )
}