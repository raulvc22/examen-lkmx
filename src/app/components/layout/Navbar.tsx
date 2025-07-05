'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: "USERS", href: "/" },
    { label: "HEALTH", href: "/health" },
    { label: "ANALYTICS", href: "/analytics" },
];


const Navbar = () => {
    const pathName = usePathname();

    return (
        <nav className="bg-[#0B0E29] sticky top-0 py-1 z-50 border-b">
            <div className='container px-4 py-1 mx-auto flex items-center justify-between relative'>
                <div>
                    <Link href='/'>
                        <Image src='lkmx-logo.svg' width={160} height={65} alt='lkmx logo' />
                    </Link>
                </div>
                <div className=''>
                    <ul className="flex gap-x-14 items-center px-5">
                        {navItems.map((item, index) => {
                            const isActive = pathName === item.href;

                            return (
                                <li key={index} className='relative inline-block text-white hover:text-[#ed245d] text-xl'>
                                    <Link href={item.href}>
                                        {item.label}
                                        <span className={`absolute left-[-10%] bottom-0 h-0.5 w-[120%] bg-white ${isActive ? "scale-x-100" : "scale-x-0"} origin-left`}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar