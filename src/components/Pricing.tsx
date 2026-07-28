"use client";
import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(1); // Default select the 2nd plan

  const plans = [
    {
      title: "3 Classes Per Week",
      price: "₹2,000",
      subtitle: "Flexible Schedule",
      desc: "(Choose Any 3 Days)",
      features: [
        "Professional Coaching",
        "Skill Development",
        "Full Facility Access",
        "Core Foundation"
      ],
      badge: null
    },
    {
      title: "Weekday Classes",
      price: "₹3,000",
      subtitle: "5 Classes Per Week",
      desc: "(Monday – Friday)",
      features: [
        "Professional Coaching",
        "Structured Training",
        "Fitness & Flexibility",
        "Progress Tracking"
      ],
      badge: "Most Popular"
    },
    {
      title: "Weekend Classes",
      price: "₹2,000",
      subtitle: "Weekend Training",
      desc: "(Saturday & Sunday)",
      features: [
        "Beginner Friendly",
        "Flexible Schedule",
        "Core Foundation",
        "Weekly Feedback"
      ],
      badge: null
    },
    {
      title: "Adults Fitness",
      price: "₹4,000",
      subtitle: "Daily Sessions",
      desc: "(Monday – Friday)",
      features: [
        "Strength Training",
        "Mobility & Flexibility",
        "Functional Fitness",
        "Personal Coaching"
      ],
      badge: "Premium"
    }
  ];

  return (
    <section id="pricing" className="section container" style={{ padding: '8rem 1rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Membership & Plans</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8' }}>
          Choose the training plan that perfectly fits your schedule and goals. Premium coaching designed for every level.
        </p>
      </div>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-4" style={{ 
        alignItems: 'stretch', // ensures perfectly uniform height
        marginBottom: '6rem'
      }}>
        {plans.map((plan, idx) => {
          const isSelected = selectedPlan === idx;
          
          return (
            <div 
              key={idx}
              onClick={() => setSelectedPlan(idx)}
              className="glass-panel mobile-p-2" 
              style={{ 
                padding: '3rem 2rem', 
                borderRadius: '20px', 
                position: 'relative',
                display: 'flex', 
                flexDirection: 'column', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                border: isSelected ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.05)',
                boxShadow: isSelected ? '0 20px 40px rgba(212, 175, 55, 0.15)' : 'none',
                zIndex: isSelected ? 10 : 1
              }}
              onMouseOver={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {plan.badge && (
                <div style={{ 
                  position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', 
                  background: 'var(--accent-primary)', color: '#000', 
                  padding: '0.4rem 1.2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  {plan.badge}
                </div>
              )}
              
              <h4 style={{ fontSize: '1.4rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
                {plan.title}
              </h4>
              
              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                {plan.price}
              </div>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', minHeight: '3.5rem' }}>
                {plan.subtitle}<br/>{plan.desc}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem' }}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginTop: '-2px' }}>✔</span> {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#register"
                className={isSelected ? "btn btn-primary" : "btn btn-secondary"} 
                style={{ 
                  width: '100%', 
                  borderRadius: '50px', 
                  padding: '1.2rem', 
                  fontSize: '1.1rem', 
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                Register
              </a>
            </div>
          );
        })}
      </div>



    </section>
  );
};

export default Pricing;
