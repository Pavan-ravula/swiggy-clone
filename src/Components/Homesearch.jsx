// Home.jsx
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

const Homesearch = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4564737&lng=78.3763512&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const res = await fetch(api);
    const json = await res.json();

    const items =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(items);
    setFilteredData(items);
  };

  // Filter whenever search text changes
  useEffect(() => {
    const filtered = restaurants.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchText, restaurants]);

  return (
    <div>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />

      <div className="restaurant-list">
        {filteredData.map((res) => (
          <div key={res.info.id} className="card">
            <h3>{res.info.name}</h3>
            <p>{res.info.cuisines.join(", ")}</p>
            <p>⭐ {res.info.avgRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homesearch;
