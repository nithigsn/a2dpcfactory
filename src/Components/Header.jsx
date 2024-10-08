import React from 'react'
import { useState } from 'react'
import { ArrowUpRight } from 'react-bootstrap-icons'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">

            <header className='flex w-full justify-between p-1 h-[10vh] '>

                <img src="https://res.cloudinary.com/doqdlneyl/image/upload/v1728283845/a2d_logo_m3djf5.png" alt="" className='size-12' />
                <div className='h-[52px] w-[462px] justify-around bg-[#ffffff25] items-center rounded-full text-sm hidden lg:flex'>
                    <p>Home</p>
                    <p>Why Us</p>
                    <p>Products</p>
                    <p>Testimonials</p>

                </div>

                <div className='size-[50px]  flex items-center justify-center rounded-[50%] bg-[#ffffff25] md:hidden'>
                    {
                        isOpen ? <i className="fa-solid fa-x text-white" onClick={() => setIsOpen(!isOpen)}></i> :  <i className="fa-solid fa-bars text-white" onClick={() => setIsOpen(!isOpen)}></i>
                    }
                </div>
                <div className=" items-center justify-around w-[158px] h-[56px] bg-[#ffffff25] rounded-full hidden lg:flex">
                    <p className='text-sm'>Contact Us</p>
                    <div className='size-[45px] bg-[#fea116] rounded-[50%] flex items-center justify-center'>
                        <ArrowUpRight></ArrowUpRight>
                    </div>

                </div>



            </header>


            {
                isOpen &&
                <div className={`flex  absolute flex-col w-full left-0 h-screen mainbg  z-20 rounded-xl ${isOpen ? "slideInLeft" : "scale-out-center"}`} >


                    <div className='flex h-[500px] flex-col gap-10 text-sm pl-2'>
                        <p>Home</p>
                        <p>Why Us</p>
                        <p>Products</p>
                        <p>Testimonials</p>

                    </div>

                  

                    <div className='pl-2'>
                        <p>Contact</p>
                    </div>

                </div>

            }
        </div>
    )
}

export default Header
