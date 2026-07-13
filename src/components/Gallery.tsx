import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&q=80',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=800&q=80',
    'https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?w=800&q=80'
  ];

  return (
    <section id="gallery" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Gallery & Stories</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Moments of triumph at Next Genz Gymnastics.</p>
      </div>
      <div className="grid grid-cols-2">
        {images.map((url, idx) => (
          <div key={idx} style={{ 
            background: `url(${url}) center/cover`, 
            height: '350px', 
            borderRadius: 'var(--border-radius-md)',
            border: '2px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
