import React, { useEffect } from 'react';
import styl from "../assets/img/styl2.jpeg";
import bg from "../assets/img/loginbackground.png";
import ResidentsOnlyWeather from '../components/ResidentsOnlyWeather';
import AOS from "aos";
import "aos/dist/aos.css";

const ResidentsOnly = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-center px-4">
                <div
                    className="absolute top-0 inset-0 bg-cover bg-center rounded-2xl m-4 mt-20
                    h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%]"
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
                    h-[40%] sm:h-[50%] md:h-[60%] lg:h-[70%]"
                    style={{
                        opacity: 0.2,
                        zIndex: -1,
                    }}
                ></div>
                <div className="relative z-10 text-center mb-45">
                    <h1 className="text-3xl mb-4 text-white lg:text-5xl sm:text-4xl"
                        style={{ fontFamily: "'Stoke', Georgia, Times New Roman, serif" }}
                    >
                        <span className='lg:text-6xl text-4xl'>R</span>esidents <span className='lg:text-6xl text-4xl'>O</span>nly
                    </h1>
                    <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
                        The Pinnacle Condominium Association
                    </h2>
                </div>
            </div>

            <div className="mt-[-300px] w-[90%] md:w-full md:h-[80vh] md:-mt-14  px-0 lg:ml-0 ml-5">
                <div
                    className="h-full w-full flex items-end justify-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url("https://images.pexels.com/photos/12838530/pexels-photo-12838530.jpeg")`,
                        zIndex: 0,
                    }}
                >

                    <div
                        className="w-[100%] max-w-md mb-4 flex flex-col gap-2 p-4"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: '130% 100%',
                            backgroundPosition: 'center',
                            margin: "30px",
                            borderRadius: '12px',
                            zIndex: 1,
                        }}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <p className='md:text-[1.4rem] font-bold text-center'>Login</p>

                        <div className="relative w-full">
                            <input
                                type="text"
                                id="username"
                                placeholder="Search Destinations"
                                className="peer w-full bg-transparent outline-none border-b-2 border-gray-700 placeholder-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 h-full "
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-lg left-1 text-gray-700 transition-all duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:opacity-100 peer-focus:translate-y-[-20px] peer-focus:opacity-0"
                            >
                                User Name. . .
                            </label>
                        </div>

                        <div className="relative w-full mt-5">
                            <input
                                type="text"
                                id="password"
                                placeholder="Search Destinations"
                                className="peer w-full bg-transparent outline-none border-b-2 border-gray-700 placeholder-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 h-full "
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-lg left-1 text-gray-700 transition-all duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:opacity-100 peer-focus:translate-y-[-20px] peer-focus:opacity-0"
                            >
                                Password. . .
                            </label>
                        </div>

                        <div className='flex gap-3 justify-between w-[100%] items-center mt-4'>
                            <button className='border hover:bg-[#F9EEB6] hover:border-black px-10 text-lg py-1 bg-white text-black rounded-full'>Enter</button>
                            <p className='text-sm cursor-pointer'><u>Single Sign-on</u></p>
                        </div>

                        <div className='flex gap-1 mt-4'>
                            <input
                                type="checkbox"
                                className='h-[3vh] w-[3vh] cursor-pointer'
                            />
                            <p className='text-[0.8rem] font-[800]'>Keep me logged in on this computer</p>
                        </div>

                        <p><u className='text-[0.7rem] text-start w-[100%] flex justify-start items-start cursor-pointer'>Forgot Username/Password?</u></p>
                    </div>
                </div>
            </div>

            <ResidentsOnlyWeather />
        </>
    );
}

export default ResidentsOnly;
