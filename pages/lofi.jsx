import Image from 'next/image';
import React from 'react';
import Lofi from '../public/assets/Projects/lofi2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const lofi = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Lofi}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-[yellow]'>Lofi Pomodoro Timer</h2>
          <h3 className='text-[yellow]'>HTML / CSS / Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='py-2'>Project</p>
          <h2 className='py-2'>Overview</h2>
          <p>
            This app was built using primarily HTML and Javascript. Users
            are able to use it bssed on the pomodoro studying technique where the app will start a
            25 minute timer while playing the popular lofi songs for the user to study or focus on their
            task. At the end of the time an alarm is played for the user to rest for 5 mins. This process continues until the user has completed
            their task.
          </p>

          <h2 className='mt-4'>What I have learnt</h2>
          <p>
            Technical: I learnt a greater grasp of CSS, HTML and Javascript. This gave me the foundation needed to learn and master other technologies that rely on the 
            the fundamentals such as Tailwind CSS, React and Next.js.
          </p>
          <p className='py-1'>
            Personal: This was one of the first few projects I ever did. It really taught me a lot and was what inspired me to study computer science
            to be a Software Engineer. Overall although this project is extremely simple, it is still one of my most memorable projects that I ever
            did. The idea that you can basically solve any problem you have and its only limited by your creativity was what really
            got me interested to software engineering. This project also taught me about debugging and the correct steps to take when one faces an error.
          </p>
          <a
            href='https://github.com/calebyyy/pomodoro-lofi-timer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-yellow'>Code</button>
          </a>
          <a
            href='https://github.com/calebyyy/pomodoro-lofi-timer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 py-4 border-2 border-white rounded-xl'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[yellow]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
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

export default lofi