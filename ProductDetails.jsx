import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Styling/details.css"; // Import CSS file for styling
import skl from "./images/SKL.gif"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const addToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="product-details-container">
      {product ? (
        <div className="product-details">
          <img src={product.picture} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p><strong>Gender:</strong> {product.gender}</p>
            <div className="product-description">
                <span style={{ fontWeight: "bolder" }}>Description</span>:
                <ul>
                    {product.description.split('\n').map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
            <p><strong>Benefits:</strong> {product.benefits}</p>
            <p><strong>Dosage:</strong> {product.dosage}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
