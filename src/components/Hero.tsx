'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io5';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videosRef = useRef<HTMLVideoElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutBtn = useRef<HTMLButtonElement>(null);
  const callBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const h2 = textRef.current.querySelector('h2');
    if (!h2) return;

    const splitHeading = new SplitType(h2, {
      types: 'lines',
      lineClass: 'line',
    });

    splitHeading.lines?.forEach((line) => {
      line.innerHTML = `<span style="display:block; transform:translateY(100%);">${line.textContent}</span>`;
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(textRef.current.querySelector('h4'), {
      y: 100,
      opacity: 0,
      duration: 1,
    })
      .to(
        textRef.current.querySelectorAll('h2 .line span'),
        {
          y: 0,
          duration: 1.3,
          stagger: 1.2,
        },
        '-=0.3'
      )
      .from(
        textRef.current.querySelector('p'),
        {
          y: 40,
          opacity: 0,
          stagger: 0.27,
          duration: 2,
        },
        '-=0.4'
      )
      .from(
        Array.from(textRef.current.querySelectorAll('button')),
        {
          y: 30,
          opacity: 0,
          stagger: 0.17,
          duration: 2.25,
        },
        '-=0.3'
      )
      .from(
        Array.from(textRef.current.querySelectorAll('a')),
        {
          y: 20,
          opacity: 0,
          stagger: 0.19,
          duration: 2,
        },
        '-=0.4'
      );
  }, []);

  useEffect(() => {
    const aboutBtn = document.querySelector('.about-btn');
    gsap.set(aboutBtn, {
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
    });

    const aboutBg = document.createElement('span');
    aboutBg.classList.add('about-bg');
    aboutBtn?.appendChild(aboutBg);

    gsap.set(aboutBg, {
      position: 'absolute',
      top: '-100%',
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: -1,
    });

    aboutBtn?.addEventListener('mouseenter', () => {
      gsap.to(aboutBg, { top: '0%', duration: 0.4, ease: 'power2.out' });
      gsap.to(aboutBtn, { color: 'black', duration: 0.3, ease: 'power2.out' });
    });
    aboutBtn?.addEventListener('mouseleave', () => {
      gsap.to(aboutBg, { top: '-100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(aboutBtn, { color: 'white', duration: 0.3, ease: 'power2.in' });
    });

    const bookBtn = document.querySelector('.book-btn');
    gsap.set(bookBtn, {
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
    });

    const bookBg = document.createElement('span');
    bookBg.classList.add('book-bg');
    bookBtn?.appendChild(bookBg);

    gsap.set(bookBg, {
      position: 'absolute',
      bottom: '-100%',
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: -1,
    });

    bookBtn?.addEventListener('mouseenter', () => {
      gsap.to(bookBg, { bottom: '0%', duration: 0.4, ease: 'power2.out' });
      gsap.to(bookBtn, { color: 'black', duration: 0.3, ease: 'power2.out' });
    });
    bookBtn?.addEventListener('mouseleave', () => {
      gsap.to(bookBg, { bottom: '-100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(bookBtn, { color: 'white', duration: 0.3, ease: 'power2.in' });
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % videosRef.current.length;

      gsap.to(videosRef.current[activeIndex], {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      });

      gsap.to(videosRef.current[nextIndex], {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      });

      setActiveIndex(nextIndex);
    }, 12000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return;

    gsap.to(videosRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to(textRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className='relative w-full h-[150vh] overflow-hidden z-10'
    >
      <div className='absolute inset-0 z-20'>
        <Nav />
      </div>

      {[
        '/Assets/nextbot.mp4',
        '/Assets/chips2.mp4',
        '/Assets/chips.mp4',
        '/Assets/holo-blobs.mp4',
        ,
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

      <article
        ref={textRef}
        className='absolute inset-0 max-w-7xl z-30 mx-auto flex flex-col justify-center mt-[28rem]'
      >
        <h4 className='text-white text-[clamp(2rem,3vw,3rem)] leading-[1] font-bold font-[var(--font-poppins)]'>
          Hi, I'm Princess
        </h4>
        <h2 className='text-white text-[clamp(2rem,14vw,14rem)] leading-[1] font-bold mt-3'>
          A Front-end
          <br /> Developer
        </h2>
        <p className='text-white text-2xl mt-14 px-4 max-w-4xl'>
          Transforming ideas into stunning, responsive, and interactive web
          experiences that captivate users on every screen.
        </p>
        <div className='flex space-x-24 px-4 my-12'>
          <button className='about-btn text-white text-xl cursor-pointer border-2 border-white rounded-full px-12 py-3'>
            About me
          </button>
          <button className='book-btn text-white text-xl cursor-pointer border-2 border-white rounded-full px-12 py-3'>
            Book a Call
          </button>
        </div>
        <div className='flex space-x-12 px-5 mt-2'>
          <a
            href='https://www.linkedin.com/in/princess-ayomide-ogunnaike-235b25211'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin className='text-white text-2xl cursor-pointer' />
          </a>
          <a
            href='https://github.com/Princessayomide53/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub className='text-white text-2xl cursor-pointer' />
          </a>
          <a href='tel:+2348076824974'>
            <IoCallOutline className='text-white text-2xl cursor-pointer' />
          </a>
          <a
            href='https://wa.me/08098559236'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoWhatsapp className='text-white text-2xl cursor-pointer' />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
