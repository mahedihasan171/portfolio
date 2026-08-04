/**
 * Engineering Animation
 *
 * Displays the technologies that represent
 * my engineering journey.
 */

import { technologies } from "../../data/technologies";

const EngineeringAnimation = () => {
  return (
    <div className="relative flex h-96 w-96 items-center justify-center">

      {/* Outer Ring */}
      <div className="absolute h-80 w-80 rounded-full border border-cyan-500/20" />

      {/* Middle Ring */}
      <div className="absolute h-60 w-60 rounded-full border border-cyan-500/20" />

      {/* Center */}
      <div className="z-10 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500 bg-slate-900 font-semibold text-cyan-400 shadow-lg">
        DevOps
      </div>

      {/* Technology Labels */}
      <div className="absolute top-0 text-cyan-400 text-sm">AWS</div>

      <div className="absolute bottom-0 text-cyan-400 text-sm">
        Linux
      </div>

      <div className="absolute left-0 text-cyan-400 text-sm">
        Docker
      </div>

      <div className="absolute right-0 text-cyan-400 text-sm">
        Kubernetes
      </div>

      <div className="absolute top-20 left-4 text-cyan-400 text-sm">
        GitHub
      </div>

      <div className="absolute bottom-20 right-4 text-cyan-400 text-sm">
        Terraform
      </div>

    </div>
  );
};

export default EngineeringAnimation;