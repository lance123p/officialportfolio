import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb } from "react-icons/si";

export default function Project() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. This project is a web application that allows users to track their tasks.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
        { name: 'Node.js', icon: <FaNodeJs size={24} /> },
      ],
      viewLink: 'https://tailwindcss.com/docs/grid-template-columns',
      imageSrc: '/assets/itzy1.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project is an e-commerce platform with a custom payment gateway.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Redux', icon: <SiRedux size={24} /> },
        { name: 'Express', icon: <SiExpress size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
      ],
      viewLink: 'https://nextui.org/docs/components/card#blurred-card',
      imageSrc: '/assets/itzy2.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project is an e-commerce platform with a custom payment gateway.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Redux', icon: <SiRedux size={24} /> },
        { name: 'Express', icon: <SiExpress size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
      ],
      viewLink: 'https://example.com/project-two',
      imageSrc: '/assets/itzy2.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project is an e-commerce platform with a custom payment gateway.',
      tools: [
        { name: 'React', icon: <FaReact size={24} /> },
        { name: 'Redux', icon: <SiRedux size={24} /> },
        { name: 'Express', icon: <SiExpress size={24} /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} /> },
      ],
      viewLink: 'https://example.com/project-two',
      imageSrc: '/assets/itzy2.jpg',
    },
    
  ];

  return (
    <div className="min-h-screen p-6 pt-[5rem]" id='projects'>
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="p-6 rounded-lg shadow-lg max-w-xs mx-auto border"
            style={{ width: '100%', maxWidth: '320px' }}
          >
            <a 
              href={project.viewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-75 transition-opacity duration-300"
            >
              <Image 
                src={project.imageSrc} 
                alt={`${project.title} image`} 
                className="object-cover rounded-xl mb-4"
                layout="responsive"
                width="100%"
                height="100%" // Set the height of the image
              />
            </a>
            <CardBody className="text-center p-0">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>
            </CardBody>
            <CardFooter className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Tools Used:</h3>
              <ul className="flex space-x-4 mb-4">
                {project.tools.map((tool, i) => (
                  <li key={i} className="flex items-center">
                    {tool.icon}
                  </li>
                ))}
              </ul>
              <a 
                href={project.viewLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
            <Button 
                className="w-full text-lg text-white bg-gradient-to-r from-pink-600 to-pink-300"
                radius="sm"
                size="md"
           >
                View Project
            </Button>

              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
