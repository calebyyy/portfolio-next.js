import Image from 'next/image';
import React from 'react';
import w from '../public/assets/Projects/website.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const website = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={w}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-[yellow]'>Personal Website</h2>
          <h3 className='text-[yellow]'>React / Tailwind.CSS / Next.JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='py-2'>Project</p>
          <h2 className='py-2'>Overview</h2>
          <p>
            This app was built using React and Tailwind.CSS. Used Next.JS as the backend. This website showcases the different projects that I have done and also
             information about me. 
          </p>

          <h2 className='mt-4'>What I have learnt</h2>
          <p>
            Technical: I learnt quite a lot about React and the use of prompts. Furthermore learning the different ways and tools to developing a website is very eye-opening
            such as using tailwind for the css. Overall this project really made me grow a lot as a programmer.
          </p>
          <p className='py-1'>
            Personal: This was one of the projects with the highest learning curve. I gained a greater appreciation in developing a whole website from the ground up.
            This project really challenged me and is overall an experience I think everyone should try.
          </p>
          <a
            href='https://github.com/calebyyy/pomodoro-lofi-timer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-yellow'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 py-4 border-2 border-white rounded-xl'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[yellow]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default website;