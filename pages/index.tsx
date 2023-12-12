import Head from 'next/head';

import Navbar from '../components/navbar';
import About from '../components/about';
import Stack from '../components/stack';
import Experience from '../components/experience';
import Projects from '../components/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hassnain Kureshy</title>
        <meta name="description" content="Welcome!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='flex flex-col sm:flex-row'>
        <Navbar />
        <div className="flex-1 md:p-10 p-0 md:ml-64 ml-0 md:mt-0 mt-10">
          <About />
          <Stack />
          <Experience />
          <Projects />
        </div>
      </section>
    </>
  )
}
