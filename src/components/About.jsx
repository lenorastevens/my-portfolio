import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-cyan-600 via-cyan-600 to-cyan-950 text-white pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
            </div>
            <p className='text-xl mt-4'>
            I’m a passionate Full Stack Developer with a love for solving complex problems and bringing ideas to life through clean, functional code. I thrive on creativity, collaboration, and continuous growth—whether I’m building a dynamic web application or exploring new tools and frameworks. My interests in photography and the outdoors inspire my approach to development: curious, detail-oriented, and always looking for fresh perspectives.
            </p>

            <br/>

            <p className='text-xl'>
            With a foundation in Web and Computer Programming and a Bachelor’s degree in Software Development from Brigham Young University–Idaho, I bring a diverse technical background that includes Python, C#, HTML/CSS, JavaScript, TypeScript, React, Next.js, and .NET. I take pride in transforming requirements into efficient, user-friendly solutions while maintaining a focus on clarity, accessibility, and performance.
            </p>

            <br/>

            <p className='text-xl'>
            Driven by curiosity and a commitment to continuous improvement, I’m excited to contribute to meaningful projects that challenge me to grow and make a lasting impact in the world of technology.  
            </p>
        </div>
    </div>
  );
};

export default About;