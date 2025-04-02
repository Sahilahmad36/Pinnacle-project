import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 uppercase">Our Location for You</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover some of the best places to visit around the world. Explore diverse cities and immerse yourself in their unique cultures.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Location 1 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-7.jpg"
            alt="Location 1"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 1</h3>
          <p className="text-center text-gray-600">120 property</p> */}
        </div>

        {/* Location 2 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-8.jpg"
            alt="Location 2"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 2</h3>
          <p className="text-center text-gray-600">132 property</p> */}
        </div>

        {/* Location 3 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-9.jpg"
            alt="Location 3"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 3</h3>
          <p className="text-center text-gray-600">136 property</p> */}
        </div>

        {/* Location 4 */}
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-10.jpg"
            alt="Location 4"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 4</h3>
          <p className="text-center text-gray-600">121 property</p> */}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-8 mt-12">
        {/* Location 5 */}
        <div
          className="flex flex-col items-center w-full sm:w-1/2"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-11.jpg"
            alt="Location 5"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 5</h3>
          <p className="text-center text-gray-600">140 property</p> */}
        </div>

        {/* Location 6 */}
        <div
          className="flex flex-col items-center w-full sm:w-1/2"
          data-aos="fade-up"
        >
          <img
            src="https://homelengoreact.vercel.app/images/location/location-12.jpg"
            alt="Location 6"
            className="w-full h-auto rounded-lg mb-4 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
          />
          {/* <h3 className="text-xl font-semibold text-gray-800">Location 6</h3>
          <p className="text-center text-gray-600">145 property</p> */}
        </div>
      </div>
    </div>
  );
};

export default Location;
