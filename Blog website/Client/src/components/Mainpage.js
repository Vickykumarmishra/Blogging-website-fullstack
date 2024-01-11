import React, { useState } from 'react'
import Navigation from './Navigation';
import Swal from 'sweetalert2'
import axios from 'axios'
import Navbar from './Navbar';
export default function Mainpage() {
 const [clr, setClr]=useState();
 const [txt,setTxt]=useState();
 const [bgclr,setBgclr]=useState();
 const [bold, setBold]=useState();
 
  function colorPicker(){
    var x=document.getElementById("exampleColorInput").value
    setClr(x);
    console.log(clr)
  }

  function italicc(){
    setTxt("italic")
    
  }
  
  function bolds(){
    setBold("bold")
  }

  function reverse(){
    setTxt("")
    setBold("")
  }

   function bgPicker(){
    var x=document.getElementById("exampleColorbackgr").value;
    setBgclr(x);
   }
  function handleClick(e){
     e.preventDefault();


    
    var title=document.getElementById("title").value;
    var text=document.getElementById("inputbox").value;
    var writer=document.getElementById("writer").value;
    var imageInput=document.getElementById("inputGroupFile04");
    /*imageInput is not an input element; it's the whole input field.
     To get the selected file, you should use imageInput.files[0] directly without .value. */
   
    var image = imageInput.files[0];
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('text', text);
    formData.append('writer',writer);
    

    const url="https://pranpratistha.onrender.com/upload"
    if(title!==''&&text!==''&&image!==''){

      let timerInterval;
Swal.fire({
  title: "Uploading...",
  html: "I will close in <b></b> milliseconds.",
  timer: 1000000,
  timerProgressBar: true,
  customClass: {
    popup: 'error-modal', // Add a class for custom styling
    title: "tit",
    icon: "icon",
    footer:'foot',
    confirmButton: 'confirm',
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

        fetch(url,{
          method:'POST',
          body:formData,
          
         headers: {},
          
         
          
        })
        .then(()=>{
          console.log("data uploaded successfully")
          Swal.fire({
            title:'Done',
            text:'Published successfully',
            icon:'success',
            customClass: {
              popup: 'error-modal', // Add a class for custom styling
              title: "tit",
              icon: "iconic",
              footer:'foot',
              confirmButton: 'confirm',
            },
        })
    
          document.getElementById("writer").value=''
          document.getElementById("inputbox").value=''
          document.getElementById("title").value=''
        })
        .catch((error)=>{
          console.error("Error:",error)
        })

    }
    else{
      console.log("all fields must be filled")
    }
    
  }

  return (
    <>
    <Navbar></Navbar>
    <div>
 <Navigation></Navigation>
<form  className='container'>

<div className="input-group" style={{marginTop:"1rem"}}>
        <input type="file" accept="image/*" enctype="multipart/form-data"   className="form-control bg-gray-800" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image" style={{marginBottom:'1rem',border:"0.1rem solid #F28705",backgroundColor:"grey"}}></input>
        </div>
      
        {/* title */}
      <input class="form-control form-control-sm" id="title" type="text" placeholder="Title" aria-label=".form-control-sm example" style={{borderBottom:"0.01rem solid #F28705",backgroundColor:'grey',color:'#F28705'}}></input>

      

<div class="container text-center" style={{margin:"0.5rem"}}>
  <div class="row">
    

    
    <div class="col" style={{border:"0.01rem solid #F28705"}}>
    {/* <FormatItalicIcon style={{border:"0.01rem solid black",margin:"0.5rem"}} onClick={italicc}></FormatItalicIcon>
    <FormatBoldIcon style={{border:"0.01rem solid black",margin:"0.5rem"}} onClick={bolds}></FormatBoldIcon> */}
    <img src='bold.png' className="" style={{height:'2rem',width:'2rem',margin:'0.5rem',border:'0.18rem solid black',padding:"0.2rem",backgroundColor:"#F28705"}} onClick={bolds}></img>
    <img src='italic.png' style={{height:'2rem',margin:'0.5rem',width:'2rem',backgroundColor:"#F28705"}} onClick={italicc}></img>
    <img src='reset.png' style={{height:'2rem',margin:'0.5rem',width:'2rem',border:'0.18rem solid black',padding:"0.2rem",backgroundColor:"#F28705"}} onClick={reverse} ></img>
    
    </div>
    
  </div>
</div>
      <div class="input-group container" style={{marginTop:"2rem"}} >
  
  <textarea class="form-control" id="inputbox" aria-label="With textarea" style={{height:"25rem",border:'0.1rem solid  #F28705',color:clr,fontStyle:txt,backgroundColor:'grey',fontWeight:bold,color:'#F28705'}}></textarea>
</div>

<input class="form-control form-control-sm" id="writer" type="text" placeholder="Writer's name" aria-label=".form-control-sm example" style={{borderBottom:"0.01rem solid #F28705",marginTop:"1rem",backgroundColor:"grey",color:'#F28705'}}></input>

<div class="d-grid gap-2 container" style={{marginTop:"0.5rem"}}>
  <button class="btn btn-primary container " type="submit" style={{border:'0.1rem solid #F28705',backgroundColor:"#F28705",opacity:"0.8"}} onClick={handleClick} ><b>Publish</b></button>
 
</div> </form>


    </div></>
  )
}
