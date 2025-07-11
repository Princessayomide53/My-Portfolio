import React from 'react';

const Nav = () => {
  return (
    <header className='flex text-white justify-between max-w-7xl mx-auto relative z-20 py-8.5'>
      <h1 className='text-2xl'>Logo</h1>

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
