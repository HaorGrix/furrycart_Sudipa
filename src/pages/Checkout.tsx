import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Check, CreditCard, Truck, ClipboardList } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { cart, cartTotal, clearCart } = useAppContext();
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      clearCart();
      navigate('/order-success');
    }
  };

  const renderStepIndicator = () => (
    <div className="checkout-steps">
      <div className={`step ${step >= 1 ? 'active' : ''}`}>
        <div className="step-icon">{step > 1 ? <Check size={16} /> : <Truck size={16} />}</div>
        <span>Shipping</span>
      </div>
      <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`step ${step >= 2 ? 'active' : ''}`}>
        <div className="step-icon">{step > 2 ? <Check size={16} /> : <CreditCard size={16} />}</div>
        <span>Payment</span>
      </div>
      <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
      <div className={`step ${step >= 3 ? 'active' : ''}`}>
        <div className="step-icon"><ClipboardList size={16} /></div>
        <span>Review</span>
      </div>
    </div>
  );

  return (
    <div className="container section checkout-page">
      <h1 className="page-title">Checkout</h1>
      
      {renderStepIndicator()}

      <div className="checkout-layout">
        <div className="checkout-main">
          <form onSubmit={handleNext}>
            {step === 1 && (
              <div className="checkout-card">
                <h2>Shipping Address</h2>
                <div className="form-grid">
                  <div className="input-group">
                    <label className="input-label">First Name</label>
                    <input type="text" className="input-field" required defaultValue="Jane" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <input type="text" className="input-field" required defaultValue="Doe" />
                  </div>
                  <div className="input-group full-width">
                    <label className="input-label">Address</label>
                    <input type="text" className="input-field" required defaultValue="123 Pet Lane" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">City</label>
                    <input type="text" className="input-field" required defaultValue="Pawville" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Zip Code</label>
                    <input type="text" className="input-field" required defaultValue="12345" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary next-btn">Continue to Payment</button>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-card">
                <h2>Payment Method</h2>
                <div className="payment-options">
                  <label className="payment-option selected">
                    <input type="radio" name="payment" defaultChecked />
                    <CreditCard size={24} />
                    <span>Credit Card</span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" height="24" />
                  </label>
                </div>

                <div className="form-grid">
                  <div className="input-group full-width">
                    <label className="input-label">Card Number</label>
                    <input type="text" className="input-field" required placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Expiry Date</label>
                    <input type="text" className="input-field" required placeholder="MM/YY" />
                  </div>
                  <div className="input-group">
                    <label className="input-label">CVV</label>
                    <input type="text" className="input-field" required placeholder="123" />
                  </div>
                </div>
                <div className="checkout-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                  <button type="submit" className="btn btn-primary next-btn">Review Order</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="checkout-card">
                <h2>Review Your Order</h2>
                <div className="review-section">
                  <h3>Shipping To:</h3>
                  <p>Jane Doe<br/>123 Pet Lane<br/>Pawville, 12345</p>
                </div>
                <div className="review-section">
                  <h3>Payment Method:</h3>
                  <p>Credit Card ending in 4242</p>
                </div>
                <div className="checkout-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
                  <button type="submit" className="btn btn-primary next-btn">Place Order</button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.product.id} className="summary-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="summary-item-info">
                  <span className="summary-item-title">{item.product.name}</span>
                  <span className="summary-item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="summary-item-price">
                  ${((item.isSubscription ? item.product.price * 0.85 : item.product.price) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{cartTotal > 49 ? 'Free' : '$5.99'}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(cartTotal * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${(cartTotal + (cartTotal > 49 ? 0 : 5.99) + (cartTotal * 0.08)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
