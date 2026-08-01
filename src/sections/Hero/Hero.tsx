/**
 * Hero Section
 *
 * Introduces the portfolio owner with a short
 * professional summary.
 */

import { socialLinks } from "../../data/social";

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex min-h-[calc(100vh-80px)] items-center"
        >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-20 lg:flex-row lg:items-center lg:px-12">

        {/*Left Side */}
            <div className="flex-[1.2]">

        {/* Greeting */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            BUILDING RELIABLE SOFTWARE SYSTEMS
        </p>
  
        {/* Name */}
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Mahedi Hasan
        </h1>
  
        {/* Role */}
        <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed text-slate-300 md:text-4xl">
        Building Reliable Software Systems Through
        <br />
        Cloud Infrastructure, Automation & Quality Engineering
        </h2>
  
        {/* Summary */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Backed by over four years of Quality Engineering experience, 
        I design and automate reliable software delivery through cloud infrastructure, 
        Infrastructure as Code, CI/CD, and modern DevOps practices while continuously 
        expanding into Platform Engineering, AIOps, and MLOps.
        </p>

            </div>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap gap-6">
            {socialLinks.map((social) => (
            <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
            >
            {social.name}
            </a>
          ))}
        </div>
                
        {/* Right Side */}
            <div className="flex flex-1 justify-center">
                <div className="flex h-80 w-80 items-center justify-center rounded-full border border-cyan-500/30 text-slate-500">
                Engineering Animation
                </div>
            </div>
        </div>
            

        
      </section>
    );
  };
  
  export default Hero;