import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='hidden md:block'>
      <div className='mx-1 flex items-center justify-between text-xs'>
        <div className='w-1/3 text-slate-500'>
          <p className=''>
            © 2021 - {new Date().getFullYear()}, Built with&nbsp;
            <a
              href='https://nextjs.org/'
              className='text-indigo-500 hover:text-amber-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              Next.js
            </a>{' '}
            &&nbsp;
            <a
              href='https://tailwindcss.com'
              className='text-indigo-500 hover:text-lime-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              TailwindCSS
            </a>
            .
          </p>
        </div>
        <div className='mt-2 flex w-1/3 justify-center'>
          <a
            href='https://github.com/Isaac-Tait/ilovetofish'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/GitHub.png' height={20} width={20} alt='GitHub' />
          </a>
        </div>
        <div className='flex w-1/3 justify-end text-slate-500'>
          <p className=''>
            Another&nbsp;
            <a
              href='https://mountaintopcoding.dev'
              className='text-indigo-500 hover:text-fuchsia-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              mountainTopCoding(
              <span role='img' aria-label='mountain with snow-cap'>
                &#127956;
              </span>
              );
            </a>{' '}
            project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
