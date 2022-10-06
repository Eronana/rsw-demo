import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

export default function Layout(props:{ children:ReactNode }) {
  return <div>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Navbar/>
    { props.children }
    <Footer/>
  </div>;
}
