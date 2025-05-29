import './style.css'
import React,{useState,useEffect} from 'react';
import { Moon, Sun } from "lucide-react";

function navbar(){

    // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

    return (
        <nav className="w-full bg-[#0f172a] backdrop-blur-md shadow-md py-3 px-6 flex justify-between items-center z-50">
      <h1 className=" block max-sm:hidden text-xl font-bold text-white ">Kirubakaran</h1>
      <div className="flex justify-center items-center w-full">
      <ul className="flex space-x-6 text-gray-300 font-medium">
        <li><a href="#Projects" style={{transition: "all 0.15s ease"}} className="hover:text-blue-500 hover:text-lg">Projects</a></li>
        <li><a href="/Resume.pdf" style={{transition: "all 0.15s ease"}} className="hover:text-blue-500 hover:text-lg" download>Resume</a></li>
        <li><a href="#Contact" style={{transition: "all 0.15s ease"}} className="hover:text-blue-500 hover:text-lg">Contact</a></li>
      </ul>
      </div>
      
      {/* <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg dark:[#0f172a]">
        {darkMode ? <Sun size={20} className="text-black dark:text-stone-50 cursor-pointer" /> : <Moon size={20} className=" text-black dark:text-stone-50 cursor-pointer" />}
      </button> */}
    </nav>
    );
}
export default navbar;