import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu}  from 'react-icons/ai';
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill, BsPersonLinesFill} from 'react-icons/bs';
import { useRouter } from 'next/router';


const Navbar = () => {
        const [nav, setNav] = useState(false)
        const [navBg, setNavBg] = useState('#0D0E0E')
        const [linkColor, setLinkColor] = useState('#000000')
        const router = useRouter()

        useEffect(()=>{
            if (
                router.asPath === '/lofi' ||
                router.asPath === '/website'
            ){
                setNavBg('transparent')
                setLinkColor('#0D0E0E')
            } else {
                setNavBg('#0D0E0E')
                setLinkColor('#000000')
            }
        },[router])

        const handleNav = () => {
            setNav(!nav);
        }
    return(
        <div style={{ backgroundColor: `${navBg}`}}   className=' fixed w-full h-20 shadow-x z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                {/*<Image
                 src='/../public/assets/logos/N.png'
                 alt='/'
                 width='125'
                 height='50'
                 
    /> */}
                <div className='flex justify-between items-center space-x-3'>
                <ul className='hidden md:flex'>
                <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Caleb Ng</li>
                </Link>
                </ul>
                        </div>
                <div className='absolute left-1/2 invisible xl:visible'>
                    <h3 className='font-bold'></h3>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#home'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='https://drive.google.com/file/d/19cddScWlvrufQGMtqTCpzgpdKDfch71N/view?usp=sharing'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden hover:border-b cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>

            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/1' : ''}>
                <div className={nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        
                        <Link href='/'>
                        <h2 className='text-white font-sans'> Caleb Ng </h2>
                        </Link>

                        <div onClick={handleNav} className='rounded-full border-2 border-white p-3 cursor-pointer hover:bg-gray-400'>
                            <AiOutlineClose />
                        </div>
                        
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4' >Open to new opportunities and challenges</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href = '/#home'>
                        <li onClick={()=> setNav(false)} className='py-2 text-sm hover:border-b'>Home</li>
                        </Link>
                        <Link href = '/#about'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm hover:border-b'>About</li>
                        </Link>
                        <Link href = '/#skills'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm hover:border-b'>Skills</li>
                        </Link>
                        <Link href = '/#projects'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm hover:border-b'>Projects</li>
                        </Link>
                        <Link href = 'https://drive.google.com/file/d/19cddScWlvrufQGMtqTCpzgpdKDfch71N/view?usp=sharing'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm hover:border-b'>Resume</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest'>Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <a href="https://www.linkedin.com/in/calebngyy">
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300 border-white border-2'>
                               <FaLinkedinIn />
                            </div>
                            </a>
                            <a href="https://github.com/calebyyy">
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300 border-white border-2'>
                               <FaGithub />
                            </div>
                            </a>
                            <a href="mailto:caleb.ng.yy@gmail.com">
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300 border-white border-2'>
                               <AiOutlineMail />
                            </div>
                            </a>
                            <a href="https://www.instagram.com/calebyyyy/">
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300 border-white border-2'>
                               <FaInstagram />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
};

export default Navbar
