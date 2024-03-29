import React from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'
import { signUpSchema } from '../validationschema/signUpSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
var sign=false
export default function Signup() {


  const initialValues={

    fullname:"",
    password:"",
    email:"",
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchema,
      onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
      }
      })
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
        footer: 'you must fill all details before Login',
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

      let timerInterval;
      Swal.fire({
        title: "...saving userdata",
        html: "I will close in <b></b> milliseconds.",
        timer: 10000,
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

      const url="https://blogging-website-fullstack.onrender.com/signup"
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
              
                Swal.fire({
                  icon: 'success',
                  title: 'User Registered Successfully!',
                  text: 'Now you can login!',
                  iconColor: "#ED7D31",
                  customClass: {
                    popup: 'error-modal', // Add a class for custom styling
                    title: "tit",
                   
                    footer:'foot',
                    confirmButton: 'confirm',
                  },
                  
                });

               
            
          // Handle successful signup, e.g., redirect to login or show a success message
        } else {
          
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User Already exists!',
                footer: '<p style="color:#ED7D31"><b>check username and password carefully</b></p>',
                iconColor: "#ED7D31",
                customClass: {
                  popup: 'error-modal', // Add a class for custom styling
                  title: "tit",
                  icon: "icon",
                  
                  confirmButton: 'confirm',
                },
                 
              })
        }


    }
  }
  return (
    <>
    <Navbar></Navbar>
    <div className='container'>
      
      <div className='row'>
          
          <div className='col-lg-6 col-sm-12 col-md-12'>
            <img src='sign11.png' className='img-fluid'></img>
          </div>
          <div className='col-lg-6 col-sm-12 col-md-12'>
          <div style={{marginBottom:"1rem"}}> <h1 style={{color:'#ED7D31'}}><b>SignUp</b></h1></div>
          <div class="form-floating mb-3" style={{}}>
  <input type="text" class="form-control fullname" id="floatingInput1" placeholder="Full Name" name="fullname" onChange={handleChange}
          value={values.fullname}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingInput">Full Name</label>
</div>
{errors.fullname && touched.fullname?(<p  style={{color:'red'}}className='form-error'>{errors.fullname}</p>):null}

          <div class="form-floating mb-3">
  <input type="email" class="form-control email" id="floatingInput2" placeholder="name@example.com" name='email' onChange={handleChange}
          value={values.email}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingInput">Email address</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}

<div class="form-floating">
  <input type="password" class="form-control passw" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange}
          value={values.password}  onBlur={handleBlur} style={{border:'0.1rem solid #ED7D31'}}/>
  <label for="floatingPassword">Password</label>
</div>
{errors.password && touched.password?(<p  style={{color:'red'}}className='form-error'>{errors.password}</p>):null}

<p style={{marginBottom:"1rem",marginTop:"1rem",color:'#ED7D31'}}><input type="checkbox" class="ui-checkbox"  style={{marginRight:"0.5rem"}}></input>Remember Me</p>

        <button type='button' className='btn btn-primary ' style={{marginTop:'1rem',border:"0.1rem orange",border:"0.1rem solid #ED7D31",backgroundColor:"#ED7D31"}} onClick={Signed}> SignUp</button>
        <p className="signin" style={{color:'white'}}>
            Already signedUp? <a href="/Login" style={{color:"#ED7D31"}}>Login</a>
          </p>
          </div>

      </div>
<ToastContainer/>
    </div></>
  )
}
export {sign}