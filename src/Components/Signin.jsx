import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


const Signin = ({ setShowSignup,setopen }) => {
  // const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-menu-api-1.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();
      console.log("Login Response:", data); // debugging

      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        // navigate("/Home");
        setopen(false)
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className="signinmain">
        <div className="login-container">
          <h2>Login</h2>
          <p>
            or{" "}
            <span
              className="highlight"
              onClick={() => setShowSignup(true)}
              style={{ cursor: "pointer" }}
            >
              Create an account
            </span>
          </p>
        </div>

        <div className="image">
          <img src="/Image-login_btpq7r.avif" alt="login logo" />
        </div>
      </div>

      <form className="signup-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Signin;
