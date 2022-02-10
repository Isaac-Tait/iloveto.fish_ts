import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

library.add(fal);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
