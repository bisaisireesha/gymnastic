"use client";
import React, { useState } from 'react';

const Activities = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      id: 'kids',
      title: 'Kids & Teens Programs',
      image: '/kids_activities.png',
      desc: 'Our kids programs focus on building core strength, coordination, and unshakeable confidence in a fun, supportive environment.',
      features: [
        { icon: "🤸", text: "Basic Gymnastics & Coordination" },
        { icon: "🎯", text: "Fun Physical Activities" },
        { icon: "🌟", text: "Confidence & Discipline" }
      ],
      buttonText: 'Explore Kids Programs'
    },
    {
      id: 'adults',
      title: 'Adults Fitness Programs',
      image: '/adult_activities.png',
      desc: 'It is never too late to start. Our adult programs are tailored to improve mobility, strength, and overall functional fitness.',
      features: [
        { icon: "🥇", text: "1-on-1 Personal Training" },
        { icon: "💪", text: "Calisthenics & Strength" },
        { icon: "🏃‍♀️", text: "Fitness & Flexibility" }
      ],
      buttonText: 'Explore Adult Programs'
    }
  ];

  const detailsData = {
    kids: [
      { 
        title: "Basic Gymnastics", 
        desc: "Learn fundamental skills including balance, coordination, body control, and confidence.",
        image: "/kids_activities.png"
      },
      { 
        title: "Fitness", 
        desc: "Improve overall physical fitness with fun exercises that develop strength, agility, and coordination.",
        image: "/story_vision.png"
      },
      { 
        title: "Flexibility", 
        desc: "Increase flexibility safely through guided stretching routines that improve posture and movement.",
        image: "/toddler.png"
      },
      { 
        title: "Endurance", 
        desc: "Develop stamina and cardiovascular fitness with engaging activities designed for growing children.",
        image: "/story_obstacles.png"
      },
      { 
        title: "Physical Activities", 
        desc: "Interactive games and movement-based activities that improve motor skills, teamwork, and confidence.",
        image: "/story_dream.png"
      },
      { 
        title: "Confidence & Discipline", 
        desc: "Build focus, self-confidence, discipline, and positive habits through structured gymnastics training.",
        image: "/story_promise.png"
      }
    ],
    adults: [
      { 
        title: "Personal Training", 
        desc: "One-on-one coaching tailored to your individual fitness goals.",
        image: "/story_promise.png"
      },
      { 
        title: "Resistance Training", 
        desc: "Build muscle strength using resistance exercises and progressive training techniques.",
        image: "/adult_resistance.png"
      },
      { 
        title: "Calisthenics", 
        desc: "Master bodyweight exercises that improve strength, mobility, balance, and control.",
        image: "/adult_calisthenics.png"
      },
      { 
        title: "Weight Loss", 
        desc: "Structured workout programs designed to support healthy and sustainable weight management.",
        image: "/adult_weightloss.png"
      },
      { 
        title: "Fitness", 
        desc: "Improve endurance, strength, flexibility, and overall health through guided training.",
        image: "/adult_activities.png"
      },
      { 
        title: "Healthy Body Shape", 
        desc: "Enhance posture, body composition, mobility, and confidence with personalized fitness plans.",
        image: "/hero.png"
      }
    ]
  };

  return (
    <section id="activities" className="section container" style={{ padding: '8rem 1rem', minHeight: '800px' }}>
      
      {!selectedProgram ? (
        <div className="animate-fade-up">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>Activities & Programs</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8' }}>
              Choose your path. We offer specialized training environments dedicated to helping both children and adults achieve their ultimate potential.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
            gap: '4rem', 
            alignItems: 'stretch'
          }}>
            {programs.map((prog) => (
              <div key={prog.id} className="glass-panel" style={{ 
                borderRadius: 'var(--border-radius-lg)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.5)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}>
                <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}></div>
                  <h3 style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem', color: 'var(--text-primary)', fontSize: '2rem', margin: 0, fontWeight: 800 }}>
                    {prog.title}
                  </h3>
                </div>

                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    {prog.desc}
                  </p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                    {prog.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                        <span style={{ fontSize: '1.5rem', background: 'rgba(212, 175, 55, 0.1)', padding: '0.5rem', borderRadius: '50%' }}>{feat.icon}</span>
                        {feat.text}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => setSelectedProgram(prog.id)}
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '50px' }}>
                    {prog.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-fade-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <button 
              onClick={() => setSelectedProgram(null)}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--text-secondary)', padding: '0.8rem 2rem', borderRadius: '50px', cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem', transition: 'all 0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              ← Back to All Programs
            </button>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', fontWeight: 800 }}>
              {selectedProgram === 'kids' ? 'Kids & Teens Activities' : 'Adults Fitness Activities'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Detailed classes and sessions available for you to join today.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            {detailsData[selectedProgram as keyof typeof detailsData].map((activity, idx) => (
              <div key={idx} className="glass-panel" style={{ 
                borderRadius: 'var(--border-radius-lg)', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '4px solid var(--accent-primary)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.2)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 800 }}>{activity.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>{activity.desc}</p>
                  <a href="#register" className="btn btn-secondary" style={{ width: '100%', padding: '0.8rem', borderRadius: '50px', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', background: 'transparent', transition: 'all 0.3s ease', textAlign: 'center', display: 'block' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.color = '#000'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-primary)'; }}>
                    Book Session
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
