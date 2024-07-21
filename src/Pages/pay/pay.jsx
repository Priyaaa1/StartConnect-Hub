import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
import './pay.scss';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51OZeOJSHKQ5UtevikLLJG3vvyhNe2XwePgVfDVvW1aalKTW1yhPJyiEg50tZJ9xldsoauRrhEfAjpdzritmEGAQ100wKhUGSSq");

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(5000); // Default amount in cents

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const backendUrl = 'http://localhost:8801';
        const response = await axios.post(`${backendUrl}/create-payment-intent`, { amount });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error creating payment intent:", err);
      }
    };

    makeRequest();
  }, [amount]);

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  if (!clientSecret) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pay">
      <label>
        Select Amount:
        <select onChange={handleAmountChange} value={amount}>
          <option value={500}>₹50.00</option>
          <option value={1000}>₹100.00</option>
          <option value={1500}>₹150.00</option>
        </select>
      </label>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Pay;
