"use client";

import { useEffect, useRef } from "react";

export default function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      opacitySpeed: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    // Initialize particles
    const particleCount = 160;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.2 + 0.4, // varied sizes
        speedY: -(Math.random() * 0.75 + 0.25), // increased vertical speed
        speedX: (Math.random() - 0.5) * 0.3,   // increased horizontal drift
        opacity: Math.random() * 0.75 + 0.25,
        opacitySpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.opacitySpeed;

        if (p.opacity <= 0.15 || p.opacity >= 0.85) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        // Wrap around vertically using explicit window sizes
        if (p.y < -10) {
          p.y = window.innerHeight + 10;
          p.x = Math.random() * window.innerWidth;
        }
        // Wrap around horizontally
        if (p.x < -10) {
          p.x = window.innerWidth + 10;
        } else if (p.x > window.innerWidth + 10) {
          p.x = -10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Highlight/glow only larger particles to conserve CPU performance
        if (p.size > 1.8) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#D4AF37";
        }
        
        ctx.fillStyle = `rgba(197, 168, 128, ${Math.max(0, Math.min(1, p.opacity)) * 0.4})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-screen h-screen"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
