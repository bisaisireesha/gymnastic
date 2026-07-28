import React from 'react';

const Hero = () => {
  return (
    <section id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '6rem 1.5rem',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          zIndex: -1
        }}
      />
      <div className="container animate-fade-up hero-container">
        <h1 style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
          Defy Gravity. <br/>
          <span className="text-gradient">Discover Your Potential.</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: '2.5rem'
        }}>
          Join the premier gymnastics academy designed to elevate your skills from beginner to elite in a state-of-the-art facility.
        </p>
        <style>{`
          .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: nowrap;
          }
          @media (max-width: 600px) {
            .hero-buttons {
              flex-wrap: wrap;
            }
            .hero-buttons .hero-btn {
              width: 100%;
              text-align: center;
              justify-content: center;
            }
            .hero-container {
              text-align: center;
            }
            .hero-container h1 {
              margin-left: auto;
              margin-right: auto;
            }
            .hero-container p {
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}</style>
        <div className="hero-buttons">
          <a href="#schedule" className="btn btn-secondary hero-btn">Explore Classes</a>
          <a href="#register" className="btn btn-primary hero-btn">Join Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
