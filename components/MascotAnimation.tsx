'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MascotAnimation() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current || !titleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300',
        scrub: true,
        pin: true,
      },
    });

    tl.to(titleRef.current, { y: -120, opacity: 0.2, ease: 'power3.inOut' }, 0);

    tl.to(leftRef.current, {
      width: '22vw',
      height: 'auto',
      top: '2rem',
      left: '2rem',
      filter: 'drop-shadow(0 0 12px rgba(0,255,255,0.45))',
      ease: 'power3.inOut',
    }, 0);

    tl.to(rightRef.current, {
      width: '22vw',
      height: 'auto',
      top: '2rem',
      right: '2rem',
      filter: 'drop-shadow(0 0 12px rgba(0,255,255,0.45))',
      ease: 'power3.inOut',
    }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Cosmic tiled background */}
      <div className="absolute inset-0 bg-[url('/bg/cosmic-tile.webp')] opacity-70" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,0,30,0.85) 0%, rgba(10,0,30,0.5) 60%, rgba(10,0,30,0.85) 100%)' }} />

      {/* Purple smoke canvas */}
      <canvas id="smoke-canvas" className="absolute inset-0 pointer-events-none"></canvas>

      {/* Title */}
      <div ref={titleRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-[Kortz] tracking-wide mb-4 text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.25)]">
          zero fox gibbon
        </h1>
        <p className="text-lg md:text-2xl font-[Wushu] text-brandAqua">Non-Fungible Apparel</p>
        <a href="#join" className="mt-8 inline-block border border-brandAqua/50 px-5 py-2 rounded-xl hover:border-brandAqua hover:bg-brandAqua/10 transition">
          → Join the Inner Circle
        </a>
      </div>

      {/* Left mascot */}
      <div ref={leftRef} className="absolute left-1/2 -translate-x-[55%] top-1/2 -translate-y-1/2 w-[48vw] animate-breathe">
        <Image src="/mascots/left.webp" alt="Left mascot" width={900} height={1200} priority />
      </div>

      {/* Right mascot */}
      <div ref={rightRef} className="absolute left-1/2 -translate-x-[-45%] top-1/2 -translate-y-1/2 w-[48vw] animate-breathe">
        <Image src="/mascots/right.webp" alt="Right mascot" width={900} height={1200} priority />
      </div>
    </div>
  );
}
