import React from 'react';
import { FaFacebook, FaTelegram, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import Logo1 from '@/public/assets/lance1.png';

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/wave.svg')] bg-no-repeat bg-cover py-4 px-4 md:px-14">
      <Divider className="my-4" />
      <div className="mt-[10rem] pt-[17rem] pb-[3rem] flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo or Brand Name */}
        <div className="flex flex-col items-center md:items-start">
          <a>
            <Image
              src={Logo1}
              alt="Logo"
              width={140}
              height={50}
            />
          </a>
          <div className="flex flex-col mt-2 space-y-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>skervinlance@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Imus City, Cavite, Philippines</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>09295200419</span>
            </div>
          </div>
        </div>
        
        {/* Footer Navigation Links */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Quick Links:</h3>
          <div className="flex flex-col">
            <a href="#about" className="hover:text-pink-600">Home</a>
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#projects" className="hover:text-pink-600">Projects</a>
            <a href="#skills" className="hover:text-pink-600">Skills</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold">Social Links:</h3>
          <div className="flex items-center space-x-4 mt-2">
            <a href="https://www.facebook.com/kervin.lance.sabater/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
              <FaTelegram className="text-3xl" />
            </a>
            <a href="https://github.com/lance123p" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/kervin-lance-sabater-815505245/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Lance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
