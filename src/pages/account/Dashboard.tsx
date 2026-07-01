import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CalendarSync, Heart, PawPrint } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import MockModal from '../../components/MockModal';

const Dashboard = () => {
  const { user } = useAppContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Dashboard</h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
        Welcome back, {user?.name || 'Friend'}! Here's an overview of your account.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div className="stat-card" style={{ padding: '20px', backgroundColor: 'var(--background-color)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
            <Package size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>2</h3>
            <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Recent Orders</span>
          </div>
        </div>

        <div className="stat-card" style={{ padding: '20px', backgroundColor: 'var(--background-color)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: 'rgba(76, 175, 80, 0.1)', borderRadius: '50%', color: 'var(--success-color)' }}>
            <CalendarSync size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>1</h3>
            <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Active Subscription</span>
          </div>
        </div>

        <div className="stat-card" style={{ padding: '20px', backgroundColor: 'var(--background-color)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
            <PawPrint size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>1</h3>
            <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Pet Profile</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '20px' }}>
          <h3 style={{ marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Recent Order</h3>
          <p style={{ fontWeight: '500' }}>Order #12345</p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '10px' }}>Placed on Oct 24, 2023</p>
          <span style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: '#e8f5e9', color: 'var(--success-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.8rem', fontWeight: 'bold' }}>Delivered</span>
          <div style={{ marginTop: '15px' }}>
            <Link to="/account/orders" style={{ color: 'var(--primary-color)', fontWeight: '500', fontSize: '0.9rem' }}>View all orders &rarr;</Link>
          </div>
        </div>

        <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)', padding: '20px' }}>
          <h3 style={{ marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Account Details</h3>
          <p style={{ fontWeight: '500' }}>{user?.name || 'Jane Doe'}</p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '5px' }}>{user?.email || 'jane.doe@example.com'}</p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>123 Pet Lane, Pawville, 12345</p>
          <div style={{ marginTop: '15px' }}>
            <button className="btn btn-outline btn-sm" style={{ padding: '5px 10px', fontSize: '0.8rem' }} onClick={() => setIsModalOpen(true)}>Edit Profile</button>
          </div>
        </div>
      </div>

      <MockModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Profile">
        <p>This is a mock modal for your presentation!</p>
        <p>In the real app, you would be able to edit Jane Doe's details here.</p>
      </MockModal>
    </div>
  );
};

export default Dashboard;
