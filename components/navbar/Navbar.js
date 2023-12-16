import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = ({ isMobile, isOpen, setIsOpen }) => {
    const navbarStyle = {
        transition: 'transform 0.3s ease-out',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    };

    return (
        <>
            {isMobile && 
                <button 
                    className={`${isOpen ? "fixed" : "absolute"} top-0 right-0 ml-12 mr-8 my-8 bg-transparent z-10`}
                    onClick={() => setIsOpen(!isOpen)}
                >   
                    {isOpen ? <FiX className="h-8 w-8 text-gray-600" /> : <FiMenu className="h-8 w-8 text-gray-600" />}
                </button>
            }
            <div>
            <nav style={navbarStyle} className={`${isMobile ? 'fixed inset-0 flex-col bg-white space-y-4 w-full' : `mx-12 my-8 justify-between`} flex items-center text-gray-600`}>
                    <img src="/logo-no-background.png" alt="Logo" className={`${isMobile ? "h-24 mt-20" : "h-16"}`} />
                    <ul className={`${isMobile ? 'flex flex-col pt-12 space-y-20 text-center' : 'flex space-x-16'} list-none`}>
                        <li className={`${isMobile ? 'text-3xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`${isMobile ? 'text-3xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={`${isMobile ? 'text-3xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/service">Services & Pricing</Link>
                        </li>
                        <li className={`${isMobile ? 'text-3xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;