'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videosRef = useRef<HTMLVideoElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Video switching
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % videosRef.current.length;
      gsap.set(videosRef.current[activeIndex], { opacity: 0 });
      gsap.fromTo(
        videosRef.current[nextIndex],
        { opacity: 1, scale: 1.1, xPercent: 5 },
        { scale: 1, xPercent: 0, duration: 2, ease: 'power3.out' }
      );
      setActiveIndex(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    // Parallax effect for videos
    gsap.to(videosRef.current, {
      yPercent: 20, // moves slower
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for text
    gsap.to(textRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className='relative w-full h-screen overflow-hidden z-10'
    >
      <div className='absolute inset-0 z-20'>
        <Nav />
      </div>

      {[
        '/Assets/nextbot.mp4',
        '/Assets/chips2.mp4',
        '/Assets/unchained.mp4',
        '/Assets/chips.mp4',
      ].map((src, i) => (
        <video
          key={i}
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
          style={{
            opacity: i === activeIndex ? 1 : 0,
            zIndex: i === activeIndex ? 1 : 0,
          }}
          ref={(el) => {
            if (el) videosRef.current[i] = el;
          }}
        >
          <source src={src} type='video/mp4' />
        </video>
      ))}

      <article className='absolute inset-0 max-w-7xl z-30 mx-auto'>
        <h2
          ref={textRef}
          className='text-white text-[clamp(2rem,15vw,15rem)] leading-[1] pt-[14rem] font-bold'
        >
          Front-end
          <br /> Developer
        </h2>
        <p>Building beautiful and accessible websites and products</p>
      </article>
    </section>
  );
};

export default Hero;
