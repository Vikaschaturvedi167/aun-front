// import React, { useState, useEffect } from 'react';

// const CheckoutPage = () => {
//   const [address, setAddress] = useState({
//     name: '',
//     phoneNo: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: '',
//   });
//   const [savedAddress, setSavedAddress] = useState(null);
//   const [addresses, setAddresses] = useState([]);

//   useEffect(() => {
//     fetchSavedAddresses();
//   }, []);

//   const fetchSavedAddresses = async () => {
//     try {
//       const userId = localStorage.getItem('userId');
//       const response = await fetch(`http://localhost:5000/api/addresses/${userId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setAddresses(data);
//       } else {
//         console.error('Failed to fetch addresses:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching addresses:', error);
//     }
//   };

//   const handleAddressSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userId');
//       const response = await fetch('http://localhost:5000/api/addresses', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...address, userId }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setSavedAddress(data);
//         setAddress({
//           name: '',
//           phoneNo: '',
//           addressLine1: '',
//           addressLine2: '',
//           city: '',
//           state: '',
//           postalCode: '',
//           country: '',
//         });
//         fetchSavedAddresses();
//       } else {
//         console.error('Failed to save address:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error saving address:', error);
//     }
//   };

//   const handleDeleteAddress = async (addressId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/addresses/${addressId}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         fetchSavedAddresses();
//       } else {
//         console.error('Failed to delete address:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error deleting address:', error);
//     }
//   };

//   return (
//     <div className="checkout-container">
//       <div className="address-section">
//         <h2>Shipping Address</h2>
//         <p>*Please save only one address at a time*</p>
//         <form onSubmit={handleAddressSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Full Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={address.name}
//               onChange={(e) => setAddress({ ...address, name: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNo">Phone Number:</label>
//             <input
//               type="text"
//               id="phoneNo"
//               value={address.phoneNo}
//               onChange={(e) => setAddress({ ...address, phoneNo: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="addressLine1">Address Line 1:</label>
//             <input
//               type="text"
//               id="addressLine1"
//               value={address.addressLine1}
//               onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="addressLine2">Address Line 2:</label>
//             <input
//               type="text"
//               id="addressLine2"
//               value={address.addressLine2}
//               onChange={(e) => setAddress({ ...address, addressLine2: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input
//               type="text"
//               id="city"
//               value={address.city}
//               onChange={(e) => setAddress({ ...address, city: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State:</label>
//             <input
//               type="text"
//               id="state"
//               value={address.state}
//               onChange={(e) => setAddress({ ...address, state: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="postalCode">Postal Code:</label>
//             <input
//               type="text"
//               id="postalCode"
//               value={address.postalCode}
//               onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="country">Country:</label>
//             <input
//               type="text"
//               id="country"
//               value={address.country}
//               onChange={(e) => setAddress({ ...address, country: e.target.value })}
//               required
//             />
//           </div>
//           <button type="submit">Save Address</button>
//         </form>
//         {savedAddress && (
//           <div className="saved-address">
//             <h3>Saved Address:</h3>
//             <p>{`${savedAddress.name}, ${savedAddress.addressLine1}, ${savedAddress.city}, ${savedAddress.state}, ${savedAddress.country}`}</p>
//             <button onClick={() => handleDeleteAddress(savedAddress._id)}>Delete Address</button>
//           </div>
//         )}
//         <div className="address-list">
//           <h3>Saved Addresses</h3>
//           <ul>
//             {addresses.map((address) => (
//               <li key={address._id}>
//                 <p>{`${address.name}, ${address.addressLine1}, ${address.city}, ${address.state}, ${address.country}`}</p>
//                 <button onClick={() => handleDeleteAddress(address._id)}>Delete Address</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Styling/Checkout.css";

const CheckoutPage = () => {
  
  const totalPrice = localStorage.getItem('totalPrice');
  const userEmail = localStorage.getItem("userEmail");

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState({
    name: '',
    phoneNo: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    email: userEmail, 
  });
  const [savedAddress, setSavedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    fetchSavedAddresses();
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const fetchSavedAddresses = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch(`http://localhost:5000/api/addresses/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      } else {
        console.error('Failed to fetch addresses:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('http://localhost:5000/api/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...address, userId }),
      });
      if (response.ok) {
        const data = await response.json();
        setSavedAddress(data);
        setAddress({
          name: '',
          phoneNo: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          email: userEmail, 
        });
        localStorage.setItem('userAddress', JSON.stringify(data));
        fetchSavedAddresses();
      } else {
        console.error('Failed to save address:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/addresses/${addressId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchSavedAddresses();
      } else {
        console.error('Failed to delete address:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  }

  const handlePayment = async () => {
    try {
      const products = cartItems.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      }));
    
      const response = await axios.post('http://localhost:5000/payment/checkout', {
        products,
        amount: totalPrice,
        Email: userEmail,
        
      });

      if (response.status === 200) {
        const data = response.data;
        const options = {
          key: 'rzp_test_v9D2YBoLpGMqBA',
          amount: data.amount,
          currency: 'INR',
          name: 'Aunherbal',
          description: 'Payment for your order',
          order_id: data.order.id,
          handler: function (response) {
            console.log('Payment successful:', response);
            verifyPayment(response.razorpay_order_id, response.razorpay_payment_id);
          },
          prefill: {
            name: address.name,
            email: userEmail,
            contact: address.phoneNo,
          },
          theme: {
            color: '#F37254',
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        console.error('Failed to initiate payment:', response.statusText);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  
  const verifyPayment = async (razorpay_order_id, razorpay_payment_id) => {
    try {
      const response = await axios.post('http://localhost:5000/payment/verification', {
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id,
      });
  
      if (response.status === 200) {
        const data = response.data;
        setVerificationResult(data);
      } else {
        console.error('Failed to verify payment:', response.statusText);
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
    }
  };
  


  
  return (
    <div className="checkout-container">
       <div className="address-section">
        <h2 >Shipping Address</h2>
        <p>*Please save only one address at a time*</p>
      <form onSubmit={handleAddressSubmit}>
      
      <h2>Email: {userEmail}</h2>
      <div className='handle_form'>
         <div className="form-group">
           <label htmlFor="name">Full Name:</label>

          <input
              type="text"
              id="name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="text"
              id="phoneNo"
              value={address.phoneNo}
              onChange={(e) => setAddress({ ...address, phoneNo: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1:</label>
            <input
              type="text"
              id="addressLine1"
              value={address.addressLine1}
              onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2:</label>
            <input
              type="text"
              id="addressLine2"
              value={address.addressLine2}
              onChange={(e) => setAddress({ ...address, addressLine2: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={address.country}
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
              required
            />
          </div>
          <button type="submit" className='sub'>Save Address</button>
          </div>
        </form>

        
        
        <div className="address-list">
          <h3 style={{color:'green'}}>Saved Addresses</h3>
          <ul>
            {addresses.map((address) => (
              <li key={address._id}>
              <div className='save_data'>
                <p>{`${address.name}, ${address.addressLine1}, ${address.city}, ${address.state}, ${address.country},  ${address.postalCode}, ${address.phoneNo},`}</p>
                </div>
                <button onClick={() => handleDeleteAddress(address._id)} className='sub'>Delete Address</button>
              </li>
            ))}
          </ul>
        </div>
    </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        
        <div className="total-price">Total Price: ₹{totalPrice}</div>
        <button onClick={handlePayment} className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
