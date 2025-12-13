import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setShowSignup }) => {
  const [refferal, setRefferal] = useState(false);
  const navigate=useNavigate();

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-menu-api-1.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          name,
          email,
          referral: referralCode,
        }),
      });

      const data = await res.json();
      console.log("Signup Response:", data);

      if (data.success) {
        alert(data.message || "Signup successful! please login");
        navigate("/Signin")

        setShowSignup(true); // go to login page
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className="signinmain1">
        <div className="login-container">
          <h2>Sign Up</h2>
          <p>
            or{" "}
            <span
              className="highlight"
              onClick={() => setShowSignup(false)}
              style={{ cursor: "pointer" }}
            >
              Login to your account
            </span>
          </p>
        </div>

        <div className="image">
          <img src="/Image-login_btpq7r.avif" alt="login logo" />
        </div>
      </div>

      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p onClick={() => setRefferal(true)}>Have a referral code?</p>

        {refferal && (
          <input
            type="text"
            placeholder="Referral Code"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        )}

        <button type="submit">CONTINUE</button>

        <p>
          By signing up, I accept the Terms & Conditions & <br /> Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default Signup;
