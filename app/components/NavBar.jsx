"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import ToggleButton from "./ToggleButton";
import Logo from "@/public/assets/lance1.png";
import Image from 'next/image';
import { FaHome, FaInfoCircle, FaGraduationCap, FaBriefcase, FaPhone } from 'react-icons/fa';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { label: "Home", href: "#home", icon: <FaHome /> },
    { label: "About", href: "#about", icon: <FaInfoCircle /> },
    { label: "Projects", href: "#projects", icon: <FaGraduationCap /> },
    { label: "Skills", href: "#skills", icon: <FaBriefcase /> },
    { label: "Contact", href: "#contact", icon: <FaPhone /> },
  ];

  const handleLinkClick = (label) => {
    setActiveItem(label);
    setIsMenuOpen(false);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed w-full py-3 md-py-0">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src={Logo}
            alt="Picture of the author"
            width={180}
            height={50}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 justify-center">
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              color="foreground"
              href={item.href}
              className={`hover:text-pink-600 flex items-center gap-2 ${activeItem === item.label ? 'border-b-3 border-pink-600' : ''}`}
              onClick={() => handleLinkClick(item.label)}
            >
              {item.icon}
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ToggleButton />
      </NavbarContent>

      <NavbarMenu className="space-y-2 pt-14">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className={`hover:text-pink-600 flex items-center gap-2 ${activeItem === item.label ? 'border-b-2 w-[6rem] border-pink-600' : ''}`}
              href={item.href}
              size="lg"
              color="foreground"
              onClick={() => handleLinkClick(item.label)}
            >
              {item.icon}
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
