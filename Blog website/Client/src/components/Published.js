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
export default function Published() {
 const [content, setContent] = useState([]);
  const [entry, setEntry] = useState();
  const info=useSelector((state)=>state.counter.count)
  const navigate=useNavigate()
  const refrence1=useRef();
  
  const dispatch=useDispatch()
  useEffect(() => {

    
    const fetchData = async function () {
      try {

        const response = await axios.get("https://pranpratistha.onrender.com/content");
        const data = response.data;
        console.log(data);
        
        setContent(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const fetchEntry = async function () {
      try {
        const response = await axios.get("https://pranpratistha.onrender.com/totalEntries");
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
   
    <div className=' text-center'>


   
     
     {/* hero start */}

    <div className='imageback' style={{backgroundImage:`url(${'mountain.jpg'})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',border:'transparent'}}>
    
       <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
       <Navigation></Navigation>
    <div className='container'><h6 style={{float:"left",color:"#F28705"}}>Total Blogs:- {info}</h6></div>
      <h1 style={{color:'#F28705',marginBottom:'8rem',marginTop:'3rem',padding:'2rem'}}>Trending Blogs</h1>
      <p style={{color:'#F28705',padding:'2rem'}}>Explore our diverse collection of insightful blogs covering a wide range of topics. From technology trends to lifestyle tips, our blog is a hub of knowledge and inspiration.</p>
      </div>
    </div>
       {/* hero end */}

    <div className='container'>
      <div className='row'  style={{}}>
       {content.map((soln,index) => {
          const { _id, text, title,writer, imageUrl } = soln;
         // console.log(imageUrl)
        
          return (
           
            <div className='col-sm-12 col-lg-6 col-md-12' key={_id}>
              
              
               
              <motion.div  whileHover={{}}  className='card' style={{ width: 'auto',height:"auto", marginBottom: '2rem',border:"0.1rem solid #F28705"}}>
                
                  <img    src={imageUrl} className='card-img-top ' alt='...' style={{ width: 'auto',height:"17rem" }} />
              
                <div className='card-body' style={{height:"auto",backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
                  <h5 className='card-title' style={{color:"#F28705"}}>
                    <b>{title}</b> <h6>(written by:-{writer})</h6> 
                  </h5>
                  <p className='card-text' style={{color:"white",textAlign: 'justify', textJustify: 'inter-word', textAlignLast: 'left',lineHeight: '1.6'}}>{text}</p>
                  <p style={{color:'#F28705'}}><motion.img whileHover={{scale:1.1}}  transition={{ duration: 0.1 }} src="heartattack.png" style={{height:'1.2rem',width:'1.2rem',marginRight:'0.5rem',color:'#F28705'}} ></motion.img>{0}likes</p>
                </div>
              </motion.div>

              
            </div>
          );
         
        })}</div>

    <Trending></Trending>

      </div>
      
    

    
 
    </div>
     
  );

}
