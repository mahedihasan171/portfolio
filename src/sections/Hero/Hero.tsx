/**
 * Hero Section
 *
 * Introduces the portfolio owner with a short
 * professional summary.
 */

import EngineeringAnimation from "../../components/ui/EngineeringAnimation";
import { socialLinks } from "../../data/social";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex min-h-[calc(100vh-80px)] items-center overflow-hidden"
        >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 lg:flex-row lg:items-center lg:py-0">

        {/*Left Side */}
            <div className="flex-[1.2]">

        {/* Greeting */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400">
           AUTOMATING RELIABLE SOFTWARE DELIVERY
        </p>
  
        {/* Name */}
        <h1 className="text-6xl md:text-7xl xl:text-8xl leading-none tracking-tight">
          Mahedi Hasan
        </h1>
  
        {/* Role */}
        <h2 className="mt-6 max-w-4xl text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
        Cloud Infrastructure • DevOps • Quality Engineering
        </h2>
  
        {/* Summary */}
        <p className="mt-8 max-w-lg text-lg leading-9 text-slate-400">
        Backed by over four years of Quality Engineering experience, 
        Design and automate reliable software delivery through cloud infrastructure, 
        Infrastructure as Code, CI/CD, and modern DevOps practices while continuously 
        expanding into Platform Engineering, AIOps, and MLOps.
        </p>

        {/* Call To Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <a
        href="#projects"
        className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
        >
        View Projects
        </a>

        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1"
        >
        Download Resume
        </a>
        </div>
         
         {/* Social Links */}
        
        <div className="mt-10 flex items-center gap-6">

        <a
          href={socialLinks[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
        >
          <FaGithub size={22} />
        </a>

        <a
          href={socialLinks[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href={socialLinks[2].url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition duration-300 hover:text-cyan-400 hover:-translate-y-1"
        >
          <FaEnvelope size={22} />
        </a>

        </div>

            </div>
                
        {/* Right Side */}
        <div className="flex flex-1 justify-center">
            <EngineeringAnimation />
        </div>

        </div>
            

        
      </section>
    );
  };
  
  export default Hero;