'use client';

import { useEffect } from 'react';

const STEPS = [
  {
    num: '// 01',
    title: 'Launch & Select Language',
    desc: 'Open PLADE and pick your programming language — Python, Java, or C. Each unlocks a distinct visual arena and challenge set.',
  },
  {
    num: '// 02',
    title: 'Enter the FPS Arena',
    desc: 'You spawn inside a fully immersive 3D environment. Floating targets carry syntax options, code snippets, and logic challenges.',
  },
  {
    num: '// 03',
    title: 'Shoot The Right Answer',
    desc: 'Read the challenge. Aim. Fire at the correct target. Wrong answers trigger in-game penalties and add difficulty to the environment.',
  },
  {
    num: '// 04',
    title: 'Submit Code — AI Evaluates',
    desc: 'For advanced levels, type code directly. It\'s sent to NodeJS → Ollama Qwen-7B → UE5 in milliseconds. Pass and progress.',
  },
];

export default function HowItWorks() {
  useEffect(() => {
    const reveals = document.querySelectorAll('#how-it-works .reveal');
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
    <section id="how-it-works" className="section" aria-labelledby="gameplay-heading">
      <div className="how-grid">
        <div>
          <div className="reveal">
            <div className="section-eyebrow">02 / Gameplay</div>
            <h2 className="section-title" id="gameplay-heading">
              HOW IT<br />WORKS
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginTop: '1rem',
              maxWidth: '440px',
            }}>
              PLADE merges the dopamine hit of FPS combat with structured programming education.
              Every bullet fired is a coding decision.
            </p>
          </div>

          <div className="steps-list" style={{ marginTop: '2.5rem' }}>
            {STEPS.map((step, i) => (
              <div
                className="step-item reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="step-num-wrap">
                  <div className="step-num">{step.num}</div>
                </div>
                <div className="step-content">
                  <div className="step-title">
                    <div className="step-dot"></div>
                    {step.title}
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal mockup */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal" role="img" aria-label="Code editor showing a PLADE coding challenge example">
            <div className="terminal-bar">
              <div className="term-dot"></div>
              <div className="term-dot"></div>
              <div className="term-dot"></div>
              <span className="term-title">plade_challenge_03.cpp</span>
            </div>
            <div className="terminal-body">
              <div><span className="t-comment">{'// PLADE Challenge: Fix the loop'}</span></div>
              <div><span className="t-comment">{'// Target: Print 1 to 10'}</span></div>
              <br />
              <div>
                <span className="t-keyword">#include</span>
                <span className="t-string"> &lt;iostream&gt;</span>
              </div>
              <div>
                <span className="t-keyword">using namespace</span>
                <span className="t-var"> std</span>
                <span className="t-punct">;</span>
              </div>
              <br />
              <div>
                <span className="t-type">int</span>
                <span className="t-func"> main</span>
                <span className="t-punct">()</span>
                <span className="t-var"> {'{'}</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="t-keyword">for</span>
                <span className="t-punct">(</span>
                <span className="t-type">int</span>
                <span className="t-var"> i </span>
                <span className="t-punct">= </span>
                <span className="t-num">1</span>
                <span className="t-punct">; i </span>
                <span className="t-punct">&lt;= </span>
                <span className="t-num">10</span>
                <span className="t-punct">; i</span>
                <span className="t-func">++</span>
                <span className="t-punct">)</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-var">cout </span>
                <span className="t-punct">&lt;&lt; </span>
                <span className="t-var">i </span>
                <span className="t-punct">&lt;&lt; </span>
                <span className="t-string">{'"\\n"'}</span>
                <span className="t-punct">;</span>
              </div>
              <div>
                <span className="t-keyword">&nbsp;&nbsp;return </span>
                <span className="t-num">0</span>
                <span className="t-punct">;</span>
              </div>
              <div><span className="t-var">{'}'}</span></div>
              <br />
              <div className="terminal-prompt">
                Submitting to AI grader<span className="cursor-blink"></span>
              </div>
              <div className="eval-badge">
                <div className="eval-dot"></div>
                Ollama Qwen-7B Evaluating...
              </div>
            </div>
          </div>

          <div className="terminal-metrics">
            <div className="terminal-metric">
              <div className="terminal-metric-label">RESPONSE TIME</div>
              <div className="terminal-metric-value green">&lt;200ms</div>
            </div>
            <div className="terminal-metric">
              <div className="terminal-metric-label">EVAL ENGINE</div>
              <div className="terminal-metric-value blue">LOCAL LLM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
