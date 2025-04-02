import React, { useEffect } from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoDesktopSharp } from "react-icons/io5";
import { GrHostMaintenance } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactUs from '../components/ContactUs';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);
  return (
    <div>
      <div className="relative min-h-screen flex flex-col justify-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl m-4 mt-20 
            h-[30%] sm:h-[40%] md:h-[50%] lg:h-[60%]"
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/man-showing-contact-symbols-social-media-internet_220873-7127.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
            zIndex: -2,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-black rounded-2xl m-4 mt-20 
            h-[30%] sm:h-[40%] md:h-[50%] lg:h-[60%]"
          style={{
            opacity: 0.2,
            zIndex: -1,
          }}
        ></div>
        <div className="relative z-10 text-center mb-45">
          <h1 className="text-3xl mb-4 text-white lg:text-5xl sm:text-4xl"
            style={{ fontFamily: "'Stoke', Georgia, Times New Roman, serif" }}
          >
            <span className='lg:text-6xl text-4xl'>C</span>ONTACT <span className='lg:text-6xl text-4xl'>U</span>S
          </h1>
          <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
            The Pinnacle Condominium Association
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-6 lg:px-32 py-10 lg:mt-[-150px] mt-[-350px]">
        <div className="flex flex-wrap justify-between gap-4">
          <div
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:w-2/5 p-4 bg-white shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <MdManageAccounts className="text-5xl text-[#c29667] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Management Office</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Christian Gomez </p>
              <p className='text-[#c29667]'>• General Manager </p>
              <p>• 305 9327001 ext 203</p>
              <p className='text-[#c29667]'>• pm@pinnacle-condo.com</p>
            </div>
          </div>
          <div
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:w-2/5 p-4 bg-white shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <MdManageAccounts className="text-5xl text-[#c29667] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Management Office</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Elianni Marin</p>
              <p className='text-[#c29667]'>• Assistant Manager</p>
              <p>• 3059327001 ext 201</p>
              <p className='text-[#c29667]'>• pm@pinnacle-condo.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:mt-0 mt-4 bg-white shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <IoDesktopSharp className="text-5xl text-[#c29667] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Front desk</h3>
            <div className="space-y-2 text-gray-600">
              <p>• 305 932 7001 ext 200</p>
              <p className='text-[#c29667]'>• hospitality@pinnacle-condo.com</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:mt-0 mt-4 bg-white shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <GrHostMaintenance className="text-5xl text-[#c29667] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenence Department</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Omar Chamorro</p>
              <p className='text-[#c29667]'>• Chief Engineer</p>
              <p>• 305 932 7001 ext 204</p>
              <p className='text-[#c29667]'>• engineer@pinnacle-condo.com</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full sm:w-1/2 lg:w-1/3 p-4 lg:mt-0 mt-4  bg-white shadow-lg rounded-lg hover:bg-gradient-to-r hover:from-yellow-300 hover:to-gray-100 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <FaChalkboardTeacher className="text-5xl text-[#c29667] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Board Of Directors</h3>
            <div className="space-y-2 text-gray-600">
              <p>• President – Lyon (Lenny) Roth</p>
              <p className='text-[#c29667]'>• Vice president – Maxim Guro </p>
              <p>• Treasurer - OLEG BOURLATSKI</p>
              <p className='text-[#c29667]'>• VICTOR HAZAN</p>
              <p>• JEFF YUZEFPOLSKY</p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Contact;
