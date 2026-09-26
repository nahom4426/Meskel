import React, { useState, useEffect, useRef } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DemeraBonfire({ lang, theme, onLitChange }) {
  const [isLit, setIsLit] = useState(false);
  const canvasRef = useRef(null);
  const isLight = theme === 'light';

  const triggerPetalConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#d97706', '#ea580c', '#ffffff'],
      scalar: 1.2,
    });
  };

  const handleLightDemera = () => {
    if (!isLit) {
      setIsLit(true);
      triggerPetalConfetti();
      if (onLitChange) onLitChange(true);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const embers = [];

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const baseY = h * 0.72;

      ctx.clearRect(0, 0, w, h);

      // Radial bonfire light glow
      if (isLit) {
        const glow = ctx.createRadialGradient(cx, baseY - 30, 20, cx, baseY - 30, 220);
        glow.addColorStop(0, 'rgba(245, 158, 11, 0.3)');
        glow.addColorStop(0.5, 'rgba(234, 88, 12, 0.15)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw Logs Pyramid Stack
      const layers = 6;
      for (let layer = 0; layer < layers; layer++) {
        const layerY = baseY - layer * 20;
        const logsInLayer = layers - layer;
        const layerWidth = (logsInLayer / layers) * (w * 0.45);

        for (let i = 0; i < logsInLayer; i++) {
          const x = cx - layerWidth / 2 + (i * layerWidth) / Math.max(logsInLayer - 1, 1);
          ctx.save();
          ctx.translate(x, layerY);

          ctx.beginPath();
          ctx.roundRect(-20, -5, 40, 10, 3);
          ctx.fillStyle = isLit ? '#3a2515' : isLight ? '#6b472b' : '#4a3322';
          ctx.fill();
          ctx.strokeStyle = '#1e130a';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(18, 0, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#8c5a32';
          ctx.fill();

          ctx.restore();
        }
      }

      // Unlit Flower decoration on top
      if (!isLit) {
        for (let i = 0; i < 6; i++) {
          const fx = cx + (i - 2.5) * 15;
          const fy = baseY - layers * 20 - 5;
          ctx.beginPath();
          ctx.arc(fx, fy, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.fill();
        }
      }

      // Fire Particles Simulation
      if (isLit) {
        if (particles.length < 90) {
          particles.push({
            x: cx + (Math.random() - 0.5) * 70,
            y: baseY - 20,
            radius: Math.random() * 8 + 3,
            speedY: -(Math.random() * 3.5 + 1.5),
            speedX: (Math.random() - 0.5) * 1.5,
            life: 0,
            maxLife: Math.random() * 50 + 30,
            hue: Math.random() * 35 + 15,
          });
        }

        if (embers.length < 40) {
          embers.push({
            x: cx + (Math.random() - 0.5) * 50,
            y: baseY - 40,
            radius: Math.random() * 2 + 0.8,
            speedY: -(Math.random() * 2 + 1),
            speedX: (Math.random() - 0.5) * 2,
            opacity: 1,
            life: 0,
            maxLife: Math.random() * 100 + 60,
          });
        }

        particles.forEach((p, idx) => {
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.life * 0.1) * 0.4;
          p.radius *= 0.97;
          p.life++;

          if (p.life > p.maxLife || p.radius < 0.5) {
            particles.splice(idx, 1);
            return;
          }

          const alpha = 1 - p.life / p.maxLife;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, ${alpha})`;
          ctx.shadowBlur = 18;
          ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, 0.5)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        embers.forEach((e, idx) => {
          e.y += e.speedY;
          e.x += e.speedX + Math.sin(e.life * 0.05) * 0.6;
          e.life++;
          e.opacity = Math.max(0, 1 - e.life / e.maxLife);

          if (e.life > e.maxLife || e.opacity <= 0) {
            embers.splice(idx, 1);
            return;
          }

          ctx.beginPath();
          ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#fbbf24';
          ctx.globalAlpha = e.opacity;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#f59e0b';
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.shadowBlur = 0;
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isLit, isLight]);

  return (
    <section
      id="demera"
      className={`relative py-20 transition-colors duration-400 ${
        isLight ? 'bg-amber-100/60' : 'bg-gradient-to-b from-[#0d1117] via-[#16140e] to-[#0d1117]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
            isLight
              ? 'bg-amber-200 border-amber-400 text-amber-950'
              : 'bg-orange-500/10 border-orange-500/20 text-orange-400'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>{lang === 'am' ? 'የደመራ ማብራት ሥነ-ሥርዓት' : 'Demera Bonfire Lighting'}</span>
        </div>

        <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-flame'}`}>
          {lang === 'am' ? '🔥 ችቦዎን አብርተው ደመራውን ያንድዱ' : '🔥 Light Your Torch & Ignite the Demera'}
        </h2>

        <p className={`text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed ${isLight ? 'text-amber-900/90' : 'text-stone-300'}`}>
          {lang === 'am'
            ? 'በችቦዎ ደመራውን በማብራት የብርሃንና የተስፋ በረከት ተካፋይ ይሁኑ። ብርሃን ጨለማን ድል ያድርግ!'
            : 'Click the button below to light your virtual Chibo torch and set the sacred Demera bonfire ablaze.'}
        </p>

        {/* Canvas Display Stage */}
        <div
          className={`relative w-full max-w-md h-80 mx-auto rounded-3xl border shadow-2xl overflow-hidden flex flex-col items-center justify-end p-6 ${
            isLight
              ? 'bg-gradient-to-b from-amber-200/90 to-amber-950 border-amber-400/50'
              : 'bg-gradient-to-b from-stone-900/80 to-black border-amber-500/20'
          }`}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Action Button */}
          <div className="relative z-20 mb-4">
            <button
              onClick={handleLightDemera}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 ${
                isLit
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-105'
                  : 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-slate-950 shadow-[0_0_25px_rgba(234,88,12,0.4)] hover:scale-105 active:scale-95 animate-pulse'
              }`}
            >
              <Flame className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>
                {isLit
                  ? lang === 'am'
                    ? '🔥 ደመራው ተለኮሰ!'
                    : '🔥 The Demera is Ablaze!'
                  : lang === 'am'
                  ? '🕯️ ችቦ አብራ (ደመራ ማንድድ)'
                  : '🕯️ Light Chibo Torch'}
              </span>
              <Sparkles className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Status Note */}
          <p className="relative z-20 text-xs text-amber-200 font-semibold shadow-sm">
            {isLit
              ? lang === 'am'
                ? '✨ መልካም የመስቀል በዓል! ብርሃን ይብራላችሁ!'
                : '✨ Blessed Meskel! May your days be illuminated!'
              : lang === 'am'
              ? 'ለመጀመር ችቦውን ይጫኑ'
              : 'Press the torch button to light the bonfire'}
          </p>
        </div>
      </div>
    </section>
  );
}
