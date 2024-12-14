import React from 'react';
import Yeji from "@/public/assets/questions.svg";
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex items-center p-6 md:p-12"  id='about'>
      <div className="grid lg:grid-cols-2 mt-20">
        {/* Left Side: Image */}
        <div className="flex justify-center">
        <Image
            src={Yeji}
            alt="Picture of the author"
            width={400} 
            
            />
        </div>
        
        
        {/* Right Side: Text Content */}
        <div className="flex-1">
          <h1 className="font-bold text-6xl md:mt-20 mt-6 mb-6 text-center md:text-start">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
          Hi, I'm Kervin Lance D. Sabater, a 23-year-old passionate developer with a love for creating easy-to-use and user-friendly applications. I studied at Cavite State University Imus Campus and hold a Bachelor of Science degree in Computer Science. I specialize in creating web design layouts and pixelated logos and characters, and I'm constantly learning new technologies to improve my skill set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
