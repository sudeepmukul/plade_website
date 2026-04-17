'use client';

import { useEffect, useRef, useCallback } from 'react';

const CODE_SNIPPETS = [
  'int i = 0;', 'for(;;){', 'void main()', 'System.out.println', 'print(x)',
  'return 0;', '#include', 'while(true)', 'if(ans ==', 'class Player',
  'public static', 'def shoot(', 'import sys', 'var score =', 'null;',
  '// TODO:', '!= null', '{ }', '++i', 'break;', 'continue;',
  'new Level()', 'const aim =', 'float speed', 'bool isAlive',
];

export default function Hero() {
  const particlesRef = useRef(null);
  const heroContentRef = useRef(null);
  const gridBgRef = useRef(null);

  const spawnParticle = useCallback(() => {
    const container = particlesRef.current;
    if (!container) return;

    const el = document.createElement('span');
    el.classList.add('particle');
    el.textContent = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.bottom = '-2rem';
    el.style.fontSize = (Math.random() * 4 + 9) + 'px';
    el.style.opacity = '0';
    el.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');

    const duration = Math.random() * 8 + 8;
    const delay = Math.random() * 4;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';

    container.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000);
  }, []);

  useEffect(() => {
    // Spawn initial burst
    for (let i = 0; i < 12; i++) {
      setTimeout(spawnParticle, i * 200);
    }

    // Continuous spawning
    const interval = setInterval(spawnParticle, 500);

    // Parallax on scroll
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scroll * 0.25}px)`;
      }
      if (gridBgRef.current) {
        gridBgRef.current.style.transform = `perspective(800px) rotateX(15deg) scale(1.3) translateY(${scroll * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [spawnParticle]);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.getElementById('dl-anchor');
    if (link) {
      link.href = 'plade-installer.exe';
      link.click();
    }

    const btn = e.currentTarget;
    const orig = btn.innerHTML;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Download Started!
    `;
    btn.style.background = '#33FF95';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
    }, 3000);
  };

  return (
    <section id="hero" aria-label="PLADE — FPS Coding Education Game">
      <div className="grid-bg" ref={gridBgRef}></div>
      <div className="scan-line"></div>
      <div id="particles" ref={particlesRef} aria-hidden="true"></div>
      <div className="hero-vignette"></div>

      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-eyebrow">{'// FPS Coding Education Game'}</div>

        <h1 className="hero-title">
          PL<span className="accent">A</span>DE<br />
          <span className="dim">CODE.</span><br />
          <span className="dim">SHOOT.</span><br />
          LEVEL UP.
        </h1>

        <p className="hero-subtitle">
          The world&apos;s first First-Person Shooter where your weapons are code.
          Shoot syntax targets, solve challenges mid-combat, and master programming
          through immersive Unreal Engine 5 gameplay.
        </p>

        <div className="hero-actions">
          <a
            href="#download"
            className="btn-download"
            id="hero-download-btn"
            onClick={handleDownload}
            aria-label="Download PLADE for Windows"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download for Windows
          </a>
          <a href="#how-it-works" className="btn-ghost" aria-label="Watch gameplay details">
            Watch Gameplay
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Crosshair badge */}
      <div className="hero-badge" aria-hidden="true">
        <div className="badge-ring"></div>
        <div className="badge-ring"></div>
        <div className="badge-ring"></div>
        <div className="badge-cross"></div>
        <div className="badge-center">
          <div className="badge-ue">Powered by</div>
          <div className="badge-engine">UE5.4</div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-num">3+</span>
          <span className="stat-label">Languages</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">AI</span>
          <span className="stat-label">Code Evaluation</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">FPS</span>
          <span className="stat-label">Game Engine</span>
        </div>
      </div>

      {/* Hidden download anchor */}
      <a id="dl-anchor" href="plade-installer.exe" download="PLADE-v1.0.0-Setup.exe" aria-hidden="true" tabIndex={-1}>
        Download
      </a>
    </section>
  );
}
