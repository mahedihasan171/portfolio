/**
 * Engineering Animation
 *
 * Displays the technologies that represent
 * my engineering journey.
 */

import "./EngineeringAnimation.css";
import { technologies } from "../../data/technologies";

const animationDelays = [
  "",
  "delay-1",
  "delay-2",
  "delay-3",
  "delay-4",
  "delay-5",
];

const EngineeringAnimation = () => {
  return (
    <div className="relative flex h-96 w-96 items-center justify-center">
       {/* Connection Lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        >
          {/* Connection: DevOps -> AWS */}
          <line
            className="connection-line"
            x1="50"
            y1="50"
            x2="50"
            y2="10"
          />
            {/* Connection: DevOps -> Docker */}
            <line
              className="connection-line"
              x1="50"
              y1="50"
              x2="10"
              y2="50"
            />

            {/* Connection: DevOps -> Kubernetes */}
            <line
              className="connection-line"
              x1="50"
              y1="50"
              x2="90"
              y2="50"
            />

            {/* Connection: DevOps -> Linux */}
            <line
              className="connection-line"
              x1="50"
              y1="50"
              x2="50"
              y2="90"
            />

            {/* Connection: DevOps -> GitHub */}
            <line
              className="connection-line"
              x1="50"
              y1="50"
              x2="20"
              y2="20"
            />

            {/* Connection: DevOps -> Terraform */}
            <line
              className="connection-line"
              x1="50"
              y1="50"
              x2="80"
              y2="80"
            />
      </svg>

      {/* Outer Ring */}
      <div className="absolute h-80 w-80 rounded-full border border-cyan-500/20" />

      {/* Middle Ring */}
      <div className="absolute h-60 w-60 rounded-full border border-cyan-500/20" />

      {/* Center */}
      <div className="animate-center flex h-18 w-18 items-center justify-center rounded-full bg-cyan-500">
        DevOps
      </div>

      {/* Technology Labels */}
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={`
              absolute
              -translate-x-1/2
              -translate-y-1/2
              animate-node
              ${animationDelays[index]}
              rounded-md
              border
              border-cyan-500/20
              bg-slate-900
              px-3
              py-1
              text-xs
              text-cyan-400
              shadow-md
              `}
            style={{
              left: tech.x,
              top: tech.y,
            }}
          >
            {tech.name}
          </div>
        ))}
    </div>
  );
};

export default EngineeringAnimation;