import React from 'react';
import scoots from '../assets/portfolio/scoots.png';
import nationalParkCampgrounds from '../assets/portfolio/nationalParkCampgrounds.png';
import tracker from '../assets/portfolio/tracker.png';
import inventorymanagment from '../assets/portfolio/inventorymanagement.png';
import SWAU from '../assets/portfolio/SWAU.png';
import scriptureJournal from '../assets/portfolio/scriptureJournal.png';

const Portfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: scoots,
        demo: 'https://lenorastevens.github.io/Scoots/index.html',
        code: 'https://github.com/lenorastevens/Scoots'
      },
      {
        id: 2,
        src: nationalParkCampgrounds,
        demo: 'https://lenorastevens.github.io/National-Parks-Campground-Guide/',
        code: 'https://github.com/lenorastevens/National-Parks-Campground-Guide'
      },
      {
        id: 3,
        src: tracker,
        demo: 'https://ls-tracker-app.netlify.app/',
        code: 'https://github.com/lenorastevens/tracker'
      },
      {
        id: 4,
        src: SWAU
      },
      {
        id: 5,
        src: inventorymanagment
      },
      {
        id: 6,
        src: scriptureJournal
      }

    ]
    

  return (
    <div name="portfolio" className='bg-gradient-to-b from-cyan-950 via-cyan-950 to-cyan-600 w-full md:h-screen text-white pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({id, src, demo, code}) => (
            <div key={id} className='shadow-md shadow-pink rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <a className='w-1/2 px-6 m-4 duration-200 hover:scale-105' href={demo} target="_blank" rel="noreferrer">Demo</a>
                <a className='w-1/2 px-6 m-4 duration-200 hover:scale-105' href={code} target='_blank' rel="noreferrer">Code</a>
              </div>
            </div>
          ))}          
        </div>        
      </div>
    </div>
  );
};

export default Portfolio;