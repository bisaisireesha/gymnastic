"use client";
import React, { useState } from 'react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [activeDay, setActiveDay] = useState('Monday');

  // Realistic schedule data mapping
  const scheduleData: Record<string, any[]> = {
    Monday: [
      { time: '09:00 AM - 10:00 AM', name: 'Toddler Gym', coach: 'Coach Alex', level: 'Beginner', type: 'toddler' },
      { time: '11:00 AM - 12:30 PM', name: 'Beginners (5-8 yrs)', coach: 'Coach Sarah', level: 'Beginner', type: 'beginner' },
      { time: '02:00 PM - 03:30 PM', name: 'Adult Gymnastics', coach: 'Coach Mike', level: 'All Levels', type: 'adult' },
      { time: '04:00 PM - 06:00 PM', name: 'Elite Training', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' }
    ],
    Tuesday: [
      { time: '09:00 AM - 11:00 AM', name: 'Open Gym', coach: 'Staff', level: 'All Levels', type: 'open' },
      { time: '11:00 AM - 12:30 PM', name: 'Advanced (9-12 yrs)', coach: 'Coach Alex', level: 'Intermediate', type: 'advanced' },
      { time: '02:00 PM - 03:30 PM', name: 'Tumbling 101', coach: 'Coach Mike', level: 'Beginner', type: 'tumbling' },
      { time: '04:00 PM - 06:00 PM', name: 'Elite Training', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' }
    ],
    Wednesday: [
      { time: '09:00 AM - 10:00 AM', name: 'Toddler Gym', coach: 'Coach Alex', level: 'Beginner', type: 'toddler' },
      { time: '11:00 AM - 12:30 PM', name: 'Beginners (5-8 yrs)', coach: 'Coach Sarah', level: 'Beginner', type: 'beginner' },
      { time: '02:00 PM - 03:30 PM', name: 'Adult Gymnastics', coach: 'Coach Mike', level: 'All Levels', type: 'adult' },
      { time: '04:00 PM - 06:00 PM', name: 'Elite Training', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' }
    ],
    Thursday: [
      { time: '09:00 AM - 11:00 AM', name: 'Open Gym', coach: 'Staff', level: 'All Levels', type: 'open' },
      { time: '11:00 AM - 12:30 PM', name: 'Advanced (9-12 yrs)', coach: 'Coach Alex', level: 'Intermediate', type: 'advanced' },
      { time: '02:00 PM - 03:30 PM', name: 'Tumbling 101', coach: 'Coach Mike', level: 'Beginner', type: 'tumbling' },
      { time: '04:00 PM - 06:00 PM', name: 'Elite Training', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' }
    ],
    Friday: [
      { time: '09:00 AM - 11:00 AM', name: 'Elite Training', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' },
      { time: '11:00 AM - 01:00 PM', name: 'Open Gym', coach: 'Staff', level: 'All Levels', type: 'open' },
      { time: '02:00 PM - 04:00 PM', name: 'Private Lessons', coach: 'Coach Mike', level: 'All Levels', type: 'private' },
      { time: '04:00 PM - 06:00 PM', name: 'Elite Training', coach: 'Coach Alex', level: 'Advanced', type: 'elite' }
    ],
    Saturday: [
      { time: '08:00 AM - 10:00 AM', name: 'Weekend Warriors (Adults)', coach: 'Coach Mike', level: 'All Levels', type: 'adult' },
      { time: '10:30 AM - 12:30 PM', name: 'Youth Competition Prep', coach: 'Coach Sarah', level: 'Advanced', type: 'elite' },
      { time: '01:00 PM - 04:00 PM', name: 'Community Open Gym', coach: 'Staff', level: 'All Levels', type: 'open' }
    ]
  };

  const activeClasses = scheduleData[activeDay] || [];

  return (
    <section id="schedule" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient">Classes Schedule</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Find the perfect time to train and grow.</p>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap' 
      }}>
        {days.map((day) => (
          <button 
            key={day}
            onClick={() => setActiveDay(day)}
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              border: activeDay === day ? '1px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.1)',
              background: activeDay === day ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
              color: activeDay === day ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: activeDay === day ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {activeClasses.map((cls, idx) => (
          <div key={idx} className="glass-panel" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '2rem',
            transition: 'transform 0.3s ease',
            cursor: 'default'
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(10px)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                {cls.time}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{cls.name}</h3>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  {cls.coach}
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  {cls.level}
                </span>
              </div>
            </div>
            
            <div>
              <button className="btn btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                Book Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
