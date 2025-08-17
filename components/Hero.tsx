'use client';
import React, { useEffect } from 'react';

export default function HeroSmokeInit() {
  // simple subtle smoke particles
  useEffect(() => {
    const canvas = document.getElementById('smoke-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * w,
      y: h + Math.random() * 100,
      r: 20 + Math.random() * 40,
      a: 0.05 + Math.random() * 0.08,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.2 - Math.random() * 0.3,
      hue: 270 + Math.random() * 30, // purple
    }));

    let rafId: number;
    const loop = () => {
      if (!ctx) return;
      ctx.clearRect(0,0,w,h);
      for (const p of particles) {
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `hsla(${p.hue}, 90%, 60%, ${p.a})`);
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.r *= 1.001;
        if (p.y < -50 || p.x < -50 || p.x > w+50) {
          p.x = Math.random() * w;
          p.y = h + 50;
          p.r = 20 + Math.random() * 40;
          p.vx = (Math.random() - 0.5) * 0.2;
          p.vy = -0.2 - Math.random() * 0.3;
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
