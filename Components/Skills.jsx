import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[yellow]'>Skills</p>
            <div className='py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 gap-8'>
            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/html.png" alt ="html"/>
                
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
                
            </div>
            </div>
            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/mongo.png" alt ="mongo" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Mongo</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/docker.png" alt ="docker" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Docker</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/github3.png" alt ="github" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/javascript.png" alt ="javascript" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Javascript</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/nextjs3.png" alt ="nextjs" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/node.png" alt ="nodejs" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Node.js</h3>
                </div>
                
            </div>
            </div>


            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/react.png" alt ="react" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/tailwind.png" alt ="tailwind" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/ros2.png" alt ="ros2" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Ros2</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/python.png" alt ="python" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>Python</h3>
                </div>
                
            </div>
            </div>


            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/skills/git.png" alt ="git" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>git</h3>
                </div>
                
            </div>
            </div>

            <div className='p-6 border-white border-2 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <img src="/assets/css.png" alt ="css" />
                </div>
                <div className='flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
                
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills