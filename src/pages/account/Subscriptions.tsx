import React from 'react';
import { CalendarSync, Settings } from 'lucide-react';
import toast from 'react-hot-toast';
import MockModal from '../../components/MockModal';

const Subscriptions = () => {
  const [isManageOpen, setIsManageOpen] = React.useState(false);
  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>My Subscriptions</h2>
      
      <div style={{ border: '1px solid var(--primary-color)', borderRadius: 'var(--border-radius-md)', padding: '20px', backgroundColor: 'rgba(255, 107, 53, 0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '15px' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: 'var(--border-radius-sm)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=200" alt="Dog Food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Premium Grain-Free Kibble</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Delivery: Every 30 days</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Next Delivery: <strong>Nov 24, 2023</strong></p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: '#e8f5e9', color: 'var(--success-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>Active</span>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$39.09 <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 'normal' }}>(Saved 15%)</span></p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => toast.success('Next delivery skipped successfully!')}>
            <CalendarSync size={16} /> Skip Next Delivery
          </button>
          <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsManageOpen(true)}>
            <Settings size={16} /> Manage Subscription
          </button>
        </div>
      </div>


      <MockModal isOpen={isManageOpen} onClose={() => setIsManageOpen(false)} title="Manage Subscription">
        <p>This is a mock modal for managing the subscription.</p>
        <p>You can change frequency, quantity, or cancel the subscription from here.</p>
      </MockModal>
    </div>
  );
};

export default Subscriptions;
