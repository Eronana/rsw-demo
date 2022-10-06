import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

export default function ResponsiveStartupWebsite({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
