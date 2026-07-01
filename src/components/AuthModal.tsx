import React, { useState } from 'react';
import { Mail, Lock, User, X, LogIn, UserPlus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [petName, setPetName] = useState('');
  
  const { login } = useAppContext();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !nameInput)) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    if (isLogin) {
      // Use email prefix as name if login
      login(email.split('@')[0], email);
      toast.success('Logged in successfully!');
      onClose();
    } else {
      login(nameInput, email);
      toast.success('Account created successfully! Welcome to FurryCart.');
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-tabs">
          <button 
            className={`modal-tab ${isLogin ? 'active' : ''}`} 
            onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
          >
            <LogIn size={18} /> Sign In
          </button>
          <button 
            className={`modal-tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
          >
            <UserPlus size={18} /> Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <h3>{isLogin ? 'Welcome Back!' : 'Join the FurryCart Family'}</h3>
          <p className="modal-subtitle">
            {isLogin ? 'Access your pet profiles and subscriptions' : 'Create an account to track orders and save pet profiles'}
          </p>

          {!isLogin && (
            <div className="input-group">
              <label className="input-label"><User size={16} /> Full Name *</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Enter your name" 
                value={nameInput} 
                onChange={(e) => setNameInput(e.target.value)} 
                required 
              />
            </div>
          )}

          <div className="input-group">
            <label className="input-label"><Mail size={16} /> Email Address *</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="you@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label className="input-label"><Lock size={16} /> Password *</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label className="input-label">🐾 Pet's Name (Optional)</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="e.g. Max, Bella" 
                value={petName} 
                onChange={(e) => setPetName(e.target.value)} 
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full" style={{ marginTop: '10px', width: '100%' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
