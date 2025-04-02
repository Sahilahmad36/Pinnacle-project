import React from 'react';
import Service from './Service';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';
import styl from "../assets/img/styl11.jpeg"

const Ameniti = () => {


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
            <span className='lg:text-6xl text-4xl'>A</span>MENITIES
          </h1>

          <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
            The Pinnacle Condominium Association
          </h2>

        
        </div>
      </div>
      <div className="relative z-10 lg:px-20 px-6 mb-10 lg:mt-[-100px] mt-[-300px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="	https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/tennis_court.jpg"
                alt="Swimming Pool"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Tennis court</h3>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2020/08/library_1.jpg"
                alt="Gym"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Meeting Room</h3>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="	https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/swimmingpoolspa.jpg"
                alt="Sauna"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Swimming Pool</h3>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/massage_room.jpg"
                alt="24/7 Security"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Massage Room</h3>
              </div>
            </div>
          </div>


          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/Webp.net-resizeimage-24.jpg"
                alt="24/7 Security"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Table Tennis</h3>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/yoga5.jpg"
                alt="24/7 Security"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Yoga</h3>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/YOGAA.jpg"
                alt="24/7 Security"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Pilates</h3>
              </div>
            </div>
          </div>
          {/* <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <img
                src="https://healixhospital.com/pinnacle/wp-content/uploads/2019/10/luxury-concierge-2.png"
                alt="24/7 Security"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
                <h3 className="text-white text-2xl font-semibold">Luxury Concierge</h3>
              </div>
            </div>
          </div> */}

        </div>
      </div>


      <section className="light mb-10 bg-red-100 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20">
        <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white aos-init aos-animate">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white aos-init aos-animate"
            >
              Explore most
              <br />
              popular areas
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl aos-init aos-animate"
              style={{ backgroundImage: 'url("https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg")' }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="h-[400px] bg-cover bg-center rounded-xl aos-init aos-animate"
              style={{ backgroundImage: 'url("https://images.pexels.com/photos/12700379/pexels-photo-12700379.jpeg")' }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="800"
              className="h-[400px] bg-cover bg-center rounded-xl aos-init aos-animate"
              style={{ backgroundImage: 'url("https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg")' }}
            ></div>
          </div>
        </div>


      </section>


      {/* <Service /> */}
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Ameniti;
