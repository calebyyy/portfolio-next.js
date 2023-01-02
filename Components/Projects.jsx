import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import lofi from '../public/assets/Projects/lofi2.png';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[yellow]'>Projects</p>
            <div className='grid md:grod-cols-2 gap-8 py-6'>

            <ProjectItem
            title='Lofi Pomodoro Timer'
            backgroundImg={lofi}
            projectUrl='/Lofi'
            tech='HTML, CSS, Javascript'
          />

            </div>

        </div>

    </div>
  )
}

export default Projects