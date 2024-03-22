import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-cyan-600 via-cyan-600 to-cyan-950 text-white pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
            </div>
            <p className='text-xl mt-4'>
            As a dedicated mom of four boys, I've mastered the art of multitasking and problem-solving in my roles as both a full-time parent and a burgeoning full-stack developer. While raising my family, I've discovered a passion for photography and exploring the great outdoors, often venturing into National Parks for breathtaking scenery and rejuvenating hikes. Despite the demands of motherhood, I've remained committed to personal growth and community involvement, volunteering in various capacities from Lego robotics to mentoring in math pentathlon clubs. Now, armed with a solid foundation in web and computer programming from Brigham Young University-Idaho, I'm ready to embark on a new chapter, combining my technical skills with my innate ability to connect with others. 
            </p>

            <br/>

            <p className='text-xl'>
            With a Web and Computer Programming Certificate under my belt and a Bachelor's degree in Software Development on the horizon, I bring a diverse skill set to the table. From Python and C# to HTML/CSS and JavaScript, I've honed my abilities to convert requirements into efficient code and tackle complex challenges head-on. My journey as a stay-at-home mom has instilled in me invaluable traits such as perseverance, empathy, and effective communication – qualities that I seamlessly integrate into my work as a developer. With a knack for leadership, a keen eye for detail, and a passion for continuous learning, I'm excited to contribute my unique perspective to innovative projects and collaborative teams in the ever-evolving world of technology.
            </p>
        </div>
    </div>
  );
};

export default About;