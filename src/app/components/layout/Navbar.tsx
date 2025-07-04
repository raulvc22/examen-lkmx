'use client';

import Image from 'next/image';
import { useState } from 'react';

const navItems = [
    { label: "USERS", href: "#" },
    { label: "HEALTH", href: "#" },
    { label: "ANALYTICS", href: "#" },
];

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(navItems[0].label);

    return (
        <nav className="bg-[#0B0E29] sticky top-0 py-1 z-50 border-b">
            <div className='container px-4 py-1 mx-auto flex items-center justify-between relative'>
                <div>
                    <Image src='lkmx-logo.svg' width={160} height={65} alt='lkmx logo' />
                </div>
                <div className=''>
                    <ul className="flex gap-x-14 items-center px-5">
                        {navItems.map((item, index) => (
                            <li key={index} className="">
                                <a className="relative inline-block text-xl text-white" href={item.href} onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item.label);
                                    }}>
                                    {item.label}
                                    <span className={`absolute left-[-10%] bottom-0 h-0.5 w-[120%] bg-white ${activeItem === item.label ? "scale-x-100" : "scale-x-0"}`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar