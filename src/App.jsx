import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemeraBonfire from './components/DemeraBonfire';
import MediaGallery from './components/MediaGallery';
import Celebrations from './components/Celebrations';
import Story from './components/Story';
import WishGenerator from './components/WishGenerator';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('am');
  const [theme, setTheme] = useState('light'); // Default LIGHT MODE as requested
  const [audioPlaying, setAudioPlaying] = useState(true); // Default SOUND ON as requested
  const audioCtxRef = useRef(null);

  // Sync body theme class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Begena Web Audio API Synthesizer
  const initAudio = () => {
    if (!audioCtxRef.current) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.18, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Deep string drone notes (A2, D3, E3, A3)
        const freqs = [110, 146.83, 164.81, 220];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(700 + idx * 100, ctx.currentTime);

          gain.gain.setValueAtTime(0.08 - idx * 0.015, ctx.currentTime);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);
          osc.start();
        });
      } catch (err) {
        console.log('Audio init warning:', err);
      }
    } else if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Auto start sound on first user gesture
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioPlaying) {
        initAudio();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [audioPlaying]);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      initAudio();
      setAudioPlaying(true);
    } else if (audioPlaying) {
      audioCtxRef.current.suspend();
      setAudioPlaying(false);
    } else {
      audioCtxRef.current.resume();
      setAudioPlaying(true);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        audioPlaying={audioPlaying}
        toggleAudio={toggleAudio}
      />

      <main>
        <Hero
          lang={lang}
          theme={theme}
          onLightDemeraClick={() => {
            const el = document.getElementById('demera');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <DemeraBonfire lang={lang} theme={theme} />

        <MediaGallery lang={lang} theme={theme} />

        <Celebrations lang={lang} theme={theme} />

        <Story lang={lang} theme={theme} />

        <WishGenerator lang={lang} theme={theme} />
      </main>

      <Footer lang={lang} theme={theme} />
    </div>
  );
}
