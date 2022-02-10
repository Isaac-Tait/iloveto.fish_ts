import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Skiing = () => {
  return (
    <div className='heropattern-topography-neutral-100'>
      <Header />
      <header className='mx-1 lg:flex lg:flex-wrap lg:justify-center'>
        <div className='my-auto flex justify-between lg:w-2/3'>
          <h3 className='mr-4 text-2xl font-semibold'>
            <Link href='/spring'>
              <a className='text-lime-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'flower-daffodil']}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href='/summer'>
              <a className='text-rose-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'cloud-sun-rain']}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href='/fall'>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'leaf-maple']}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className='mx-auto h-screen max-w-6xl px-1'>
        <h1 className='mt-1 flex flex-row justify-center rounded-xl bg-teal-400 text-2xl text-neutral-100'>
          Winter
        </h1>
        <Link href='/winter/koselig'>
          <a className='text-amber-500 underline'>
            <p>Koselig</p>
          </a>
        </Link>
        <p>
          Let us get cozy for a second and have a quick chat about a positive
          mental state surrounding winter and all her cold, dark, and gray
          glory...
        </p>

        <Link href='/winter/nordic-skiing'>
          <a className='text-amber-500 underline'>
            <p>Nordic Skiing</p>
          </a>
        </Link>
        <p>
          I thought you had to be ultra wealthy to go skiing until I discovered
          Nordic Skiing...
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Skiing;
