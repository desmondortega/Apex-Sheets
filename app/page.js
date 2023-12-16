import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="sm:mr-24 sm:ml-12 sm:min-w-[1100px] flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-10 items-center sm:py-20 sm:px-32 pb-20 px-8 sm:min-w-[650px] min-w-[100px]">
          <h1 className={`text-4xl text-apex-green`}>Your Virtual Bookkeeping Solution</h1>
          <p className={`text-sm text-gray-600`}>Get the expert small business bookkeeping services you need, so you can run your business. Let ApexSheets take bookkeeping tasks off your plate so you can focus on more relevant business needs. I can clean up your existing financials to bring them up to date, and continue to manage your books moving forward. Free up your workload, and save yourself from stress during tax time with accurate maintained ledgers</p>
          <Link href="/about" className={`text-sm text-gray-100 bg-apex-green py-3 px-5 rounded`}>Learn More</Link>
      </div>
      <div className="sm:w-1/2 sm:min-w-[450px] min-w-[100px] m-12">
        <Image src="/Home-Page.webp" alt="Home page image" width={1288} height={1072} className='shadow-2xl rounded-xl'/>
      </div>
    </div>
  )
}