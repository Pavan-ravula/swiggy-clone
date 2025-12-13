import { useState, useRef } from "react";
import "./Swiggy.css";
import Footer from "./Footer";
import Food from "./Food";
import Bestrestuarants from "./Bestrestuarants";
import Appdownloadbanner from "./Appdownloadbanner";
import Sidepannel from "./Sidepannel";
// import Homesearch from "./Homesearch";

const Home = () => {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home">
        <div className="homenav">
          <div className="headimage">
            <img src="/swiggy_logo_white.avif" alt="swiggy logo" />
          </div>

          <a href="/item" target="_blank" rel="noopener noreferrer">
            partner with us
          </a>

          <button className="btn1" onClick={handleScroll}>
            Get App
          </button>

          <button className="btn2" onClick={() => setOpen(true)}>
            Sign-In
          </button>
        </div>

        <div className="homeitems">
          <div className="homehead">
            <h1>Order food & groceries. Discover</h1>
            <h1>best restaurants. Swiggy it!</h1>
          </div>

          <div className="location">
            <input
              type="text"
              placeholder="Search for restuarant,item or more"
              className="input2"
            />
            {/* <Homesearch/> */}
          </div>

          <div className="homecards">
            <img src="/swiggy1.avif" alt="banner1" />
            <img
              src="/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.avif"
              alt="banner2"
            />
          </div>
        </div>
      </div>

      {open && <div className="overlay"></div>}

      {/* Login / Signup Side Panel */}
      <Sidepannel open={open} setOpen={setOpen} />

      <Food />
      <Bestrestuarants />
      <Appdownloadbanner ref={sectionRef} />
      <Footer />
    </>
  );
};

export default Home;
