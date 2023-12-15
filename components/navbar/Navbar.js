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
                    className="fixed top-0 right-0 ml-12 mr-16 my-8 bg-transparent z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >   
                    {isOpen ? <FiX className="h-8 w-8 text-gray-500" /> : <FiMenu className="h-8 w-8 text-gray-500" />}
                </button>
            }
            <div>
                <nav style={navbarStyle} className={`${isMobile ? 'fixed inset-0 flex-col bg-white space-y-4 h-screen mt-16 pr-8 w-full' : 'justify-between'} flex items-center text-gray-500`}>
                    <img src="/logo-color.png" alt="Logo" className={`${isMobile ? "h-56" : "h-40"}`} />
                    <ul className={`${isMobile ? 'flex flex-col space-y-20 text-center' : 'flex space-x-16'} list-none`}>
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