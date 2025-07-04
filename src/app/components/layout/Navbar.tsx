import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className="bg-[#0B0E29] sticky top-0 py-1 z-50 border-b">
            <div className='container px-4 py-1 mx-auto flex items-center justify-between relative'>
                <div>
                    <Image src='lkmx-logo.svg' width={170} height={69} alt='lkmg logo' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar