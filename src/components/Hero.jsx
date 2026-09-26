import React, { useEffect, useRef } from 'react';
import { Flame, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero({ lang, theme, onLightDemeraClick }) {
  const canvasRef = useRef(null);
  const isLight = theme === 'light';

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
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 3 + 1,
        speedY: -(Math.random() * 1.5 + 0.5),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.7 + 0.3,
        color: isLight
          ? ['#d97706', '#f59e0b', '#ea580c', '#ca8a04', '#b45309'][Math.floor(Math.random() * 5)]
          : ['#fbbf24', '#f59e0b', '#f97316', '#ef4444', '#fcd34d'][Math.floor(Math.random() * 5)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.4;
        p.opacity = Math.max(0, p.opacity - 0.002);

        if (p.y < -20 || p.opacity <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 20;
          p.opacity = Math.random() * 0.7 + 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme, isLight]);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-400 ${
        isLight
          ? 'bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fffde7]'
          : 'bg-gradient-to-b from-[#0d1117] via-[#1a1309] to-[#0d1117]'
      }`}
    >
      {/* Background Canvas for Embers */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Decorative Radial Glows */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
          isLight ? 'bg-amber-300/30' : 'bg-amber-500/10'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animated Ethiopian Cross Emblem */}
        <div className="relative w-40 h-40 mx-auto mb-8 animate-float">
          {/* Dashed Daisy Spinning Ring */}
          <div
            className={`absolute -inset-4 border-2 border-dashed rounded-full animate-spin-slow pointer-events-none ${
              isLight ? 'border-amber-600/40' : 'border-amber-400/40'
            }`}
          />

          {/* SVG Cross */}
          <div className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="heroCrossGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isLight ? '#f59e0b' : '#fef08a'} />
                  <stop offset="50%" stopColor={isLight ? '#d97706' : '#f59e0b'} />
                  <stop offset="100%" stopColor={isLight ? '#92400e' : '#b45309'} />
                </linearGradient>
              </defs>
              <rect x="85" y="20" width="30" height="160" rx="6" fill="url(#heroCrossGrad)" />
              <rect x="35" y="70" width="130" height="30" rx="6" fill="url(#heroCrossGrad)" />
              <circle cx="100" cy="20" r="10" fill={isLight ? '#fbbf24' : '#fef08a'} />
              <circle cx="100" cy="180" r="10" fill={isLight ? '#fbbf24' : '#fef08a'} />
              <circle cx="35" cy="85" r="10" fill={isLight ? '#fbbf24' : '#fef08a'} />
              <circle cx="165" cy="85" r="10" fill={isLight ? '#fbbf24' : '#fef08a'} />
              <rect
                x="88"
                y="73"
                width="24"
                height="24"
                rx="4"
                fill={isLight ? '#fffde7' : '#0d1117'}
                stroke="#d97706"
                strokeWidth="2.5"
                transform="rotate(45 100 85)"
              />
              <circle cx="60" cy="45" r="4" fill="#f59e0b" />
              <circle cx="140" cy="45" r="4" fill="#f59e0b" />
              <circle cx="60" cy="125" r="4" fill="#f59e0b" />
              <circle cx="140" cy="125" r="4" fill="#f59e0b" />
            </svg>
          </div>
        </div>

        {/* Adey Abeba Tagline */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 border ${
            isLight
              ? 'bg-amber-200/80 border-amber-400 text-amber-950 shadow-sm'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-300 shadow-inner'
          }`}
        >
          <span>🌼</span>
          <span>
            {lang === 'am' ? 'መስከረም — የአደይ አበባና የብርሃን ወቅት' : 'September — Season of Adey Abeba Flowers'}
          </span>
          <span>🌼</span>
        </div>

        {/* Main Title */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 ${
            isLight ? 'text-amber-950' : 'text-gradient-gold'
          }`}
        >
          {lang === 'am' ? (
            <>
              እንኳን ለብርሃነ መስቀሉ <br className="hidden sm:inline" />
              በሰላምና በጤና አደረሳችሁ!
            </>
          ) : (
            <>
              Happy Meskel Festival! <br className="hidden sm:inline" />
              Wishing You Light & Blessings
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4 font-medium ${
            isLight ? 'text-amber-900/90' : 'text-stone-300'
          }`}
        >
          {lang === 'am'
            ? 'የመስቀል በዓል ሰላም፣ ፍቅርና ተስፋ ለሁላችንም ያምጣልን። ከወዳጅ ዘመድ ጋር በደስታ ለማክበር ዘንድ ተባርከዋል!'
            : 'Celebrate the ancient Feast of the Finding of the True Cross. May the radiant light of the Demera fill your home with joy and prosperity.'}
        </p>

        {/* Tigrinya Blessing */}
        <p className={`text-sm sm:text-base font-bold italic mb-8 ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
          ርሑስ በዓል መስቀል ይግበረልና! 🙏
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demera"
            onClick={onLightDemeraClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_4px_25px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_35px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Flame className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span className="text-base tracking-wide">
              {lang === 'am' ? 'ችቦ አብራ (ደመራ)' : 'Light the Virtual Demera'}
            </span>
            <Sparkles className="w-4 h-4 text-slate-950" />
          </a>
        </div>

        {/* Scroll Down Hint */}
        <div
          className={`mt-16 flex flex-col items-center gap-1 text-xs animate-bounce font-medium ${
            isLight ? 'text-amber-800' : 'text-stone-500'
          }`}
        >
          <span>{lang === 'am' ? 'ወደ ታች ሸብልል' : 'Scroll to Explore'}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
