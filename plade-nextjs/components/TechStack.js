'use client';

import { useEffect } from 'react';

const TECH_ITEMS = [
  {
    tag: 'Game Engine',
    name: 'Unreal Engine 5.4',
    desc: 'Industry-leading real-time 3D engine powering the immersive FPS world with Lumen, Nanite and full physics.',
  },
  {
    tag: 'Game Logic',
    name: 'C++ & Blueprints',
    desc: 'Core game mechanics in performant C++, with visual Blueprints for rapid iteration on UI and gameplay flow.',
  },
  {
    tag: 'UI Framework',
    name: 'UMG Widgets',
    desc: 'Unreal Motion Graphics manages all in-game UI — challenge displays, code input fields, hints, and reward popups.',
  },
  {
    tag: 'Backend',
    name: 'Node.js Server',
    desc: 'Lightweight local server bridges the UE5 game with the AI evaluation layer. Routes code submissions in real-time.',
  },
  {
    tag: 'AI Engine',
    name: 'Ollama + Qwen-7B',
    desc: 'Fully local LLM inference. No cloud. Qwen-7B evaluates player-submitted code for correctness, errors, and quality.',
  },
];

export default function TechStack() {
  useEffect(() => {
    const reveals = document.querySelectorAll('#tech .reveal');
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
    <section id="tech" className="section" aria-labelledby="tech-heading">
      <div className="reveal">
        <div className="section-eyebrow">03 / Architecture</div>
        <h2 className="section-title" id="tech-heading">
          BUILT WITH<br />SERIOUS TECH
        </h2>
      </div>

      <div className="tech-grid" style={{ marginTop: '3.5rem' }}>
        {TECH_ITEMS.map((item, i) => (
          <article
            className="tech-card reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <div className="tech-tag">{item.tag}</div>
            <h3 className="tech-name">{item.name}</h3>
            <p className="tech-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
