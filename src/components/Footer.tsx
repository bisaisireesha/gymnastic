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
      <div className="container footer-grid grid grid-cols-3" style={{ gap: '4rem', marginBottom: '4rem' }}>
        
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
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </span>
            <a href="https://instagram.com/nextgenzgymnastics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
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
            <span style={{ marginTop: '2px', display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <a href="mailto:nextgenzgymnastics@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                  nextgenzgymnastics@gmail.com
                </a>
              </p>
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
