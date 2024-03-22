import React from 'react';
import calculator from '../assets/portfolio/calculator.png';
import nationalParkCampgrounds from '../assets/portfolio/nationalParkCampgrounds.png';
import tracker from '../assets/portfolio/tracker.png';
import inventoryManagmentSystem from '../assets/portfolio/inventoryManagementSystem.png';
import SWAU from '../assets/portfolio/SWAU.png';
import scriptureJournal from '../assets/portfolio/scriptureJournal.png';

const Portfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: calculator
      },
      {
        id: 2,
        src: nationalParkCampgrounds
      },
      {
        id: 3,
        src: tracker
      },
      {
        id: 4,
        src: SWAU
      },
      {
        id: 5,
        src: inventoryManagmentSystem
      },
      {
        id: 6,
        src: scriptureJournal
      }

    ]
    

  return (
    <div name="portfolio" className='bg-gradient-to-b from-cyan-950 to-cyan-600 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({id, src}) => (
            <div key={id} className='shadow-md shadow-pink rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}          
        </div>        
      </div>
    </div>
  );
};

export default Portfolio;