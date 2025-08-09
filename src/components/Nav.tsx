import Image from 'next/image';
import React from 'react';
import Logo from '../../public/Assets/Logo.svg';

const Nav = () => {
  return (
    <header className='flex text-white justify-between items-center max-w-7xl mx-auto relative z-20 py-8.5'>
      <Image src={Logo} alt='logo' />

      <nav>
        <ul className='flex space-x-8 text-xl'>
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>

      <button className='text-2xl'>Lets's talk</button>
    </header>
  );
};

export default Nav;
