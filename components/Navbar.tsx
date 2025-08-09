"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Link = {
    name: string;
    ref: string;
}

function Navbar() {
    const [open, setOpen] = useState(false);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const Links: Link[] = [
        { name: "About me", ref: "#about" },
        { name: "Portfolio", ref: "#portfolio" },
        { name: "Skills", ref: "#skills" },
        { name: "Services", ref: "#services" },
        { name: "Testimonials", ref: "#testimonials" },
    ];

    function handleScroll() {
        if (window.scrollY >= 50) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div
            className={`fixed top-0 right-0 left-0 z-[90] transition-all duration-500 ease-in-out ${fixed && !open
                ? "bg-white text-black shadow-md"
                : "bg-black text-white shadow-none"
                } lg:py-4 py-3 lg:px-14 md:px-8 px-4`}>
            {/* Desktop Navbar */}
            <div className="lg:block hidden">
                <div className="flex items-center justify-between gap-5">
                    <Link href="/" className="text-lg font-semibold uppercase">Taku Precious</Link>
                    <div id="navLink" className="uppercase text-sm">
                        {Links.map((link, index) => (
                            <Link key={index} href={link.ref} className="px-5">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button className={`rounded-full px-6 py-3 uppercase text-sm" ${fixed ? "bg-black text-white" : "bg-white text-black"}`}>Get Started</button>
                </div>
            </div>


            {/* Mobile Navbar */}
            <div className="lg:hidden flex justify-between items-center py-3">
                <Link href="/" className="md:text-lg font-semibold uppercase">Taku Precious</Link>
                <div onClick={handleToggle} className="cursor-pointer">
                    <div className="px-2">
                        {open && !fixed && <Image src="/cancel.svg" alt="x icon" width={18} height={18} />}
                        {open && fixed && <Image src="/cancel.svg" alt="x icon" width={18} height={18} />} {!open && !fixed && <Image src="/menu.svg" alt="menu icon" width={24} height={8} />}
                        {open && !fixed && <Image src="/cancel-black.svg" alt="x icon" width={18} height={18} />} {!open && fixed && <Image src="/menu-black.svg" alt="menu icon" width={24} height={8} />}
                    </div>
                    <div
                        id="navLink"
                        className={`flex flex-col items-start gap-8 py-12 absolute z-10 lg:static bg-black shadow left-0 w-full transition-all duration-500 ease-in-out md:px-8 px-4 ${open ? "top-16 " : "top-[-490px]"}`}
                    >
                        {Links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.ref}
                                className="text-white text-xl uppercase z-10"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="z-10 w-full bg-white rounded-full px-6 py-3 uppercase text-sm text-black mt-10">Get in touch</button>
                        <Image src="/images/ellipse-bg.png" alt="bg" width={100} height={50} className="w-full h-3/4 absolute bottom-0 left-0 right-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
