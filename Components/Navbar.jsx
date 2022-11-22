import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu}  from 'react-icons/ai'

const Navbar = () => {
    return(
        <div className=' fixed w-full h-20 shadow-x z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/*<Image
                 src='/../public/assets/logos/N.png'
                 alt='/'
                 width='125'
                 height='50'
                 
    /> */}
                <div>

                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

            </div>
            <div className='fixed left-0 top-0 w-full h-screen bg-white/1'>
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration 500'>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        
                        <h1 className='text-white font-sans'> CALEB NG </h1>

                        <div className='rounded-full border-2 border-white p-3 cursor-pointer hover:bg-gray-400'>
                            <AiOutlineClose />
                        </div>
                        
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%]'>Improving lives, 1 line at a time</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
};

export default Navbar
