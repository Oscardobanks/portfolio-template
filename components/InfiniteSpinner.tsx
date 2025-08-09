"use client"
import React from 'react'
import Image from "next/image";
import Marquee from "react-fast-marquee";

const InfiniteSpinner = () => {
    const items = Array.from({ length: 6 }, (_, index) => index)
    return (
        <div className="py-[300px] -mb-6 bg-[url('/bg.svg')] bg-cover bg-bottom bg-no-repeat rotate-180 ">
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-center gap-4 rotate-180 px-20">
                {items.map((_, index) => (
                    <Image key={index} src={`/logo-${index}.svg`} alt="gradient" width={100} height={24} className="h-6 Spinner" />
                ))}
            </div>

            {/* Tablet & Mobile Layout */}
            <div className="lg:hidden overflow-hidden">
                <Marquee>
                    <div className="flex rotate-180">
                        {items.map((_, index) => (
                            <Image key={index} src={`/logo-${index}.svg`} alt="gradient" width={100} height={24} className="h-6 mx-10" />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default InfiniteSpinner
