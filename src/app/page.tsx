'use client';
import Hero from '@/components/Hero';
import Pixi from '@/components/Pixi';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className=''>
      <Hero />
      <TechStack />
      <Projects />
      <div className='flex items-center justify-center min-h-screen bg-black'>
        <Pixi />
      </div>
    </div>
  );
}
