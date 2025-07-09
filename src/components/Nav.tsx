import React from 'react';

const Nav = () => {
  return (
    <header className='flex justify-between max-w-7xl mx-auto'>
      <h1>Logo</h1>

      <nav>
        <ul className='flex space-x-8'>
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
