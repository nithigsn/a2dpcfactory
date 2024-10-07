import React, { useState } from 'react'

function HomePage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='h-screen w-full mainbg flex  items-center flex-col'>

      <div className='w-[95vw] h-full flex flex-col items-center  '>

        <header className='flex w-full justify-between p-1'>

          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728283845/a2d_logo_m3djf5.png" alt="" className='size-12' />
          <div className='size-[50px]  flex items-center justify-center rounded-[50%] bg-[#ffffff25]'>
            <i className="fa-solid fa-bars text-white"></i>
          </div>

        </header>

        <main className='flex flex-col items-center w-full '>

          <div className='flex  w-[133px] h-[42px] bg-[#bcbcbc2a] gap-2 justify-center items-center rounded-3xl'>
            <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728285377/mini_militia_dmdphb.webp" alt="" className='size-[30px] rounded-[50%]' />
            <p>Hi Soldiers !</p>
          </div>
          <div className='flex flex-col items-center justify-center w-full gap-y-4 '>

            <h3 className='text-[31px] text-center'>From Components to <br />
              Masterpiece Your <br />
              Ultimate PC Awaits
            </h3>

            <p className='text-center'>Transforming components into computing powerhouses,
              We build the PC You've always wanted,tailored to your needs and budget.
            </p>

          </div>

          <div className='flex gap-3 mt-12'>

            <div className='w-[190px] h-[57px] bg-white flex justify-center items-center rounded-full gap-2 '>
              <p className='text-black text-sm'>Build Your Dream PC</p>
              <div className='size-[45px] bg-[#FEA116] rounded-[50%] flex items-center justify-center'>
                <i className="fa-solid fa-desktop"></i>
              </div>
            </div>

            <div className='w-[190px] h-[57px] bg-[#ffffff18] flex justify-around items-center rounded-full gap-2 '>
              <p>Book a Demo</p>
              <div className='size-[45px] bg-[black] rounded-[50%] flex items-center justify-center'>
                <i className="fa-solid fa-phone"></i>
              </div>
            </div>

          </div>


          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728283846/pc_for_a2d_ad1fi7.png" alt="" className='mt-12'/>

        </main>




      </div>





    </div>
  )
}

export default HomePage
