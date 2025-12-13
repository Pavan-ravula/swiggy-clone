import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeItem, clearCart } from '../store/Cartslice';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
// import Menunavbar from './Menunavbar';
import Cartnavbar from './Cartnavbar';

function Cart() {
    // const navigate=useNavigate();
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // TODO: implement checkout or navigate to checkout page
    alert('Proceed to checkout (implement)');
    navigate('/Checkout',{ state: {
      items: cart.items,
      totalPrice: cart.totalPrice,
      totalQty: cart.totalQty
    } })
  };

  return (
    <div className='maincart'>
    <div className="navcart">
        <Cartnavbar/>
    </div>
    <div className="cart-page">
      
      {cart.items.length === 0 ? (
        
         <div className='emptycart'>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/')}>Go to Menu</button>
        </div>
        
      ) : (
        <>
          <div className="cart-list">
            {cart.items.map(item => (
              <div key={item._id} className="cart-item">
                <img src={item.img || '/placeholder.png'} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  <div className="qty-controls">
                    <button onClick={() => dispatch(decrementQty(item._id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQty(item._id))}>+</button>
                  </div>
                </div>
                <div>
                  <button onClick={() => dispatch(removeItem(item._id))}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Total items: {cart.totalQty}</p>
            <p>Total price: ₹{cart.totalPrice.toFixed(2)}</p>
           <button className="checkout-btn" onClick={handleCheckout}>
  Checkout
</button>

<button className="clear-btn" onClick={() => dispatch(clearCart())}>
  Clear Cart
</button>

          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Cart;
