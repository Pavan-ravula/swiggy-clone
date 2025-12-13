import React from 'react'

function Footer()  {
    return (
        <footer className='footer'>
            <div className='footersection'>
                <div className='image'>
                    <img src='/Group.svg' alt='© 2025 Swiggy Limited'/>
                    
                </div>
            <div className='footerpart1'>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Swiggy Corporate</p>
                <p>Careers</p>
                <p>Team</p>
                <p>Swiggy One</p>
                <p>Swiggy Instamart</p>
                <p>Swiggy Dineout</p>
                <p>Minis</p>
                <p>Pyng</p>
            </div>
            <div className='footerpart2'>
                <h1>Contact us</h1>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
                <h1 style={{paddingTop: '30px'}}>Legal</h1>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div className='footerpart1'>
                <h1>Available in:</h1>
                <p>bangalore</p>
                <p>gurgaon</p>
                <p>hyderabad</p>
                <p>delhi</p>
                <p>mumbai</p>
                <p>pune</p>
            </div>
            <div className='footerpart1'>
               <h1> Life at Swiggy</h1>
                <p>Explore with Swiggy</p>
                <p>Swiggy News</p>
                <p>Snackables</p>
                <h1 style={{paddingTop:'30px'}}>Social Links</h1>
                <img src='/Linkedin.svg'/>
                <img src='/icon-pinterest.svg'/>
                <img src='/icon-instagram.svg'/>
                <img src='/icon-facebook.svg'/>
            </div>
            </div>
            < hr className='headline'/>
            <div className='footersection2'>
                <h1>For better experience, download the Swiggy app now</h1>
                <img src='/icon-AppStore_lg30tv.avif'/>
                <img src='/icon-GooglePlay_1_zixjxl.avif'/>
            </div>
        </footer>
    )
}

export default Footer;
