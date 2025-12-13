import React from 'react'
import './Help.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LuShoppingBag } from "react-icons/lu";
// import { IoMdSearch } from "react-icons/io";
// import { BiSolidOffer } from "react-icons/bi";
// import { FaHandsHelping } from "react-icons/fa";
// import { LuUserRoundPlus } from "react-icons/lu";
// import { BsCartCheck } from "react-icons/bs";

const Help = () => {
    const [active,setactive]=useState("Partner Onboarding");
    
    
    
    return (
        <>
        {/* <div className="foodnavbar">
                <div className="foodnavimg">
                           <img src="/swiggy-transparent-icon-free-png.webp"/>
                        </div>
                        <div className="foodnavbarheader">
                          <h1>Other</h1>
                        </div>
                        <Link ><LuShoppingBag style={{fontSize:"20px"}}/> Swiggy Corporate</Link>
                        <Link><IoMdSearch style={{fontSize:"20px"}}/> Search</Link>
                        <Link><BiSolidOffer style={{fontSize:"20px"}}/> Offers</Link>
                        <Link to="/help"><FaHandsHelping style={{fontSize:"20px"}}/> Help</Link>
                       <Link><LuUserRoundPlus style={{fontSize:"20px"}}/> Sign-in</Link>
                       <Link><BsCartCheck style={{fontSize:"20px"}}/> Cart</Link>
        
              </div> */}
        <div className='main-container'>
            
            <div className='header-content'>
                <h1>Help & Support</h1>
                <p>Let's take a step ahead and help you better.</p>
            </div>
            <div className='white-container'>
                <div className='left-container'>
                    <div className='buttons-container'>
                        <button onClick={()=>setactive("Partner Onboarding")}>Partner Onboarding</button>
                        <button onClick={()=>setactive("Legal")}>Legal</button>
                        <button onClick={()=>setactive("FAQS")} >FAQs</button>
                        <button onClick={()=>setactive("Instamart Onboarding")}>Instamart Onboarding</button>
                        <button onClick={()=>setactive("IRCTC FAQ")}>IRCTC FAQ</button>
                    </div>
                </div>
                <div className='right-container'>
                    { active ==="Partner Onboarding" && 
                    <div className='right-container-content1'>
                        <h1>Partner Onboarding</h1>
                        <p>I want to partner my restaurant with Swiggy</p>
                        <hr/>
                        <p>What are the mandatory documents needed to list my restaurant on Swiggy?</p>
                        <hr/>
                        <p>I want to opt-out from Google reserve</p>
                        <hr/>
                        <p>After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</p>
                        <hr/>
                        <p>What is this one time Onboarding fees? Do I have to pay for it while registering?</p>
                        <hr/>
                        <p>Who should I contact if I need help & support in getting onboarded?</p>
                        <hr/>
                        <p>How much commission will I be charged by Swiggy?</p>
                        <hr/>
                        <p>I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</p>
                        <hr/>
                    </div>

                    }
                     { active ==="Legal" && 
                     <div className='right-container-content1'>
                        <h1>Legal</h1>
                        <p>Terms of Use</p>
                        <hr/>
                        <p>Privacy Policy</p>
                        <hr/>
                        <p>Cancellations and Refunds</p>
                        <hr/>
                        <p>Terms of Use for Swiggy ON-TIME / Assured</p>
                        <hr/>
                    </div>

                    }
                    { active ==="FAQS" && 
                    <div className='right-container-content1'>
                        <h1>FAQS</h1>
                        <p>What is Swiggy Customer Care Number?</p>
                        <hr/>
                        <p>I want to explore career opportunities with Swiggy</p>
                        <hr/>
                        <p>I want to provide feedback</p>
                        <hr/>
                        <p>Can I edit my order?</p>
                        <hr/>
                        <p>I want to cancel my order</p>
                        <hr/>
                        <p>Will Swiggy be accountable for quality/quantity?</p>
                        <hr/>
                        <p>Is there a minimum order value?</p>
                        <hr/>
                        <p>Do you charge for delivery?</p>
                        <hr/>
                    </div>

                    }
                    { active ==="Instamart Onboarding" && 
                    <div className='right-container-content1'>
                        <h1>Instamart Onboarding</h1>
                        <p>I want to partner with Instamart</p>
                        <hr/>
                        <p>How many cities does Instamart operate in?</p>
                        <hr/>
                        <p>What is the time to onboard?</p>
                        <hr/>
                        <p>What flavour/grammage moves the best?</p>
                        <hr/>
                        <p>What are the expected volumes in the first 30 days?</p>
                        <hr/>
                        <p>Do I get sales data?</p>
                        <hr/>
                        <p>How do ads work?</p>
                        <hr/>
                        <p>What are the opportunities for expansion into new cities/SKUs?</p>
                        <hr/>
                    </div>

                    }
                    { active ==="IRCTC FAQ" && 
                    <div className='right-container-content1'>
                        <h1>IRCTC FAQ</h1>
                        <p>Will my order be delivered according to the promised time?</p>
                        <hr/>
                        <p>What will happen if the train is delayed?</p>
                        <hr/>
                        <p>I am unable to find any restaurants in the railway station where I want to place an order.</p>
                        <hr/>
                        <p>My train is scheduled for next week, when can I place my order?</p>
                        <hr/>
                        <p>How is the confirmation of the booking done?</p>
                        <hr/>
                        <p>Can I cancel my order?</p>
                        <hr/>
                        <p>What is the minimum order value for IRCTC orders?</p>
                        <hr/>
                        <p>What are the payment options available?</p>
                        <hr/>
                    </div>

                    }
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default Help
