import React from 'react';
import { FaFacebook, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Button} from "@nextui-org/react";
import Profile from "@/public/assets/queenyeji.jpg";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-[url('/assets/animated-circle.svg')] bg-no-repeat bg-cover min-h-screen flex items-center justify-center p-4 pt-[8rem]" id='home'>
      <div className="text-center">
          <div className=" flex items-center justify-center">
          <div >
            <Image 
                src={Profile}
                alt="Picture of the author"
                className="relative w-72 h-72 rounded-full border-[10px]"
            />
          </div>
        </div>
          

        <h1 className="font-bold text-5xl mt-6">Hi, I'm Kervin Lance Sabater</h1>
        <p className="text-lg mt-2">As a beginner Web designer and also aspiring to become a front-end developer, 
            I'm excited to learn and create user-friendly websites. </p>
        <p className="text-lg mt-2"> 
            Let's work together to bring ideas to life.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/kervin.lance.sabater/" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-500">
            <FaFacebook className=" text-3xl" />
          </a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer" className= " hover:text-sky-500">
            <FaTelegram className=" text-3xl" />
          </a>
          <a href="https://github.com/lance123p" target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500">
            <FaGithub className=" text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/kervin-lance-sabater-815505245/" target="_blank" rel="noopener noreferrer" className= " hover:text-blue-600">
            <FaLinkedin className=" text-3xl" />
          </a>
        </div>
            <Button className="mt-6 px-6 py-2 text-lg text-white bg-gradient-to-r from-pink-600 to-pink-300"  
             color="default"
             radius="sm"
             size="md" >
                Get in touch
            </Button>
      </div>
     </div>
  );
};

export default Home;

