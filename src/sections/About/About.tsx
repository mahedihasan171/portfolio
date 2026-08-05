/**
 * About Section
 */

import { about } from "../../data/about";

const About = () => {
  return (
    <section id="about"
    className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-12">

    {/*Section Heading */}

    <div className="mb-16 grid">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        ABOUT
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        {about.title}
      </h2>
    </div>

    <div>
    {/* Two Column Layout */}

        {/* Left */}

        {/* Left */}
      <div className="space-y-6">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg leading-8 text-slate-400"
          >
            {paragraph}
          </p>
        ))}
      </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-5">
          {about.metrics.map((metric) => (
        <div
          key={metric.label}
          className="group rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900/70"
        >
          <h3 className="text-3xl font-bold text-cyan-400 transition-colors group-hover:text-cyan-300">
            {metric.value}
          </h3>

          <p className="mt-3 text-sm uppercase tracking-widest text-slate-500">
          <div className="mt-5 h-1 w-10 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-16" />
            {metric.label}
          </p>
          </div>
        ))}
      </div>

      </div>

    </section>
  );
};

export default About;