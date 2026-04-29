'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };
    const addHover = () => dot.current?.classList.add('hovered');
    const removeHover = () => dot.current?.classList.remove('hovered');

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-follower" ref={ring} />
    </>
  );
}
