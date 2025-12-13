import React, { useEffect, useState, useRef } from "react";
import "./Food.css";
import { useNavigate } from "react-router-dom";

function Food() {
  const scrollContainerRef = useRef(null); 

const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const DisplayDetails = (id, text) => {
    navigate(`/category/${id}/${text}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4564737&lng=78.3763512&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await response.json();

        const rawCategories =
          json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

        const categories = rawCategories
          .filter(
            (item) =>
              item?.imageId &&
              item?.action?.text &&
              item?.entityId?.includes('collection_id')
          )
          .map((item) => {
            
            const match = item.entityId.match(/collection_id=(\d+)/);
            const id = match ? match[1] : '';

            return {
              id,
              text: item.action.text,
              imageId: item.imageId,
            };
          });

        setItems(categories);
      } catch (err) {
        console.error('Error fetching categories:', err.message);
      }
    };

    fetchCategories();
  }, []);


  const scrolls = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 160;
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="foodpage">
      <div className="header-container">
        <div className="header">
          <h1>Order Our Best Food Options</h1>
        </div>

       {/* Single pair of arrow buttons for the whole section */}
       <div className="scrolls-buttons">
         <button className="prev-btn" onClick={() => scrolls(-6)}>
          L
         </button>
         <button className="next-btn" onClick={() => scrolls(6)}>
          R
         </button>
       </div>
      </div>
   <div className="foodpage1" ref={scrollContainerRef}>
       {items.length > 0 ? (
          items.map((cat, index) => (
            <div
              key={index}
              className="foodcard"
              onClick={() => DisplayDetails(cat.id, cat.text)}
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`+ cat.imageId}
                alt={cat.text}
                className="category-image"
              />
              {/* <h3 className="category-name">{cat.text}</h3> */}
              
            </div>
          ))
        ) : (
           <p>Loading Categories...</p>
        )}
      </div>

   </div>
  );
}

export default Food;
