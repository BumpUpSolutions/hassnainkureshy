import Head from 'next/head';

import Navbar from '../components/navbar';
import About from '../components/about';
import Stack from '../components/stack';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hassnain Kureshy</title>
        <meta name='description' content='Welcome!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <section className='flex flex-col h-screen'>
        <div className='w-full content-area overflow-y-auto'>
          <div className='container lg:px-24 md:px-16 px-2 py-10 mx-auto'>
            <About />
            <Stack />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
        <Navbar />
      </section>
    </>
  )
}
