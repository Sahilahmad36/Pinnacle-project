import React, { useState, useEffect } from 'react';
import gift1 from "../assets/gift1.gif";
import gift2 from "../assets/gift2.gif";
import gift3 from "../assets/gift3.jpg";
import styl from "../assets/img/styl13.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Floorplan = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const openPopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
  };

  return (
    <div>
      <div className="relative min-h-screen flex flex-col justify-center px-4">
        {/* Background Image Section */}
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

        {/* Black Overlay Section */}
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
            <span className='lg:text-6xl text-4xl'>F</span>LOOR <span className='lg:text-6xl text-4xl'>P</span>LAN
          </h1>

          <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
            The Pinnacle Condominium Association
          </h2>

        
        </div>

      </div>
      <div className="w-full bg-[#ffffff] overflow-hidden lg:mt-[-100px] mt-[-300px]">
        <div className="flex flex-col items-center justify-center h-full px-10 secondary-font">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full">
              <p className="text-2xl lg:text-4xl text-gray-600 primary-font">
                Floor Plans
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 ">
            <div className="w-full">
              <p className="text-md lg:text-lg text-gray-600 primary-font text-center">
                The Pinnacle offers amazing flow-through designs with ocean <br /> and city views and only 2 residences per floor.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 lg:px-32 px-6">
        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
          onClick={() => openPopup(gift1)}
        >
          <img
            src={gift1}
            alt="Card 1"
            className="w-full object-cover mb-4"
          />
          <p className="text-md text-gray-600">
            2-Bedroom Unit (Lines 02,04 and 06)
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
          onClick={() => openPopup(gift2)}
        >
          <img
            src={gift2}
            alt="Card 2"
            className="w-full object-cover mb-4"
          />
          <p className="text-md text-gray-600">
            3-Bedroom Interior Units (Lines 03,05 and 07)
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
          onClick={() => openPopup(gift3)}
        >
          <img
            src={gift3}
            alt="Card 3"
            className="w-full object-cover mb-4"
          />
          <p className="text-md text-gray-600">
            3-Bedroom Corner Units (Lines 01 and 08)
          </p>
        </div>
      </div>


      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative bg-white p-8 rounded-lg transition-all duration-500 transform scale-100 opacity-100"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
            >
              X
            </button>
            <img
              src={popupImage}
              alt="Popup Image"
              className="lg:max-w-[800px] lg:max-h-[600px] object-contain mx-auto transition-all duration-500 transform ease-in-out"
            />
          </div>
        </div>
      )}
      {/* <div className="text-center mb-12">
  <h2 className="lg:text-4xl text-2xl text-[#4b5563] mb-6">
    Recommended For You
  </h2>

  <ul className="flex flex-wrap justify-center gap-3 rounded-2xl p-2">
    <li className="nav-tab-item">
      <a className="nav-link-item active py-1 px-4 text-gray-800 hover:bg-blue-300 rounded-2xl bg-gray-300">
        View All
      </a>
    </li>
    <li className="nav-tab-item">
      <a className="nav-link-item py-1 px-4 text-gray-800 hover:bg-blue-300 rounded-2xl bg-gray-300">
        Apartment
      </a>
    </li>
    <li className="nav-tab-item">
      <a className="nav-link-item py-1 px-4 text-gray-800 hover:bg-blue-300 rounded-2xl bg-gray-300">
        Villa
      </a>
    </li>
    <li className="nav-tab-item">
      <a className="nav-link-item py-1 px-4 text-gray-800 hover:bg-blue-300 rounded-2xl bg-gray-300">
        House
      </a>
    </li>
    <li className="nav-tab-item">
      <a className="nav-link-item py-1 px-4 text-gray-800 hover:bg-blue-300 rounded-2xl bg-gray-300">
        Office
      </a>
    </li>
  </ul>
</div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 lg:px-24 px-6">
        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
         
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg" alt="Card 1" className="w-full object-cover mb-4 rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            2-Bedroom Unit (Lines 02,04 and 06)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between p-4 w-full text-sm text-gray-600">
            <span>Beds: 1</span>
            <span>Baths: 2</span>
            <span>Sqft: 1783</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: John Doe</span>
            <span className="text-green-600 font-semibold">$2,000</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
        
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg" alt="Card 2" className="w-full object-cover mb-4  rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            3-Bedroom Interior Units (Lines 03,05 and 07)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between p-4 w-full text-sm text-gray-600">
            <span>Beds: 2</span>
            <span>Baths: 3</span>
            <span>Sqft: 2000</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: Jane Smith</span>
            <span className="text-green-600 font-semibold">$2,500</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
         
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg" alt="Card 3" className="w-full object-cover mb-4  rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            3-Bedroom Corner Units (Lines 01 and 08)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between p-4 w-full text-sm text-gray-600">
            <span>Beds: 3</span>
            <span>Baths: 2</span>
            <span>Sqft: 2500</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: Alice Lee</span>
            <span className="text-green-600 font-semibold">$3,000</span>
          </div>
        </div>


        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
         
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/19852077/pexels-photo-19852077/free-photo-of-the-limit-is-te-sky.jpeg" alt="Card 3" className="w-full object-cover mb-4  rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            3-Bedroom Corner Units (Lines 01 and 08)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between p-4 w-full text-sm text-gray-600">
            <span>Beds: 3</span>
            <span>Baths: 2</span>
            <span>Sqft: 2500</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: Alice Lee</span>
            <span className="text-green-600 font-semibold">$3,000</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
         
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/5785100/pexels-photo-5785100.jpeg" alt="Card 3" className="w-full object-cover mb-4  rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            3-Bedroom Corner Units (Lines 01 and 08)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between p-4 w-full text-sm text-gray-600">
            <span>Beds: 3</span>
            <span>Baths: 2</span>
            <span>Sqft: 2500</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: Alice Lee</span>
            <span className="text-green-600 font-semibold">$3,000</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
         
        >
          <div className="relative w-full"
          >
            <img src="https://images.pexels.com/photos/4258279/pexels-photo-4258279.jpeg" alt="Card 3" className="w-full object-cover mb-4  rounded-lg" />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full">
              Featured
            </div>
          </div>
          <p className="text-md text-gray-600">
            3-Bedroom Corner Units (Lines 01 and 08)
          </p>
          <p className="text-md text-gray-600 mt-2">
            Location: Miami, FL
          </p>
          <div className="flex justify-between w-full text-sm text-gray-600 p-4">
            <span>Beds: 3</span>
            <span>Baths: 2</span>
            <span>Sqft: 2500</span>
          </div>
          <div className="flex justify-between items-center w-full p-4">
            <span className="text-gray-600">Author: Alice Lee</span>
            <span className="text-green-600 font-semibold">$3,000</span>
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default Floorplan;
