import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext';


function Cart() {
  
  const{cartItems,food_list,removeFromCart} = useContext(StoreContext);

  return (
    <div className='card'>
       <div className='card-items'>
          <div className='card-items-title'>
             <p>Items</p>
             <p>Title</p>
             <p>Price</p>
             <p>Quantity</p>
             <p>Total</p>
             <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
             if(cartItems[NavItem._id]>0)
              {
                return (
                  <div className='cart-itemd-title cart-items-item'>
                      <p>{item.name}</p>
                  </div>
                )
              }
          })}
       </div>
    </div>
  )
}

export default Cart