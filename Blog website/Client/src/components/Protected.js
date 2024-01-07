import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {

    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('login');
        
        if(!login){
          // !false=true=> if login has false this block will execute and redirect to login page since user has not logged
            navigate('/Login')
        }
       
    })
  return (
    <div>
      {/* app.js m jis v component ko prootected m pass kara rahe hai, vo sab is component se hoke jayega load hote samay and us samy login key
      ka value agar false raha to redirect hoga login page par */}
      <Component/>
    </div>
  )
}
