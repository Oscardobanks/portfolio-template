"use client"
import React from 'react'

const Hero = () => {
    return (
        <div className="bg-dark pt-40 lg:px-14 md:px-8 px-4">
            <p className="md:text-lg text-sm text-white uppercase">👋 Hey, I am Taku Precious</p>
            <h1 className="xl:text-8xl lg:text-7xl md:text-8xl text-7xl pt-6 pb-10 lg:w-2/3 md:w-5/6 gradient-text">
                A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
            </h1>
            <div className="flex gap-4 pb-6">
                <button className="lg:px-6 px-12 py-3 bg-transparent text-sm text-white border border-white hover:bg-gray-800 transition rounded-full uppercase cursor-pointer md:w-fit w-full hover:scale-[102]">my works</button>
                <button className="bg-white hover:bg-gray-200 rounded-full lg:px-6 px-12 py-3 text-sm text-black uppercase cursor-pointer md:w-fit w-full hover:scale-[102]">let's talk</button>
            </div>
        </div>
    )
}

export default Hero
