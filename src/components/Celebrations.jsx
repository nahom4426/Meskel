import React, { useState } from 'react';
import { MapPin, Church, Flame, Group } from 'lucide-react';

export default function Celebrations({ lang, theme }) {
  const [activeTab, setActiveTab] = useState('gurage');
  const isLight = theme === 'light';

  const regionalData = {
    gurage: {
      titleAm: 'ጉራጌ — ታላቅ የቤተሰብ ግብዣና መሰባሰብ',
      titleEn: 'Gurage Zone — The Grand Homecoming',
      emoji: '🏡',
      icon: Group,
      descriptionAm:
        'በጉራጌ ዞን መስቀል ማለት ታላቅ የቤተሰብ ግብዣና ደስታ ነው። በየቦታው ያሉ ቤተሰቦች ተሰባስበው በአንድነት ያከብራሉ። የበሬ ግድያ፣ ባህላዊ ምግቦች፣ እና በምሽት ችቦ ይዞ ደመራውን ማብራት ዋነኛ ሥነ-ሥርዓት ነው።',
      descriptionEn:
        'In the Gurage Zone, Meskel is a grand homecoming celebration. Families gather from all corners to celebrate together with festive banquets, traditional circle dances, and lighting "Chibo" torches at night.',
      highlightsAm: [
        'ታላቅ የቤተሰብ መሰባሰብና ግብዣ',
        'የበሬ ግድያና የባህል ምግቦች ዝግጅት',
        'የጋራ ዙሪያ ዳንስና ጨዋታ',
        'በምሽት ችቦ ይዞ ደመራ ማብራት',
      ],
      highlightsEn: [
        'Grand family homecoming & reunions',
        'Traditional feasts & cultural dishes',
        'Communal circle dances & songs',
        'Torchlit evening Demera lighting',
      ],
    },
    tigray: {
      titleAm: 'ዓዲግራት / ትግራይ — ቅዱስ ተራሮችና መዝሙራት',
      titleEn: 'Adigrat & Tigray Highlands — Sacred Monasteries',
      emoji: '⛪',
      icon: Church,
      descriptionAm:
        'በትግራይ ደጋማ ቦታዎች መስቀል መንፈሳዊ ልምድ ነው። ካህናት በወርቅ-ጥልፍ ቬልቬት ልብስ ተሸፍነው፣ ቅዱስ ጥላዎች ይዘው፣ በጥንታዊ ግዕዝ መዝሙራት ያከብራሉ።',
      descriptionEn:
        'In the Tigray Highlands and Adigrat, Meskel is celebrated with deep spiritual reverence. Priests adorned in gold-embroidered velvet vestments lead processions with ceremonial umbrellas amidst ancient Ge\'ez chants.',
      highlightsAm: [
        'በወርቅ-ጥልፍ ቬልቬት ልብስ ያጌጡ ካህናት',
        'ቅዱስ ሥነ-ሥርዓት ጥላዎችና እጣን',
        'ጥንታዊ የቅዱስ ያሬድ ግዕዝ መዝሙራት',
        'በተራራ ገዳማት የሚበራ የመስቀል ብርሃን',
      ],
      highlightsEn: [
        'Priests in gold-embroidered velvet vestments',
        'Ceremonial umbrellas & frankincense',
        'Ancient St. Yared Ge\'ez liturgical chants',
        'Sacred mountain monastery illumination',
      ],
    },
    addis: {
      titleAm: 'አዲስ አበባ — መስቀል አደባባይ (ዩኔስኮ)',
      titleEn: 'Addis Ababa — Meskel Square (UNESCO)',
      emoji: '🏛️',
      icon: Flame,
      descriptionAm:
        'በአዲስ አበባ መስቀል አደባባይ ታላቁና በዩኔስኮ የተመዘገበው የደመራ ሥነ-ሥርዓት ይካሄዳል። በሺዎች የሚቆጠሩ ሰዎች ነጭ ሐበሻ ልብስ ለብሰው፣ የሰንበት ትምህርት ቤት ወጣቶች ሲዘምሩ፣ ሁሉም ጧፍ (የንብ ሰም ሻማ) ይይዛሉ።',
      descriptionEn:
        'At Meskel Square in Addis Ababa, the UNESCO-recognized Demera ceremony gathers thousands dressed in pristine white Habesha clothing. Choirs sing hymns of praise while the crowd holds glowing beeswax candles (ጧፍ).',
      highlightsAm: [
        'በዩኔስኮ እውቅና ያገኘ የዓለም ቅርስ ሥነ-ሥርዓት',
        'ነጭ የሐበሻ ባህላዊ ልብሶች',
        'የሰንበት ትምህርት ቤት ወጣቶች መዝሙራት',
        'በሺዎች የሚቆጠሩ ጧፎች (የንብ ሰም ሻማ)',
      ],
      highlightsEn: [
        'UNESCO Intangible Cultural Heritage',
        'Pristine white Habesha traditional dress',
        'Youth Sunday school choir hymns',
        'Thousands of glowing beeswax candles',
      ],
    },
  };

  const active = regionalData[activeTab];
  const IconComponent = active.icon;

  return (
    <section
      id="celebrations"
      className={`py-20 transition-colors duration-400 ${
        isLight ? 'bg-amber-50/80' : 'bg-[#0d1117]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
              isLight
                ? 'bg-amber-200 border-amber-400 text-amber-950'
                : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'ባህላዊ አከባበር' : 'Cultural Traditions'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-gold'}`}>
            {lang === 'am' ? '🌍 በኢትዮጵያ ዙሪያ ያሉ ክብረ በዓላት' : '🌍 Celebrations Across Ethiopia'}
          </h2>

          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isLight ? 'text-amber-900/80' : 'text-stone-400'}`}>
            {lang === 'am'
              ? 'መስቀል በተለያዩ የሀገራችን ክፍሎች በደመቀና በተለየ ባህላዊ ሥነ-ሥርዓት ይከበራል'
              : 'Discover how the Feast of Meskel is celebrated with unique heritage in different regions of Ethiopia'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-10">
          {[
            { id: 'gurage', labelAm: 'ጉራጌ ዞን', labelEn: 'Gurage Zone' },
            { id: 'tigray', labelAm: 'ዓዲግራት / ትግራይ', labelEn: 'Adigrat / Tigray' },
            { id: 'addis', labelAm: 'አዲስ አበባ (መስቀል አደባባይ)', labelEn: 'Addis Ababa' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg scale-105'
                  : isLight
                  ? 'bg-white border border-amber-200 text-amber-900 hover:bg-amber-100'
                  : 'bg-white/5 border border-white/10 text-stone-300 hover:border-amber-500/40 hover:text-amber-300'
              }`}
            >
              {lang === 'am' ? tab.labelAm : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div
          className={`relative rounded-3xl border p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl ${
            isLight
              ? 'bg-white border-amber-300/60 shadow-amber-900/5'
              : 'bg-gradient-to-br from-stone-900/90 to-black border-amber-500/20'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-4xl shrink-0 shadow-inner">
              {active.emoji}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <IconComponent className="w-5 h-5 text-amber-500" />
                <h3 className={`text-xl sm:text-2xl font-extrabold ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                  {lang === 'am' ? active.titleAm : active.titleEn}
                </h3>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isLight ? 'text-amber-900/90' : 'text-stone-300'}`}>
                {lang === 'am' ? active.descriptionAm : active.descriptionEn}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === 'am' ? active.highlightsAm : active.highlightsEn).map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-medium ${
                      isLight
                        ? 'bg-amber-50 border-amber-200 text-amber-950'
                        : 'bg-white/5 border-white/5 text-stone-200'
                    }`}
                  >
                    <span className="text-amber-500 text-base">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
