import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '4rem',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: '1 1 400px' }}>
        <div style={{ 
          position: 'relative', 
          borderRadius: 'var(--border-radius-lg)', 
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <img src="/elite.png" alt="Gymnastics Coach" style={{ width: '100%' }} />
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, var(--bg-primary), transparent)',
            height: '50%'
          }} />
        </div>
      </div>
      
      <div style={{ flex: '1 1 400px' }}>
        <h2 className="text-gradient">Our Mission</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          At the Gymnastics Academy, we believe in nurturing talent, building character, and achieving excellence. Our state-of-the-art facilities and Olympic-level coaching staff provide the perfect environment for athletes to thrive.
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Whether your child is taking their first steps on the mat or preparing for national competitions, we are committed to their physical and personal development.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-secondary)' }}>15+</div>
            <div style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-secondary)' }}>50+</div>
            <div style={{ color: 'var(--text-secondary)' }}>Expert Coaches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
