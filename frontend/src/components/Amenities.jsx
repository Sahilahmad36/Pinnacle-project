import React from "react";
import tennis from "../assets/tennis_court.jpg";
import massage from "../assets/massage.jpg";
import meeting from "../assets/meeting.jpg";
import swimming from "../assets/swimming.jpg";
import table from "../assets/table.jpg";
import yoga from "../assets/yoga.jpg";
import yoga1 from "../assets/yoga1.jpg";
import luxury from "../assets/luxury.png"

const Amenities = () => {
  return (
    <section className="relative py-12 lg:py-24 bg-[#333]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-white uppercase">
          Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-6">
          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={tennis}
              alt="Tennis court"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Tennis court</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={meeting}
              alt="Meeting Room"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Meeting Room</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={swimming}
              alt="Swimming Pool"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Swimming Pool</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={massage}
              alt="Massage Room"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Massage Room</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={table}
              alt="Table Tennis"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Table Tennis</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={yoga}
              alt="Yoga Room"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Yoga Room</h4>
            </div>
          </div>

          <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={yoga1}
              alt="Pilates"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Pilates</h4>
            </div>
          </div>

          {/* <div
            className="relative w-full"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img
              src={luxury}
              alt="Luxury Concierge"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-b-lg">
              <h4 className="font-semibold text-xl mb-2">Luxury Concierge</h4>
            </div>
          </div> */}

          
        </div>
      </div>
    </section>
  );
};

export default Amenities;
