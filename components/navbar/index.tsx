import { useState, useEffect } from 'react';

import Link from 'next/link';

import { navitems } from '../../utils/navitems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

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
    <div className='flex fixed bottom-0 left-0 right-0 z-20'>
      <div className="flex justify-center items-center w-full h-16 bg-blue-900 text-white">
        <nav className='flex justify-center space-x-6 w-full'>
          {navitems.map(({ name, link, icon }) => (
            <Link href={link} key={name}>
              <div className="text-lg cursor-pointer h-16 flex items-center justify-center relative group px-4 hover:bg-orange-500">
                <i className={`light-icon-${icon} font-bold text-lg`}></i>
                <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
                  {name}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
