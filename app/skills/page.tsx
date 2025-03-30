import { DiPython, DiJavascript1, DiReact, DiGit, DiJqueryLogo, DiSass } from 'react-icons/di';
import { SiTailwindcss, SiBootstrap, SiFigma, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Skills() {
    return (
        <>
            <div className='ml-5 mr-5 mb-6 md:flex flex-col justify-center items-center '>
                <p className='text-blue-700 text-xl md:text-2xl mb-4 mt-5 hover:text-yellow-700'>I`m Proficient in various UI/UX Designing Tools and <br />
                Web Development Technologies.<br/></p>
                <h2 className='text-yellow-700 text-4xl font-bold hover:text-blue-700'>My Skills</h2>
            </div>
            <section className='ml-5 mr-5 mb-10 md:mr-20 md:ml-20 md:flex flex-col justify-center items-center'>
                <div>
                    <h3 className='text-yellow-700 underline text-2xl mb-4 hover:text-blue-700'>Programming Languages</h3>
                </div>
                <div className='flex gap-5 border-2 p-5 md:p-8 rounded-lg border-blue-700'>
                    <FaHtml5 className='size-20 hover:text-blue-70 md:size-30' />
                    <FaCss3Alt className='size-20 hover:text-blue-700 md:size-30' />
                    <DiJavascript1 className='size-20 hover:text-blue-700 md:size-30' />
                    <DiPython className='size-20 hover:text-blue-700 md:size-30' />
                    <SiTypescript className='size-20 hover:text-blue-700 md:size-30' />
                </div>
            </section>
            <section className='ml-5 mr-5 mb-10 md:mr-20 md:ml-20 md:flex flex-col justify-center items-center'>
                <div>
                    <h3 className='text-yellow-700 underline text-2xl mb-4 hover:text-blue-700'>Frontend Libraries & Frameworks</h3>
                </div>
                <div className='flex gap-5 border-2 p-5 md:p-8 rounded-lg border-blue-700'>   
                    <DiReact className='size-20 hover:text-blue-700 md:size-30 ' />
                    <SiNextdotjs className='size-20 hover:text-blue-700 md:size-30' />
                    <DiJqueryLogo className='size-20 hover:text-blue-700 md:size-30' />
                    <SiTailwindcss className='size-20 hover:text-blue-700 md:size-30' />
                    <SiBootstrap className='size-20 hover:text-blue-700 md:size-30' />    
                    <DiSass className='size-20 hover:text-blue-700 md:size-30' />
                </div>
            </section>
            <section className='ml-5 mr-5 md:mr-20 md:ml-20 md:flex flex-col justify-center items-center'>
                <div>
                    <h3 className='text-yellow-700 text-2xl underline mb-4 hover:text-blue-700'>Designing and Programming Tools</h3>
                </div>
                <div className='flex gap-5 border-2 p-5 md:p-8 rounded-lg border-blue-700'>
                    <SiFigma className='size-20 hover:text-blue-700 md:size-30' />
                    <DiGit className='size-20 hover:text-blue-700 md:size-30' />
                </div>
            </section>
        </>
    )
}