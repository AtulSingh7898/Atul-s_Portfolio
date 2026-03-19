import { useEffect, useRef } from "react";

const services = [
  {
    id: "data-strategy",
    title: "Design-Backed Strategy",
    description:
      "We craft marketing plans built on real insights, not guesswork—so every move has purpose.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
        {/* Binoculars */}
        <ellipse cx="38" cy="72" rx="22" ry="26" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
        <ellipse cx="82" cy="72" rx="22" ry="26" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
        <rect x="52" y="62" width="16" height="10" rx="3" fill="#333" stroke="#444" strokeWidth="1.5"/>
        <ellipse cx="38" cy="72" rx="14" ry="18" fill="#1a1a1a"/>
        <ellipse cx="82" cy="72" rx="14" ry="18" fill="#1a1a1a"/>
        <ellipse cx="38" cy="72" rx="8" ry="10" fill="#111"/>
        <ellipse cx="82" cy="72" rx="8" ry="10" fill="#111"/>
        <ellipse cx="38" cy="72" rx="4" ry="5" fill="#0a0a0a"/>
        <ellipse cx="82" cy="72" rx="4" ry="5" fill="#0a0a0a"/>
        <path d="M55 50 Q60 42 65 50" stroke="#444" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    gridClass: "col-span-1 row-span-2",
    iconPos: "top-right",
    dark: true,
  },
  {
    id: "targeted",
    title: "Targeted Campaigns",
    description:
      "Reach the right audience at the right time with campaigns that convert across every platform.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none">
        {/* Target/Bullseye */}
        <circle cx="70" cy="55" r="40" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
        <circle cx="70" cy="55" r="30" fill="#222" stroke="#3a3a3a" strokeWidth="1.5"/>
        <circle cx="70" cy="55" r="20" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="1.5"/>
        <circle cx="70" cy="55" r="10" fill="#111"/>
        {/* Arrow */}
        <line x1="30" y1="20" x2="70" y2="55" stroke="#777" strokeWidth="4" strokeLinecap="round"/>
        <polygon points="70,55 58,48 64,62" fill="#888"/>
        <line x1="28" y1="18" x2="22" y2="12" stroke="#666" strokeWidth="3" strokeLinecap="round"/>
        <line x1="28" y1="18" x2="35" y2="14" stroke="#666" strokeWidth="3" strokeLinecap="round"/>
        <line x1="28" y1="18" x2="24" y2="25" stroke="#666" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    gridClass: "col-span-2 row-span-1",
    iconPos: "right",
    dark: false,
  },
  {
    id: "social",
    title: "Project With Team Management",
    description: "From content calendars to engagement boosts.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
        {/* People group */}
        <circle cx="60" cy="38" r="16" fill="#2a2a2a" stroke="#444" strokeWidth="1.5"/>
        <circle cx="60" cy="38" r="10" fill="#1a1a1a"/>
        <path d="M35 85 Q35 65 60 65 Q85 65 85 85" fill="#2a2a2a" stroke="#444" strokeWidth="1.5"/>
        <circle cx="30" cy="45" r="11" fill="#252525" stroke="#3a3a3a" strokeWidth="1.5"/>
        <path d="M12 82 Q12 66 30 66 Q42 66 46 74" fill="#252525" stroke="#3a3a3a" strokeWidth="1.5"/>
        <circle cx="90" cy="45" r="11" fill="#252525" stroke="#3a3a3a" strokeWidth="1.5"/>
        <path d="M108 82 Q108 66 90 66 Q78 66 74 74" fill="#252525" stroke="#3a3a3a" strokeWidth="1.5"/>
      </svg>
    ),
    gridClass: "col-span-1 row-span-1",
    dark: true,
  },
  {
    id: "seo",
    title: "Security & Authentication",
    description:
      "Boost visibility and authority with content that ranks, resonates, and delivers long-term value.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
        {/* Magnifying glass */}
        <circle cx="52" cy="52" r="30" fill="#2a2a2a" stroke="#444" strokeWidth="3"/>
        <circle cx="52" cy="52" r="22" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
        <circle cx="52" cy="52" r="14" fill="#111"/>
        <line x1="74" y1="74" x2="100" y2="100" stroke="#555" strokeWidth="8" strokeLinecap="round"/>
        <line x1="70" y1="70" x2="98" y2="98" stroke="#444" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    gridClass: "col-span-1 row-span-1",
    dark: false,
  },
  {
    id: "branding",
    title: "Creative User Interface",
    description:
      "Stand out with bold visuals, sharp messaging, and a brand identity that speaks your language.",
    icon: (
      <svg viewBox="0 0 160 120" className="w-36 h-28" fill="none">
        {/* Bell */}
        <ellipse cx="80" cy="105" rx="14" ry="6" fill="#1a1a1a"/>
        <circle cx="80" cy="112" r="8" fill="#2a2a2a" stroke="#444" strokeWidth="1.5"/>
        <path d="M80 20 C50 20 35 42 35 68 L35 88 Q35 94 42 94 L118 94 Q125 94 125 88 L125 68 C125 42 110 20 80 20Z" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
        <path d="M80 20 C55 20 42 40 42 66 L42 86 L118 86 L118 66 C118 40 105 20 80 20Z" fill="#1e1e1e"/>
        <ellipse cx="80" cy="20" rx="12" ry="6" fill="#2a2a2a" stroke="#444" strokeWidth="1.5"/>
        <circle cx="80" cy="20" r="5" fill="#333"/>
      </svg>
    ),
    gridClass: "col-span-2 row-span-1",
    iconPos: "center",
    dark: false,
  },
  {
    id: "analytics",
    title: "Performance Opimization",
    description:
      "Track results in real-time and adapt fast—because great marketing never stands still.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
        {/* Pie chart */}
        <circle cx="60" cy="65" r="38" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
        <path d="M60 65 L60 27 A38 38 0 0 1 96 78 Z" fill="#444"/>
        <path d="M60 65 L96 78 A38 38 0 0 1 30 90 Z" fill="#333"/>
        <path d="M60 65 L30 90 A38 38 0 0 1 60 27 Z" fill="#1a1a1a"/>
        <circle cx="60" cy="65" r="10" fill="#111"/>
      </svg>
    ),
    gridClass: "col-span-1 row-span-1",
    dark: true,
  },
];

