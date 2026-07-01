import React from 'react';
import { X } from 'lucide-react';
import './MockModal.css';

interface MockModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const MockModal: React.FC<MockModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="mock-modal-overlay" onClick={onClose}>
      <div className="mock-modal-content" onClick={e => e.stopPropagation()}>
        <div className="mock-modal-header">
          <h3>{title}</h3>
          <button className="btn-icon" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="mock-modal-body">
          {children}
        </div>
        <div className="mock-modal-footer">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onClose}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default MockModal;
