"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#activities', label: 'Programs' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#coaches', label: 'Coaches' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#register', label: 'Register' },
    { href: '/login', label: 'Login' },
  ];

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
      
      {/* Brand & Logo */}
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

      {/* Desktop Links */}
      <div className="desktop-links" style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center', 
        fontWeight: 500,
        fontSize: '0.9rem',
        padding: '0 1rem',
        flex: 1,
        justifyContent: 'center',
        marginLeft: '1rem'
      }}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>

      {/* Actions (Join Now + Hamburger) */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
        <a href="#register" className="btn btn-primary join-now-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Join Now
        </a>
        
        {/* Hamburger Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay animate-fade-up">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
