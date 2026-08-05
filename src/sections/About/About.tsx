/**
 * About Section
 */

import { about } from "../../data/about";
import { timeline } from "../../data/timeline";
import { Container } from "../../components/layout";

const About = () => {
  return (
    <section id="about"
    className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
    <Container
  className="
    flex
    min-h-[calc(100vh-80px)]
    flex-col
    items-center
    justify-between
    gap-16
    lg:flex-row
  "
>

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
      {/* Left */}
<div className="max-w-xl">

      <h3 className="text-2xl font-semibold text-white">
        My Journey
      </h3>

      <div className="mt-4 h-1 w-16 rounded-full bg-cyan-400" />

      {/* paragraphs go here */}

      </div>

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
      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-6">
  <p className="text-lg italic text-slate-300">
    "Reliable software is built when quality, automation, and infrastructure work together."
  </p>
</div>

<div className="mt-16">
  <h3 className="text-2xl font-semibold text-white">
    Professional Journey
  </h3>

  <div className="mt-4 space-y-8">
    {timeline.map((item) => (
      <div
        key={item.year}
        className="flex gap-6"
      >
        {/* Year */}
        <div className="w-20 flex-shrink-0">
          <span className="font-semibold text-cyan-400">
            {item.year}
          </span>
        </div>

        {/* Timeline Content */}
        <div className="relative border-l border-cyan-500/30 pl-6">
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />

          <h4 className="font-semibold text-white">
            {item.title}
          </h4>

          <p className="mt-2 text-slate-400 leading-7">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>

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
      </Container>

    </section>
  );
};

export default About;