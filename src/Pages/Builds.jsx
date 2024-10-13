import React from 'react'

const Builds = () => {
  return (
    <div className='w-full h-[2727px] flex  flex-col items-center bg-black  pt-6 gap-y-10'>

      <div className='h-[57px] w-[217px] bg-[#f6f6f620] flex  items-center justify-between rounded-full pl-1 pr-1'>
        <p className='ml-3'>Our Pupular Builds</p>
        <div className='size-[45px] rounded-[50%] bg-black flex items-center justify-center'>
          <i className="fa-solid fa-desktop"></i>


        </div>
      </div>

      <h2>A2d's Popular Builds</h2>


      <div className="flex h-[2500px] flex-col justify-around">
        {/* 1st Build */}
      <div className="flex flex-col w-[398px] h-[511px] bg-[#ffffff1f] rounded-md  justify-around ">
        <div className='w-full pl-2'>
          <h2>AMD Ryzen 5 5600 Build</h2>
          <p>From &#8377; 38,0000 </p>
        </div>
        <div className='w-full h-[300px] rounded-md '>
          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/c_crop,ar_1:1/v1728491388/pc_1_wnehes.png" alt="" className='rounded-md' />
        </div>
      </div>

      {/* 2nd Build */}
      <div className="flex flex-col w-[398px] h-[511px] bg-[#ffffff1f] rounded-md  justify-around ">
        <div className='w-full pl-2'>
          <h2>Intel i5 12th Gen Build</h2>
          <p>From &#8377; 40,0000 </p>
        </div>
        <div className='w-full h-[300px] rounded-md '>
          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728491388/pc_2_ueitq2.png" alt="" className='rounded-md' />
        </div>
      </div>

      {/* 3rd Build */}
      <div className="flex flex-col w-[398px] h-[511px] bg-[#ffffff1f] rounded-md  justify-around ">
        <div className='w-full pl-2'>
          <h2>AMD Ryzen 7  Build</h2>
          <p>From &#8377; 80,0000 </p>
        </div>
        <div className='w-full h-[300px] rounded-md '>
          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728491390/680cdec9654e8deb1af79079cb2ce12e_lsemrr.png" alt="" className='rounded-md' />
        </div>
      </div>

      {/* 4th Build */}
      <div className="flex flex-col w-[398px] h-[511px] bg-[#ffffff1f] rounded-md  justify-around ">
        <div className='w-full pl-2'>
          <h2>Intel i9 14th gen  Build</h2>
          <p>From &#8377; 1,50,0000 </p>
        </div>
        <div className='w-full h-[300px] rounded-md '>
          <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728491462/dab82605b13626017d37a34d7203ad5d_ncazbe.png" alt="" className='rounded-md' />
        </div>
      </div>

      </div>

    </div>
  )
}

export default Builds
