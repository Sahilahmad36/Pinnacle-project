import React from 'react';


const Service = () => {
  
      
  return (
<section className="flat-section lg:px-20 px-6 mb-10">
  <div className="container">
    <div className='justify-center text-center'>
      <h1 data-aos="zoom-in" className="text-red-500 dark:text-white aos-init aos-animate uppercase text-lg font-bold">
        Our Services
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white aos-init aos-animate"
      >
        What We Do?
      </h1>
    </div>

    <div className="tf-grid-layout md:grid md:grid-cols-3 gap-6 mt-10">
      <div
        className="box-service shadow-lg rounded-lg transition-all duration-300 ease-in-out flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ width: "100%" }}
      >
        <div className="image relative overflow-hidden rounded-t-lg flex justify-center items-center">
          <img
            className="lazyload transform duration-500 ease-in-out hover:rotate-6"
            alt="Buy A New Home"
            src="https://homelengoreact.vercel.app/images/service/home-1.png"
            width="204"
            height="182"
          />
        </div>
        <div className="content p-4 text-center">
          <h5 className="title text-xl font-semibold">Buy A New Home</h5>
          <p className="description text-gray-600">
            Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.
          </p>
          <a
            className="tf-btn btn-line inline-flex items-center text-blue-500 font-semibold mt-2 border-2 border-transparent border-blue-500 transition-all duration-300 px-6 py-2 rounded-full"
            href="/sidebar-grid"
          >
            Learn More
            <span className="icon icon-arrow-right2 ml-2">→</span>
          </a>
        </div>
      </div>

      <div
        className="box-service shadow-lg rounded-lg transition-all duration-300 ease-in-out flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ width: "100%" }}
      >
        <div className="image relative overflow-hidden rounded-t-lg flex justify-center items-center">
          <img
            className="lazyload transform duration-500 ease-in-out hover:rotate-6"
            alt="Sell A Home"
            src="https://homelengoreact.vercel.app/images/service/home-2.png"
            width="204"
            height="182"
          />
        </div>
        <div className="content p-4 text-center">
          <h5 className="title text-xl font-semibold">Sell a Home</h5>
          <p className="description text-gray-600">
            Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.
          </p>
          <a
            className="tf-btn btn-line inline-flex items-center text-blue-500 font-semibold mt-2 border-2 border-transparent border-blue-500 transition-all duration-300 px-6 py-2 rounded-full"
            href="/sidebar-grid"
          >
            Learn More
            <span className="icon icon-arrow-right2 ml-2">→</span>
          </a>
        </div>
      </div>

      <div
        className="box-service shadow-lg rounded-lg transition-all duration-300 ease-in-out flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ width: "100%" }}
      >
        <div className="image relative overflow-hidden rounded-t-lg flex justify-center items-center">
          <img
            className="lazyload transform duration-500 ease-in-out hover:rotate-6"
            alt="Rent A Home"
            src="https://homelengoreact.vercel.app/images/service/home-3.png"
            width="204"
            height="182"
          />
        </div>
        <div className="content p-4 text-center">
          <h5 className="title text-xl font-semibold">Rent a Home</h5>
          <p className="description text-gray-600">
            Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.
          </p>
          <a
            className="tf-btn btn-line inline-flex items-center text-blue-500 font-semibold mt-2 border-2 border-transparent border-blue-500 transition-all duration-300 px-6 py-2 rounded-full"
            href="/sidebar-grid"
          >
            Learn More
            <span className="icon icon-arrow-right2 ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Service;
