import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "./Swiggy.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { LuShoppingBag } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
// import { LuUserRoundPlus } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";
// import { MdMyLocation } from "react-icons/md";
import Help from "./Help";
import Home from "./Home";
// import Signup from "./Signup";
// import Signin from "./Signin";
// import { useNavigate } from "react-router-dom";

function FoodDetails() {
  // const navigate=useNavigate();
  const { id, text } = useParams();
  const [categoryData, setCategoryData] = useState([]); // initialize as empty array
  const [loading, setLoading] = useState(true);

  // const [open,setopen]=useState(false);
  // const handleClick=()=>{
  //   setopen(true);
  // }
   
  

  
     useEffect(() => {
      const fetchCategoryDetails = async () => {
        try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0895&lng=80.2739&collection=${id}&tags=layout_CCS_${text}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
          );
          const json = await response.json();

          

          // Safely find the restaurants array
          const restaurants =
            json?.data?.cards
              ?.map((card) => card?.card?.card?.info)
              ?.filter((item) => item !== undefined) || []

            console.log(restaurants);

          setCategoryData(restaurants);
        } catch (err) {
          console.error("Error fetching category details:", err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCategoryDetails();
    }, [id, text]);

    if (loading) {
      return <p style={{ textAlign: "center" }}>Loading category details...</p>;
    }

    if (!categoryData && categoryData.length === 0) {
      return (
        <p style={{ textAlign: "center", padding: "20px" }}>
          No restaurants found for this category.
        </p>
      );
    }



  return (

    <div className="food-details">
      <div className="foodnavbar">
        <div className="foodnavimg">
                   <Link to="/"><img src="/swiggy-transparent-icon-free-png.webp"/></Link>
                </div>
                <div className="foodnavbarheader">
                </div>
                <Link><IoMdSearch style={{fontSize:"20px"}}/> Search</Link>
                <Link><BiSolidOffer style={{fontSize:"20px"}}/> Orders</Link>
                <Link to="/help"><FaHandsHelping style={{fontSize:"20px"}}/> Help</Link>
               <Link to="/Cart"><BsCartCheck style={{fontSize:"20px"}}/> Cart</Link>

      </div>
    <div className="food-detailshead">
        <h2>{text}</h2>
       </div>
       <div className="restaurant-list">
        {categoryData.map((rest) => (
          <Link 
          
    to={`/menu/${rest.cuisines?.[0]?.toLowerCase()||"biryani"}`} 
    key={rest.id} 
    style={{textDecoration:"none", color:"inherit"}}
  >
            <div key={rest.id} className="restaurant-card">
              <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${rest?.cloudinaryImageId}`} alt={rest?.name || "restaurant"} className="imageStyles"/>
              <h3>Restaurant Name:{rest?.name}</h3>
              <p>
                Cuisines:{" "}
                {rest?.cuisines?.length > 0
                  ? rest.cuisines.join(", ")
                  : "N/A"}
              </p>
              <p>Average Rating: {rest?.avgRating}</p>
              <p>
                Cost for Two: 
                {rest?.costForTwo}
              </p>
        
            </div>
            </Link>
          ))}
        </div>
      {/* {open && <div className="overlay2"></div>}
            <div className={`side-panel2 ${open ? "open" : ""}`}>
                <button className="close-btn2" onClick={() => setopen(false)}>×</button>
                <div className="overlay-container">
                  <input type="text" placeholder="Search for area,Street name..."/>
                </div>
                <div className="overlay-container2">
                    <h1><MdMyLocation style={{fontSize:"20px"}}/>Get Current Location</h1>
                </div>
            </div> */}
      <div className="footerofdetails"><Footer/></div>
    </div>
    
  );
}

export default FoodDetails;
