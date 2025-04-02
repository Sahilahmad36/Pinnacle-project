import React, { useState, useEffect } from "react";
import img1 from "../assets/img/styl1.jpeg";
import img2 from "../assets/img/styl2.jpeg";
import img3 from "../assets/img/styl3.jpeg";
import styl2 from "../assets/img/styl2.jpeg";
import styl1 from "../assets/img/styl17.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Amenities from "./Amenities";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import Location from "./Location";


const Home = () => {
  const images = [
    img1,
    img2,
    img3,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const [isDreamHome, setIsDreamHome] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDreamHome((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main w-full h-auto">
      <div className="w-full flex flex-col">
        <header className="w-full h-screen relative">
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
              <img
                src={images[currentImageIndex]}
                alt="Slider"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-30">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${currentImageIndex === index ? "bg-yellow-500" : "bg-white"
                    }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30 md:bg-transparent z-10"></div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center px-4 z-20"
            style={{ fontFamily: "'Stoke', Georgia,Times New Roman, serif" }}
          >
            <h1 className="text-white mb-2 lg:text-5xl text-3xl">
              Find Your{" "}
              <span className="lg:text-6xl text-4xl">
                {isDreamHome ? "Dream Home" : "Perfect Home"}
              </span>
            </h1>
            <h2 className="text-white mb-4 text-lg font-serif">
              let’s discuss for your dream house?
            </h2>

            <form
              action=""
              className="flex items-center border p-2 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] h-[60px] mx-auto"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  id="search"
                  placeholder="Search Destinations"
                  className="peer w-full bg-transparent outline-none border-b-2 mt-6 border-gray-700 placeholder-transparent focus:border-blue-500 focus:ring-0 transition-all duration-300 h-full px-2"
                />
                <label
                  htmlFor="search"
                  className="absolute text-lg left-2 bottom-0 text-gray-700 transition-all duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:opacity-100 peer-focus:translate-y-[-20px] peer-focus:opacity-0"
                >
                  Search. . .
                </label>
              </div>
              <button className="w-12 h-full text-black rounded-r-md hover:bg-blue-600 transition duration-300 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </header>




        <div className="w-full h-[80%] bg-[#ffffff] overflow-hidden mt-10">
          <div className="flex flex-col items-center justify-center h-full px-10 secondary-font">
            <button
              className="bg-[#c2ab92] text-white text-xl font-semibold py-3 px-10 rounded-lg transform transition-all hover:scale-110 hover:bg-[#e4b077]"
              data-aos="fade-left"
            >
              CLICK HERE FOR WEBCAM
            </button>

            <h4 className="text-lg mt-6 font-semibold text-gray-700">5-Star Oceanfront Condominium</h4>

            <div
              data-aos="zoom-in"
              className="flex flex-col justify-center items-center gap-5 mt-5"
            >
              <div className="w-full">
                <p className="text-md lg:text-4xl text-gray-600 primary-font lg:mt-1 mt-2">
                  The Pinnacle Condominium Association
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col justify-center items-center gap-5 mt-5"
            >
              <div className="w-full">
                <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2 text-center">
                  Located in pristine Sunny Isles Beach, Florida on 4+ beachfront acres, We look
                  forward to welcoming you to your new residence at our professionally managed
                  5-Star condominium.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full lg:px-10 overflow-hidden bg-[#ffffff] border-b border-orange-100">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-10 secondary-font">
          <div
            data-aos="fade-up"
            className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-4 relative"
          >
            <img
              className="w-full"
              src={styl2}
              alt="img"
            />


            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute top-5 left-30 w-1/2 lg:w-1/2" data-aos="fade-right">
                <img
                  className="w-full rounded-md shadow-lg"
                  src={styl1}
                  alt="collage-image-1"
                />
              </div>

            </div>
          </div>

          <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
            <div data-aos="fade-left">
              <h1
                className="lg:text-4xl text-2xl text-black primary-font font-semibold"
                style={{ color: "#7a6960" }}
              >
                Pinnacle
                <span className="block mt-2 w-20 border-b-4 border-[#c2ab92]"></span>
              </h1>
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
            >
              <div className="w-full">
                <p className="text-md lg:text-4xl text-gray-600 primary-font lg:mt-1 mt-2">
                  Interior Spaces & Experiences
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
            >
              <div className="w-full">
                <p className="text-md lg:text-lg text-gray-600 primary-font lg:mt-1 mt-2">
                  The Pinnacle Condominium is comprised of 244 luxurious residences with breathtaking views of the Atlantic Ocean. Our 5-Star condominium offers the best value in Sunny Isles Beach. With its unique floor-thru design, each residence has ocean and city views, in a setting of only 2 residences per floor.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>



      <Amenities />
      <Location />
      <Testimonial />

      <ContactUs />



    </div>
  );
};

export default Home;
