import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element)?.closest('.navbar')) {
        closeNavbar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className='relative sm:static'>
      <button className="p-4 text-white bg-orange-500 absolute top-0 left-0 z-20 sm:relative sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <div className={`fixed inset-y-0 left-0 z-10 flex flex-col w-64 p-4 bg-blue-900 text-white transition duration-300 transform navbar ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
        <button className="self-end sm:hidden" onClick={closeNavbar}>
          {/* Close Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <div className="relative w-24 h-24 mx-2 overflow-hidden rounded-full border-4 border-white">
            <Image src="https://robohash.org/mail@ashallendesign.co.uk" alt="avatar" layout="fill" objectFit="cover" />
          </div>
          <h4 className="mx-2 mt-4 text-lg font-semibold">Hassnain Kureshy</h4>
          <p className="mx-2 mt-1 text-sm font-medium">Full Stack Engineer</p>
        </div>

        <nav>
          <Link href="/mystack">
            <div className="block px-4 py-2 mt-5 text-sm font-medium bg-transparent hover:bg-orange-500 transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">My Stack</div>
          </Link>
          <Link href="/experience">
            <div className="block px-4 py-2 mt-2 text-sm font-medium bg-transparent hover:bg-orange-500 transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">Experience</div>
          </Link>
          <Link href="/projects">
            <div className="block px-4 py-2 mt-2 text-sm font-medium bg-transparent hover:bg-orange-500 transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">Projects</div>
          </Link>
          <Link href="/contact">
            <div className="block px-4 py-2 mt-2 text-sm font-medium bg-transparent hover:bg-orange-500 transition-all duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">Send a Message</div>
          </Link>
        </nav>

        <button className="w-full px-4 py-2 mt-5 text-sm font-medium tracking-wide bg-orange-500 rounded-md">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
