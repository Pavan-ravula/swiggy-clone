import React from 'react';
// import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Menunav.css';

const Cartnavbar = () => {
    return (
        <div>
            <div className="foodnavbar1">
        <div className="foodnavimg1">
                   <Link to="/"><img src="/swiggy-transparent-icon-free-png.webp"/></Link>
                </div>
                <div className="foodnavbarheader">
                </div>
                {/* <Link><IoMdSearch style={{fontSize:"20px"}}/> Search</Link> */}
                <Link><BiSolidOffer style={{fontSize:"20px"}}/> My orders</Link>
                <Link to="/help"><FaHandsHelping style={{fontSize:"20px"}}/> Help</Link>
               <Link to="/Cart"><BsCartCheck style={{fontSize:"20px"}}/> Cart</Link>

      </div>
        </div>
    )
}

export default Cartnavbar;
