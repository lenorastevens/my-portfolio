import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-cyan-600 to-cyan-950 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum suscipit inventore
                molestias blanditiis obcaecati, libero minus, esse nulla doloremque non voluptate 
                cum nostrum officiis aperiam fugiat sed accusamus architecto fuga deleniti eum ea 
                maiores voluptatum! Distinctio possimus aspernatur ducimus. Unde sed accusamus ab?
                Aspernatur, pariatur illum cupiditate ad blanditiis veniam.
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolorum 
                similique odio quasi quia, facere autem. Voluptatibus magni officia deserunt 
                nulla, dolore laboriosam autem amet? Architecto porro voluptates a odit quo, 
                cumque fuga, autem maiores consequuntur ipsum mollitia vel praesentium libero 
                sunt officiis. Voluptatum illum amet voluptatem, possimus consectetur molestias.
            </p>
        </div>
    </div>
  );
};

export default About;