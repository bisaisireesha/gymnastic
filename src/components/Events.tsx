import React from 'react';

const Events = () => {
  const events = [
    { title: 'Summer Showcase 2026', date: 'August 15, 2026', desc: 'Watch our talented gymnasts perform their routines in our annual summer showcase. Open to friends and family!', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80' },
    { title: 'Regional Qualifiers Prep', date: 'September 10, 2026', desc: 'An intensive weekend workshop for our elite team preparing for the upcoming regional qualifiers.', img: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=500&q=80' },
    { title: 'Community Open Gym Day', date: 'October 5, 2026', desc: 'A free open gym session for the community. Come try out the equipment and meet the coaches!', img: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&q=80' }
  ];

  return (
    <section id="events" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-gradient">Upcoming Events</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Competitions, showcases, and community meetups.</p>
      </div>
      <div className="grid grid-cols-3">
        {events.map((event, idx) => (
          <div key={idx} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', backgroundImage: `url(${event.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>{event.date}</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{event.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{event.desc}</p>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
