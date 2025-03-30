'use client'

import Link from "next/link";
import { Menu, MenuButton,MenuItems, MenuItem } from '@headlessui/react';
import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <nav className="md:bg-yellow-700 md:mr-15 md:ml-15 md:rounded-full md:mt-5">
            {/*Desktop navbar */}
            <div className="hidden md:flex gap-3 p-7 text-lg rounded-3xl">
                <h2 className="mr-auto">Jackmatt</h2>
                <Link className="hover:text-blue-700 hover:underline" href='/home'>Home</Link>
                <Link className="hover:text-blue-700 hover:underline" href='/about'>About</Link>
                <Link className="hover:text-blue-700 hover:underline" href='/projects'>Projects</Link>
                <Link className="hover:text-blue-700 hover:underline" href='/contact'>Contact</Link>
                <Link className="hover:text-blue-700 hover:underline" href='/skills'>Skills</Link>
                <Link className="hover:text-blue-700 hover:underline" href='testimonials'>Testimonials</Link>
                <Link href='/hire'><button className="btn btn-sm hover:bg-blue-700">Hire me</button></Link>
            </div>
            {/*Mobile </na>vbar */}
            <div>
                <div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5 }}
                    className="md:hidden flex mt-5 mr-5 ml-5 p-5 bg-yellow-700 rounded-3xl"
                    >
                        <h2 className="mr-auto">Jackmatt</h2>
                        {/*Hamburger menu */}
                        <Menu>
                        <Link href='/hire'><button className="btn btn-sm  mr-5 hover:bg-blue-700">Hire me</button></Link>
                            <MenuButton>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>
                            </MenuButton>
                            <MenuItems className='flex flex-col gap-3'>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/home'>Home</Link></MenuItem>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/about'>About</Link></MenuItem>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/projects'>Projects</Link></MenuItem>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/contact'>Contact</Link></MenuItem>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/skills'>Skills</Link></MenuItem>
                                <MenuItem><Link className="hover:text-blue-700 hover:underline" href='/testimonials'>Testimonials</Link></MenuItem>
                            </MenuItems>
                        </Menu>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}