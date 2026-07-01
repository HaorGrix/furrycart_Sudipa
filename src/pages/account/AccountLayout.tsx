import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, PawPrint, Package, CalendarSync, LogOut } from 'lucide-react';
import './AccountLayout.css';

const AccountLayout = () => {
  return (
    <div className="container section account-layout">
      <aside className="account-sidebar">
        <div className="account-profile-summary">
          <div className="avatar">JD</div>
          <div>
            <h3>Jane Doe</h3>
            <p>jane.doe@example.com</p>
          </div>
        </div>

        <nav className="account-nav">
          <NavLink to="/account" end className={({isActive}) => isActive ? 'active' : ''}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/account/pets" className={({isActive}) => isActive ? 'active' : ''}>
            <PawPrint size={20} /> My Pets Profile
          </NavLink>
          <NavLink to="/account/orders" className={({isActive}) => isActive ? 'active' : ''}>
            <Package size={20} /> Orders
          </NavLink>
          <NavLink to="/account/subscriptions" className={({isActive}) => isActive ? 'active' : ''}>
            <CalendarSync size={20} /> Subscriptions
          </NavLink>
          <button className="logout-btn">
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>
      
      <main className="account-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AccountLayout;
