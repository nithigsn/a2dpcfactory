import React from 'react'

function HowItWorks() {
  return (
    <div className='h-[1543px] w-full flex  items-center flex-col text-black z-10 bg-white'>

      <div className='w-[95vw] h-screen flex flex-col items-center   '>

        <div className=' w-full flex flex-col gap-y-9 justify-center items-center pt-10'>

          <div className='flex items-center justify-between p-1 w-[233px] h-[57px] border-gray-50 ele rounded-3xl'>
            <p>Build Your Dream Pc</p>
            <div className='size-[45px] bg-black rounded-[50%] flex items-center justify-center'>
              <i className="fa-solid fa-desktop text-white"></i>

            </div>
          </div>

          <h1 className='text-[30px]'>How it works ?</h1>
        </div>

        <div className='flex flex-col gap-4 h-full w-full'>


          <div className='flex flex-col justify-between p-2 h-[205px] w-[371] bg-[#f7f7f7] rounded-md'>
            <div className='black-gra'>
            <i className="fa-brands fa-searchengin text-white"></i>
            </div>
            <div>
              <p className='font-bold'>Requirement Analysis</p>
              <p>Discuss your needs and budget. Our experts help you define the perfect specs for your dream PC.</p>
            </div>
          </div>

          {/* Second */}
          <div className='flex flex-col justify-between p-2 h-[205px] w-[371] bg-[#f7f7f7] rounded-md'>
            <div className='black-gra'>
            <i className="fa-brands fa-searchengin text-white"></i>
            </div>
            <div>
              <p className='font-bold'>Component Selection</p>
              <p>We handpick top-quality parts that match your requirements, ensuring optimal performance.</p>
            </div>
          </div>

          <div className='flex flex-col justify-between p-2 h-[205px] w-[371] bg-[#f7f7f7] rounded-md'>
            <div className='black-gra'>
            <i className="fa-brands fa-searchengin text-white"></i>
            </div>
            <div>
              <p className='font-bold'>Expert Assembly</p>
              <p>Our skilled technicians meticulously build your PC, paying attention to every detail for a flawless setup.</p>
            </div>
          </div>

          <div className='flex flex-col justify-between p-2 h-[205px] w-[371] bg-[#f7f7f7] rounded-md'>
            <div className='black-gra'>
            <i className="fa-brands fa-searchengin text-white"></i>
            </div>
            <div>
              <p className='font-bold'>High End Testing</p>
              <p>Discuss your needs and budget. Our experts help you define the perfect specs for your dream PC.</p>
            </div>
          </div>

          <div className='flex flex-col justify-between p-2 h-[205px] w-[371] bg-[#f7f7f7] rounded-md'>
            <div className='black-gra'>
            <i className="fa-brands fa-searchengin text-white"></i>
            </div>
            <div>
              <p className='font-bold'>Secure Delivery</p>
              <p>Discuss your needs and budget. Our experts help you define the perfect specs for your dream PC.</p>
            </div>
          </div>

        </div>





      </div>



    </div>
  )
}

export default HowItWorks
