import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative'
    }}>
      {/* Background with slight blur */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2) blur(8px)',
          zIndex: -1
        }}
      />
      
      <div className="glass-panel animate-fade-up" style={{
        padding: '3rem',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img src="/logo.jpg" alt="Next Genz" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid var(--accent-primary)' }} />
        </div>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Log in to access your member portal.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
            <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
          </div>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password</label>
              <a href="#" style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>Forgot Password?</a>
            </div>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }} />
          </div>
          
          <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1rem' }}>Log In</button>
        </form>
        
        <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Don't have an account? <Link href="/#pricing" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Join Today</Link>
        </p>
        <div style={{ marginTop: '2rem' }}>
           <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'underline' }}>Return Home</Link>
        </div>
      </div>
    </main>
  );
}
