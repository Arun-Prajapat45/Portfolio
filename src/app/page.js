'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/navbar";
import HeroCard from "../../components/hero";
import AboutPage from "../../components/about";
import ProjectsPage from "../../components/projects";
import CertificatesPage from "../../components/certificates";
import ExperiencesPage from "../../components/experience";
import ContactPage from "../../components/contact";
import SkillsPage from "../../components/skills";
import GBAnimation from "../../components/loader";
import Footer from '../../components/footer';
import CustomCursor from '../../components/cursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setShowMain(true);
      }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.15,
              filter: "blur(20px)",
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            className="fixed inset-0 z-50"
          >
            <GBAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            key="main-content"
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
          >
            <Navbar />
            <div id="home"><HeroCard /></div>
            <div id="about"><AboutPage /></div>
            <div id="skills"><SkillsPage /></div>
            <div id="projects"><ProjectsPage /></div>
            <div id="certificates"><CertificatesPage /></div>
            <div id="experiences"><ExperiencesPage /></div>
            <div id="contact"><ContactPage /></div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}