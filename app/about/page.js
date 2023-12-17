import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

export default function About() {
    return (
        <div className="sm:mr-24 sm:ml-12 sm:min-w-[1100px] flex flex-col sm:flex-row sm:text-left text-center">
            <div className="w-full sm:w-3/4 flex flex-col justify-center space-y-4 sm:py-20 sm:px-32 pb-20 px-8 sm:min-w-[500px] min-w-[100px]">
                <h1 className={`text-4xl text-apex-green`}>Meet Your Virtual Bookkeeper</h1>
                <div className="flex flex-col sm:flex-row">
                    <h2 className={`text-2xl text-gray-800`}>Desmond Ortega</h2>
                    <div className="sm:hidden sm:w-1/4 sm:min-w-[300px] min-w-[100px] m-12">
                        <Image src="/About-Me.webp" alt="Home page image" width={723} height={1424} className='shadow-2xl rounded-xl'/>
                    </div>
                </div>   
                <p className={`text-sm text-gray-600`}>Based in Los Angeles, CA and currently serving as the Finance Manager for a fast-growing wound care company. In my role, I help manage all financial and accounting related tasks, including bookkeeping for the company. I received my B.S. in Business Administration in 2018, and I am expected to receive my MBA in Accounting in August of 2023. Now I&apos;m ready to use my skills to aid small business owners, like you, have peace of mind when it comes to your business&apos;s finances.</p>
                <p className={`pt-12 text-sm text-gray-600`}><u>Why outsource your bookkeeping services?</u></p>
                <ul>
                    <li className={`text-sm text-gray-600 flex items-center`}><FaCheck  className='mr-2'/> <span>No more late nights of date entry and tedious bookkeeping work</span></li>
                    <li className={`text-sm text-gray-600 flex items-center`}><FaCheck className='mr-2'/> <span>No time or money spent training employees on bookkeeping</span></li>
                    <li className={`text-sm text-gray-600 flex items-center`}><FaCheck className='mr-2'/> <span>Your books are always current and accurate</span></li>
                    <li className={`text-sm text-gray-600 font-bold flex items-center`}><FaCheck className='mr-2'/> <span>More time available for you to focus on your business</span></li>
                </ul>
                <div className='pt-8 flex justify-center items-center'>
                    <Link href="/service" className={`text-center text-sm text-gray-100 bg-apex-green py-3 px-5 rounded`}>View Services</Link>
                </div>
                
            </div>
            <div className="sm:block hidden sm:w-1/4 sm:min-w-[300px] min-w-[100px] m-12">
                <Image src="/About-Me.webp" alt="Home page image" width={723} height={1424} className='shadow-2xl rounded-xl'/>
            </div>
            
        </div>
    )
}