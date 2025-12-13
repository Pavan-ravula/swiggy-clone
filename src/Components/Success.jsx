import Footer from "./Footer";
// import Menunavbar from "./Menunavbar";
import Cartnavbar from "./Cartnavbar";
import './Success.css';

function Success() {
  return (
    <div className="success-section">
      <div className="successnav">
        <Cartnavbar/>
      </div>
      <div className="success-container">
      <h1>Order Successful 🎉</h1>
      <p>Your food will be delivered soon!</p>
    </div>
    <Footer/>
    </div>
  );
}

export default Success;
