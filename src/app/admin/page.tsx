// Force TS server refresh
import React from 'react';
import { readSheet } from '@/lib/excel';
import AdminActions from './AdminActions';

export const dynamic = 'force-dynamic'; // We will create this client component next

export default async function AdminDashboard() {
  const registrations = await readSheet('Registrations');

  return (
    <section className="section container" style={{ padding: '8rem 1rem', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>Admin Dashboard</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Viewing records from <strong>database.xlsx</strong>
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '15px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', margin: 0 }}>Registrations</h3>
            <span style={{ background: 'var(--accent-primary)', color: '#000', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Total: {registrations.length}
            </span>
          </div>
          
          <AdminActions />
        </div>

        {registrations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            No registrations found yet.
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1200px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.3)' }}>
                {Object.keys(registrations[0]).map((key, i) => (
                  <th key={i} style={{ padding: '1rem', color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {registrations.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  {Object.values(row).map((val, j) => (
                    <td key={j} style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {val ? val.toString() : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
