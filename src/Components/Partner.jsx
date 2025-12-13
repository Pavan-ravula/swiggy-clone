import React from 'react';
import './Swiggy.css';
import { useState, useEffect } from "react";


const Partner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const messages = ["Increase your online orders","Reach customers far away from you","Access to Swiggy tools and support"];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to next message or loop back to start
      setCurrentIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 2000); // 2-second delay between messages

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [messages.length]);


    return (
        
<>
        <div className='partner-container'>
            <div className='partnerbg'>
                <div  className="statements" style={{ fontSize: "24px", marginTop: "50px" ,color:"white",justifyContent:"flex-start"}}>
                 <div className='partnerimage'> <img src='/swiggy_logo_white.avif'/><p>partner with us</p></div>
                  <p>{messages[currentIndex]}</p>
                 </div>
                <div className='formtags'>
                    <h1>Get Started</h1>
                    <form className='infoform'>
                        <p>Enter a mobile number or restaurant ID <br />to continue</p>
                        <input type='text' placeholder='Enter Restaurant ID/Mobile number' />
                        <button>CONTINUE</button>
                        <p>By logging in, I agree to Swiggy’s terms &<br /> conditions</p>
                    </form>
                </div>

            </div>
        </div>
        <div className='down-container'>
          <div className='para-container1'>
            <p>In just 3 easy steps</p>
            <h1>Get your restaurant delivery-ready in 24hrs!</h1>
            
            <div className='steps-portion'>
              <p>STEP-1</p>
              <h1>Install the Swiggy Owner App</h1>
              <p>STEP-2</p>
              <h1>Login/Register using your phone number</h1>
              <p>STEP-3</p>
              <h1>Enter restaurant details</h1>
            </div>
          </div>
          <div className='para-container2'>
            <p>For an easy form filling process,</p>
            <h1>you can keep these documents handy.</h1>
            <hr/>
              <h1>FSSAI License copy</h1>
              <h1>Your Restaurant menu</h1>
              <h1>Bank details</h1>
              <h1>GSTIN</h1>
              <h1>PAN card copy</h1>
          </div>

        </div>
        </>
    
    );
};

export default Partner;