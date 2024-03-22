import React from 'react';
import HeroImage from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-cyan-950 via-cyan-950 to-cyan-600 pt-20'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold pr-4 text-white'>I'm a Student of Full Stack Development</h2>
                <p className='text-white py-4 max-w-md'>
                As a student of software development at Brigham Young University-Idaho, I've explored various realms of coding, 
                 Full Stack development has become my true passion. From mastering .NET Razor Pages and MVC Core to venturing 
                 into React and Tailwind, I'm continuously expanding my skills to craft seamless digital experiences. Each line 
                 of code I write fuels my enthusiasm to push boundaries and redefine what's possible in technology.
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
                <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  );
};

export default Home;