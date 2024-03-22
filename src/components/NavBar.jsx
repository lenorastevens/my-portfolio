import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-rose-100 bg-cyan-950 fixed z-50'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Lenora Stevens</h1>
        </div>

        <ul className='hidden md:flex'>            
            {links.map(({ id,link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-rose-100 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 text-rose-100 md:hidden z-10'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-20 md:relative md:top-0 w-full h-screen bg-gradient-to-b from-cyan-950 to-cyan-700 text-rose-100'>
                {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize hover:scale-105 duration-200 py-6 text-4xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default NavBar;