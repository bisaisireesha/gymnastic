"use client";
import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: 'Do you offer a free trial class?', a: 'Yes! We offer a free trial class so you and your child can experience our coaching, facility, and environment before making a commitment.' },
    { q: 'What is the minimum age to join?', a: 'Children can start their gymnastics journey with us as early as 2 years old in our specially designed toddler programs.' },
    { q: 'Do beginners need prior experience?', a: 'Not at all! We welcome students of all skill levels. Our coaches are trained to guide beginners from their very first steps to advanced movements safely.' },
    { q: 'What are the class timings?', a: 'We offer flexible timings throughout the week, including morning, evening, and weekend batches to suit your schedule. Please contact us for the latest batch availability.' }
  ];

  return (
    <section id="faq" className="section container section-mobile-p" style={{ padding: '4rem 1rem 8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Frequently Asked Questions</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Everything you need to know about joining Next Genz.</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto 8rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-panel mobile-p-1" style={{ padding: '2rem', borderRadius: '15px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontWeight: 700 }}>{faq.q}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
