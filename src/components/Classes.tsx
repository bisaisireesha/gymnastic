"use client";
import React from 'react';

const Classes = () => {
  const programs = [
    {
      title: 'Toddler Gymnastics',
      description: 'A fun and safe introduction to movement, balance, and coordination for ages 2-4.',
      image: '/toddler.png',
    },
    {
      title: 'Elite Training',
      description: 'Advanced programs tailored for competitive gymnasts looking to reach the peak of their performance.',
      image: '/elite.png',
    },
    {
      title: 'Adult Classes',
      description: 'Its never too late to learn! Build core strength, flexibility, and master basic tumbling.',
      image: '/hero.png', // Reusing hero image for now
    }
  ];

  return (
    <section id="programs" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Our Programs</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          We offer a wide range of classes for all ages and skill levels, designed to foster growth, strength, and confidence.
        </p>
      </div>

      <div className="grid grid-cols-3">
        {programs.map((program, idx) => (
          <div key={idx} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'var(--transition-normal)' }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src={program.image} 
                alt={program.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }} 
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem' }}>{program.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{program.description}</p>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
