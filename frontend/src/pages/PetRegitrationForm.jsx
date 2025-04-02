import React from 'react'
import { CgMail } from 'react-icons/cg'
import styl from "../assets/img/pet.jpg";
import { MdKeyboardArrowRight } from 'react-icons/md';

const PetRegitrationForm = () => {
    return (
        <div>
            <div className="relative h-[40vh] md:min-h-screen flex flex-col justify-center px-4  ">
                <div
                    className="absolute top-0 inset-0 bg-cover bg-center rounded-2xl m-4 mt-20 
                                         h-[100%] sm:h-[100%] md:h-[60%] lg:h-[70%] bg-black "
                    style={{
                        backgroundImage: `url(${styl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.9,
                        zIndex: -2,
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-black rounded-2xl m-4 mt-20 
                                         h-[100%] sm:h-[100%] md:h-[60%] lg:h-[70%]"
                    style={{
                        opacity: 0.2,
                        zIndex: -1,
                    }}
                ></div>
                <div
                    className="relative z-10 text-center lg:mb-40 ">
                    <h1 className="text-3xl mb-4 mt-[20%] md:mt-0 text-white lg:text-5xl sm:text-4xl"
                        style={{ fontFamily: "'Stoke', Georgia, Times New Roman, serif" }}
                    >

                        <span className='lg:text-6xl text-4xl'>P</span>et  <span className='lg:text-6xl text-4xl'>R</span>egistration
                        <span className='lg:text-6xl text-4xl'> F</span>orm
                    </h1>
                    <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
                        The Pinnacle Condominium Association
                    </h2>
                </div>
            </div>
            <div className=' w-[full] md:-mt-[8%] flex items-center justify-center flex-col py-20 mt-8 '>
                <p className='text-[0.8rem] md:text-[1rem] font-[600] text-[#66686B] text-center px-4 w-[80%]'>Kindly download the pdf Form and email (fully filled, signed and with the required documents) to the email addresses below.</p>

                <a
                    href="/Pet-Registration-Form.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=' mt-12 flex items-end border-[#C2AB92] text-[#C2AB92] py-2 px-4 text-[0.8rem] font-[600] md:text-[1rem] border-[2px]'
                >
                    Download Pet Registration Form <MdKeyboardArrowRight className='text-[#C2AB92] text-[1rem] md:text-[1.4rem]' /></a>

                {/* ////////////////// gmail card //////////////////// */}

                <h2 className='text-[1.2rem] md:text-[1.4rem] font-[800] mt-12'>Send Them To</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-4 w-[90vw] relative'>
                    <div className='w-[100%] px-4 py-7 shadow-lg flex items-center justify-center flex-col rounded-md hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300'
                    >
                        <CgMail className='text-[2rem] md:text-[4rem]' />
                        <a href='mailto:hospitality@pinnacle-condo.com'
                            className='text-[0.8rem] md:text-[1rem] cursor-pointer  mt-3'> hospitality@pinnacle-condo.com</a>
                    </div>
                    <div className='w-[100%] px-4 py-7 shadow-lg flex items-center justify-center flex-col rounded-md hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300'>
                        <CgMail className='text-[2rem] md:text-[4rem]' />
                        <a href='mailto:apm@pinnacle-condo.com'
                            className='text-[0.8rem] md:text-[1rem] cursor-pointer  mt-3'>  apm@pinnacle-condo.com</a>
                    </div>
                    <div className='w-[100%] px-4 py-7 shadow-lg flex items-center justify-center flex-col rounded-md hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300'>
                        <CgMail className='text-[2rem] md:text-[4rem]' />
                        <a href='mailto:operations@pinnacle-condo.com'
                            className='text-[0.8rem] md:text-[1rem] cursor-pointer  mt-3'>operations@pinnacle-condo.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetRegitrationForm
