import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sun, Moon, Sparkles, Flame } from 'lucide-react';

export default function Navbar({ lang, setLang, theme, toggleTheme, audioPlaying, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? 'bg-amber-50/95 backdrop-blur-md border-b border-amber-300/40 py-3 shadow-md'
            : 'bg-[#0d1117]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform ${
              isLight
                ? 'bg-amber-100 border-amber-400 text-amber-800 shadow-sm'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            ☦️
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-gradient-gold tracking-wide">
              {lang === 'am' ? 'መስቀል' : 'Meskel'}
            </span>
            <span className="text-[10px] text-amber-700 dark:text-amber-400/80 tracking-wider uppercase font-semibold">
              {lang === 'am' ? 'የብርሃንና የተስፋ በዓል' : 'Festival of Light'}
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center text-xs font-bold gap-1.5 ${
              isLight
                ? 'bg-amber-200/80 border-amber-400 text-amber-950 hover:bg-amber-300 shadow-sm'
                : 'bg-white/10 border-white/20 text-amber-300 hover:bg-white/20'
            }`}
            title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLight ? (
              <>
                <Sun className="w-4 h-4 text-amber-700 fill-amber-500" />
                <span className="hidden md:inline">{lang === 'am' ? 'ቀን' : 'Light'}</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span className="hidden md:inline">{lang === 'am' ? 'ምሽት' : 'Dark'}</span>
              </>
            )}
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center gap-1.5 text-xs font-bold ${
              audioPlaying
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse'
                : 'bg-stone-200/80 dark:bg-white/5 border-stone-300 dark:border-white/10 text-stone-700 dark:text-stone-300'
            }`}
            title={audioPlaying ? 'Mute Begena Ambience' : 'Play Begena Ambience'}
          >
            {audioPlaying ? (
              <Volume2 className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {audioPlaying
                ? lang === 'am'
                  ? 'በገና ድምፅ (በሥራ ላይ)'
                  : 'Begena Sound ON'
                : lang === 'am'
                ? 'በገና አስጀምር'
                : 'Begena OFF'}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex p-1 rounded-full bg-amber-100 dark:bg-white/5 border border-amber-300 dark:border-amber-500/20 backdrop-blur-md">
            <button
              onClick={() => setLang('am')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'am'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300'
              }`}
            >
              አማርኛ
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
