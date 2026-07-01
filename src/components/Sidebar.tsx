import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PackageSearch, Dog, Cat, Bird, Fish, Rabbit } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" style={{ paddingTop: '20px' }}>
        <Link to="/products" className={`sidebar-link ${isActive('/products')}`}>
          <PackageSearch size={20} />
          <span>Shop All</span>
        </Link>
        <Link to="/category/Dogs" className={`sidebar-link ${isActive('/category/Dogs')}`}>
          <Dog size={20} />
          <span>Dogs</span>
        </Link>
        <Link to="/category/Cats" className={`sidebar-link ${isActive('/category/Cats')}`}>
          <Cat size={20} />
          <span>Cats</span>
        </Link>
        <Link to="/category/Birds" className={`sidebar-link ${isActive('/category/Birds')}`}>
          <Bird size={20} />
          <span>Birds</span>
        </Link>
        <Link to="/category/Fish" className={`sidebar-link ${isActive('/category/Fish')}`}>
          <Fish size={20} />
          <span>Fish</span>
        </Link>
        <Link to="/category/Small Pets" className={`sidebar-link ${isActive('/category/Small Pets')}`}>
          <Rabbit size={20} />
          <span>Small Pets</span>
        </Link>
      </nav>
      
      <div className="sidebar-footer">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/track-order" className="btn btn-primary btn-sm" style={{ width: '100%' }}>Track Order</Link>
          <a href="mailto:support@furrycart.com" className="btn btn-outline btn-sm" style={{ width: '100%' }}>Need Help?</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
