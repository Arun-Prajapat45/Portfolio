import { useState, useEffect } from "react";

const links = [
  { name: "Home", to: "home" },
  { name: "Work", to: "projects" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const allSections = ["home", "projects", "about", "skills", "certificates", "experiences", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      setScrolled(window.scrollY > 50);

      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(allSections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          // Map certificates/experiences to nearest nav link
          const sectionId = allSections[i];
          if (sectionId === "certificates" || sectionId === "experiences") {
            setActiveSection("about");
          } else {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Floating Pill Navbar */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "top-4" : "top-6"
          }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex floating-nav px-2 py-2 gap-1">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.to)}
              className={`px-5 py-2 text-sm font-medium cursor-pointer transition-all duration-300 mono tracking-wide ${activeSection === link.to
                ? "nav-pill-active"
                : "text-white/50 hover:text-white/80 rounded-full"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden floating-nav px-4 py-3 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[#00d4ff] transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#00d4ff] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#00d4ff] transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#050510]/95 backdrop-blur-xl border-l border-[#00d4ff]/10 z-50 md:hidden transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white/60 hover:text-[#00d4ff] transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col pt-20 px-6 space-y-2">
          {/* Protocol status */}
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/10">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] pulse-dot" />
            <span className="mono text-xs text-[#00d4ff]/70 tracking-wider">SYSTEM ONLINE</span>
          </div>

          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.to)}
              className={`text-left font-medium text-lg cursor-pointer transition-all duration-300 py-3 px-3 rounded-lg mono tracking-wide ${activeSection === link.to
                ? "text-[#00d4ff] bg-[#00d4ff]/10 border-l-2 border-[#00d4ff]"
                : "text-white/50 hover:text-white/80 hover:bg-white/[0.02]"
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="border-t border-white/[0.06] pt-4">
            <p className="text-white/20 text-xs mono text-center tracking-widest">
              © ARUN PRAJAPAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
