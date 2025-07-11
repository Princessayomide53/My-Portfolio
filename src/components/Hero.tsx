import React from 'react';
import Nav from './Nav';

const Hero = () => {
  return (
    <section className='relative w-full h-screen z-10'>
      <div className='absolute inset-0'>
        <Nav />
      </div>

      <video autoPlay loop playsInline muted className='w-full'>
        <source src='/Assets/nextbot.mp4' type='video/mp4' />
      </video>

      <video autoPlay loop playsInline muted className='w-full'>
        <source src='/Assets/unchained.mp4' type='video/mp4' />
      </video>

      <video autoPlay loop playsInline muted className='w-full'>
        <source src='/Assets/chips.mp4' type='video/mp4' />
      </video>

      <video autoPlay loop playsInline muted className='w-full'>
        <source src='/Assets/chips2.mp4' type='video/mp4' />
      </video>
    </section>
  );
};

export default Hero;
