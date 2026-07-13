import React from 'react';

const Coaches = () => {
  const coaches = [
    { 
      name: 'Coach Alex', 
      role: 'Head Coach', 
      exp: '10 Years',
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
      bio: 'Former national champion dedicated to building the foundation of young athletes.'
    },
    { 
      name: 'Coach Sarah', 
      role: 'Elite Trainer', 
      exp: '8 Years',
      img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80',
      bio: 'Specializes in high-level beam and floor routines for competitive squads.'
    },
    { 
      name: 'Coach Mike', 
      role: 'Tumbling Expert', 
      exp: '12 Years',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&q=80',
      bio: 'Master of biomechanics, helping athletes perfect complex tumbling passes safely.'
    }
  ];

  return (
    <section id="coaches" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Meet Our Coaches</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Expert guidance for every step of your gymnastics journey.</p>
      </div>
      <div className="grid grid-cols-3">
        {coaches.map((coach, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              background: `url(${coach.img}) center/cover`, 
              marginBottom: '1.5rem', 
              border: '3px solid var(--accent-primary)',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)'
            }}>
            </div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{coach.name}</h3>
            <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>{coach.role}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{coach.exp} Experience</div>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>"{coach.bio}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
