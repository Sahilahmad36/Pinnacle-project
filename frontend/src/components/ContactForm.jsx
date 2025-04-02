import React, { useState } from 'react';
import Button from './Button';
import { MdOutlineMessage } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import contact from '../assets/img/contact.jpg';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
  };

  return (
    <div className="px-4 sm:px-8 md:px-10 py-10 md:py-20 w-full mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6 sm:space-y-8 w-full sm:w-1/2">
          <div
            className="flex gap-5 flex-wrap justify-center sm:justify-start"
            data-aos="fade-up"
          >
            <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
            <Button text="VIA CALL" icon={<IoCall />} />
            <Button text="VIA EMAIL FORM" icon={<IoMdMail />} isOutline={true} />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div
              className="flex flex-col w-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label htmlFor="name" className="absolute z-10 mt-[-12px] px-3 mx-5 bg-white text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="border-2 border-black px-3 py-2 rounded-md w-full"
              />
            </div>

            <div
              className="flex flex-col w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <label htmlFor="email" className="absolute z-10 mt-[-12px] px-3 mx-5 bg-white text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="border-2 border-black px-3 py-2 rounded-md w-full"
              />
            </div>
            <div
              className="flex flex-col w-full"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <label htmlFor="message" className="absolute z-10 mt-[-12px] px-3 mx-5 bg-white text-sm">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write Something.."
                className="border-2 border-black p-3 h-[100px] rounded-md w-full"
              />
            </div>

            <div
              className="flex justify-end mt-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Button text="Submit" />
            </div>
          </form>
        </div>

        <div
          className="w-full sm:w-1/2 mt-8 sm:mt-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={contact} alt="Service" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
