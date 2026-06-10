import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import EducationTimeline from '@/components/EducationTimeline';
import CompetitiveStats from '@/components/CompetitiveStats';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#08040F] text-[#F0E8FF] min-h-screen relative overflow-x-hidden"
      >
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-24 w-[44rem] h-[44rem] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.14),transparent_68%)] blur-3xl" />

          <div className="absolute bottom-[-10rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,210,0,0.08),transparent_68%)] blur-3xl" />

          <div className="absolute top-[28rem] right-[10%] w-[20rem] h-[20rem] rounded-full bg-[radial-gradient(circle,rgba(232,0,29,0.06),transparent_70%)] blur-3xl" />

          <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.035] bg-[linear-gradient(to_right,#b77fff_1px,transparent_1px),linear-gradient(to_bottom,#b77fff_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_2px,rgba(0,0,0,0.35)_3px,transparent_4px)]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* top hud line */}
        <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-transparent via-[#B77FFF] to-transparent opacity-70" />

        {/* Header */}
        <header className="fixed top-0 w-full z-50 border-b border-[#b77fff]/20 bg-[#08040F]/85 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between relative">
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="#"
                className="text-lg md:text-2xl font-black uppercase tracking-[0.08em] text-[#FFD700]"
                style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
              >
                PIYUSH//DEV
              </a>

              <div
                className="hidden sm:flex items-center gap-2 text-[10px] px-2 py-1 border border-[#b77fff]/40 text-[#B77FFF]"
                style={{ fontFamily: '"Share Tech Mono", monospace' }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B77FFF]" />
                ONLINE // BRISBANE
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-[#6A5A8A]">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative uppercase tracking-[0.12em] hover:text-[#FFD700] transition-colors group text-sm font-bold"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#B77FFF] to-[#FFD700] group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              <a
                href="/Piyush_Warule_Software_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-black font-extrabold uppercase tracking-[0.12em] bg-[#B77FFF] hover:bg-[#FFD700] transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
                style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
              >
                Resume
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-[#FFD700] border border-[#b77fff]/30 px-3 py-1.5 text-lg leading-none hover:bg-[#B77FFF]/10 transition"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full border-t border-[#b77fff]/20 bg-[#08040F]/95 backdrop-blur-xl">
                <div className="px-4 py-4 flex flex-col gap-4">
                  {navItems.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="uppercase tracking-[0.14em] text-[#6A5A8A] hover:text-[#FFD700] transition-colors text-sm font-bold"
                      style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="/Piyush_Warule_Software_Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="mt-1 inline-block px-4 py-2 text-center text-black font-extrabold uppercase tracking-[0.12em] bg-[#B77FFF] hover:bg-[#FFD700] transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
                    style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main */}
        <main className="pt-16 relative z-10">
          <HeroSection />
          <ProjectsSection />
          <CompetitiveStats />
          <TechMarquee />
          <EducationTimeline />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-[#b77fff]/20 relative z-10 bg-[#08040F]/70">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-[#B77FFF] text-sm uppercase tracking-[0.08em]"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              PIYUSH//DEV
            </p>
            <p
              className="text-[#6A5A8A] text-[11px] text-center md:text-left"
              style={{ fontFamily: '"Share Tech Mono", monospace' }}
            >
              © {new Date().getFullYear()} PIYUSH WARULE // ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;