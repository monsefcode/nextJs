import React, { useEffect, useState } from "react";
import Head from "next/head";
// icons
import { SunIcon, MoonIcon } from "../components/icons";
import CustomLink from '../components/CustomLink';
// next-themes
import { useTheme } from "next-themes";
// framer-motion
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // create a meta tag for the page
  const meta = {
    title: "My Next.js App",
    description: "This is my Next.js app",
    keywords: "next.js, react, javascript",
  };

  // next-themes
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);


  const [showImage, setShowImage] = useState(false);

  return (
    <div className="h-screen px-12">
      <Head>
        <title>NextJs Theme 🚀</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-end py-12">
        <button
          type="button"
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>

      <motion.main
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1 className="text-3xl font-bold">NextJs Theme 🚀</motion.h1>
      </motion.main>

      {/* CustomLink */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CustomLink href="/" label="Home" />
        <CustomLink href="/" label="About" />
        <CustomLink href="/" label="Projects" />
        <CustomLink href="/" label="Contact Me" />
      </motion.div>
      

      {[1,2,3,4].map((item, index) => (
        <motion.div 
          key={index}
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="p-6 rounded-lg max-w-sm dark:bg-slate-900 shadow-lg ">
            <h1 className="text-xl font-bold">Notifications</h1>
            <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions,</p>
          </div>
        </motion.div>
      ))}

      

    </div>
  );
}
