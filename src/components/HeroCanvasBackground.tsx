import React, { useEffect, useRef } from 'react';

interface Particle {
  angle: number;
  speed: number;
  radiusX: number;
  radiusY: number;
  orbitRatio: number;
  size: number;
  color: string;
  alpha: number;
  phase: number;
  eccentricity: number;
}

export const HeroCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let prefersReducedMotion = false;

    // Check media query for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = motionQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Mouse / Pointer state with smooth inertia (damping)
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      // Normalize offset from center between -1 and 1
      mouseTargetX = (x / width - 0.5) * 2;
      mouseTargetY = (y / height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      mouseTargetX = 0;
      mouseTargetY = 0;
    };

    container.addEventListener('mousemove', handlePointerMove, { passive: true });
    container.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('mouseleave', handlePointerLeave);

    // Resize handling with DPR clamped to 1.5 max for performance
    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 480);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    handleResize();

    // IntersectionObserver to auto-pause when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastTimestamp = performance.now();
          startLoop();
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Photonic Particles Initialization
    const colors = [
      { r: 0, g: 240, b: 255 },   // Cyan
      { r: 255, g: 0, b: 127 },   // Magenta
      { r: 255, g: 230, b: 0 },   // Yellow
      { r: 61, g: 90, b: 254 },   // Spectral Deep Blue
      { r: 255, g: 255, b: 255 }, // Crisp White
    ];

    const particles: Particle[] = [];
    const particleCount = 28;

    for (let i = 0; i < particleCount; i++) {
      const c = colors[i % colors.length];
      particles.push({
        angle: (i / particleCount) * Math.PI * 2 + Math.random(),
        speed: (0.00035 + Math.random() * 0.00045) * (i % 2 === 0 ? 1 : -1),
        radiusX: 0.28 + Math.random() * 0.38,
        radiusY: 0.22 + Math.random() * 0.32,
        orbitRatio: 1.5 + (i % 3) * 0.5,
        size: 1.2 + Math.random() * 1.6,
        color: `rgb(${c.r}, ${c.g}, ${c.b})`,
        alpha: 0.35 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        eccentricity: 0.15 + Math.random() * 0.25,
      });
    }

    // Strand curve definitions (Harmonic Lissajous & Caustic Wave Ribbons)
    const strands = [
      // Cyan primary caustic wave
      {
        freqX: 1.0,
        freqY: 2.0,
        speed: 0.00032,
        phaseOffset: 0.0,
        scaleX: 0.44,
        scaleY: 0.38,
        color: 'rgba(0, 240, 255, ',
        baseAlpha: 0.38,
        lineWidth: 1.4,
        steps: 120,
        harmonics: 3,
      },
      // Magenta harmonic ribbon
      {
        freqX: 2.0,
        freqY: 3.0,
        speed: -0.00028,
        phaseOffset: Math.PI * 0.35,
        scaleX: 0.48,
        scaleY: 0.34,
        color: 'rgba(255, 0, 127, ',
        baseAlpha: 0.32,
        lineWidth: 1.2,
        steps: 130,
        harmonics: 2,
      },
      // Spectral Blue wide halo
      {
        freqX: 3.0,
        freqY: 1.0,
        speed: 0.00024,
        phaseOffset: Math.PI * 0.75,
        scaleX: 0.52,
        scaleY: 0.42,
        color: 'rgba(61, 90, 254, ',
        baseAlpha: 0.45,
        lineWidth: 1.5,
        steps: 140,
        harmonics: 4,
      },
      // Yellow delicate high-resonance thread
      {
        freqX: 2.0,
        freqY: 5.0,
        speed: -0.0002,
        phaseOffset: Math.PI * 1.2,
        scaleX: 0.41,
        scaleY: 0.32,
        color: 'rgba(255, 230, 0, ',
        baseAlpha: 0.24,
        lineWidth: 1.0,
        steps: 150,
        harmonics: 2,
      },
      // White crisp laser filament
      {
        freqX: 1.0,
        freqY: 1.0,
        speed: 0.00036,
        phaseOffset: Math.PI * 1.6,
        scaleX: 0.46,
        scaleY: 0.36,
        color: 'rgba(255, 255, 255, ',
        baseAlpha: 0.35,
        lineWidth: 1.1,
        steps: 110,
        harmonics: 3,
      },
      // Secondary cyan harmonic
      {
        freqX: 3.0,
        freqY: 4.0,
        speed: 0.00022,
        phaseOffset: Math.PI * 0.5,
        scaleX: 0.50,
        scaleY: 0.40,
        color: 'rgba(0, 240, 255, ',
        baseAlpha: 0.28,
        lineWidth: 1.1,
        steps: 135,
        harmonics: 2,
      },
      // Spectral Royal Blue deep harmonic
      {
        freqX: 4.0,
        freqY: 3.0,
        speed: -0.00026,
        phaseOffset: Math.PI * 1.0,
        scaleX: 0.55,
        scaleY: 0.44,
        color: 'rgba(0, 160, 255, ',
        baseAlpha: 0.36,
        lineWidth: 1.3,
        steps: 140,
        harmonics: 3,
      },
    ];

    let lastTimestamp = performance.now();
    let time = 0;

    const render = (now: number) => {
      if (!isVisible) return;

      const dt = Math.min(now - lastTimestamp, 64);
      lastTimestamp = now;

      if (!prefersReducedMotion) {
        time += dt;
        // Smooth inertial interpolation of mouse focal center (lerp factor 0.05)
        mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.05;
        mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.05;
      }

      // 1. Solid clean dark blue background - NO fuzzy radial blur, NO white patches
      ctx.fillStyle = '#070D1F';
      ctx.fillRect(0, 0, width, height);

      // Central focal coordinates subtly shifted by mouse
      const focalOffsetX = mouseCurrentX * (width * 0.08);
      const focalOffsetY = mouseCurrentY * (height * 0.08);
      const centerX = width * 0.5 + focalOffsetX;
      const centerY = height * 0.46 + focalOffsetY;

      // Protected text shield ellipse dimensions
      const protectRadiusX = Math.min(width * 0.38, 420);
      const protectRadiusY = Math.min(height * 0.32, 260);

      // Set blend mode for crisp, additive line luminance
      ctx.globalCompositeOperation = 'screen';

      // 2. Draw harmonic caustic curves & Lissajous ribbon waves
      for (let s = 0; s < strands.length; s++) {
        const strand = strands[s];
        const t = time * strand.speed + strand.phaseOffset;
        const pts: Array<{ x: number; y: number; alphaMod: number }> = [];

        const rx = width * strand.scaleX;
        const ry = height * strand.scaleY;

        for (let i = 0; i <= strand.steps; i++) {
          const theta = (i / strand.steps) * Math.PI * 2;

          // Polar Harmonic & Lissajous formulation
          const harmonicWarp = Math.sin(theta * strand.harmonics + t * 2.5) * 0.12;
          const secondaryWarp = Math.cos(theta * (strand.harmonics + 1) - t * 1.8) * 0.08;
          const radialMod = 1.0 + harmonicWarp + secondaryWarp;

          const px = centerX + Math.cos(theta * strand.freqX + t) * rx * radialMod;
          const py = centerY + Math.sin(theta * strand.freqY + t * 1.2) * ry * radialMod;

          // Check distance to center for text zone protection
          const dx = (px - centerX) / protectRadiusX;
          const dy = (py - centerY) / protectRadiusY;
          const distNormSq = dx * dx + dy * dy;

          // Alpha fadeout when crossing the central protected text radius
          let alphaMod = 1.0;
          if (distNormSq < 1.0) {
            alphaMod = Math.max(0.08, Math.pow(distNormSq, 1.8));
          } else if (distNormSq > 2.5) {
            // Soft edge screen boundary fade
            alphaMod = Math.max(0.1, 1.0 - (distNormSq - 2.5) * 0.4);
          }

          pts.push({ x: px, y: py, alphaMod });
        }

        // Draw segmented strokes with modulated transparency for crisp rendering
        ctx.lineWidth = strand.lineWidth;
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const avgAlpha = ((p1.alphaMod + p2.alphaMod) * 0.5) * strand.baseAlpha;

          if (avgAlpha > 0.02) {
            ctx.strokeStyle = `${strand.color}${avgAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Tangential subtle ray spurs every few steps
            if (i % 18 === 0 && avgAlpha > 0.18) {
              const tx = (p2.y - p1.y) * 4.5;
              const ty = (p1.x - p2.x) * 4.5;
              ctx.strokeStyle = `${strand.color}${(avgAlpha * 0.45).toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p1.x + tx, p1.y + ty);
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw slow, organic orbital photonic particles
      for (let p = 0; p < particles.length; p++) {
        const pt = particles[p];
        if (!prefersReducedMotion) {
          pt.angle += pt.speed * dt;
        }

        const t = time * 0.0004 + pt.phase;
        const currentRx = width * pt.radiusX * (1 + Math.sin(t * 1.5) * pt.eccentricity);
        const currentRy = height * pt.radiusY * (1 + Math.cos(t * 1.2) * pt.eccentricity);

        const px = centerX + Math.cos(pt.angle * pt.orbitRatio) * currentRx;
        const py = centerY + Math.sin(pt.angle) * currentRy;

        // Central text protection check for particles
        const dx = (px - centerX) / protectRadiusX;
        const dy = (py - centerY) / protectRadiusY;
        const distNormSq = dx * dx + dy * dy;

        let alpha = pt.alpha;
        if (distNormSq < 1.0) {
          alpha *= Math.max(0.05, Math.pow(distNormSq, 1.5));
        }

        if (alpha > 0.05 && px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = alpha;

          // Crisp photonic particle node
          ctx.beginPath();
          ctx.arc(px, py, pt.size, 0, Math.PI * 2);
          ctx.fill();

          // Subtle tangential micro-tail
          const tailLen = pt.size * 3.5;
          const tailX = px - Math.sin(pt.angle) * tailLen * Math.sign(pt.speed);
          const tailY = py + Math.cos(pt.angle) * tailLen * Math.sign(pt.speed);

          ctx.strokeStyle = pt.color;
          ctx.globalAlpha = alpha * 0.4;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }

      // Restore standard composite mode
      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'source-over';

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const startLoop = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    startLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener('change', handleMotionChange);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-[#070D1F]"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
