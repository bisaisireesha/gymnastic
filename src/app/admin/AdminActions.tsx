"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminActions() {
  const router = useRouter();
  const [isClearing, setIsClearing] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  };

  const handleClear = async () => {
    if (!confirm('Are you sure you want to completely clear the database? This cannot be undone.')) {
      return;
    }
    
    setIsClearing(true);
    const res = await fetch('/api/clear-db', { method: 'POST' });
    if (res.ok) {
      alert('Database cleared successfully.');
      router.refresh();
    } else {
      alert('Failed to clear database.');
    }
    setIsClearing(false);
  };

  return (
    <div className="flex-wrap-mobile w-full-mobile" style={{ display: 'flex', gap: '1rem' }}>
      <button 
        onClick={handleClear} 
        disabled={isClearing}
        className="btn w-full-mobile" 
        style={{ background: 'rgba(255,50,50,0.1)', color: '#ff4444', border: '1px solid rgba(255,50,50,0.3)', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
      >
        {isClearing ? 'Clearing...' : 'Clear Database'}
      </button>

      <a 
        href="/api/export-db" 
        className="btn w-full-mobile" 
        style={{ background: 'var(--accent-primary)', color: '#000', padding: '0.5rem 1rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}
      >
        Export to Excel
      </a>

      <button 
        onClick={handleLogout} 
        className="btn btn-secondary w-full-mobile" 
        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
      >
        Logout
      </button>
    </div>
  );
}
