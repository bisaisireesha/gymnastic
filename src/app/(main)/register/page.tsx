"use client";
import React from 'react';

export default function RegisterPage() {
  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--bg-primary)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    borderRadius: '10px',
    outline: 'none',
    fontFamily: 'inherit'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)'
  };

  const sectionHeaderStyle = {
    fontSize: '1.4rem',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
    paddingBottom: '0.8rem'
  };

  return (
    <section className="section container" style={{ padding: '8rem 1rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: 800 }}>Registration Form</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Academic Year 2026-2027</p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '20px', maxWidth: '900px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* Section 1: Student Details */}
          <div>
            <h3 style={sectionHeaderStyle}>
              <span>👤</span> Section 1: Student Details
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Name of the Student</label>
                <input type="text" placeholder="Student's Full Name" style={inputStyle} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Age</label>
                  <input type="text" placeholder="e.g. 7" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Date of Birth</label>
                  <input type="date" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Gender</label>
                  <select style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Address</label>
                <input type="text" placeholder="Full Residential Address" style={inputStyle} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Class</label>
                  <input type="text" placeholder="Current Class/Grade" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>School</label>
                  <input type="text" placeholder="School Name" style={inputStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Parent / Guardian Details */}
          <div>
            <h3 style={sectionHeaderStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Section 2: Parent / Guardian Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Father's Name</label>
                <input type="text" placeholder="Father's Full Name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mother's Name</label>
                <input type="text" placeholder="Mother's Full Name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Contact Number</label>
                <input type="tel" placeholder="Primary Phone Number" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Alternative Number</label>
                <input type="tel" placeholder="Secondary Phone Number" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Section 3: Medical Details */}
          <div>
            <h3 style={sectionHeaderStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              Section 3: Medical Details
            </h3>
            <div>
              <label style={labelStyle}>Medical Condition (If Any)</label>
              <textarea placeholder="Please describe any medical conditions, allergies, or past injuries." rows={3} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
            </div>
          </div>

          {/* Section 4: Session Details */}
          <div>
            <h3 style={sectionHeaderStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Section 4: Session Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Date of Joining</label>
                <input type="date" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Preferred Batch / Flexible Time</label>
                <input type="text" placeholder="e.g. Evening Batch" style={inputStyle} />
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <label style={labelStyle}>Choose Classes Per Week</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                  <input type="radio" name="classes" style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 2 Days
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                  <input type="radio" name="classes" style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 3 Days
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                  <input type="radio" name="classes" style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 5 Days (Monday–Friday)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                  <input type="radio" name="classes" style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> Weekend (Saturday–Sunday)
                </label>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div style={{ border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '2rem', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginTop: 0, marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>Terms & Conditions</h3>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Parents must ensure the student attends training regularly and on time.</li>
              <li>Safety gear must be worn whenever required during training.</li>
              <li>The academy is not responsible for loss or damage of personal belongings.</li>
              <li>Fees once paid are non-refundable and non-transferable.</li>
              <li>Parents and students must follow academy rules, discipline, and coach instructions.</li>
              <li>Photography and videos taken during training may be used for academy promotions unless otherwise requested.</li>
            </ul>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', fontWeight: 600, color: 'var(--text-primary)', padding: '1.5rem', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <input type="checkbox" style={{ width: '22px', height: '22px', accentColor: 'var(--accent-primary)' }} /> 
              I have read and agree to the above Terms & Conditions.
            </label>
          </div>

          {/* Declaration */}
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>Declaration</h3>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1.5rem' }}>
                I allow my child to participate in training at Next Genz Gymnastics Academy and give consent for photographs/videos to be used for academy promotions, competitions, and achievements.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Parent/Guardian Digital Signature (Type Full Name)</label>
                  <input type="text" placeholder="Type your full name here" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Today's Date</label>
                  <input type="date" style={inputStyle} />
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button type="button" className="btn btn-primary" style={{ padding: '1.2rem 4rem', borderRadius: '50px', fontSize: '1.1rem' }}>
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
