import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styling/cart.css"; // Import CSS file for styling
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:5000/api/cart/cart-items/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data);
      calculateTotalPrice(response.data); // Calculate total price separately
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      if (item.productId && item.productId.price) {
        return acc + (item.productId.price * item.quantity);
      }
      return acc;
    }, 0);
    setTotalPrice(total);
    localStorage.setItem('totalPrice', total);
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/cart/update-cart-item-quantity`, { userId, productId, quantity: newQuantity }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchCartItems();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.productId && item.productId._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    updateQuantity(productId, updatedCartItems.find(item => item.productId && item.productId._id === productId).quantity);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.productId && item.productId._id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    updateQuantity(productId, updatedCartItems.find(item => item.productId && item.productId._id === productId).quantity);
  };

  const removeCartItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/cart/remove-from-cart/${userId}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchCartItems();
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", totalPrice);
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 id="head">Cart Items</h1>
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              <div className="product-image">
                {item.productId && item.productId.picture && (
                  <img src={item.productId.picture} alt={item.productId.name} />
                )}
              </div>
              <div className="product-details">
                <div className="product-name">{item.productId ? item.productId.name : 'Product Name Not Available'}</div>
                <div className="product-price">Price: ₹{item.productId && item.productId.price ? item.productId.price : 'Price Not Available'}</div>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.productId._id)} disabled={item.quantity === 1 || !item.productId}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.productId._id)} disabled={!item.productId}>+</button>
                </div>
                <div className="total-price">Total Price: ₹{item.productId && item.productId.price ? item.productId.price * item.quantity : 'Total Price Not Available'}</div>
                <button onClick={() => removeCartItem(item.productId._id)} className="remove">Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price-container">
          <h3> Grand Total: ₹{totalPrice}</h3>
          <Link to="/Checkout">
            <button className="checkout-cart" onClick={handleCheckout}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
