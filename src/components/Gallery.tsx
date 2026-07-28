"use client";
import React from 'react';

const Gallery = () => {
  const images = [
    { url: '/gallery_1.png', position: 'center 60%' }, // Hide ceiling, focus on child
    { url: '/gallery_5.png', position: 'center 80%' }, // Adjust group focus
    { url: '/gallery_6.png', position: 'center 80%' }, // Adjust group focus
    { url: '/gallery_4.png', position: 'center 70%' }  // Adjust single focus
  ];

  return (
    <section id="gallery" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Gallery & Stories</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Moments of triumph at Next Genz Gymnastics.</p>
      </div>
      <div className="grid gallery-grid">
        {images.map((item, idx) => (
          <div key={idx} style={{ 
            overflow: 'hidden',
            borderRadius: 'var(--border-radius-md)',
            border: '2px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            display: 'flex',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}>
            <img 
              src={item.url} 
              alt={`Gallery image ${idx + 1}`} 
              style={{
                width: '100%',
                aspectRatio: '1 / 1', // Perfect symmetrical squares
                objectFit: 'cover',
                objectPosition: item.position, // Keeps focus perfectly in frame for each specific image
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
