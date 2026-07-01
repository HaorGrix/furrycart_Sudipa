import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary-color)' }}>📜 Terms & Conditions</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Last Updated: June 25, 2026</p>
      
      <section style={{ marginBottom: '25px' }}>
        <h2>1. Welcome to FurryCart</h2>
        <p>By accessing or purchasing from FurryCart ("we", "us", "our"), you agree to be bound by these Terms and Conditions. Please read them carefully before using our platform or placing an order.</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2>2. User Accounts and Pet Profiles</h2>
        <p>When you create an account and register pet profiles on FurryCart, you agree to provide accurate and complete information. You are responsible for keeping your credentials secure. We use your pet profile specifications to personalize recommendations, but you remain responsible for final selection suitability.</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2>3. Subscriptions & Deliveries</h2>
        <p>By opting for our Monthly Subscription Box or subscribing to specific items for a 15% discount, you authorize recurring monthly charges to your selected payment method. You can cancel or pause your subscription at any time up to 48 hours before your next scheduled billing date through the My Subscriptions dashboard.</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2>4. Shipping, Returns, & Payments</h2>
        <p>We accept Visa, Mastercard, PayPal, Apple Pay, and Google Pay. Free shipping is applicable on orders exceeding $49. If you or your pet are unsatisfied with a purchase, returns are accepted within 30 days of purchase for a full refund or exchange, subject to policy guidelines.</p>
      </section>

      <section style={{ marginBottom: '25px' }}>
        <h2>5. Limitation of Liability</h2>
        <p>FurryCart acts as a distributor of pet supplies. Although we highlight "Vet Recommended" tags, our platform content is for general e-commerce and helper use only. It is not professional veterinary advice.</p>
      </section>
    </div>
  );
};

export default TermsConditions;
