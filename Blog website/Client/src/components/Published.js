import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from './Toolkit/counterSlice';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useRef } from 'react';
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
   
    <div className='container text-center'>

<Navigation></Navigation>
   <div className='container'><h6 style={{float:"left",color:"black"}}>Total Blogs:- {info}</h6></div>
      {/*carousel starts */}
<div className='container' style={{marginBottom:"1rem"}}>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{borderRadius:"1.5rem"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="blog1.jpg" class="d-block w-100" alt="..." style={{height:'24rem',borderRadius:"1rem"}}/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5 style={{color:"white",backgroundColor:'#F28705'}}>BlogVista</h5> */}
        <p style={{color:"white",backgroundColor:'#F28705'}}><b>A perfect place to express your thoughts</b></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="blog2.jpg" class="d-block w-100" alt="..." style={{height:'24rem',borderRadius:"1rem"}}/>
      <div class="carousel-caption d-none d-md-block"  >
        {/* <h5 style={{color:"white",backgroundColor:'#F28705'}}>BlogVista</h5> */}
        <p style={{color:"white",backgroundColor:'#F28705'}}><b>100k+ happy client over the globe</b></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="blog3.jpg" class="d-block w-100" alt="..." style={{height:'24rem',borderRadius:"1rem"}}/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
{/*carousel ends*/}

    
      <div className='row'  >
       {content.map((soln,index) => {
          const { _id, text, title,writer, imageUrl } = soln;
         // console.log(imageUrl)
        
          return (
           
            <div className='col-sm-12 col-lg-6 col-md-12' key={_id}>
              
              
               
              <motion.div  whileHover={{backgroundColor:"lightgrey"}}  className='card' style={{ width: 'auto',height:"auto", marginBottom: '2rem', backgroundColor: 'white'}}>
                
                  <img    src={imageUrl} className='card-img-top ' alt='...' style={{ width: 'auto',height:"17rem" }} />
              
                <div className='card-body' style={{height:"28rem"}}>
                  <h5 className='card-title'>
                    <b>{title}</b> <i>(written by:-{writer})</i> 
                  </h5>
                  <p className='card-text'>{text}</p>
                  <p><motion.img whileHover={{scale:1.1}}  transition={{ duration: 0.1 }} src="heart.png" style={{height:'1.5rem',width:'1.5rem',marginRight:'0.5rem'}} ></motion.img>{0}likes</p>
                </div>
              </motion.div>

              
            </div>
          );
         
        })}


      </div>
      
    

    
 
    </div>
     
  );

}
