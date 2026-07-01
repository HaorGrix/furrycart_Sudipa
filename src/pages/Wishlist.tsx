import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useAppContext();
  
  const wishlistProducts = mockProducts.filter(p => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="container empty-state" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <img src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=400" alt="Empty Wishlist" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 30px' }} />
        <h2>Your wishlist is empty</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Save your favorite items here to buy them later.</p>
        <Link to="/" className="btn btn-primary">Discover Products</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Your Wishlist ({wishlist.length})</h1>
      <div className="product-grid">
        {wishlistProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
