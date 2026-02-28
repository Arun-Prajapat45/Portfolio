"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot follows instantly
            dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
        };

        const animateRing = () => {
            // Ring follows with smooth lag
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
            requestAnimationFrame(animateRing);
        };

        const handleMouseDown = () => {
            ring.style.width = "32px";
            ring.style.height = "32px";
            ring.style.marginLeft = "4px";
            ring.style.marginTop = "4px";
        };

        const handleMouseUp = () => {
            ring.style.width = "40px";
            ring.style.height = "40px";
            ring.style.marginLeft = "0px";
            ring.style.marginTop = "0px";
        };

        const handleMouseEnterInteractive = () => {
            ring.style.width = "50px";
            ring.style.height = "50px";
            ring.style.marginLeft = "-5px";
            ring.style.marginTop = "-5px";
            ring.style.borderColor = "rgba(0, 212, 255, 0.4)";
            dot.style.opacity = "0.5";
        };

        const handleMouseLeaveInteractive = () => {
            ring.style.width = "40px";
            ring.style.height = "40px";
            ring.style.marginLeft = "0px";
            ring.style.marginTop = "0px";
            ring.style.borderColor = "rgba(255, 255, 255, 0.15)";
            dot.style.opacity = "1";
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Detect interactive elements for hover effect
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnterInteractive);
            el.addEventListener("mouseleave", handleMouseLeaveInteractive);
        });

        const animId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            cancelAnimationFrame(animId);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterInteractive);
                el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
            });
        };
    }, []);

    return (
        <>
            {/* Blue center dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #00d4ff 0%, #0090cc 100%)",
                    boxShadow: "0 0 8px rgba(0, 212, 255, 0.6), 0 0 20px rgba(0, 212, 255, 0.2)",
                    transition: "opacity 0.2s ease",
                }}
            />

            {/* White gradient ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255, 255, 255, 0.15)",
                    background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)",
                    transition: "width 0.25s ease, height 0.25s ease, margin 0.25s ease, border-color 0.25s ease",
                }}
            />

            <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
        @media (pointer: coarse) {
          .fixed.pointer-events-none {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
}
