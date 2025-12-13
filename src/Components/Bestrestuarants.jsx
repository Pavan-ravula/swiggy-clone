import React, { useEffect, useState,useRef} from "react";
import "./Bestrestuarants.css";

function Bestrestuarants() {
  const [restaurants, setRestaurants] = useState([]);
  const scrollContainerRef = useRef(null); 
  
    const fetchRestaurants = async () => {
      try {
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4565727&lng=78.3715201&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(url);
        const data = await response.json();

        // Extract top restaurants from 'top_brands_for_you' and 'restaurant_grid_listing_v2' cards
        let allRestaurants = [];
        const topBrands = data?.data?.cards?.find(
          (card) => card?.card?.card?.id === "top_brands_for_you"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const popularRestaurants = data?.data?.cards?.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        allRestaurants = [...topBrands, ...popularRestaurants]

        // Format restaurant data to match Dineout style
        const formattedRestaurants = allRestaurants.map((restaurant) => {
          const { info } = restaurant;
          return {
            id: info.id,
            name: info.name,
            rating: info.avgRating || "--",
            cuisines: info.cuisines ? info.cuisines.slice(0, 2).join(" • ") : "Multi Cuisine",
            costForTwo: info.costForTwo || "₹500 for two",
            location: info.areaName || "Hyderabad",
            distance: info.sla?.lastMileTravel ? `${info.sla.lastMileTravel} km` : "2.0 km",
            offers: [
              ...(info.aggregatedDiscountInfoV3?.header
                ? [{ text: info.aggregatedDiscountInfoV3.header, icon: true }]
                : []),
              { text: "Up to 10% off with bank offers", icon: false }
            ],
            tableBooking: true,
            special: Math.random() > 0.7 ? "GIRF SPECIAL" : null,
            imageUrl: info.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/${info.cloudinaryImageId}`
              : null
          };
        });

        setRestaurants(formattedRestaurants);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      }
    };
    useEffect(() => {
        fetchRestaurants();
    }, []);
    const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280; // 150px card + 10px gap
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="dineout-section">
      <div className="header-container">
        <div className="header">
          <h2>Discover best restaurants on Dineout</h2>
        </div>
        <div className="scroll-buttons">
           <button className="prev-btn" onClick={() => scroll(-4)}>
           L
           </button>
           <button className="next-btn" onClick={() => scroll(4)}>
            R
           </button>
       </div>
      </div>
      <div className="dineout-grid" ref={scrollContainerRef}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={`dineout-card ${restaurant.special ? 'special' : ''}`}>
            {restaurant.special && <div className="special-badge">{restaurant.special}</div>}
            <div className="restaurant-image">
              {restaurant.imageUrl ? (
                <img src={restaurant.imageUrl} alt={restaurant.name} />
              ) : (
                <div className="placeholder">🍽️</div>
              )}
            </div>
            <div className="card-content">
              <div className="header">
                <h3 className="name">{restaurant.name}</h3>
                <div className="rating">
                  {restaurant.rating} <span className="stars">★</span>
                </div>
              </div>
              <div className="cuisines">{restaurant.cuisines}</div>
              <div className="cost-location">
                <span className="cost">{restaurant.costForTwo}</span>
                <span className="location">{restaurant.location}</span>
              </div>
              <div className="distance-time">
                <span className="distance">{restaurant.distance}</span>
              </div>
              <div className="table-booking">
                <span className="table-tag">Table booking</span>
                <span className="table-tag">Table booking</span>
              </div>
              <div className="offers">
                {restaurant.offers.map((offer, index) => (
                  <div key={index} className="offer">
                    {offer.icon && <span className="offer-icon">★</span>}
                    <span className="offer-text">{offer.text}</span>
                  </div>
                ))}
                {restaurant.offers.length > 1 && (
                  <div className="more-offers">+ {restaurant.offers.length - 1} more</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestrestuarants;