'use client';

import { useEffect } from 'react';

const FEATURES = [
  {
    num: '01',
    title: 'Shoot To Learn',
    desc: 'Coding targets appear in the 3D environment. Shoot the correct syntax answer before the timer runs out. Wrong answers trigger dynamic consequences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI Code Grader',
    desc: 'Submit written code mid-game. A local Ollama LLM (Qwen-7B) evaluates correctness in real-time via a NodeJS backend — no cloud dependency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Immersive UE5 World',
    desc: 'Built entirely in Unreal Engine 5.4. Lumen lighting, real physics, and a fully interactive 3D environment make learning feel like a AAA title.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Multi-Language Support',
    desc: 'Choose Python, Java, or C as your weapon of choice. Each language unlocks unique challenge types and progressively harder syntax arenas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Progressive Difficulty',
    desc: 'Levels scale in complexity — from variables and loops to advanced OOP and algorithms. Dopamine-driven reward loops keep learners engaged.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Offline First',
    desc: 'No internet? No problem. The local LLM evaluates code completely offline. Play anywhere, learn anywhere — zero cloud dependency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Features() {
  useEffect(() => {
    const reveals = document.querySelectorAll('#features .reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section" aria-labelledby="features-heading">
      <div className="reveal">
        <div className="section-eyebrow">01 / Core Features</div>
        <h2 className="section-title" id="features-heading">
          WHY PLADE<br />CHANGES EVERYTHING
        </h2>
      </div>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <article
            className="feature-card reveal"
            key={f.num}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="feature-num">{f.num}</div>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
