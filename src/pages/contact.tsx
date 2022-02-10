import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Contact() {
  const [state, handleSubmit] = useForm('https://formspree.io/f/mdobeblw');

  if (state.succeeded) {
    return <p>Thank you for your submission!</p>;
  }

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
      <h2 className='text-center text-2xl font-semibold text-red-500'>
        How to get a hold of me...
      </h2>

      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-6xl bg-indigo-100'
        method='POST'
      >
        <div className='flex flex-wrap justify-center pt-2'>
          <label htmlFor='email' className='mr-2'>
            Your Email Address
          </label>
          <input id='email' type='email' name='email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className='flex flex-wrap justify-center pt-6'>
          <label htmlFor='message' className='mr-2'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            className='mx-2 box-content h-60 w-full'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <div className='flex flex-wrap justify-center py-8'>
          <button
            type='submit'
            disabled={state.submitting}
            className='rounded bg-amber-400 px-2 hover:text-white hover:underline'
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </div>

        <input
          type='hidden'
          name='_next'
          value='https://iloveto.fish/thank-you'
        ></input>
      </form>

      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
}
