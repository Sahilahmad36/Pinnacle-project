import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styl from "../assets/img/styl14.jpeg";
import image0 from "../assets/image0.png";
import luxury from "../assets/luxury.png";
import life1 from "../assets/life1.jpg";
import life2 from "../assets/life2.jpg";
import life3 from "../assets/life3.jpg";
import life4 from "../assets/life4.jpg";
import life5 from "../assets/life5.png";
import life6 from "../assets/life6.png";
import life7 from "../assets/life7.png";
import life8 from "../assets/life8.png";
import life9 from "../assets/life9.png";
import life10 from "../assets/life10.jpg";
import life11 from "../assets/life11.jpg";
import life12 from "../assets/life12.jpg";
import life13 from "../assets/life13.png";
import life14 from "../assets/life14.jpg";
import life15 from "../assets/life15.jpg";
import life16 from "../assets/life16.png";

const LifeStyle = () => {

    useEffect(() => {
        AOS.init({
              duration: 1200,
            });
      }, []);
  

  return (
    <div>
        <div className="relative min-h-screen flex flex-col justify-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl m-4 mt-20 
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
            <span className='lg:text-6xl text-4xl'>L</span>IFE <span className='lg:text-6xl text-4xl'>S</span>TYLE
          </h1>
      
          <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
            The Pinnacle Condominium Association
          </h2>
      
        
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 lg:mt-[-150px] mt-[-300px]">
      <div className="flex flex-col items-center space-y-4 mb-8 md:mb-0 md:w-1/3" data-aos="fade-up">
        <img
          src={image0}
          alt="Logo 1"
          className="lg:w-40 object-contain"
        />
        {/* <img
          src={luxury}
          alt="Logo 2"
          className="lg:w-40 w-28 object-contain"
        /> */}
      </div>

      <div className="flex-1 pl-0 md:pl-12 text-center md:text-left" data-aos="fade-up">
        <h1 className="lg:text-4xl text-2xl text-[#4b5563] mb-4">
          Welcome to Pinnacle
        </h1>
        <p className="lg:text-lg text-md text-gray-700">
          Where we turn houses into homes and dreams into reality. At Home,
          we understand that a home is more than just a physical space, it's a
          place where memories are created, families grow, and life unfolds.
        </p>
      </div>
    </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-14 lg:px-32 px-6 mb-10">
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life1}
                   alt="Tennis court"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life2}
                   alt="Meeting Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life3}
                   alt="Swimming Pool"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life4}
                   alt="Massage Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life5}
                   alt="Table Tennis"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               {/* <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life6}
                   alt="Yoga Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div> */}
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life7}
                   alt="Pilates"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life8}
                   alt="Luxury Concierge"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life9}
                   alt="Tennis court"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life10}
                   alt="Meeting Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life11}
                   alt="Swimming Pool"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life12}
                   alt="Massage Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life13}
                   alt="Table Tennis"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life14}
                   alt="Yoga Room"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                 
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life15}
                   alt="Pilates"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
     
               <div
                 className="relative w-full"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="100"
               >
                 <img
                   src={life16}
                   alt="Luxury Concierge"
                   className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                 />
                
               </div>
             </div>
    </div>
  );
};

export default LifeStyle;
