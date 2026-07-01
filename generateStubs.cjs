const fs = require('fs');
const path = require('path');

const pages = [
  'Category',
  'ProductDetail',
  'Cart',
  'Checkout',
  'Wishlist',
  'Compare',
  'NotFound',
  'OrderSuccess'
];

const accountPages = [
  'AccountLayout',
  'Dashboard',
  'MyPets',
  'Orders',
  'Subscriptions'
];

const createComponent = (name) => `import React from 'react';

const ${name} = () => {
  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1>${name} Page</h1>
      <p>This is a placeholder for the ${name} page.</p>
    </div>
  );
};

export default ${name};
`;

const createAccountLayout = () => `import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <div className="container" style={{ padding: '60px 20px', display: 'flex', gap: '40px' }}>
      <aside style={{ width: '250px' }}>
        <h3>My Account</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <li><Link to="/account">Dashboard</Link></li>
          <li><Link to="/account/pets">My Pets</Link></li>
          <li><Link to="/account/orders">Orders</Link></li>
          <li><Link to="/account/subscriptions">Subscriptions</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AccountLayout;
`;

// Create pages dir
if (!fs.existsSync(path.join(__dirname, 'src', 'pages'))) {
  fs.mkdirSync(path.join(__dirname, 'src', 'pages'), { recursive: true });
}

// Create account dir
if (!fs.existsSync(path.join(__dirname, 'src', 'pages', 'account'))) {
  fs.mkdirSync(path.join(__dirname, 'src', 'pages', 'account'), { recursive: true });
}

pages.forEach(page => {
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${page}.tsx`), createComponent(page));
});

accountPages.forEach(page => {
  if (page === 'AccountLayout') {
    fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'account', `${page}.tsx`), createAccountLayout());
  } else {
    fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'account', `${page}.tsx`), createComponent(page));
  }
});

console.log('Stubs created successfully.');
