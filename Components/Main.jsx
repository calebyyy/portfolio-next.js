import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

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
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-white border-2'>
            <a href="https://www.linkedin.com/in/calebngyy">
              <FaLinkedinIn />
            </a>
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-white border-2'>
              <FaGithub />
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-white border-2'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-white border-2'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main