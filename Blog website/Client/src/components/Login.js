import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Published from './Published';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as yup from "yup"
import { loginSchema } from '../validationschema/loginSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { createContext } from 'react';

const data=createContext()//creating context here


export default function Login() {
 // const [fullname,setFullname]=useState();
    const navigate = useNavigate();
     
    const initialValues={

      fullname:"",
      password:"",
      email:"",
      }

      const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:loginSchema,
        onSubmit:(values,action)=>{
        console.log(values);
        action.resetForm();
        }
        })
    const handleLogin = async (e) => {
    
       e.preventDefault();


       const email=document.getElementById("floatingInput2").value;
       const passw=document.getElementById("floatingPassword").value;
      const fullname=document.getElementById("floatingInput1").value;
     // setFullname(document.getElementById("floatingInput1").value)


       if(fullname==''||email==""||passw==''){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All field are required",
          footer: 'you must fill all details before Login',
          iconColor: "#ED7D31",
          customClass: {
            popup: 'error-modal', // Add a class for custom styling
            title: "tit",
          
           
            footer:'foot',
            confirmButton: 'confirm',
          },
          
        });
        
      }
      
      
else{

  let timerInterval;
  Swal.fire({
    title: "...Logging you in",
    html: "I will close in <b></b> milliseconds.",
    timer: 60000,
    timerProgressBar: true,

    customClass: {
      popup: 'error-modal', // Add a class for custom styling
      title: "tit",
      icon: "iconic",
      footer:'foot',
      confirmButton: 'confirm',
      iconColor: "#ED7D31",
    },
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });

        
        const response = await fetch('https://blogging-website-fullstack.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullname, email, passw }),
        });


    
       
        

        if (response.ok) {

         Swal.close()
          const data = await response.json();
          localStorage.setItem('token', data.token);
          localStorage.setItem('username',fullname)
          localStorage.setItem('email',email)
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
          // Swal.fire({
          //   title: "Logged in!",
          //   text: "Welcome to BlogVista!",
          //   icon: "success"
          // });

          toast("logged in successfully",{
            style: {
              background: "#ED7D31",
              color: "black",
            },
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User does not exist!',
            iconColor: "#ED7D31",
            footer: '<p><b>Check your name ,email and password carefully</b></p>',
            customClass: {
              popup: 'error-modal', // Add a class for custom styling
              title: "tit",
              icon: "iconic",
              footer:'foot',
              confirmButton: 'confirm',
            },
            iconColor: "#ED7D31",
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
    <>

      
      <Navbar />
 
    
    <div className='container'>

        <div className='row'>

            <div className='col-lg-6 col-sm-12'>
                <img src='login 11.png' className='img-fluid'></img>
            </div>
            <div className='col-lg-6 col-sm-12'>
       <div> <h1 style={{color:'#ED7D31'}}><b>LogIn</b></h1></div>
   
       <div class="form-floating mb-3" style={{marginTop:"1rem"}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" name="fullname" onChange={handleChange}
          value={values.fullname}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingInput">Full Name</label>
</div>
{errors.fullname && touched.fullname?(<p  style={{color:'red'}}className='form-error'>{errors.fullname}</p>):null}

            <div class="form-floating mb-3" style={{}}>
  <input type="email" name="email" class="form-control email" id="floatingInput2" placeholder="name@example.com" onChange={handleChange}
          value={values.email}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingInput">Email address</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}

<div class="form-floating">
  <input type="password" name="password" class="form-control passw" id="floatingPassword" placeholder="Password" onChange={handleChange}
          value={values.password}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingPassword">Password</label>
</div>
{errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}
<button className='btn btn-primary ' type='submit' style={{border:"0.1rem solid #ED7D31",marginTop:"2rem",backgroundColor:"#ED7D31"}}  onClick={handleLogin}>LogIn</button>

<p className="signup" style={{color:'white'}}>
            Not signedUp? <a href="/" style={{color:'#ED7D31'}}>SignUp</a>
          </p>

            </div>
        </div>
      
    </div>
    
    </>
  )
}
export {data}
