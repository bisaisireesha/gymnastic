"use client";
import React, { useEffect, useState } from 'react';

const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === '#register');
    };

    // Check on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeModal = () => {
    window.location.hash = '';
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(5px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      overflowY: 'auto'
    }}>
      <div className="glass-panel animate-fade-up" style={{
        background: 'var(--bg-secondary)',
        padding: '2.5rem',
        borderRadius: 'var(--border-radius-lg)',
        width: '100%',
        maxWidth: '600px',
        position: 'relative',
        border: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <button 
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '1.5rem', right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            width: '32px', height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: '1.2rem',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          ✕
        </button>

        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textAlign: 'center' }}>Registration & Booking</h3>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>Fill in the details below to secure your spot.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div className="flex-row-to-col" style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
              <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '0.9rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
              <input type="email" placeholder="you@example.com" required style={{ width: '100%', padding: '0.9rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
            </div>
          </div>

          <div className="flex-row-to-col" style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" required style={{ width: '100%', padding: '0.9rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Select Category</label>
              <select style={{ width: '100%', padding: '0.9rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }}>
                <option>Kids & Teens Programs</option>
                <option>Adults Fitness Programs</option>
                <option>Personal Coaching</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Additional Notes (Optional)</label>
            <textarea placeholder="Any specific requirements or class preferences?" rows={3} style={{ width: '100%', padding: '0.9rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none', resize: 'vertical' }}></textarea>
          </div>

          <button 
            type="button" 
            onClick={() => { alert('Registration request received!'); closeModal(); }}
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem', borderRadius: '50px', fontSize: '1.1rem', marginTop: '1rem' }}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
