import React, { useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Clients from './Client';
import Benifit from './Benifit';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';
import styl from "../assets/img/styl5.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <div className="slick-arrow slick-next">Next</div>,
  prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const testimonials = [
  {
    image: "https://homelengoreact.vercel.app/images/banner/banner-property-3.jpg",
  },
  {
    image: "https://homelengoreact.vercel.app/images/banner/banner-property-2.jpg",
  },
  {
    image: "https://homelengoreact.vercel.app/images/banner/banner-property-2.jpg",
  },
  {
    image: "https://homelengoreact.vercel.app/images/banner/banner-property-1.jpg",
  }
];

const About = () => {

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
            <span className='lg:text-6xl text-4xl'>A</span>BOUT <span className='lg:text-6xl text-4xl'>U</span>S
          </h1>


          <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
            The Pinnacle Condominium Association
          </h2>



        </div>
      </div>
      <div className="container lg:px-10 px-6 lg:mt-[-80px] mt-[-300px]">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div tabIndex="-1" style={{ width: '100%', display: 'inline-block' }}>
                <div className="flex justify-center items-center mx-2 rounded-xl bg-secondary/10">
                  <img src={testimonial.image} alt={`testimonial-${index}`} className="rounded-xl w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <section className="flat-section flat-agents lg:px-20 px-6">
        <div className="container mx-auto px-4 py-8">
          <div className="box-title text-center" data-aos="fade-up">
            {/* <h3 className="title mt-4 text-3xl font-semibold">Meet Our Agents</h3> */}
          </div>
          <div className="swiper tf-sw-mobile-1 non-swiper-on-575 mt-10">
            <div className="tf-layout-mobile-sm xl:grid xl:grid-cols-4 sm:grid-cols-2 swiper-wrapper gap-8">
              {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="200">
                <div className="box-agent hover-img">
                  <img
                    className="lazyload w-full h-auto rounded-xl"
                    src="https://homelengoreact.vercel.app/images/agents/agent-1.jpg"
                    alt="image-agent-Chris Patt"
                    width="450"
                    height="450"
                  />
                  <div className="content mt-4">
                    <div className="info flex items-center space-x-4">
                      <div>
                        <h5>
                          <a href="#" className="link text-xl font-medium">Chris Patt</a>
                        </h5>
                        <p className="text-variant-1 text-sm text-gray-500">Administrative Staff</p>
                      </div>
                      <div className="box-icon flex space-x-10">
                        <FaPhoneAlt className="h-6 ml-10 w-6 text-xl" />
                        <IoMail className="h-6 w-6 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                <div className="box-agent hover-img">
                  <img
                    className="lazyload w-full h-auto rounded-xl"
                    src="https://homelengoreact.vercel.app/images/agents/agent-4.jpg"
                    alt="image-agent-Esther Howard"
                    width="450"
                    height="450"
                  />
                  <div className="content mt-4">
                    <div className="info flex items-center space-x-4">
                      <div>
                        <h5>
                          <a href="#" className="link text-xl font-medium">Esther Howard</a>
                        </h5>
                        <p className="text-variant-1 text-sm text-gray-500">Administrative Staff</p>
                      </div>
                      <div className="box-icon flex space-x-10">
                        <FaPhoneAlt className="h-6 ml-10 w-6 text-xl" />
                        <IoMail className="h-6 w-6 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
                <div className="box-agent hover-img">
                  <img
                    className="lazyload w-full h-auto rounded-xl"
                    src="https://homelengoreact.vercel.app/images/agents/agent-3.jpg"
                    alt="image-agent-Darrell Steward"
                    width="450"
                    height="450"
                  />
                  <div className="content mt-4">
                    <div className="info flex items-center space-x-4">
                      <div>
                        <h5>
                          <a href="#" className="link text-xl font-medium">Darrell Steward</a>
                        </h5>
                        <p className="text-variant-1 text-sm text-gray-500">Administrative Staff</p>
                      </div>
                      <div className="box-icon flex space-x-10">
                        <FaPhoneAlt className="h-6 ml-10 w-6 text-xl" />
                        <IoMail className="h-6 w-6 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="500">
                <div className="box-agent hover-img">
                  <img
                    className="lazyload w-full h-auto rounded-xl"
                    src="https://homelengoreact.vercel.app/images/agents/agent-2.jpg"
                    alt="image-agent-Robert Fox"
                    width="450"
                    height="450"
                  />
                  <div className="content mt-4">
                    <div className="info flex items-center space-x-4">
                      <div>
                        <h5>
                          <a href="#" className="link text-xl font-medium">Robert Fox</a>
                        </h5>
                        <p className="text-variant-1 text-sm text-gray-500">Administrative Staff</p>
                      </div>
                      <div className="box-icon flex space-x-10">
                        <FaPhoneAlt className="h-6 ml-10 w-6 text-xl" />
                        <IoMail className="h-6 w-6 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <Benifit />
      <div className="mb-10">
        <Testimonial />
      </div>
      <ContactUs />
    </div>
  );
};

export default About;
