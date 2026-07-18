"use client";
import React, { useState } from 'react';

const Schedule = () => {
  const categories = ['Kids', 'Adults'];
  const [activeCategory, setActiveCategory] = useState('Kids');

  const scheduleData: Record<string, any[]> = {
    Kids: [
      { time: '04:00 PM - 05:00 PM', days: 'Mon - Sun', name: 'Batch - 1', desc: 'Basic Gymnastics & Fitness' },
      { time: '05:00 PM - 06:00 PM', days: 'Mon - Sun', name: 'Batch - 2', desc: 'Flexibility & Endurance' },
      { time: '06:00 PM - 07:00 PM', days: 'Mon - Sun', name: 'Batch - 3', desc: 'Advanced Physical Activities' }
    ],
    Adults: [
      { time: '05:00 AM - 06:00 AM', days: 'Mon - Sun', name: 'Morning Batch 1', desc: 'Personal Training & Fitness' },
      { time: '06:00 AM - 07:00 AM', days: 'Mon - Sun', name: 'Morning Batch 2', desc: 'Resistance Training & Calisthenics' }
    ]
  };

  const activeClasses = scheduleData[activeCategory] || [];

  return (
    <section id="schedule" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '3rem' }}>Classes Schedule & Timings</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Find the perfect time to train and grow.</p>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1.5rem', 
        marginBottom: '4rem',
        flexWrap: 'wrap' 
      }}>
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '1rem 3rem',
              borderRadius: '50px',
              border: activeCategory === cat ? '2px solid var(--accent-primary)' : '2px solid rgba(255,255,255,0.1)',
              background: activeCategory === cat ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
              color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: activeCategory === cat ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.2rem',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }
            }}
            onMouseOut={(e) => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {activeClasses.map((cls, idx) => (
          <div key={idx} className="glass-panel schedule-row" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '2.5rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
            borderRadius: 'var(--border-radius-md)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(10px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '1px' }}>
                  {cls.time}
                </span>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {cls.days}
                </span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cls.name}</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {cls.desc}
              </div>
            </div>
            
            <div>
              <a href="#register" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', borderRadius: '50px', textAlign: 'center', display: 'block' }}>
                Book Class
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
