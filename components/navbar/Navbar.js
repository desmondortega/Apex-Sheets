import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className="block sm:hidden">
                <Link href="/">
                    <img src="/logo-no-background.png" alt="Logo" className={`h-16 mx-auto mt-8`} />
                </Link>
                <button 
                    className={`${isOpen ? "fixed" : "absolute"} top-0 right-0 ml-12 mr-8 my-8 bg-transparent z-10`}
                    onClick={() => setIsOpen(!isOpen)}
                >   
                    {isOpen ? <FiX className="h-8 w-8 text-gray-600" /> : <FiMenu className="h-8 w-8 text-gray-600" />}
                </button>
            </div>
            <div>
                <nav className={`fixed inset-0 flex-col sm:flex-row bg-apex-green space-y-4 w-full text-white overflow-y-auto sm:mx-12 sm:mt-8 sm:justify-between sm:text-gray-600 sm:relative sm:bg-transparent sm:space-y-0 sm:w-auto flex items-center transform transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} sm:translate-y-0`}>
                    <img src="logo-white-no-background.png" alt="Logo" className="block sm:hidden h-32 mt-8" />
                    <img src="logo-no-background.png" alt="Logo" className="hidden sm:block sm:h-24 sm:mt-0" />
                    <ul className={`flex flex-col pt-12 space-y-20 text-center sm:flex-row sm:space-y-0 sm:space-x-16 list-none`}>
                        <li className={`text-xl inline-block mx-4 no-underline sm:text-2xl`}>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className={`text-xl inline-block mx-4 no-underline sm:text-2xl`}>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className={`text-xl inline-block mx-4 no-underline sm:text-2xl`}>
                            <Link href="/service" onClick={() => setIsOpen(false)}>Services & Pricing</Link>
                        </li>
                        <li className={`text-xl inline-block mx-4 no-underline sm:text-2xl`}>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;