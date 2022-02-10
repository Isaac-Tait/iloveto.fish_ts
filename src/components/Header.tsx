{
  /* https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1 */
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center p-3 '>
        <Link href='/'>
          <a className='mr-4 inline-flex items-center p-2 text-6xl text-amber-400 lg:w-1/3'>
            <span className='flex'>
              I&nbsp;
              <FontAwesomeIcon icon={['fal', 'heart']} className='h-16' />
              &nbsp;to&nbsp;
              <FontAwesomeIcon icon={['fal', 'fish']} className='h-16' />
            </span>
          </a>
        </Link>
        <button
          className=' ml-auto inline-flex rounded bg-amber-400 p-3 text-white outline-none hover:text-white lg:hidden'
          onClick={handleClick}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div I use a ternary operator to decide whether or not to display the content of the div*/}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className='flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center'>
            <Link href='/fallfish-tenkara'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto'>
                Fallfish Tenkara
              </a>
            </Link>
            <Link href='/about'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto'>
                About
              </a>
            </Link>
            <Link href='/contact'>
              <a className='w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