export default function MarketingServices() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black py-16 px-4 font-sans">
      {/* Title Section */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
          About Services
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          From strategy to execution, our services are built to elevate your design, engage
          your audience, and drive measurable growth.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">

        {/* Card 1 — Data-Backed Strategy (tall left) */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-[#111111] rounded-2xl p-7 flex flex-col justify-between sm:row-span-2 overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            minHeight: "320px",
          }}
        >
          <div className="flex justify-center items-center flex-1 py-4">
            {services[0].icon}
          </div>
          <div className="mt-auto">
            <h2 className="text-white text-2xl font-bold mb-2">{services[0].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{services[0].description}</p>
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

        {/* Card 2 — Targeted Campaigns (wide top right) */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-[#2e2e2e] rounded-2xl p-7 flex flex-row items-center justify-between sm:col-span-2 overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            minHeight: "160px",
          }}
        >
          <div className="flex-1">
            <h2 className="text-white text-2xl font-bold mb-2">{services[1].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{services[1].description}</p>
          </div>
          <div className="ml-4 flex-shrink-0">{services[1].icon}</div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

        {/* Card 3 — Social Media Management */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="bg-[#252525] rounded-2xl p-7 flex flex-col justify-between overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            minHeight: "200px",
          }}
        >
          <div>
            <h2 className="text-white text-xl font-bold mb-2">{services[2].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{services[2].description}</p>
          </div>
          <div className="flex justify-end mt-3">{services[2].icon}</div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

        {/* Card 4 — SEO & Content Marketing */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="bg-[#2e2e2e] rounded-2xl p-7 flex flex-col justify-between overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            minHeight: "200px",
          }}
        >
          <div>
            <h2 className="text-white text-xl font-bold mb-2">{services[3].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{services[3].description}</p>
          </div>
          <div className="flex justify-end mt-3">{services[3].icon}</div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

        {/* Card 5 — Creative Branding (wide bottom left) */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="bg-[#2e2e2e] rounded-2xl p-7 flex flex-row items-center justify-between sm:col-span-2 overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            minHeight: "180px",
          }}
        >
          <div className="flex-1">
            <h2 className="text-white text-2xl font-bold mb-2">{services[4].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{services[4].description}</p>
          </div>
          <div className="ml-4 flex-shrink-0">{services[4].icon}</div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

        {/* Card 6 — Performance Analytics */}
        <div
          ref={(el) => (cardsRef.current[5] = el)}
          className="bg-[#252525] rounded-2xl p-7 flex flex-col justify-between overflow-hidden relative group"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            minHeight: "200px",
          }}
        >
          <div>
            <h2 className="text-white text-xl font-bold mb-2">{services[5].title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{services[5].description}</p>
          </div>
          <div className="flex justify-end mt-3">{services[5].icon}</div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-white/10" />
        </div>

      </div>
    </div>
  );
}