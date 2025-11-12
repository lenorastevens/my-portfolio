import React from 'react';
import HeroImage from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-cyan-950 via-cyan-950 to-cyan-600 sm:pt-28 lg:pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6'>
            <div className='flex flex-col justify-center items-center h-full md:w-1/2 order-2 md:order-1'>
                <h2 className='text-center text-4xl sm:text-5xl font-bold text-white'>Full Stack Developer</h2>
                <p className='text-white py-4 max-w-md'>
                As a Full Stack Developer, I enjoy bringing ideas to life through modern web technologies. My experience includes working with React, Next.js, .NET Razor Pages, MVC Core, Tailwind, TypeScript, MySQL, and PostgreSQL to build dynamic, user-focused applications. I’m driven by a passion for learning, problem-solving, and crafting intuitive digital solutions that make an impact.
                </p>
                <div className='flex justify-center'>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-300 to-pink cursor-pointer hover:scale-110 duration-300'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                             <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 md:mt-0 md:w-1/2 order-1 md:order-2 py-4 px-4'>
                <img src={HeroImage} alt='my profile' className='rounded-2xl sm: w-2/3 md:w-auto object-cover'/>
            </div>
        </div>
    </div>
  );
};

export default Home;