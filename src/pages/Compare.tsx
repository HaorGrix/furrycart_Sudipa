import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { mockProducts } from '../data/mockData';
import { Trash2 } from 'lucide-react';
import './Compare.css';

const Compare = () => {
  const { compareList, toggleCompare, addToCart } = useAppContext();
  const products = mockProducts.filter(p => compareList.includes(p.id));

  if (products.length === 0) {
    return (
      <div className="container empty-state" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>No Products to Compare</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Add products to your compare list to see them side-by-side.</p>
        <Link to="/" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="page-title">Compare Products</h1>
      
      <div className="compare-table-wrapper">
        <table className="compare-table">
          <tbody>
            {/* Basic Info */}
            <tr className="compare-row-header">
              <th>Product</th>
              {products.map(p => (
                <td key={p.id}>
                  <div className="compare-item-card">
                    <button className="remove-compare" onClick={() => toggleCompare(p.id)}>
                      <Trash2 size={16} />
                    </button>
                    <img src={p.image} alt={p.name} />
                    <Link to={`/product/${p.id}`} className="compare-title">{p.name}</Link>
                    <span className="compare-price">${p.price.toFixed(2)}</span>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => addToCart(p, 1, false)}
                      style={{ marginTop: '10px', padding: '6px 12px', fontSize: '0.9rem' }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </td>
              ))}
            </tr>

            {/* Features */}
            <tr>
              <th>Brand</th>
              {products.map(p => <td key={p.id}>{p.brand}</td>)}
            </tr>
            <tr>
              <th>Category</th>
              {products.map(p => <td key={p.id}>{p.category}</td>)}
            </tr>
            <tr>
              <th>Rating</th>
              {products.map(p => <td key={p.id}>{p.rating} / 5.0 ({p.reviews} reviews)</td>)}
            </tr>
            <tr>
              <th>Suitable For</th>
              {products.map(p => <td key={p.id}>{p.suitableFor.join(', ')}</td>)}
            </tr>
            <tr>
              <th>Subscription Eligible</th>
              {products.map(p => <td key={p.id}>{p.subscriptionEligible ? 'Yes (Save 15%)' : 'No'}</td>)}
            </tr>
            <tr>
              <th>In Stock</th>
              {products.map(p => <td key={p.id}>{p.stock} units</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
