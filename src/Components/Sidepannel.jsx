import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./Swiggy.css";

const Sidepannel = ({ open, setOpen }) => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className={`side-panel ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setOpen(false)}> × </button>

      {showSignup ? (
        <Signup setShowSignup={setShowSignup} />
      ) : (
        <Signin setShowSignup={setShowSignup} />
      )}
    </div>
  );
};

export default Sidepannel;
