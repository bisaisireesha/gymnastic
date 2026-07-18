"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      padding: '5rem 1rem 2rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '4rem'
    }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        
        {/* Brand & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logo.jpg" alt="Next Genz Gymnastics Logo" style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid var(--accent-primary)' }} />
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>
              NEXT GENZ <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'block', letterSpacing: '3px', fontWeight: 400, marginTop: '-2px' }}>GYMNASTICS</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '350px' }}>
            Empowering athletes to reach new heights through expert coaching and world-class facilities.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📷</span> 
            <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
              Instagram: @nextgenzgymnastics
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 700 }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>About Us</a></li>
            <li><a href="#activities" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Programs & Classes</a></li>
            <li><a href="#coaches" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Our Coaches</a></li>
            <li><a href="#pricing" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Schedule & Pricing</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 700 }}>Contact Info</h4>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📍</span>
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Oakridge International School, Bachupally</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📍</span>
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>PowerPlay Cricket Academy at Sk8Skool, Road near Indian Oil Petrol Pump, Bowrampet, Hyderabad, Telangana – 500043</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📞</span>
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>9701933266 | 96764 91164 | 6309337238</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📧</span>
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>nextgenzgymnastics@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', paddingBottom: '1rem', fontSize: '0.95rem' }}>
        &copy; 2026 Next Genz Gymnastics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
