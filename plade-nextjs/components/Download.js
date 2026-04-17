'use client';

import { useEffect } from 'react';

export default function Download() {
  useEffect(() => {
    const reveals = document.querySelectorAll('#download .reveal');
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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
    <section id="download" aria-labelledby="download-heading">
      <div className="dl-glow" aria-hidden="true"></div>

      <div className="dl-content">
        <div className="dl-tag reveal">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="12" />
          </svg>
          Free Download — Windows 10/11
        </div>

        <h2 className="dl-title reveal" id="download-heading">
          START<br />PLAYING<br /><span>TODAY</span>
        </h2>

        <p className="dl-subtitle reveal">
          Download PLADE for free. No account required. Just install, launch, and start
          shooting your way to programming mastery.
        </p>

        <div className="dl-btn-wrap reveal">
          <a
            href="#"
            className="btn-dl-main"
            onClick={handleDownload}
            id="download-main-btn"
            aria-label="Download PLADE for Windows — free"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Download for Windows
          </a>
        </div>

        <div className="dl-meta reveal">
          <span>PLADE v1.0.0</span>
          <span>Windows 10/11 x64</span>
          <span>Requires UE5 Runtime</span>
        </div>
      </div>
    </section>
  );
}
