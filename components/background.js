"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    const PARTICLE_COUNT = 80;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight * 6;
    }

    class FloatingParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.12;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
        const colors = [
          "0, 212, 255",     // cyan accent
          "0, 212, 255",     // cyan (doubled)
          "99, 102, 241",    // indigo
          "0, 200, 255",     // lighter cyan
          "30, 60, 120",     // deep blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        const glowOpacity = this.opacity * (0.3 + 0.7 * Math.sin(this.pulse));

        // Soft outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${glowOpacity * 0.04})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${glowOpacity * 0.6})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new FloatingParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base background with grid */}
        <div className="absolute inset-0 bg-[#050510] cyber-grid-bg" />

        {/* Radial glow spots */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/[0.03] blur-[150px]" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-[#6366f1]/[0.04] blur-[130px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#00d4ff]/[0.02] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1e3a5f]/[0.05] blur-[100px]" />

        {/* Border lines at edges */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-[#00d4ff]/10" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-[#00d4ff]/10 via-transparent to-[#00d4ff]/10" />

        {/* Floating particles canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Scanline overlay  */}
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>
    </>
  );
}