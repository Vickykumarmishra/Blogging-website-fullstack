import React from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Signup() {
 
  console.log('signup')
  const navigate=useNavigate();
  async function Signed(e){
    e.preventDefault();
    var fullname=document.getElementById("floatingInput1").value
    var email=document.getElementById("floatingInput2").value
    var passw=document.getElementById("floatingPassword").value

    //console.log(passw,fullname,email)

    if(fullname==''||email==""||passw==''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All field are required",
        footer: 'you must fill all details before doing signup'
      });
    }
    else{

      const url="https://pranpratistha.onrender.com/signup"
      const response = await fetch(url,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({fullname,email,passw})
      });

      if (response.ok) {
        console.log('response:' , response)
                navigate('/Login')
              
                Swal.fire(
                    'User Registered Successfully!',
                    'Now you can login!',
                    'success'
                  )
            
          // Handle successful signup, e.g., redirect to login or show a success message
        } else {
          
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User Already exists!',
                footer: '<p style="color:red"><b>check username and password carefully</b></p>'
              })
        }


    }
  }
  return (
    <div className='container'>
      
      <div className='row'>
          
          <div className='col-lg-6 col-sm-12 col-md-12'>
            <img src='sign5.jpg' className='img-fluid'></img>
          </div>
          <div className='col-lg-6 col-sm-12 col-md-12'>
          <div style={{marginBottom:"1rem"}}> <h1><b>SignUp</b></h1></div>
          <div class="form-floating mb-3">
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name"/>
  <label for="floatingInput">Full Name</label>
</div>
          <div class="form-floating mb-3">
  <input type="email" class="form-control email" id="floatingInput2" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control passw" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

<p style={{marginBottom:"1rem",marginTop:"1rem"}}><input type="checkbox" class="ui-checkbox"  style={{marginRight:"0.5rem"}}></input>Remember Me</p>

        <button type='button' className='btn btn-primary faram' style={{marginTop:'1rem',border:"0.1rem orange"}} onClick={Signed}> SignUp</button>
        <p className="signin">
            Already signedIn? <a href="/Login">Login</a>
          </p>
          </div>

      </div>

    </div>
  )
}
