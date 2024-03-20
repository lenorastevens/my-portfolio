import React from 'react';

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import reactImage from "../assets/reactImage.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import kotlin from "../assets/kotlin.png";
import csharp from "../assets/csharp.png";


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-sky'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-100'
        },
        {
            id: 6,
            src: kotlin,
            title: 'Kotlin',
            style: 'shadow-fuchsia-500'
        },
        {
            id: 7,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray'
        },
        {
            id: 9,
            src: csharp,
            title: 'C#',
            style: 'shadow-fuchsia-700'
        }
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-cyan-600 to-cyan-950 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
           <div>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duation-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt={title} className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>      
                        
                ))}                
            </div>
        </div>
    </div>
  );
};

export default Experience