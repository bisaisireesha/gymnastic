"use client";
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          We're here to help you begin your child's gymnastics journey. Contact us today to book a free trial class or learn more about our programs.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
        {/* Contact Info Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Visit Our Academy</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              We'd love to show you around our state-of-the-art facility. 
              Drop by during office hours or contact us to schedule a tour.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Training Locations</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Oakridge International School, Bachupally</p>
                <p style={{ color: 'var(--text-secondary)' }}>PowerPlay Cricket Academy at Sk8Skool, Road near Indian Oil Petrol Pump, Bowrampet, Hyderabad, Telangana – 500043</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)' }}>9701933266 | 96764 91164 | 6309337238</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                <p style={{ color: 'var(--text-secondary)' }}>nextgenzgymnastics@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Instagram</h4>
                <p style={{ color: 'var(--text-secondary)' }}>@nextgenzgymnastics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="flex-row-to-col" style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Parent Name</label>
                <input type="text" placeholder="If applicable" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
              </div>
            </div>

            <div className="flex-row-to-col" style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
              </div>
            </div>

            <div className="flex-row-to-col" style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Child's Age</label>
                <input type="text" placeholder="e.g. 7" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Select Program</label>
                <select style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none', appearance: 'none' }}>
                  <option>Kids & Teens Programs</option>
                  <option>Adults Fitness</option>
                  <option>General Enquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea placeholder="How can we help you?" rows={4} style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1.2rem', borderRadius: '50px', fontSize: '1.1rem' }}>Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
