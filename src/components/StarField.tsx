import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  isCross: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  color: string;
}

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStar: ShootingStar | null = null;
    let nextShootingStarTime = Date.now() + 4000;

    const STAR_COLORS = [
      '#ffffff', // Pure white
      '#e2e8f0', // Crisp silver
      '#38bdf8', // Neon cyan
      '#00f0ff', // AWS blue
      '#c084fc', // Neon purple
      '#fde68a', // Starlight gold
      '#f472b6', // Cosmic pink
    ];

    const initStars = (w: number, h: number) => {
      // Scale star count reasonably based on screen area (around 150-200 stars on standard screens)
      const count = Math.min(220, Math.max(100, Math.floor((w * h) / 7500)));
      const newStars: Star[] = [];

      for (let i = 0; i < count; i++) {
        const isCross = Math.random() < 0.08; // ~8% prominent cross-twinkle stars
        const radius = isCross
          ? 1.5 + Math.random() * 0.9
          : 0.6 + Math.random() * 1.2;

        const colorIndex = Math.random() < 0.6
          ? 0 // mostly white/silver
          : Math.floor(Math.random() * STAR_COLORS.length);

        newStars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius,
          color: STAR_COLORS[colorIndex],
          baseAlpha: 0.25 + Math.random() * 0.6,
          twinkleSpeed: 0.015 + Math.random() * 0.035,
          phase: Math.random() * Math.PI * 2,
          isCross,
        });
      }

      stars = newStars;
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      initStars(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const spawnShootingStar = () => {
      // Pick start in upper portion of viewport
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * (height * 0.45);
      const angle = (Math.PI / 180) * (30 + Math.random() * 25); // 30-55 deg diagonal
      const colors = ['#00F0FF', '#FFFFFF', '#A855F7'];

      shootingStar = {
        x: startX,
        y: startY,
        length: 70 + Math.random() * 60,
        speed: 9 + Math.random() * 6,
        angle,
        opacity: 1,
        active: true,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      // Next meteor in 6 to 12 seconds
      nextShootingStarTime = Date.now() + 6000 + Math.random() * 6000;
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Render all background stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.phase += star.twinkleSpeed;
        const currentAlpha = Math.max(
          0.1,
          Math.min(1, star.baseAlpha + Math.sin(star.phase) * 0.35)
        );

        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = star.color;

        // Draw primary star circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross sparkle for featured stars when bright
        if (star.isCross && currentAlpha > 0.6) {
          const crossLength = star.radius * 2.8;
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;

          // Horizontal flare
          ctx.beginPath();
          ctx.moveTo(star.x - crossLength, star.y);
          ctx.lineTo(star.x + crossLength, star.y);
          ctx.stroke();

          // Vertical flare
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - crossLength);
          ctx.lineTo(star.x, star.y + crossLength);
          ctx.stroke();

          // Tiny central radial glow
          const glowRadius = star.radius * 3.5;
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            glowRadius
          );
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Check shooting star trigger
      if (!shootingStar && Date.now() > nextShootingStarTime) {
        spawnShootingStar();
      }

      // Render shooting star
      if (shootingStar && shootingStar.active) {
        const vx = Math.cos(shootingStar.angle) * shootingStar.speed;
        const vy = Math.sin(shootingStar.angle) * shootingStar.speed;

        shootingStar.x += vx * (dt * 60);
        shootingStar.y += vy * (dt * 60);
        shootingStar.opacity -= 0.016 * (dt * 60);

        if (
          shootingStar.opacity <= 0 ||
          shootingStar.x > width + 100 ||
          shootingStar.y > height + 100
        ) {
          shootingStar = null;
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

          const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
          grad.addColorStop(0, 'transparent');
          grad.addColorStop(0.7, shootingStar.color);
          grad.addColorStop(1, '#ffffff');

          ctx.globalAlpha = Math.max(0, shootingStar.opacity);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.stroke();

          // Head point of the shooting star
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
