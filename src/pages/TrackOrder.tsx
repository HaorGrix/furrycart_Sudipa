import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Truck, ShieldCheck, Box, PackageCheck } from 'lucide-react';
import './TrackOrder.css';

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const initialOrderId = searchParams.get('id') || '';
  const [orderId, setOrderId] = useState(initialOrderId);
  const [trackingData, setTrackingData] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const fetchTrackingData = (id: string) => {
    if (!id.trim()) {
      setTrackingData(null);
      return;
    }

    const seed = id.toUpperCase();
    let currentStep = 2; // Default: processing/shipping
    let statusText = 'In Transit';
    let deliveryDate = 'June 29, 2026';

    if (seed.includes('DELIVERED') || seed.includes('111')) {
      currentStep = 4;
      statusText = 'Delivered';
      deliveryDate = 'June 24, 2026';
    } else if (seed.includes('NEW') || seed.includes('999')) {
      currentStep = 1;
      statusText = 'Order Confirmed';
      deliveryDate = 'July 2, 2026';
    } else if (seed.includes('DELIVERY') || seed.includes('DEAL')) {
      currentStep = 3;
      statusText = 'Out for Delivery';
      deliveryDate = 'Today (By 8 PM)';
    }

    setTrackingData({
      id: orderId,
      status: statusText,
      estimatedDelivery: deliveryDate,
      carrier: 'FurryExpress Logistics',
      weight: '4.2 lbs',
      steps: [
        { title: 'Order Placed', desc: 'We received your order.', time: 'June 25, 2026 - 10:15 AM', completed: currentStep >= 1 },
        { title: 'Processing', desc: 'Item packed and ready at dispatch center.', time: 'June 25, 2026 - 2:30 PM', completed: currentStep >= 2 },
        { title: 'Shipped', desc: 'Package left sorting facility.', time: 'June 26, 2026 - 9:00 AM', completed: currentStep >= 3 },
        { title: 'Delivered', desc: 'Arrived at front porch/mailbox.', time: currentStep === 4 ? 'June 26, 2026 - 4:45 PM' : 'Pending', completed: currentStep >= 4 }
      ]
    });
  };

  useEffect(() => {
    if (initialOrderId) {
      setSearched(true);
      fetchTrackingData(initialOrderId);
    }
  }, [initialOrderId]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    fetchTrackingData(orderId);
  };

  return (
    <div className="container track-order-page section">
      <div className="track-header">
        <h1>📦 Track Your Order</h1>
        <p>Enter your FurryCart order number to trace your package in real time.</p>
      </div>

      <div className="track-search-card card">
        <form onSubmit={handleTrack} className="track-form">
          <div className="input-group-row">
            <input 
              type="text" 
              className="input-field track-input" 
              placeholder="e.g. FC-98432" 
              value={orderId} 
              onChange={(e) => setOrderId(e.target.value)} 
              required 
            />
            <button type="submit" className="btn btn-primary track-btn">
              <Search size={18} /> Locate Package
            </button>
          </div>
          <p className="track-tip">Tip: Enter "FC-111" to view a delivered order, or "FC-DEAL" to view an out-for-delivery package.</p>
        </form>
      </div>

      {searched && trackingData && (
        <div className="tracking-result-details anim-fade-in">
          <div className="tracking-summary card">
            <div className="summary-col">
              <span className="summary-label">Order ID</span>
              <span className="summary-val">{trackingData.id}</span>
            </div>
            <div className="summary-col">
              <span className="summary-label">Status</span>
              <span className="summary-val status-highlight">{trackingData.status}</span>
            </div>
            <div className="summary-col">
              <span className="summary-label">Estimated Delivery</span>
              <span className="summary-val">{trackingData.estimatedDelivery}</span>
            </div>
            <div className="summary-col">
              <span className="summary-label">Carrier</span>
              <span className="summary-val">{trackingData.carrier}</span>
            </div>
          </div>

          <div className="tracking-timeline-card card">
            <h2>Delivery Progress</h2>
            <div className="timeline">
              {trackingData.steps.map((step: any, index: number) => (
                <div key={index} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
                  <div className="timeline-icon-box">
                    {index === 0 && <ShieldCheck size={20} />}
                    {index === 1 && <Box size={20} />}
                    {index === 2 && <Truck size={20} />}
                    {index === 3 && <PackageCheck size={20} />}
                  </div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="timeline-time">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
