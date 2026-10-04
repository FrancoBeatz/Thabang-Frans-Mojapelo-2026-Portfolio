import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

const SplashCursor: React.FC<{
  colorPalette?: string[];
}> = ({
  colorPalette = ['#f97316', '#fb923c', '#fdba74', '#38bdf8', '#ffffff'],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Disable on touch devices for maximum performance and battery efficiency
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    let mouse = { x: width / 2, y: height / 2, prevX: width / 2, prevY: height / 2, speed: 0 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const spawnParticles = (x: number, y: number, count: number, speedMultiplier = 1) => {
      for (let i = 0; i < count; i++) {
        if (particles.length > 80) {
          particles.shift();
        }
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 2 + 0.4) * speedMultiplier;
        const size = Math.random() * 2.5 + 1;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        const maxLife = Math.random() * 30 + 18;

        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed + (mouse.x - mouse.prevX) * 0.05,
          vy: Math.sin(angle) * speed + (mouse.y - mouse.prevY) * 0.05,
          size,
          color,
          alpha: 0.7,
          life: 0,
          maxLife,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - mouse.prevX;
      const dy = mouse.y - mouse.prevY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      mouse.speed = dist;

      if (dist > 4) {
        spawnParticles(mouse.x, mouse.y, Math.min(Math.floor(dist / 6), 3), Math.min(dist * 0.04, 1.8));
      }
    };

    const handleClick = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY, 12, 2.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.life++;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.7;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - p.life / p.maxLife * 0.3), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life >= particles[i].maxLife || particles[i].alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorPalette]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
};

export default SplashCursor;
