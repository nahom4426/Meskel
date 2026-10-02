import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer({ lang, theme }) {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative py-12 border-t text-center text-xs sm:text-sm transition-colors duration-400 ${isLight
          ? 'bg-amber-100/70 border-amber-300 text-amber-900'
          : 'bg-[#0a0d12] border-amber-500/20 text-stone-400'
        }`}
    >
      <div className="tibeb-divider mb-6" />

      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 text-xl font-bold">
          ☦️
        </div>

        <p className="font-bold text-base text-amber-950 dark:text-stone-300">
          {lang === 'am'
            ? 'መልካም የብርሃነ መስቀል በዓል ይሁንላችሁ! 🌼 © 2026'
            : 'Happy Meskel Festival to You & Your Loved Ones! 🌼 © 2026'}
        </p>

        <p className="text-amber-800 dark:text-stone-500 text-xs">
          {lang === 'am'
            ? 'ብርሃን ጨለማን ያሸንፋል ✦ ተስፋና ሰላም ለሀገራችን'
            : 'May Light Triumph Over Darkness ✦ Peace & Joy for All'}
        </p>

        <p className="text-xs font-medium text-amber-900/80 dark:text-amber-400/90 tracking-wider pt-2 border-t border-amber-500/20 px-4">
          {lang === 'am'
            ? 'በናሆም ኣ የተዘጋጀና የተገነባ ✦ Designed & Developed by Nahom A'
            : 'Designed & Developed by Nahom A'}
        </p>

        <button
          onClick={scrollToTop}
          className={`mt-4 p-2.5 rounded-full border transition-colors ${isLight
              ? 'bg-amber-200 border-amber-400 text-amber-950 hover:bg-amber-300'
              : 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10'
            }`}
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
