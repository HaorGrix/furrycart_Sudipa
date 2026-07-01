import React from 'react';
import { Package } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Order History</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '15px' }}>
            <div>
              <p style={{ fontWeight: 'bold' }}>Order #12345</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Placed: Oct 24, 2023</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 'bold' }}>$45.99</p>
              <span style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: '#e8f5e9', color: 'var(--success-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.8rem', fontWeight: 'bold' }}>Delivered</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--background-color)', borderRadius: 'var(--border-radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package color="var(--text-light)" />
            </div>
            <div>
              <p style={{ fontWeight: '500' }}>Premium Grain-Free Kibble</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Qty: 1</p>
            </div>
          </div>
          
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }} onClick={() => navigate('/track-order?id=FC-12345')}>Track Package</button>
            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }} onClick={() => toast.success('Item added to cart for reorder!')}>Buy Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
