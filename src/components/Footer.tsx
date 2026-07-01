import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title"><span style={{ color: 'var(--primary-color)' }}>Furry</span>Cart</h3>
          <p className="footer-desc" style={{ marginBottom: '15px' }}>
            Everything your pet loves, delivered right to your door. Join our family today!
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon fb" title="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon ig" title="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon yt" title="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon tt" title="TikTok">
              {/* Custom SVG for TikTok */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.2 1.22 1.25 2.89 1.86 4.6 1.9v3.8c-1.78-.02-3.52-.64-4.83-1.84-.04 2.87-.02 5.75-.03 8.62-.05 2.01-.64 4.07-1.92 5.62-1.63 2.12-4.24 3.32-6.93 3.25-2.73-.02-5.41-1.39-6.85-3.71-1.78-2.68-1.57-6.52.54-8.98 1.48-1.86 3.75-2.88 6.13-2.83.01 1.29-.02 2.58.01 3.86-1.3-.09-2.67.4-3.46 1.47-.93 1.18-.89 3.03.09 4.1.91 1.08 2.45 1.44 3.73.9 1.12-.41 1.82-1.5 1.84-2.7.01-4.29.02-8.58.02-12.87-.02-.13-.01-.26-.03-.39z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Shop By Pet</h4>
          <ul className="footer-links">
            <li><Link to="/category/Dogs">🐶 Dogs</Link></li>
            <li><Link to="/category/Cats">🐱 Cats</Link></li>
            <li><Link to="/category/Birds">🐦 Birds</Link></li>
            <li><Link to="/category/Fish">🐠 Fish</Link></li>
            <li><Link to="/category/Small Pets">🐹 Small Pets</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Store Info & Location</h4>
          <div className="footer-contact-info">
            <p className="contact-info-line">
              <MapPin size={16} /> 
              <span>
                <strong>Main Store:</strong><br />
                123 Pet Wellness Blvd, Suite A<br />
                New York, NY 10001
              </span>
            </p>
            <p className="contact-info-line">
              <Clock size={16} />
              <span>
                <strong>Hours:</strong><br />
                Mon - Sun: 8 AM - 8 PM
              </span>
            </p>
            <p className="contact-info-line">
              <Phone size={16} />
              <span><strong>Phone:</strong> +1-800-PET-LOVE</span>
            </p>
            <p className="contact-info-line">
              <Mail size={16} />
              <span><strong>Email:</strong> support@furrycart.com</span>
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Links & Policies</h4>
          <ul className="footer-links" style={{ marginBottom: '15px' }}>
            <li><Link to="/track-order">📦 Track Order</Link></li>
            <li><Link to="/terms">📜 Terms & Conditions</Link></li>
            <li><Link to="/wishlist">❤️ My Wishlist</Link></li>
            <li><Link to="/compare">🔄 Compare Products</Link></li>
          </ul>
          <h4 className="footer-subtitle" style={{ fontSize: '1rem', marginBottom: '10px' }}>Join Our Newsletter</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="newsletter-input" style={{ padding: '8px 12px' }} />
            <button type="submit" className="btn btn-primary newsletter-btn" style={{ padding: '8px' }}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} FurryCart. All rights reserved.</p>
          <div className="payment-methods">
            <span className="payment-title">Secure Payments:</span>
            <div className="payment-logos">
              <span className="payment-badge visa" title="Visa">Visa</span>
              <span className="payment-badge mc" title="Mastercard">Mastercard</span>
              <span className="payment-badge paypal" title="PayPal">PayPal</span>
              <span className="payment-badge applepay" title="Apple Pay">Apple Pay</span>
              <span className="payment-badge googlepay" title="Google Pay">Google Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
