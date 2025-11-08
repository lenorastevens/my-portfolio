import React from 'react';
import HeroImage from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-cyan-950 via-cyan-950 to-cyan-600 pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full md:w-2/3 lg:w-4/5 md:pr-8'>
                <h2 className='text-4xl sm:text-5xl font-bold pr-4 text-white'>I'm a Full Stack Developer</h2>
                <p className='text-white py-4 max-w-md'>
                As a Full Stack Developer, I enjoy bringing ideas to life through modern web technologies. My experience includes working with .NET Razor Pages, MVC Core, React, Next.js, Tailwind, TypeScript, MySQL, and PostgreSQL to build dynamic, user-focused applications. I’m driven by a passion for learning, problem-solving, and crafting intuitive digital solutions that make an impact.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-300 to-pink cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                             <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile' className='rounded-2xl w-2/3 md:w-3/5 lg:w-4/5 object-cover'/>
            </div>
        </div>
    </div>
  );
};

export default Home;