import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = ({ isMobile, isOpen, setIsOpen }) => {
    const navbarStyle = {
        transition: 'transform 0.3s ease-out',
        transform: (isOpen && isMobile) ? 'translateY(0)' : 'translateY(-100%)',
    };

    return (
        <>
            {isMobile && 
                <div>
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
                
            }
            <div>
                <nav style={navbarStyle} className={`${isMobile ? 'fixed inset-0 flex-col bg-apex-green space-y-4 w-full text-white overflow-y-auto' : `mx-12 mt-32 justify-between text-gray-600`} flex items-center`}>
                    <img src={`${isMobile ? "logo-white-no-background.png" : "/logo-no-background.png"}`} alt="Logo" className={`${isMobile ? "h-32 mt-8" : "h-24"}` } />
                    <ul className={`${isMobile ? 'flex flex-col pt-12 space-y-20 text-center' : 'flex space-x-16'} list-none`}>
                        <li className={`${isMobile ? 'text-xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className={`${isMobile ? 'text-xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className={`${isMobile ? 'text-xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/service" onClick={() => setIsOpen(false)}>Services & Pricing</Link>
                        </li>
                        <li className={`${isMobile ? 'text-xl' : 'text-lg'} inline-block mx-4 no-underline`}>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;