'use client'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialButtons() {
    return (
        <>
            <div className="ml-5 md:flex mt-5 md:mr-20 md:ml-20">
                <div>
                    {/*Intro Container */}
                <div>
                <section className="">
                    <h3 className="text-xl">UI/UX Designer & Frontend Developer</h3>
                    <h2 className="text-3xl text-yellow-700 hover:text-blue-700 mb-3 font-medium">Hello I`m <br />
                    <span className="text-blue-700 hover:text-yellow-700">Jackson Mathew</span></h2>
                    <p className="text-lg md:text-xl mb-3">
                        I`m a UI/UX designer and frontend developer passionate about creating <br />
                        intuitive and visually stunning digital experiences. Currently, <br />
                        I`m expanding my expertise to become a full-stack developer and machine learning engineer,<br />
                        mastering the technologies that shape the future. <br/>
                        With a strong foundation in design, frontend development,<br />
                        and emerging AI technologies, I`m on a mission to build seamless, <br />
                        intelligent, and impactful solutions.< br />
                        Every day, I push my limits to turn ideas into reality—blending creativity, <br /> 
                        code, and innovation. <br />
                        Join me on this journey as I evolve into a tech powerhouse!.
                    </p>
                </section>
                </div>
                {/*Social Media Container */}
                <div className="flex gap-10 mt-4 "> 
                    <Link href='mycv'><button className="btn btn-sm rounded-2xl hover:bg-blue-700">Download CV</button></Link>
                    <Link className="text-3xl hover:text-blue-700 border-solid rounded-full" href='http://github.com/Jackmatt-og' target="blank">
                    <FaGithub /></Link>
                    <Link className="text-3xl hover:text-blue-700 border-solid rounded-full" href='http://x.com/jackmatty90' target="blank">
                    <FaTwitter /></Link>
                    <Link className="text-3xl hover:text-blue-700 border-solid rounded-full" href='http://linkedin.com/Jackson Mathew'>
                    <FaLinkedin /></Link>
                </div>
            </div>
            {/*Photo Container */}
            <div className="mt-5">
                My Photo
            </div>
            </div>
            {/*Experience Container */}
            <div className="flex mt-10 ml-4 md:mr-20 md:ml-20">
                <div className="flex gap-2 mr-4">
                    <h2 className="text-4xl font-bold">1+</h2>
                    <h3 className="text-sm/5">Years of <br />Experience</h3>
                </div>
                <div className="flex gap-2 mr-4">
                    <h2 className="text-4xl font-bold">10</h2>
                    <h3 className="text-sm/5">Completed <br />Projects</h3>
                </div>
                <div className="flex gap-2 mr-4">
                    <h2 className="text-4xl font-bold">10</h2>
                    <p className="text-sm/5">Technologies <br />Mastered</p>
                </div>
                <div className="flex gap-2 mr-4">
                    <h2 className="text-4xl font-bold">3</h2>
                    <p className="text-sm/5">Happy <br />Clients</p>
                </div>
            </div>
        </>
    )
}