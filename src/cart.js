import React from 'react';
import { useSelector } from 'react-redux'; 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {removeItemFromCart} from './slices/cartSlice'
 function Cart(){
    const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartnew);
// const [quantity, setQuantity] = useState(1);
const [itemQuantities, setItemQuantities] = useState({});
const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };
  function cartdata(){
    alert(JSON.stringify(cartItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };
  return (
    <>
      <ul>
      <div className="row row-cols-md-3 g-4">
        {cartItems.map((item) => (
             <div key={item.id} className="col">
             <div className="card border-light" style={{ width: '18rem', height: '100%' }}>
               <img src={item.image} className="card-img-top" alt="..." style={{ objectFit: 'contain', height: '200px' }} />
               <div className="card-body"> 
                 <h5 className="card-title" style={{ fontSize: '1rem' }}>{item.title}</h5>
                 <p>${item.price}</p>
                 <button
                        onClick={() => handleRemoveFromCart(item)}
                      type="button"
                      className="btn btn-sm mb-2"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                      }}
                    >
                      remove item
                    </button>
                    <div style={{ marginRight: "auto" }}>
                    Quantity:
                    <input
                      type="number"
                      style={{ width: "50px", marginLeft: "5px" }}
                      value={itemQuantities[item.id] || item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                 <p
                   className="card-text text-muted"
                   style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis' }}
    
                 >
                   {item.description}
              

                 </p>
               </div>
               <div className="row">
                 {item.rating.rate}
               </div>
             </div>
           </div>
            ))}
        </div>
        </ul>
        <button
                        onClick={cartdata}
                      type="button"
                      className="btn btn-sm mb-2"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                      }}
                    >
                      check items
                    </button>
        </>
  );
};

export default Cart;
