import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Blog = () => {
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
            <Link href='/summer'>
              <a className='text-rose-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={['fal', 'cloud-sun-rain']}
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
        <h1 className='mt-1 flex flex-row justify-center rounded-xl bg-fuchsia-400 text-2xl text-neutral-100'>
          Fall
        </h1>
        <Link href='/fall/bouldering'>
          <a className='text-amber-500 underline'>
            <p>Boulders</p>
          </a>
        </Link>
        <p>
          I like to climb rocks. So, imagine my excitement when I discoverd a
          collection of boulders not too far from home...
        </p>

        <Link href='/fall/october'>
          <a className='text-amber-500 underline'>
            <p>October</p>
          </a>
        </Link>
        <p>
          It has been too long since I chased down obscure blue lines on a map
          to see if they held trout. It was time to brush off the cobwebs...
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
