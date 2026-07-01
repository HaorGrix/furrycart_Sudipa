import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, Phone, Mail, Truck, Dog, Cat, Bird, Fish, Rabbit, PackageSearch, GitCompare, Home } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import AuthModal from './AuthModal';
import toast from 'react-hot-toast';
import './Header.css';

const Header = () => {
  const { cart, user, logout } = useAppContext();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccountClick = () => {
    if (user) {
      navigate('/account');
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <>
      <div className="top-contact-bar">
        <div className="container top-contact-container">
          <div className="contact-info-items">
            <span className="contact-item">
              <Phone size={14} /> Call Us: <strong>+1-800-PET-LOVE</strong>
            </span>
            <span className="contact-item">
              <Mail size={14} /> Email: <strong>support@furrycart.com</strong>
            </span>
          </div>
          <div className="top-bar-links">
            <Link to="/track-order" className="top-bar-link highlight-track">
              <Truck size={14} /> Track Order
            </Link>
            <span className="top-bar-separator">|</span>
            {user ? (
              <>
                <span className="top-bar-link">Hi, {user.name}</span>
                <span className="top-bar-separator">|</span>
                <span className="top-bar-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Sign Out
                </span>
              </>
            ) : (
              <span className="top-bar-link" onClick={() => setIsAuthOpen(true)} style={{ cursor: 'pointer' }}>
                Sign In / Sign Up
              </span>
            )}
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-container">
          <div className="left-header-group">
            <div className="logo-container">
              <Menu className="mobile-menu-icon" />
              <Link to="/" className="logo">
                <span style={{ color: 'var(--primary-color)' }}>Furry</span>Cart
              </Link>
            </div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search for pet supplies..." />
            <button className="search-btn">
              <Search size={18} />
            </button>
          </div>

          <div className="header-actions">
            {location.pathname !== '/' && (
              <Link to="/" className="icon-link icon-with-text" title="Home">
                <Home size={24} />
                <span className="icon-text">Home</span>
              </Link>
            )}
            <Link to="/compare" className="icon-link icon-with-text" title="Compare">
              <GitCompare size={24} />
              <span className="icon-text">Compare</span>
            </Link>
            <button onClick={handleAccountClick} className="icon-link icon-btn icon-with-text" title="Account">
              <User size={24} />
              <span className="icon-text">Profile</span>
            </button>
            <Link to="/wishlist" className="icon-link icon-with-text" title="Wishlist">
              <Heart size={24} />
              <span className="icon-text">Wishlist</span>
            </Link>
            <Link to="/cart" className="icon-link cart-link icon-with-text" title="Shopping Cart">
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={24} />
                <span className="cart-count">{cart.length}</span>
              </div>
              <span className="icon-text">Cart</span>
            </Link>
          </div>
        </div>
      </header>
      
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
