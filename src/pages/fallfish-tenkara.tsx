import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Fallfish = () => {
  return (
    <div className='heropattern-bubbles-neutral-100 h-screen'>
      <Header />
      <header className='mx-1 lg:flex lg:flex-wrap lg:justify-center'>
        <div className='my-auto flex justify-between lg:w-2/3'>
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
          <h3 className='mr-4 text-2xl font-semibold'>
            <Link href='/winter'>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={['fal', 'snowflakes']} />
              </a>
            </Link>
          </h3>
        </div>
      </header>

      <div className='mx-auto max-w-6xl px-1'>
        <h2 className='text-center text-2xl font-semibold text-red-500'>
          Fallfish Tenkara
        </h2>
        <p className='mt-1'>
          In 2013 I was living in the Mid-Atlantic region of the United States
          of America, when I stumbled upon a method of fishing called tenkara.
        </p>
        <p className='mt-1'>
          In the Mid-Atlantic one of the most prevalent fresh water fish is the
          Fallfish and I caught a lot of them with my tenkara rod. Many anglers
          considered the Fallfish a trash fish. I did not share that
          sentiment...
        </p>
        <p className='mt-1'>
          In 2014 I moved to Japan and I started a blog about my fishing
          exploits in the Land of the Rising Sun. I named it Fallfish Tenkara.
          The site grew every year and became more and more polished. I
          commissioned a logo, wrote articles for tenkara publications, and even
          gave video presentations at tenkara events around the world.
        </p>
        <p className='mt-1'>
          Now there are nearly 140 pages chronicling my adventures in Japan
          within the confines of Fallfish Tenkara. The whole site is dedicated
          to my adventures in Japan.
        </p>
        <p className='mt-1'>So, go check it out by clicking the logo below.</p>
        <div className='flex justify-center pt-10'>
          <a
            href='https://fallfishtenkara.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/images/FfT_logo.png'
              height={258}
              width={262}
              className='rounded-lg'
              alt='Project'
            />
          </a>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Fallfish;
