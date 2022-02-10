import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='heropattern-bubbles-neutral-100 h-screen'>
      <Head>
        <title>I Love To Fish</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='flex flex-col'>
        <div className='pl-1'>
          <Header />
        </div>
        <main className='pt-16'>
          <div className='mx-auto grid max-w-6xl grid-cols-6 md:gap-4'>
            <h3 className='col-span-4 col-start-2 flex h-20 justify-center text-5xl md:h-48'>
              <Link href='/spring'>
                <a className='my-auto text-lime-400 hover:text-blue-600'>
                  <FontAwesomeIcon
                    icon={['fal', 'flower-daffodil']}
                    className='h-14'
                  />
                </a>
              </Link>
            </h3>

            <h3 className='col-start-1 col-end-3 flex h-20 justify-center text-5xl md:h-48'>
              <Link href='/summer'>
                <a className='my-auto text-rose-400 hover:text-indigo-500'>
                  <FontAwesomeIcon
                    icon={['fal', 'cloud-sun-rain']}
                    className='h-14'
                  />
                </a>
              </Link>
            </h3>

            <h3 className='col-span-3 col-end-8 flex h-20 justify-center text-5xl md:h-48'>
              <Link href='/fall'>
                <a className='my-auto text-fuchsia-400 hover:text-indigo-500'>
                  <FontAwesomeIcon
                    icon={['fal', 'leaf-maple']}
                    className='h-14'
                  />
                </a>
              </Link>
            </h3>

            <h3 className='col-span-7 col-start-1 flex h-20 justify-center text-5xl md:h-48'>
              <Link href='/winter'>
                <a className='my-auto text-teal-400 hover:text-indigo-500'>
                  <FontAwesomeIcon
                    icon={['fal', 'snowflakes']}
                    className='h-14'
                  />
                </a>
              </Link>
            </h3>
          </div>
        </main>
        <p></p>
      </div>

      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
