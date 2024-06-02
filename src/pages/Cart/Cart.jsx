import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';


function Cart() {
  
  const{cartItems,recipes,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  
  const navigate = useNavigate()
  return (
    <div className='cart'>
       <div className='cart-items'>
          <div className='cart-items-title'>
             <p>Items</p>
             <p>Title</p>
             <p>Price</p>
             <p>Quantity</p>
             <p>Total</p>
             <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            recipes.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div>
                    <div className='cart-items-title cart-items-item'>
                      <img src={`http://localhost:5000/getimage/${item.image}`} alt="" />
                      <p>{item.title}</p>
                      <p>{item.price}$</p>
                      <p>{cartItems[item._id]}</p>
                      <p>{item.price * cartItems[item._id]}$</p>
                      <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                    </div>
                    <hr />
                  </div>

                )
              }
            })}
             <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}$</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}$</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}$</b>
              </div>
            </div>
            <button onClick={() => navigate('/Order')}>PROCEED TO CHEKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have a promo code ,Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Cart