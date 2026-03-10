import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- Navigation --- */}
      <nav className="relative z-50 flex justify-between items-center px-10 py-8">
        <div className="text-xl font-medium tracking-tight">Milar Strock</div>
        
        <div className="absolute left-1/2 -translate-x-1/2 text-center hidden md:block">
          <p className="text-xs uppercase tracking-widest text-gray-400">Currently UI/UX Designer</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">at Ortrix Studio</p>
        </div>

        <ul className="flex gap-8 text-sm font-light text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Works</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Service</li>
        </ul>
      </nav>

      {/* --- Main Hero Section --- */}
      <main className="relative flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Background Text Layer (Behind Image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] font-black leading-none text-gray-800 opacity-40 uppercase tracking-tighter mb-[-2vw]">
              I'M A UI/UX
            </h2>
            <h1 className="text-[18vw] font-black leading-none uppercase tracking-tighter text-transparent" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
              DESIGNER
            </h1>
        </div>

        {/* The Image (The "Cutout") */}
        <div className="relative z-20 w-full max-w-4xl mt-auto">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
            alt="Designer Portrait" 
            className="w-full h-auto object-cover contrast-110 grayscale-[20%]"
          />
        </div>

        {/* Foreground Text Layer (Over Image) */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
             <div className="mt-[5vw] flex flex-col items-center">
                {/* This mimics the "DESI GNER" split around the person */}
                <h1 className="text-[18vw] font-black leading-none uppercase tracking-tighter flex gap-[20vw]">
                    <span className="text-white">DESI</span>
                    <span className="text-white">GNER</span>
                </h1>
             </div>
        </div>
      </main>

      {/* --- Footer Elements --- */}
      <div className="absolute bottom-10 left-10 z-50 max-w-xs">
        <p className="text-sm leading-relaxed text-gray-400 font-light">
          Specialized in web design, <br />
          UX/UI webflow, and front <br />
          end Development.
        </p>
      </div>

      <div className="absolute bottom-10 right-10 z-50 flex items-center gap-1">
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-200 transition">
          Let's chat
        </button>
        <div className="bg-yellow-400 p-4 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;