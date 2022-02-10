import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Summer = () => {
  return (
    <div className='heropattern-topography-neutral-100'>
      <Header />
      <header className='mx-1 lg:flex lg:flex-wrap lg:justify-center'>
        <div className='my-auto flex justify-between lg:w-2/3'>
          <h3 className='text-2xl font-semibold'>
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
            <Link href='/fall'>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'leaf-maple']}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
          <h3 className='mr-4 text-2xl font-semibold'>
            <Link href='/winter'>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'snowflakes']}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className='mx-auto h-screen max-w-6xl px-1'>
        <h1 className='mt-1 flex flex-row justify-center rounded-xl bg-rose-400 text-2xl text-neutral-100'>
          Summer
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Summer;
