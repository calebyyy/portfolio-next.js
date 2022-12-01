import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>LET'S COLLABORATE</p>
          <h1 className='py-4 text-gray-100'>
            Hi, I'm <span className='text-[yellow]'> Caleb</span>
          </h1>
          <h1 className='py-2 text-gray-100'>
            An Aspiring Software Engineer
          </h1>
          <p className='py-4 text-gray-400'>
            I'm a computer science student at the National University of Singapore. Currently, I am actively improving my skills in various CS aspects before I decide to specialise. Currently looking for internships/Job opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main