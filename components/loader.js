import { useState, useEffect } from 'react';

export default function GBAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] flex items-center justify-center overflow-hidden relative">
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid-bg" />

      {/* Ambient glow blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00d4ff]/[0.03] blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#6366f1]/[0.04] blur-[120px] top-1/3 left-1/3" />

      {/* Orbiting ring */}
      <div className={`absolute w-40 h-40 rounded-full border border-[#00d4ff]/25 animate-spin-slow transition-opacity duration-700 ${phase >= 1 ? 'opacity-15' : 'opacity-50'}`}>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_12px_#00d4ff]" />
      </div>
      <div className={`absolute w-56 h-56 rounded-full border border-[#6366f1]/15 animate-spin-reverse transition-opacity duration-700 ${phase >= 1 ? 'opacity-10' : 'opacity-30'}`}>
        <div className="absolute -bottom-1 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6366f1] shadow-[0_0_10px_#6366f1]" />
      </div>

      {/* Main text container */}
      <div className="relative text-center z-10">
        <h1 className="text-[8rem] sm:text-[10rem] font-black tracking-tighter leading-none select-none">
          <span
            className={`inline-block transition-all duration-700 ease-out ${phase >= 1
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
              }`}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="relative">
              <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent animate-glitch-1">
                A
              </span>
              <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#00d4ff] shadow-[0_0_15px_#00d4ff,0_0_30px_#00d4ff] transition-all duration-500 ease-out ${phase >= 1 ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '400ms' }} />
            </span>
          </span>
          <span
            className={`inline-block transition-all duration-700 ease-out ${phase >= 1
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="relative">
              <span className="bg-gradient-to-b from-[#00d4ff] via-[#00d4ff]/80 to-[#00d4ff]/40 bg-clip-text text-transparent animate-glitch-2">
                P
              </span>
              <span className={`absolute -bottom-2 left-0 h-[3px] bg-[#6366f1] shadow-[0_0_15px_#6366f1,0_0_30px_#6366f1] transition-all duration-500 ease-out ${phase >= 1 ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '600ms' }} />
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-6 text-sm sm:text-base tracking-[0.35em] uppercase transition-all duration-700 mono ${phase >= 2
            ? 'opacity-40 translate-y-0 blur-0'
            : 'opacity-0 translate-y-4 blur-sm'
            }`}
          style={{ color: 'rgba(0, 212, 255, 0.5)' }}
        >
          Initializing System
        </p>

        {/* Animated dots */}
        <div className={`flex justify-center gap-2 mt-4 transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse-dot"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 scanline-overlay opacity-20" />

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes glitch-1 {
          0%, 92%, 100% { transform: translate(0); }
          93% { transform: translate(-2px, 1px); }
          95% { transform: translate(2px, -1px); }
          97% { transform: translate(-1px, -1px); }
        }
        @keyframes glitch-2 {
          0%, 90%, 100% { transform: translate(0); }
          91% { transform: translate(2px, -1px); }
          94% { transform: translate(-2px, 2px); }
          96% { transform: translate(1px, 1px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-glitch-1 {
          animation: glitch-1 4s ease-in-out infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-pulse-dot {
          animation: pulse-dot 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}