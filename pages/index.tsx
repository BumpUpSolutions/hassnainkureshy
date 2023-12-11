import Head from 'next/head';

import Navbar from '../components/navbar';
import About from '../components/about';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hassnain Kureshy</title>
        <meta name="description" content="Welcome!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='bg-orange-50 flex'>
        <Navbar />
        <div className="flex-1 p-10 ml-64">
          <About />
        </div>
      </section>
    </>
  )
}
