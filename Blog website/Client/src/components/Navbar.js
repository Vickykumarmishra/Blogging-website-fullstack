import React from 'react'
import {motion} from 'framer-motion'
import Signup from './Signup'
import {sign} from './Signup'
export default function Navbar() {
  var email=localStorage.getItem('email')
  var username=localStorage.getItem('username')
  function navcontroller(){
    var x=localStorage.getItem('login')
    if(x){
     //document.getElementById('user').style.display = ''
     console.log("navcontroller")
    }
    else{
      document.getElementById('user').style.display = 'none'
    }
  }
  return (
    <div onLoad={navcontroller}>
      
      <nav class="navbar  sticky-top" style={{borderBottom:"0.1rem solid grey"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'#ED7D31'}}>
      {/* <img src="logo-color.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
     <h5> BlogVista</h5>
    </a>
    {/* <img src="user.png" style={{height:'3rem',border:'0.15rem solid #F28705',borderRadius:"100%"}}></img> */}

    {/* offcanvas start */}

    <a  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <motion.img  whileHover={{scale:'1.1'}}   src="profile.png" style={{height:'3rem',border:'0.15rem solid #ED7D31 ',borderRadius:"100%",paddingTop:"0.1rem"}} id="user"></motion.img>
</a>

{/* "easeOut" is a type of easing that starts the animation quickly and slows down towards the end, creating a smooth deceleration effect. */}
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{opacity:'0.9'}}>
  <div class="offcanvas-header" style={{backgroundColor:'#ED7D31',color:'white'}}>
    <h5 class="offcanvas-title" id="offcanvasExampleLabel" style={{}}>User Profile</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{color:'white'}}></button>
  </div>
  <div class="offcanvas-body" style={{backgroundColor:'rgba(0, 0, 0, 0.7)',color:"#ED7D31"}}>
    <div >
      <img src='profile.png' style={{height:'8rem',marginBottom:'1rem',border:'0.15rem solid #ED7D31',borderRadius:"100%",paddingTop:"0.1rem"}}></img><br></br>
     <b> Username:-{username} </b>  <br></br>
      <p><b>Email Id:- {email}</b></p>
    </div>
    
  </div>
</div>
    {/* offcanvas end */}
  </div>
  <div style={{float:'right'}}>
 
  </div>
</nav>
    </div>
  )
}
