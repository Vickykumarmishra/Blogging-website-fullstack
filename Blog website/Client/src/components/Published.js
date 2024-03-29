import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from './Toolkit/counterSlice';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useRef } from 'react';
import Trending from './Trending';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Published() {
  function btnanim(){
    document.getElementById('create').style.backgroundColor='red'
  }
  var x=localStorage.getItem('login')
 const [content, setContent] = useState([]);
  const [entry, setEntry] = useState();
  const info=useSelector((state)=>state.counter.count)
  const navigate=useNavigate()
  const refrence1=useRef();
  
  const dispatch=useDispatch()
  useEffect(() => {

    
    const fetchData = async function () {
      try {

        const response = await axios.get("https://blogging-website-fullstack.onrender.com/content");
        const data = response.data;
        console.log(data);
        
        setContent(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const fetchEntry = async function () {
      try {
        const response = await axios.get("https://blogging-website-fullstack.onrender.com/totalEntries");
        const totentry = response.data;
        
        console.log(totentry);
      
         console.log(totentry.totalEntries)
        
        setEntry(totentry.totalEntries);
       var x=totentry.totalEntries
      while(x>0){
      x--
      console.log("hi")
      dispatch(increment())
    }

       
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     
    };

    fetchData();
    fetchEntry()
    
  }, []);
  
  
  return (
   <>
   <Navbar></Navbar>
    <div className=' text-center' style={{}}>


   
     
     {/* hero start */}

    <div className='imageback' style={{backgroundImage:`url(${'mountain.jpg'})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',border:'transparent',height:'28rem'}}>
    
       <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)',height:'28rem'}}>
      <center> <Navigation></Navigation></center>
    
      <motion.h1   animate={{ scale:1}}
  transition={{ ease: "easeOut", duration: 1 }} style={{color:'#ED7D31',marginBottom:'8rem',marginTop:'3rem',padding:'2rem',scale:0.2}}>BlogVista's Trending Blogs</motion.h1>
      {/* <p style={{color:'#ED7D31',padding:'2rem'}}>Explore our diverse collection of insightful blogs covering a wide range of topics. From technology trends to lifestyle tips, our blog is a hub of knowledge and inspiration.</p> */}

     <NavLink to='/Mainpage'> <motion.button   whileHover={{boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px #ED7D31'}} transition={{duration:0.5}} style={{backgroundColor:'transparent',border:'0.1rem solid #ED7D31 ',borderRadius:'100%',padding:'0.5rem',marginBottom:'1rem',opacity:'1',boxShadow:'1px 1px 2px #ED7D31, 0 0 25px #ED7D31, 0 0 5px #ED7D31'}} id='create' ><img src='create it.png' style={{height:'2.5rem'}}></img></motion.button></NavLink>
      </div>
{/*  whileHover={{opacity:'0.8'}} transition={{duration:3}} */}

      {/* <div className='col-sm-6 col-md-3 col-lg-3' ><a class="nav-link active" aria-current="page" href="/Mainpage" style={{color:"#ED7D31"}}><b><u>Create Blog</u></b></a></div> */}
    </div>
       {/* hero end */}

    <div className='container'>
      <div className='row'  style={{}}>
      <div className='container'><h6 style={{float:"left",color:"#ED7D31"}}>Total Blogs:- {info}</h6></div>
       {content.map((soln,index) => {
          const { _id, text, title,writer, imageUrl } = soln;
         // console.log(imageUrl)
        
          return (
           
            <div className='col-sm-12 col-lg-6 col-md-12' key={_id}>
              
              
               
              <motion.div  whileHover={{}}  className='card' style={{ width: 'auto',height:"auto", marginBottom: '2rem',border: '0.1rem solid rgba(0, 0, 0, 0.7)'}}>
                
                  <img    src={imageUrl} className='card-img-top ' alt='...' style={{ width: 'auto',height:"17rem" }} />
              
                <div className='card-body' style={{height:"auto",background: 'linear-gradient(to right, #4F4A45, #6C5F5B)'}}>
                  <h5 className='card-title' style={{color:"#ED7D31"}}>
                    <b>{title}</b> <h6>(written by:-{writer})</h6> 
                  </h5>
                  <p className='card-text' style={{color:"white",textAlign: 'justify', textJustify: 'inter-word', textAlignLast: 'left',lineHeight: '1.6'}}>{text}</p>
                  <p style={{color:'#ED7D31'}}><motion.img whileHover={{scale:1.1}}  transition={{ duration: 0.1 }} src="heartattack.png" style={{height:'1.2rem',width:'1.2rem',marginRight:'0.5rem',color:'#ED7D31'}} ></motion.img>{0}likes</p>
                </div>
              </motion.div>

              
            </div>
          );
         
        })}</div>

    <Trending></Trending>

      </div>
      
    

    <ToastContainer/>

   
 
    </div>
   
    </>
     
  );

}
