import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-cyan-950 via-cyan-950 to-cyan-600 text-white pt-20'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/nbdoypxa' method='POST' className='flex flex-col w-full md:w-2/3'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-cyan-950 focus:outline-none'></input>
                    <input type='text' name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-cyan-950 focus:outline-none'></input>
                    <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-cyan-950 focus:outline-none'></textarea>
                
                    <button className=' text-white bg-gradient-to-b from-rose-300 to-pink px-6 py-3 my-8 mx-auto flex-items center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact