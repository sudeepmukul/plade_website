'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ cx: 0, cy: 0, tx: 0, ty: 0 });

  useEffect(() => {
    // Only activate on non-touch devices
    const isTouch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    pos.current.cx = window.innerWidth / 2;
    pos.current.cy = window.innerHeight / 2;
    pos.current.tx = pos.current.cx;
    pos.current.ty = pos.current.cy;

    const handleMove = (e) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };

    let raf;
    const animate = () => {
      const p = pos.current;
      p.cx += (p.tx - p.cx) * 0.18;
      p.cy += (p.ty - p.cy) * 0.18;
      cursor.style.left = p.cx + 'px';
      cursor.style.top = p.cy + 'px';
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef} aria-hidden="true">
      <div className="cursor-h"></div>
      <div className="cursor-v"></div>
    </div>
  );
}
