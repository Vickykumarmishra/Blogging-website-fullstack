import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Published from './Published';
import Swal from 'sweetalert2';
export default function Login() {
    const navigate = useNavigate();
     
    
    const handleLogin = async (e) => {
    
       e.preventDefault();
       const email=document.getElementById("floatingInput2").value;
       const passw=document.getElementById("floatingPassword").value;
       const fullname=document.getElementById("floatingInput1").value;


       if(fullname==''||email==""||passw==''){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All field are required",
          footer: 'you must fill all details before Login'
        });
      }
      
      else{
        const response = await fetch('https://pranpratistha.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullname, email, passw }),
        });
    
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          
          const token = data.token;
          const tokenParts = token.split('.');
          /*token.split('.') splits the JWT string into an array of substrings using a dot (.) as the delimiter.
           JWTs typically have three parts: header, payload, and signature, separated by dots. */
          const payload = JSON.parse(atob(tokenParts[1]));
          /*tokenParts[1] represents the second part of the JWT, which is the payload encoded in base64. */
    /*The parse method in JavaScript is often used with JSON data. It parses a JSON string and converts it into a JavaScript object. */
          const role = payload.role;
          localStorage.setItem('role', role);
          localStorage.setItem('login',true)
          
          navigate('/Published')
          Swal.fire({
            title: "Logged in!",
            text: "Welcome to BlogVista!",
            icon: "success"
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User does not exist!',
            footer: '<p><b>Check your name ,email and password carefully</b></p>',
          });
        }
      };
    
     
    }
     
useEffect(()=>{
  let login=localStorage.getItem('login');
  if(login){
    navigate('/Published')
  }
})
   
  
  return (
    <div className='container'>

        <div className='row'>

            <div className='col-lg-6 col-sm-12'>
                <img src='login.png' className='img-fluid'></img>
            </div>
            <div className='col-lg-6 col-sm-12'>
       <div> <h1 style={{color:'#F28705'}}><b>LogIn</b></h1></div>

       <div class="form-floating mb-3" style={{marginTop:"1rem"}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" />
  <label for="floatingInput">Full Name</label>
</div>
            <div class="form-floating mb-3" style={{}}>
  <input type="email" class="form-control email" id="floatingInput2" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control passw" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

<button className='btn btn-primary faram' style={{border:"0.1rem solid #F28705",marginTop:"2rem"}}  onClick={handleLogin}>LogIn</button>

            </div>
        </div>
      
    </div>
  )
}
