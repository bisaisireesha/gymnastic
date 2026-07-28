'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const programs = [
    'Gymnastics Basics',
    'Advanced Acrobatics',
    'Elite Training',
    'Toddler Tumbling',
    'Summer Camp',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
        Register / Enquire Now
      </h3>

      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Success!</h4>
          <p>Thank you for your registration. We will get back to you shortly.</p>
          <button 
            className="btn btn-secondary" 
            style={{ marginTop: '1.5rem' }}
            onClick={() => setStatus('idle')}
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="program" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Program of Interest
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="" disabled>Select a program...</option>
              {programs.map((p) => (
                <option key={p} value={p} style={{ background: '#111' }}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Additional Comments / Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {status === 'error' && (
            <div style={{ color: '#ff4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ marginTop: '1rem', width: '100%' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting...' : 'Register Now'}
          </button>
        </form>
      )}
    </div>
  );
}
