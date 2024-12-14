"use client";

import "./globals.css";
import Nav from "@/app/components/NavBar";
import Home from "@/app/components/Home";
import About from "@/app/components/About"
import Project from "@/app/components/Project";
import Footer from "@/app/components/Footer";
import Contacts from "@/app/components/Contact"
import Provider from "@/app/provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false)

 useEffect(() => {
    setIsClient(true)
  }, [] ) 

  return (
    <html lang="en">
      <body>
        { isClient ? (
           <Provider>
           <NextThemesProvider attribute="class" defaultTheme="light">
             <Nav />
             <Home />
             <About />
             <Project />
             {children}
             <Contacts />
             <Footer />
           </NextThemesProvider>
         </Provider>
        ): null }
       
      </body>
    </html>
  );
}
