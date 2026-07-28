"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    borderRadius: '10px',
    outline: 'none',
    fontFamily: 'inherit',
    marginBottom: '1.5rem'
  };

  return (
    <>
      <style>{`
        .login-panel {
          padding: 3rem;
          border-radius: 20px;
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        @media (max-width: 480px) {
          .login-panel {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
      <section className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass-panel login-panel" style={{ position: 'relative' }}>
        
        <Link href="/" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back
        </Link>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img 
            src="/logo.jpg" 
            alt="Next Genz" 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
            }} 
          />
        </div>

        <h2 className="text-gradient" style={{ marginBottom: '0.5rem' }}>Login</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Sign in to access the dashboard</p>

        <form onSubmit={handleLogin}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Username</label>
            <input 
              type="text" 
              required 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              style={inputStyle} 
              placeholder="admin@example"
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              style={inputStyle} 
              placeholder="••••••••"
            />
          </div>

          {status === 'error' && (
            <div style={{ color: '#ff4444', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Invalid username or password
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
