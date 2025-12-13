import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import FoodDetails from './Components/FoodDetails';
import Home from './Components/Home';
import Partner from './Components/Partner';
import Help from './Components/Help';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Success from './Components/Success';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Food/>}/>
          <Route path="/category/:id/:text" element={<FoodDetails/>} />
          <Route path="/menu/:cuisines" element={<Menu />} />
          <Route path="/item" element={<Partner/>} />
          <Route path="/help" element={<Help />} /> 
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
<Route path="/payment" element={<Payment />} />
<Route path="/success" element={<Success />} />
<Route path='/Signin' element={<Signin/>} />
<Route path='/Signup' element={<Signup/>} />

        </Routes>
      </div>
  );
}

export default App;

