"use client"
import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-evenly gap-10 pt-10 pb-20 lg:px-14 md:px-8 px-4 bg-light">
                <div className="lg:hidden flex flex-col gap-4 md:w-5/6">
                    <h6 className="text-dark-orange uppercase text-lg">about</h6>
                    <p className="md:text-5xl text-3xl uppercase">Crafting UNIQUE BRAND EXPERIENCES SINCE 2014</p>
                    <p className="text-lg">With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.</p>
                    <button className="py-3 px-6 md:w-fit border border-black hover:scale-[102] rounded-full mt-4 text-sm cursor-pointer">SCHEDULE A CALL</button>
                </div>
                <div className="relative lg:mx-0 mx-auto">
                    <Image src="/images/image.svg" alt='' width={100} height={100} className='z-10 w-[400px] relative' />
                    <Image src="/images/rectangle-1.png" alt='' width={100} height={100} className='absolute -bottom-6 -left-6 w-[400px] rounded-full blur-md' />
                </div>
                <div className="hidden lg:flex flex-col gap-4 lg:w-[35%]">
                    <h6 className="text-dark-orange uppercase text-lg">about</h6>
                    <p className="text-5xl uppercase">Crafting UNIQUE BRAND EXPERIENCES SINCE 2014</p>
                    <p className="text-lg">With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.</p>
                    <button className="py-3 px-6 w-fit border border-black hover:scale-[102] rounded-full mt-4 text-sm cursor-pointer">SCHEDULE A CALL</button>
                </div>
            </div>
        </div>
    )
}

export default About
