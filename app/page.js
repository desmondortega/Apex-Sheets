import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col justify-center space-y-8 items-center py-8 px-32">
        <h1 className={`text-4xl text-apex-green`}>Your Virtual Bookkeeping Solution</h1>
        <p className={`text-sm text-gray-600`}>Get the expert small business bookkeeping services you need, so you can run your business. Let ApexSheets take bookkeeping tasks off your plate so you can focus on more relevant business needs. I can clean up your existing financials to bring them up to date, and continue to manage your books moving forward. Free up your workload, and save yourself from stress during tax time with accurate maintained ledgers</p>
        <button>Learn More</button>
      </div>
      <div className="w-1/2 relative">
        <Image src="/Home-Page.webp" alt="Home page image" layout="fill" objectFit="contain"/>
      </div>
    </div>
  )
}