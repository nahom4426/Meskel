import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles } from 'lucide-react';

export default function WishGenerator({ lang, theme }) {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [blessingType, setBlessingType] = useState('peace');
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const isLight = theme === 'light';

  const blessingOptions = {
    peace: {
      am: 'የሰላም አምላክ ለእርስዎና ለቤተሰብዎ ዘላቂ ሰላምና ፀጥታ ይስጥልኝ። የመስቀሉ ብርሃን ጨለማውን ያብራልዎ! ✝️🕊️',
      en: 'May the God of peace grant you and your family everlasting tranquility. May the light of the Cross illuminate your path! ✝️🕊️',
      labelAm: '☮️ ሰላምና ፀጥታ',
      labelEn: '☮️ Peace & Harmony',
    },
    health: {
      am: 'ጤና፣ ብርታትና ረጅም ዕድሜ ይስጥዎት! በመስቀል በዓል የጤናና የእድገት በረከት ይድረስልዎ! 💪🌿',
      en: 'Wishing you divine health, strength, and longevity! May this Meskel bring abundant well-being to your life! 💪🌿',
      labelAm: '💪 ጤናና ብርታት',
      labelEn: '💪 Health & Strength',
    },
    prosperity: {
      am: 'በብልፅግናና በበረከት ያድርግልኝ! መስቀል ከነገ የተሻለ ተስፋና ስኬት ይስጥዎት! 💰✨',
      en: 'May you prosper in abundance and blessings! May this Meskel unlock hope, success, and open doors for you! 💰✨',
      labelAm: '💰 ብልፅግናና ስኬት',
      labelEn: '💰 Prosperity & Success',
    },
    family: {
      am: 'ቤተሰብዎን በአንድነትና በፍቅር ያድርግ! በመስቀል በዓል ከወዳጅ ዘመድ ጋር በደስታ ይገናኙ! 👨‍👩‍👧‍👦❤️',
      en: 'May your family be united in joyful reunion! Wishing you warm memories with your loved ones this Meskel! 👨‍👩‍👧‍👦❤️',
      labelAm: '👨‍👩‍👧‍👦 የቤተሰብ ፍቅር',
      labelEn: '👨‍👩‍👧‍👦 Family Reunion',
    },
    love: {
      am: 'ፍቅርና መከባበር ይብዛልዎት! የመስቀሉ ብርሃን ልብዎን በደስታና በፍቅር ይሙላ! ❤️🌹',
      en: 'May love and mutual respect flourish in your home! Let the light of the Cross fill your heart with joy! ❤️🌹',
      labelAm: '❤️ ፍቅርና ደስታ',
      labelEn: '❤️ Love & Joy',
    },
  };

  const selectedBlessing = blessingOptions[blessingType];

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!sender.trim() || !recipient.trim()) return;
    setGenerated(true);
  };

  const getShareText = () => {
    const greeting =
      lang === 'am'
        ? 'እንኳን ለብርሃነ መስቀሉ በሰላምና በጤና አደረሳችሁ!'
        : 'Happy Meskel! Wishing you a blessed Feast of the Finding of the True Cross!';
    const fromTo =
      lang === 'am'
        ? `ከ ${sender} ለ ${recipient} 🌼`
        : `From ${sender} to ${recipient} 🌼`;
    const message = selectedBlessing[lang === 'am' ? 'am' : 'en'];

    return `☦️ ${greeting}\n\n${message}\n\n${fromTo}\n\n✨ ${window.location.origin}`;
  };

  const shareTelegram = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="wish"
      className={`py-20 transition-colors duration-400 ${
        isLight ? 'bg-amber-50' : 'bg-[#0d1117]'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
              isLight
                ? 'bg-amber-200 border-amber-400 text-amber-950'
                : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'የምርቃት ካርድ ማዘጋጃ' : 'Wish Generator'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-gold'}`}>
            {lang === 'am' ? '💌 ለወዳጅ ዘመድዎ ምርቃት ይላኩ' : '💌 Send a Personal Blessing to Friends'}
          </h2>

          <p className={`text-sm sm:text-base max-w-lg mx-auto ${isLight ? 'text-amber-900/80' : 'text-stone-400'}`}>
            {lang === 'am'
              ? 'ስምዎትንና የወዳጅዎን ስም በማስገባት በቴሌግራም ወይም ዋትስአፕ በደስታ ያጋሩ'
              : 'Enter names to craft a beautiful greeting card and instantly share on Telegram or WhatsApp'}
          </p>
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleGenerate}
          className={`p-6 sm:p-8 rounded-3xl border space-y-5 shadow-2xl backdrop-blur-md mb-8 ${
            isLight
              ? 'bg-white border-amber-200 shadow-amber-950/5'
              : 'bg-stone-900/60 border-amber-500/20'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                {lang === 'am' ? 'ስምዎ (ላኪ)' : 'Your Name (Sender)'}
              </label>
              <input
                type="text"
                required
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder={lang === 'am' ? 'ምሳሌ፡ አበበ' : 'e.g. Abebe'}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isLight
                    ? 'bg-amber-50/50 border-amber-300 text-stone-900 focus:border-amber-500'
                    : 'bg-white/5 border-white/10 text-stone-100 focus:border-amber-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                {lang === 'am' ? 'የወዳጅዎ ስም (ተቀባይ)' : "Friend's Name (Recipient)"}
              </label>
              <input
                type="text"
                required
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={lang === 'am' ? 'ምሳሌ፡ ትዕግስት' : 'e.g. Tigist'}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isLight
                    ? 'bg-amber-50/50 border-amber-300 text-stone-900 focus:border-amber-500'
                    : 'bg-white/5 border-white/10 text-stone-100 focus:border-amber-400'
                }`}
              />
            </div>
          </div>

          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {lang === 'am' ? 'የምርቃት ዓይነት' : 'Select Blessing Theme'}
            </label>
            <select
              value={blessingType}
              onChange={(e) => setBlessingType(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                isLight
                  ? 'bg-white border-amber-300 text-amber-950 focus:border-amber-500'
                  : 'bg-stone-900 border-white/10 text-stone-100 focus:border-amber-400'
              }`}
            >
              {Object.keys(blessingOptions).map((key) => (
                <option key={key} value={key}>
                  {lang === 'am' ? blessingOptions[key].labelAm : blessingOptions[key].labelEn}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>{lang === 'am' ? '✨ ምርቃት አዘጋጅ' : '✨ Generate Greeting Card'}</span>
          </button>
        </form>

        {/* Card Preview */}
        {generated && (
          <div
            className={`p-8 rounded-3xl border-2 text-center shadow-2xl animate-float ${
              isLight
                ? 'bg-gradient-to-b from-amber-100 to-amber-50 border-amber-400'
                : 'bg-gradient-to-b from-[#1c1308] to-[#0d1117] border-amber-400/40'
            }`}
          >
            <div className="text-4xl mb-3">☦️</div>

            <h3 className={`text-xl sm:text-2xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-gold'}`}>
              {lang === 'am'
                ? 'እንኳን ለብርሃነ መስቀሉ በሰላምና በጤና አደረሳችሁ!'
                : 'Happy Meskel! Wishing You a Blessed Feast!'}
            </h3>

            <p className={`text-base leading-relaxed mb-6 italic max-w-md mx-auto font-medium ${isLight ? 'text-amber-950' : 'text-stone-300'}`}>
              "{selectedBlessing[lang === 'am' ? 'am' : 'en']}"
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold text-sm mb-8">
              <span>🌼</span>
              <span>
                {lang === 'am' ? `ከ ${sender} ለ ${recipient}` : `From ${sender} to ${recipient}`}
              </span>
              <span>🌼</span>
            </div>

            {/* Direct Social Share */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={shareTelegram}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#229ED9] hover:bg-[#1d89bd] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>📨</span>
                <span>{lang === 'am' ? 'በቴሌግራም ላክ' : 'Share on Telegram'}</span>
              </button>

              <button
                onClick={shareWhatsApp}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>📱</span>
                <span>{lang === 'am' ? 'በዋትስአፕ ላክ' : 'Share on WhatsApp'}</span>
              </button>

              <button
                onClick={copyToClipboard}
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm border transition-colors flex items-center justify-center gap-2 shadow-md ${
                  isLight
                    ? 'bg-amber-200 border-amber-400 text-amber-950 hover:bg-amber-300'
                    : 'bg-white/10 border-white/10 text-stone-200 hover:bg-white/15'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copied
                    ? lang === 'am'
                      ? 'ተቀድቷል!'
                      : 'Copied!'
                    : lang === 'am'
                    ? 'ምርቃቱን ቅዳ'
                    : 'Copy Message'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
