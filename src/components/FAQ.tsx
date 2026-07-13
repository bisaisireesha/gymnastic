import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: 'At what age can my child start gymnastics?', a: 'We offer classes for children starting as young as 2 years old in our Toddler Gymnastics program, focusing on basic motor skills and fun!' },
    { q: 'What should my child wear to class?', a: 'Athletic wear that allows for a full range of motion is best. Leotards are recommended for girls, and athletic shorts/t-shirts for boys. No jewelry or loose clothing.' },
    { q: 'Do you offer trial classes?', a: 'Yes! We offer a free trial class for all new students to ensure Next Genz is the right fit before committing to a membership.' },
    { q: 'Are your coaches certified?', a: 'Absolutely. All our coaches hold safety certifications and have extensive backgrounds in gymnastics training and competitive performance.' }
  ];

  return (
    <section id="faq" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Frequently Asked Questions</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Everything you need to know about joining Next Genz.</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{faq.q}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
