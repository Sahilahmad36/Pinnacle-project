import React from 'react';
import Slider from 'react-slick';

// Slick slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 cards on large screens
  slidesToScroll: 1,
  nextArrow: <div className="slick-arrow slick-next">Next</div>,
  prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
  responsive: [
    {
      breakpoint: 1024, // Tablet size
      settings: {
        slidesToShow: 2, // Show 2 cards on tablets
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile size
      settings: {
        slidesToShow: 1, // Show 1 card on mobile
        slidesToScroll: 1,
      },
    },
  ],
};

const testimonials = [
  {
    name: "John Doe",
    image: "https://picsum.photos/101/101",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Steve Smith",
    image: "https://picsum.photos/102/102",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Kristen",
    image: "https://picsum.photos/104/104",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Ariana",
    image: "https://picsum.photos/103/103",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const Testimonial = () => {
  return (
    <div className="container lg:px-10 px-6 mt-10">
      <div className="text-center mb-12">
        <h1 className="uppercase font-semibold text-orange-600 text-lg">Our Testimonials</h1>
        <p className="font-semibold text-4xl mt-2 uppercase">What’s people say’s</p>
        <p className="lg:text-lg text-md mt-4 text-gray-600">
        Our experienced team specializes in property management, leveraging years of industry expertise to provide strategic insights and deliver the best possible outcomes.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="my-6" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
              <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                <div className="flex justify-start items-center gap-5">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 h-16" />
                  <div>
                    <p className="text-xl font-bold text-black/80">{testimonial.name}</p>
                    <p>{testimonial.name}</p>
                  </div>
                </div>
                <div className="py-6 space-y-4">
                  <p className="text-sm text-gray-500">{testimonial.review}</p>
                  <p>{testimonial.rating}</p>
                </div>
              </div>
            </div>
          </div> 
        ))}
      </Slider> 
    </div>
  );
};

export default Testimonial;
