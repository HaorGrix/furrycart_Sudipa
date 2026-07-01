import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Trash2, ArrowRight } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';
import './Cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useAppContext();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container empty-state">
        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" alt="Empty Cart" className="empty-state-img" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="page-title">Your Shopping Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.product.id}-${item.isSubscription}`} className="cart-item">
              <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <Link to={`/product/${item.product.id}`} className="cart-item-title">
                  {item.product.name}
                </Link>
                {item.isSubscription && (
                  <span className="subscription-badge">Subscribe & Save 15%</span>
                )}
                <div className="cart-item-price">
                  ${(item.isSubscription ? item.product.price * 0.85 : item.product.price).toFixed(2)}
                </div>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className="btn btn-icon remove-btn"
                  onClick={() => {
                    removeFromCart(item.product.id);
                    toast.success('Item removed from cart');
                  }}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
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

          <div className="input-group coupon-group">
            <input type="text" placeholder="Promo Code" className="input-field" />
            <button className="btn btn-outline">Apply</button>
          </div>

          <button 
            className="btn btn-primary checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="cart-recommendations section">
        <h2 className="section-title">Recommended For You</h2>
        <div className="product-grid">
          {mockProducts.slice(4, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
