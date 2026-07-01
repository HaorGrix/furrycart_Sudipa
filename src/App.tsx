import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Compare from './pages/Compare';
import AccountLayout from './pages/account/AccountLayout';
import Dashboard from './pages/account/Dashboard';
import MyPets from './pages/account/MyPets';
import Orders from './pages/account/Orders';
import Subscriptions from './pages/account/Subscriptions';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import OrderSuccess from './pages/OrderSuccess';
import TermsConditions from './pages/TermsConditions';
import TrackOrder from './pages/TrackOrder';
import LiveChat from './components/LiveChat';
import Sidebar from './components/Sidebar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Header />
        <div className="main-content-wrapper" style={{ flex: 1, display: 'flex', minWidth: 0 }}>
          <Sidebar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Category />} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/track-order" element={<TrackOrder />} />
            
            <Route path="/account" element={<AccountLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="pets" element={<MyPets />} />
              <Route path="orders" element={<Orders />} />
              <Route path="subscriptions" element={<Subscriptions />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
        <LiveChat />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
        </div>
      </div>
    </Router>
  );
}

export default App;
