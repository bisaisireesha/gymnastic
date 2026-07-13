import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Jenkins', role: 'Parent', text: 'The coaches here are incredible. My daughter has grown so much in her confidence and skills over the past year.' },
    { name: 'Michael Chen', role: 'Elite Gymnast', text: 'The facilities are unmatched. Training here gave me the edge I needed to compete at the national level.' },
    { name: 'Emily Rodriguez', role: 'Adult Class Member', text: 'I never thought I could learn gymnastics in my 30s, but the supportive environment here made it possible!' }
  ];

  return (
    <section id="testimonials" className="section container" style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '4rem' }}>What Our Community Says</h2>
      <div className="grid grid-cols-3">
        {reviews.map((review, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', position: 'relative' }}>
            <div style={{ 
              fontSize: '4rem', 
              color: 'var(--accent-primary)', 
              position: 'absolute', 
              top: '1rem', 
              right: '1.5rem',
              opacity: 0.3,
              fontFamily: 'serif',
              lineHeight: 1
            }}>
              "
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
              "{review.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                width: '50px', height: '50px', 
                borderRadius: '50%', 
                background: 'var(--accent-gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 600
              }}>
                {review.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{review.name}</div>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
