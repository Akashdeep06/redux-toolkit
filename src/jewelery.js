import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './slices/jewelerySlice';
import "./MyComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { addItem } from "./slices/cartSlice"; // Import addItem action from cartSlice
import { Link } from "react-router-dom";

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [expandedIds, setExpandedIds] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const cartItems = useSelector((state) => state.cart.cartnew);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggleDescriptionExpansion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      // If the item does not exist in the cart, add it
      dispatch(addItem({ newItem: item, quantity: itemQuantities[item.id] || 1 }));
    } else {
      // If the item already exists in the cart, show a message or handle it as needed
      alert("This item is already in the cart.");
    }
  };
  

  // Handle quantity change for an item
  const handleQuantityChange = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="row row-cols-md-4 g-4">
        {data &&
          data.map((item) => (
            <div key={item.id} className="col">
              <div
                className="card border-light"
                style={{ width: "18rem", height: "100%" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: "contain", height: "200px" }}
                />
                <div className="card-body">
                  {/* Add onClick event handler to call handleAddToCart */}
                  <Link to="/cart">
                    <button
                      onClick={() => handleAddToCart(item)}
                      type="button"
                      className="btn btn-sm mb-2"
                      style={{
                        backgroundColor: "rgba(144, 238, 144, 0.288)",
                        color: "lightgreen",
                        border: "none",
                      }}
                    >
                      Add item
                    </button>
                  </Link>
                  <div style={{ marginRight: "auto" }}>
                    Quantity:
                    <input
                      type="number"
                      style={{ width: "50px", marginLeft: "5px" }}
                      value={itemQuantities[item.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                  <p>${item.price}</p>
                  <p
                    className="card-text text-muted"
                    style={{
                      fontSize: "0.8rem",
                      whiteSpace: expandedIds.includes(item.id)
                        ? "normal"
                        : "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    onClick={() => toggleDescriptionExpansion(item.id)}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="row">{/* Your star rating code */}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyComponent;
