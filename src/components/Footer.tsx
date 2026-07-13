import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      padding: '4rem 0 2rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '4rem'
    }}>
      <div className="container grid grid-cols-3" style={{ gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img src="/logo.jpg" alt="Next Genz Gymnastics Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--accent-primary)' }} />
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '1px'
            }}>
              NEXT GENZ <span style={{ color: '#e0e0e0', fontSize: '1rem', display: 'block', letterSpacing: '3px', fontWeight: 400, marginTop: '-5px' }}>GYMNASTICS</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            Empowering athletes to reach new heights through expert coaching and world-class facilities.
          </p>
        </div>
        
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
            <li><a href="#programs">Programs & Classes</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#coaches">Our Coaches</a></li>
            <li><a href="#schedule">Schedule & Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
            <li>123 Vault Avenue, Flip City, FC 90210</li>
            <li>(555) 123-4567</li>
            <li>hello@gymnasticsacademy.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
        &copy; {new Date().getFullYear()} Gymnastics Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
