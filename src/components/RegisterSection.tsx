"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegisterSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [doj, setDoj] = useState<Date | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Ensure dates are reliably attached in case the custom DatePicker missed FormData mapping
    if (dob) data.dob = dob.toISOString().split('T')[0];
    if (doj) data.dateOfJoining = doj.toISOString().split('T')[0];
    console.log('FORM DATA:', data);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Something went wrong');

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit form.');
    }
  };

  return (
    <>
      <style>{`
        .register-panel {
          padding: 4rem;
          border-radius: var(--border-radius-lg);
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          .register-panel {
            padding: 2rem 1rem;
          }
        }
      `}</style>
      <section id="register" className="section container section-mobile-p" style={{ padding: '6rem 1rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', fontWeight: 800 }}>Join Our Academy</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Take the first step towards excellence. Fill out the registration form below and our team will get back to you with batch timings and details.
          </p>
        </div>

        <div className="glass-panel register-panel">
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3 style={{ color: 'var(--accent-primary)', fontSize: '2rem', marginBottom: '1rem' }}>Registration Successful!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>Thank you for registering. We will contact you shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-secondary">Submit Another Registration</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="register-form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Section 1: Student Details */}
            <div>
              <h3 style={sectionHeaderStyle}>
                <span>👤</span> Section 1: Student Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Name of the Student *</label>
                  <input type="text" name="studentName" required placeholder="Student's Full Name" style={inputStyle} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <label style={labelStyle}>Age *</label>
                    <input type="number" name="age" required placeholder="e.g. 7" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Date of Birth *</label>
                    <DatePicker 
                      selected={dob} 
                      onChange={(date: Date | null) => setDob(date)} 
                      name="dob" 
                      required 
                      customInput={<input style={inputStyle} />}
                      showYearDropdown 
                      scrollableYearDropdown 
                      yearDropdownItemNumber={30}
                      placeholderText="Select Date"
                      wrapperClassName="date-picker-wrapper"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Gender *</label>
                    <select name="gender" required style={{ ...inputStyle, appearance: 'none' }} defaultValue="">
                      <option value="" disabled>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Address *</label>
                  <input type="text" name="address" required placeholder="Full Residential Address" style={inputStyle} />
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
                  <label style={labelStyle}>Parent's Name *</label>
                  <input type="text" name="fatherName" required placeholder="Full Name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Contact Number *</label>
                  <input type="tel" name="contactNumber" required placeholder="Primary Phone Number" style={inputStyle} />
                </div>
              </div>
            </div>

            {/* Section 3: Session Details */}
            <div>
              <h3 style={sectionHeaderStyle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Section 3: Session Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={labelStyle}>Date of Joining *</label>
                  <DatePicker 
                    selected={doj} 
                    onChange={(date: Date | null) => setDoj(date)} 
                    name="dateOfJoining" 
                    required 
                    customInput={<input style={inputStyle} />}
                    placeholderText="Select Date"
                    wrapperClassName="date-picker-wrapper"
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Batch *</label>
                  <select name="preferredBatch" required style={{ ...inputStyle, appearance: 'none' }} defaultValue="">
                    <option value="" disabled>Select a Batch</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <label style={labelStyle}>Choose Classes Per Week *</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                    <input type="radio" name="classesPerWeek" value="2 Days" required style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 2 Days
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                    <input type="radio" name="classesPerWeek" value="3 Days" required style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 3 Days
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                    <input type="radio" name="classesPerWeek" value="5 Days" required style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 5 Days (Monday–Friday)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', color: 'var(--text-primary)' }}>
                    <input type="radio" name="classesPerWeek" value="Weekend" required style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> Weekend (Saturday–Sunday)
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
                <input type="checkbox" required style={{ width: '22px', height: '22px', accentColor: 'var(--accent-primary)' }} /> 
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
                    <label style={labelStyle}>Parent/Guardian Digital Signature (Type Full Name) *</label>
                    <input type="text" name="signature" required placeholder="Type your full name here" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Today's Date</label>
                    <input type="date" name="submissionDate" style={{ ...inputStyle, opacity: 0.7, cursor: 'not-allowed' }} value={new Date().toISOString().split('T')[0]} readOnly />
                  </div>
                </div>
              </div>
            </div>
            
            {status === 'error' && (
               <div style={{ color: '#ff4444', textAlign: 'center', fontSize: '1.1rem' }}>
                 {errorMessage}
               </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn btn-primary" 
                style={{ padding: '1.2rem 4rem', borderRadius: '50px', fontSize: '1.1rem', opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Registration Form'}
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
    </>
  );
};

export default RegisterSection;
