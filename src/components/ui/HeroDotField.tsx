import {useEffect, useRef} from 'react';

const DOT_SPACING = 26;
const DOT_RADIUS = 2.6;
const OFF_COLOR = '229,229,229';
const ON_COLOR = '38,38,38';
const ACCENT_COLOR = '255,88,38';

export function HeroDotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / DOT_SPACING) + 1;
      rows = Math.ceil(height / DOT_SPACING) + 1;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = cols * 0.28;
      const cy = rows * 0.5;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_SPACING + DOT_SPACING / 2;
          const y = r * DOT_SPACING + DOT_SPACING / 2;

          const dx = c - cx;
          const dy = r - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const ripple = Math.sin(dist * 0.55 - t * 1.8);
          const sweep = Math.sin(c * 0.22 - t * 1.1 + Math.sin(r * 0.3) * 0.8);
          const energy = (ripple * 0.6 + sweep * 0.4 + 1) / 2;

          const falloff = Math.max(0, 1 - dist / (cols * 0.9));
          const level = Math.pow(energy, 2.2) * falloff;

          let color = OFF_COLOR;
          let alpha = 0.9;
          let radius = DOT_RADIUS;

          if (level > 0.5) {
            color = ACCENT_COLOR;
            alpha = 0.55 + (level - 0.5) * 1.6;
            radius = DOT_RADIUS * (1 + (level - 0.5) * 0.7);
          } else if (level > 0.22) {
            color = ON_COLOR;
            alpha = 0.22 + (level - 0.22) * 1.6;
          }

          ctx.beginPath();
          ctx.fillStyle = `rgba(${color},${Math.min(alpha, 0.95)})`;
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    let raf = 0;
    const loop = () => {
      frame += 1;
      draw(frame / 60);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      resize();
      if (reduced.matches) {
        draw(0);
      } else {
        loop();
      }
    };

    start();
    window.addEventListener('resize', start);
    reduced.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', start);
      reduced.removeEventListener('change', start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}
