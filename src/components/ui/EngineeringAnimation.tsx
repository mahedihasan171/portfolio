/**
 * Engineering Animation
 *
 * Temporary animated circle.
 * Later this will become a DevOps
 * engineering visualization.
 */

const EngineeringAnimation = () => {
    return (
      <div className="relative flex h-80 w-80 items-center justify-center">
  
        {/* Outer Ring */}
        <div className="absolute h-80 w-80 rounded-full border border-cyan-500/30 animate-pulse" />
  
        {/* Middle Ring */}
        <div className="absolute h-56 w-56 rounded-full border border-cyan-400/30" />
  
        {/* Core */}
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 border border-cyan-500 text-cyan-400 font-semibold">
          DevOps
        </div>
  
      </div>
    );
  };
  
  export default EngineeringAnimation;