import Link from 'next/link'
import { FaListCheck } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";

export default function Service() {
    return (
        <div>
            <div className={"flex justify-center items-center text-center"}>
                <div className="flex flex-col space-y-8">
                    <h1 className={`text-5xl text-apex-green`}>Services</h1>
                    <h2 className="text-gray-600 sm:mx-0 mx-4 sm:text-md text-lg">Note: Work is completed from my home office during non-traditional business hours</h2>
                    <div className="pt-6 sm:min-w-[900px] flex sm:flex-row flex-col sm:space-y-0 space-y-12">
                        <div className="sm:w-1/3 mx-12 flex flex-col items-center">
                            <FaListCheck color="#1e293b" size={70}/>
                            <h3 className="py-6 text-gray-600">Getting Started</h3>
                            <ul className="list-disc text-left sm:text-xs text-gray-600">
                                <li className="pb-4">Meet to discuss type of business and accounting system</li>
                                <li className="pb-4">Start or take over QuickBooks file</li>
                                <li>Clean up existing transactions and bring books up to current date</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/3 mx-12 flex flex-col items-center">
                            <GrPowerCycle color="green" size={70}/>
                            <h3 className="py-6 text-gray-600">On-Going Support</h3>
                            <ul className="list-disc text-left sm:text-xs text-gray-600">
                                <li className="pb-4">Download & categorize monthly transactions into QuickBooks</li>
                                <li className="pb-4">Email monthly financial statements to the client</li>
                                <li className="pb-4">Serve as a liason between the client & accountant throughout the year</li>
                                <li>Optional add-ons: Invoicing, bill pay, income categorization</li>
                            </ul>
                        </div>
                        <div className="sm:w-1/3 mx-12 flex flex-col items-center">
                            <CiCircleRemove color="red" size={70}/>
                            <h3 className="py-6 text-gray-600 text-center">Services Not Offered</h3>
                            <ul className="list-disc text-left sm:text-xs text-gray-600">
                                <li className="pb-4">On-Site bookkeeping. All bookkeeping will be done online</li>
                                <li className="pb-4">Tax preparation</li>
                                <li className="pb-4">Full payroll</li>
                                <li>Legal business advice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mt-24 mx-4 flex justify-center items-center text-center"}>
                <div className="flex flex-col space-y-8">
                    <h1 className={`text-5xl text-apex-green`}>Pricing</h1>
                    <h3 className={`text-gray-600 sm:text-md text-lg`}>Potential clients will receive a <span className="text-green-600">FREE</span> half-hour consultation. Let&apos;s meet and see if we&apos;d be a good fit.</h3>
                    <ul className="mx-12 list-disc text-left sm:text-xs text-gray-600">
                        <li className="pb-4">Clean up period and first month(s) will be done at an hourly rate.</li>
                        <li className="pb-4">Once things are cleaned up and set, we will agree on a fixed monthly rate so you know how much you&apos;ll pay each month.</li>
                        <li className="pb-4">Monthly rates start at <span className="text-green-600">$300/month</span>.</li>
                        <li className="pb-4">10% rate discount is available for pre-payment and commitment of 1 full year of service</li>
                        <li>Sound good? Click the button below to fill out a form.</li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <Link href="/contact" className={`text-center text-sm text-gray-100 bg-apex-green py-3 px-5 rounded`}>Interest Form</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}