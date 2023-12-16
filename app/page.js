import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-8 items-center sm:py-20 sm:px-32 pb-20 px-8 sm:min-w-[644px] min-w-[100px]">
        <h1 className={`text-4xl text-apex-green`}>Your Virtual Bookkeeping Solution</h1>
        <p className={`text-sm text-gray-600`}>Get the expert small business bookkeeping services you need, so you can run your business. Let ApexSheets take bookkeeping tasks off your plate so you can focus on more relevant business needs. I can clean up your existing financials to bring them up to date, and continue to manage your books moving forward. Free up your workload, and save yourself from stress during tax time with accurate maintained ledgers</p>
        <button>Learn More</button>
      </div>
      <div className="sm:w-1/2 sm:min-w-[644px] min-w-[100px]">
        <Image src="/Home-Page.webp" alt="Home page image" width={1288} height={1072}/>
      </div>
    </div>
  )
}