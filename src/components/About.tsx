"use client";
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container" style={{ padding: '6rem 1rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', fontWeight: 800 }}>Our Story</h2>
        <p style={{ color: 'var(--accent-secondary)', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 'bold' }}>
          Every great journey begins with a dream.
        </p>
      </div>

      {/* Row 1: The Dream */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center', marginBottom: '8rem' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', bottom: '1rem', right: '1rem', background: 'rgba(212, 175, 55, 0.2)', borderRadius: 'var(--border-radius-lg)', zIndex: -1 }}></div>
          <img src="/story_dream.png" alt="The Dream" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>
        <div>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Shared Dream</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            Next Genz Gymnastics was born from the shared dream of three best friends whose lives were shaped by gymnastics. From a young age, we trained with one goal—to represent our country and stand proudly on the national podium. As national-level gymnasts, we dedicated years of hard work, discipline, and sacrifice to pursuing that dream.
          </p>
        </div>
      </div>

      {/* Row 2: The Obstacles */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center', marginBottom: '8rem', direction: 'rtl' }}>
        <div style={{ position: 'relative', direction: 'ltr' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '-1rem', bottom: '-1rem', left: '1rem', background: 'rgba(212, 175, 55, 0.2)', borderRadius: 'var(--border-radius-lg)', zIndex: -1 }}></div>
          <img src="/story_obstacles.png" alt="The Obstacles" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>
        <div style={{ direction: 'ltr' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Reality We Faced</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Along the way, we discovered that talent alone wasn't always enough. Limited access to quality coaching, a shortage of experienced mentors, favoritism, sports politics, and unequal opportunities became obstacles that many young athletes continue to face. Some of our own dreams remained unfinished—not because we lacked dedication, but because the opportunities simply weren't equal.
          </p>
          <blockquote style={{ borderLeft: '4px solid var(--accent-secondary)', paddingLeft: '1.5rem', fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.3rem', lineHeight: 1.5 }}>
            "What if the next generation never had to face the same challenges we did?"
          </blockquote>
        </div>
      </div>

      {/* Row 3: The Promise */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center', marginBottom: '8rem' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', bottom: '1rem', right: '1rem', background: 'rgba(212, 175, 55, 0.2)', borderRadius: 'var(--border-radius-lg)', zIndex: -1 }}></div>
          <img src="/gallery_6.png" alt="Our Promise" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>
        <div>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Promise</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            That question became our purpose. We also realized something equally important. Many children never even get the chance to discover gymnastics because they have never been introduced to the sport. Incredible talent often goes unnoticed simply due to a lack of awareness and opportunity.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            That promise became <strong style={{ color: 'var(--primary-color)' }}>Next Genz Gymnastics</strong>. We didn't begin with a large facility or a big team. We began with passion, experience, and a commitment to every child who walks through our doors.
          </p>
        </div>
      </div>

      {/* Row 4: Vision */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center', marginBottom: '8rem', direction: 'rtl' }}>
        <div style={{ position: 'relative', direction: 'ltr' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '-1rem', bottom: '-1rem', left: '1rem', background: 'rgba(212, 175, 55, 0.2)', borderRadius: 'var(--border-radius-lg)', zIndex: -1 }}></div>
          <img src="/gallery_1.png" alt="Building the Future" style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 60%', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
        </div>
        <div style={{ direction: 'ltr' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Building the Future</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Our vision is to make gymnastics accessible to every child, nurture future champions, and build confident, resilient individuals. Every child who joins our academy becomes part of a generation that is given the opportunities we always wished for.
          </p>
          <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--accent-primary)', margin: 0 }}>
            Welcome to Next Genz Gymnastics — where champions are built.
          </p>
        </div>
      </div>

      {/* Values Banner */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>Today, every training session reflects our values</h3>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>
        
        <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
          {[
            { 
              title: "Quality Coaching", 
              desc: "Expert guidance from experienced athletes.",
              icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            },
            { 
              title: "Equal Opportunity", 
              desc: "A fair, supportive platform for every child.",
              icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            },
            { 
              title: "Discipline", 
              desc: "Building respect and inner confidence.",
              icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            },
            { 
              title: "Safe Learning", 
              desc: "A secure environment focused on growth.",
              icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            }
          ].map((val, idx) => (
            <div key={idx} className="mobile-p-2" style={{ 
              padding: '2.5rem 2rem', 
              borderRadius: 'var(--border-radius-lg)', 
              textAlign: 'center', 
              background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.05), rgba(15, 15, 15, 0.8))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              borderTop: '4px solid var(--accent-primary)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
            }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {val.icon}
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>{val.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
