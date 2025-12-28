import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/Cartslice"; // adjust path if needed
import "./Menu.css"; // optional
import Footer from "./Footer";
import Menunavbar from "./Menunavbar";

function Menu() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cuisines } = useParams(); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`https://backend-menu-api-1.onrender.com/menu/${cuisines}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [cuisines]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading menu...</h2>;
  }

  if (items.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No items found for {cuisines}</h2>;
  }

  const addToCart = (item) => {
    // dispatch add item to store
    dispatch(addItem(item));
    alert("item added successfully....!!")
    
  }

  return (
    <div>
      <div className="menunav"><Menunavbar/></div>
      <div className="menu-container">
        <h1 className="menu-title">menu</h1>
        <div className="menu-grid">
          {items.map((item) => (
            <div className="menu-card" key={item._id}>
              <div className="menu-media">
                <img src={item.img} alt={item.name} className="menu-img" />
              </div>

              <div className="menu-body">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-serves">Serves: <span>{item.serves}</span></p>
              </div>

              <div className="menu-footer">
                <div className="menu-price">₹{item.price}</div>
                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="footerofdetails"><Footer/></div>
      </div>
    </div>
  );
}

export default Menu;
