import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Blank = () => {
  return (
    <div className='heropattern-topography-neutral-100'>
      <header className='flex w-full flex-wrap justify-between px-2'>
        <div className='flex w-full flex-row justify-between'>
          <Header />
        </div>

        <div className='my-auto flex w-full justify-between'>
          <h3 className='text-2xl font-semibold'>
            <Link href='/spring'>
              <a className='text-lime-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href='/summer'>
              <a className='text-rose-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href='/fall'>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={['fal', 'leaf-maple']} />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href='/winter'>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={['fal', 'snowflakes']} />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className='mx-auto h-screen max-w-6xl overflow-y-scroll px-1'>
        <h1 className='flex justify-center text-2xl font-semibold text-emerald-600'>
          Title
        </h1>
        <p>
          More text here{' '}
          <a
            href='https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig'
            target='_blank'
            rel='noopener noreferrer'
            className='text-teal-400 underline hover:text-indigo-400'
          >
            here
          </a>
          .
        </p>
        <p>Text</p>
        <div className='flex justify-center'>
          <Image
            src='/images/koselig2-500.jpg'
            height={750}
            width={562}
            className='rounded-lg'
            alt='Project'
          />
        </div>
        <p className='flex justify-center text-xs italic'>
          This is a photo caption
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blank;
