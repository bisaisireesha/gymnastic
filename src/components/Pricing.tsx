"use client";
import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);

  const plans = [
    { name: 'Beginner', price: '$99', features: ['Access to facility', '2 Classes per week', 'Open gym sessions'] },
    { name: 'Advanced', price: '$198', features: ['Access to facility', '3 Classes per week', 'Open gym sessions'] },
    { name: 'Elite', price: '$297', features: ['Access to facility', '4 Classes per week', 'Open gym sessions'] }
  ];

  return (
    <section id="pricing" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Membership Plans</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Choose the plan that fits your gymnastics goals, or start with a trial.</p>
      </div>
      
      <div className="grid grid-cols-4">
        {/* Book Free Trial styled as a matching card */}
        <div 
          onClick={() => setSelectedPlan(0)}
          className="glass-panel" 
          style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center', 
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: selectedPlan === 0 ? 'scale(1.05)' : 'scale(1)',
            border: selectedPlan === 0 ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
            boxShadow: selectedPlan === 0 ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none',
            background: 'linear-gradient(180deg, rgba(212,175,55,0.05) 0%, rgba(0,0,0,0) 100%)',
            zIndex: selectedPlan === 0 ? 10 : 1
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Free Trial</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>
            $0<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/first day</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li>Facility tour</li>
            <li>Meet the coaches</li>
            <li>1 hour evaluation class</li>
          </ul>
          <button className={selectedPlan === 0 ? 'btn btn-primary' : 'btn btn-secondary'} style={{ width: '100%' }}>Book Trial</button>
        </div>

        {plans.map((plan, idx) => {
          const planIdx = idx + 1;
          return (
          <div 
            key={idx} 
            onClick={() => setSelectedPlan(planIdx)}
            className="glass-panel" 
            style={{ 
              padding: '3rem 2rem', 
              textAlign: 'center', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: selectedPlan === planIdx ? 'scale(1.05)' : 'scale(1)',
              border: selectedPlan === planIdx ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
              boxShadow: selectedPlan === planIdx ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none',
              zIndex: selectedPlan === planIdx ? 10 : 1
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>
              {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              {plan.features.map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
            <button className={selectedPlan === planIdx ? 'btn btn-primary' : 'btn btn-secondary'} style={{ width: '100%' }}>Choose Plan</button>
          </div>
        )})}
      </div>
    </section>
  );
};

export default Pricing;
