import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0, left: 0, right: 0,
      padding: '1rem 1.5rem',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(5, 5, 5, 0.95)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      backdropFilter: 'blur(10px)'
    }} className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/logo.jpg" alt="Next Genz Gymnastics Logo" className="nav-logo-img" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--accent-primary)' }} />
        <div className="nav-brand" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '1px'
        }}>
          NEXT GENZ <span style={{ color: '#e0e0e0', fontSize: '1rem', display: 'block', letterSpacing: '3px', fontWeight: 400, marginTop: '-5px' }}>GYMNASTICS</span>
        </div>
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        alignItems: 'center', 
        fontWeight: 500,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '0 1rem',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: '2rem'
      }}>
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#activities">Programs</a>
        <a href="#schedule">Classes Schedule</a>
        <a href="#coaches">Coaches</a>
        <a href="#events">Events</a>
        <a href="#gallery">Gallery</a>
        <a href="#pricing">Membership Plans</a>
        <a href="#blog">Blog</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ marginLeft: '1rem', flexShrink: 0 }}>
        <a href="#register" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Join Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
