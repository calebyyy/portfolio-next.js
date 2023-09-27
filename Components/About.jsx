import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-[yellow] text-xl uppercase tracking-widest'>About me</p>
                <h2 className='py-4'>Who Am I?</h2>
                <p></p>
                <p className='py-6'>Hello I am Caleb, a Computer Science student at the National University of Singapore. From a young age, I have always loved tinkering with technology and using them to solve problems to make life more convenient. In 2020, I started learning extensively about programming and the different technologies involved. What I thought was a small interest quickly turned into a career that I want to pursue wholeheartedly for the many years to come. </p>
                <p className='py-2'>I am currently pursuing my interests in DevOps, Backend Engineering and Infrastructure Engineering.</p>
                <a href="/assets/Caleb_Ng_Resume.pdf" download>
                <p className='py-2 underline cursor-pointer'>Check out my resume here</p>
                </a>
            </div>
            <div className='w-full h-auto m-auto ounded-full p-6 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center rounded-xl '>
                <img src="/assets/image.png" alt ="caleb" className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About