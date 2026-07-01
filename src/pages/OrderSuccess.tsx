import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="container section" style={{ textAlign: 'center', padding: '100px 20px', maxWidth: '600px' }}>
      <CheckCircle size={80} color="var(--success-color)" style={{ margin: '0 auto 30px' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Order Confirmed!</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
        Thank you for your purchase. We've received your order and are getting it ready to ship. 
        You will receive an email confirmation shortly with your tracking number.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/account/orders" className="btn btn-outline">View Order</Link>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
