import './style.css'
import './home.css'
import reactlogo from "../icons/react.svg";
import tailwind from "../icons/tailwindcss.svg"
import nodejs from "../icons/nodejs.svg";
import cpp from "../icons/cpp.svg";
import js from "../icons/js.svg";
import c from "../icons/c.svg";
import java from "../icons/java.svg";
import mysql from "../icons/mysql.svg";
import oracle from "../icons/oracle.svg";
import css from "../icons/css.png";
import html from "../icons/html.png";
import mongodb from '../icons/mongodb.svg'
import expressjs from '../icons/express.svg'

import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useState,useEffect } from 'react';

function home()
{
    const [text] = useTypewriter({
        words: ["develops interactive and dynamic web applications.",
            "strives to build seamless experiences that engage and delight users.",
            "is passionate about building scalable and maintainable solutions."],
        loop: {},
        typeSpeed:200,
        deleteSpeed:90,
        delaySpeed:3000
    });

    const [projects,setProjects] = useState([]);

    useEffect( () => {

        function XMLParser(){
            fetch('projects.xml')
            .then((res) => res.text())
            .then((text) => {
            const xml = new DOMParser().parseFromString(text,'text/xml');
            const projectNodes = xml.getElementsByTagName('project');

            const projectData = Array.from(projectNodes).map(project => ({
                title: project.getElementsByTagName('title')[0]?.textContent || "Untitled",
                content: project.getElementsByTagName('content')[0]?.textContent || "No description available.",
                gitlink: project.getElementsByTagName('gitlink')[0]?.textContent || "#"
            }));

            setProjects(projectData);
            
            })
        .catch((error) => console.error("Error fetching XML:", error));
        }
        XMLParser();
    },[]);

    return (
        <>
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0f172a] text-white">
            <h1 className="text-gray-100 text-4xl sm:text-5xl sm:leading-[3.5rem] font-bold mt-40">A <span className="text-blue-500">Passionate dev</span> eager to learn</h1>
            <h1 className="text-gray-100 text-4xl sm:text-5xl sm:leading-[3.5rem] font-bold ">new technologies and bring ideas</h1>
            <h1 className="text-gray-100 text-4xl sm:text-5xl sm:leading-[3.5rem] font-bold ">to life through code 💻</h1>
            <div class="container">
                <div className="line" style={{ "--delay":"0s", "width":"90%"}}></div>
                <div className="line" style={{ "--delay":"0.2s", "width":"80%"}}></div>
                <div className="line" style={{ "--delay":"0.4s", "width":"70%"}}></div>
                <div className="line" style={{ "--delay":"0.6s", "width":"60%"}}></div>
                <div className="line" style={{ "--delay":"0.8s", "width":"50%"}}></div>
                <div className="line" style={{ "--delay":"1s", "width":"40%"}}></div>
                <div className="line" style={{ "--delay":"1.2s", "width":"30%"}}></div>
                <div className="line" style={{ "--delay":"1.4s", "width":"20%"}}></div>
            </div>
        </section>

        <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0f172a] text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">Hello, I'm <span className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Kirubakaran</span></h1>
            <p className="text-xl sm:text-3xl mt-4 font-bold">A Passionate Software Developer 🚀</p>
            <h1 className="text-4xl sm:text-6xl font-bold">who<span className="text-fuchsia-400"> {text}</span><Cursor/></h1>

            {/* <p className="mt-4 text-gray-400 max-w-xl">
                develops interactive and dynamic web applications.
                strives to build seamless experiences that engage and delight users.
                is passionate about building scalable and maintainable solutions.
            </p> */}
        </section>

        <section className="bg-[#0f172a] flex flex-col justify-center items-center text-center py-8">
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-8">
            <span className="text-amber-400">Technologies</span> I use to develop...
            </h1>
        <div className="flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-6 sm:place-items-center">
        <img src={reactlogo} alt="Tech" className="sm:max-w-[100px] sm:max-h-[100px] max-w-[60px] max-h-[60px] object-contain" />
        <img src={tailwind} alt="Tailwind" className="sm:max-w-[333px] sm:max-h-[133px] max-w-[200px] max-h-[80px] object-contain" />
            {
                [nodejs,expressjs,cpp,html,css,js,oracle,mysql,java,c,mongodb].map((icon,index) => {
                    return <img key={index} src={icon} alt={`${icon}`} className="sm:max-w-[100px] sm:max-h-[100px] max-w-[60px] max-h-[60px] object-contain" />
                })
            }
        </div>
        </section>

        <section id="Projects" className="bg-[#0f172a] flex flex-col justify-center items-center text-center py-8 " href="#Projects">
                <h1 className="text-gray-100 text-4xl sm:text-5xl sm:leading-[3.5rem] font-bold ">My creations</h1>
        <div className="flex flex-wrap justify-center">
            {projects.map((project,index) => (
                <div key={index} id="card" className="shadow-violet-400 bg-slate-600 h-[300px] w-[300px] rounded-[10px] mt-8 mx-5">
                <h1 className="text-white text-[1.6em] font-sans font-medium my-2">{project.title}</h1>
                <hr></hr>
                <h1 className="font-sans text-xl px-5 py-5 text-[15px] font-bold text-zinc-200">{project.content}</h1>
                <button className="font-bold text-[1em] rounded-xl bg-zinc-300 px-3 py-2 cursor-pointer hover:text-[1.1em]"><a href={project.gitlink} target="__blank" rel="noopener noreferrer">Github</a></button>
                </div>
            ))}
        </div>
        <h1 className="text-gray-100 text-[1.6em] font-bold mt-4">For more projects checkout my <a href="https://github.com/Kirubakaran-2005?tab=repositories"><span className="cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent hover:brightness-120">Github</span></a></h1>
        </section>

        <section id="Contact" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0f172a] text-white">
        <h1 className="text-white font-bold text-[3em] sm:text-[5em]">Let's create together.</h1>
        <h2 className="text-slate-200 font-bold text-[1.2em] sm:text-[1.9em]">kiruba29kirubakaran@gmail.com</h2>
        <button className="text-white font-sans font-bold bg-amber-600 rounded-[10px] py-2 px-3 sm:text-[1.4rem] text-[1.2em] mt-10 cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 "><a  href="https://mail.google.com/mail/?view=cm&fs=1&to=kiruba29kirubakaran@gmail.com" target="__blank" rel="noopener">Contact me</a></button>
        </section>
        <footer>
            <h1 className="flex justify-center text-center bg-[#0f172a] text-slate-300 font-bold text-[1.2em]">&copy; 2025 Kirubakaran V</h1>
        </footer>
        </>
    );
}

export default home;