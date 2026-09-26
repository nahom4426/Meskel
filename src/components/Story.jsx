import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Story({ lang, theme }) {
  const isLight = theme === 'light';

  const steps = [
    {
      year: '326 AD',
      titleAm: '🔍 ንግሥት ዕሌኒ እና እውነተኛው መስቀል',
      titleEn: '🔍 Queen Helena & The Quest in Jerusalem',
      descAm:
        'ንግሥት ዕሌኒ — የቆስጠንጢኖስ ንጉሥ እናት — ኢየሱስ ክርስቶስ የተሰቀለበትን እውነተኛ መስቀል ለማግኘት ወደ ቅዱስ ምድር ኢየሩሳሌም ተጓዙ። ነገር ግን ከ300 ዓመታት በኋላ መስቀሉ የተቀበረበት ቦታ ጠፍቶ ነበር።',
      descEn:
        'Queen Helena (Eleni) traveled to Jerusalem in 326 AD seeking the True Cross upon which Jesus Christ was crucified. After 300 years of burial, its precise location had been forgotten.',
    },
    {
      year: '326 AD Miracle',
      titleAm: '💨 የጢሱ ተአምርና የመስቀሉ መገኘት',
      titleEn: '💨 The Smoke Miracle & Excavation',
      descAm:
        'ንግሥት ዕሌኒ ታላቅ ደመራ አቃጠሉ፤ የእጣኑና የዕንጨቱ ጢስ ወደ ሰማይ ከወጣ በኋላ ዞሮ ዞሮ ወደ ምድር ዘቅዝቆ መስቀሉ የተቀበረበትን ትክክለኛ ቦታ አመለከተ። ያ ቦታ ተቆፍሮ እውነተኛው ቅዱስ መስቀል ተገኘ።',
      descEn:
        'Queen Helena lit a giant bonfire (Demera). The fragrant smoke rose to the heavens, then turned and descended directly onto the spot where the True Cross lay buried, enabling its joyful excavation.',
    },
    {
      year: 'September Blossom',
      titleAm: '🌼 አደይ አበባ — የተስፋና የብርሃን ምልክት',
      titleEn: '🌼 Adey Abeba — The Symbol of Renewal',
      descAm:
        'በኢትዮጵያ ደማቅ ቢጫ የአደይ አበባዎች በየዓመቱ መስከረም ወር ላይ ክረምት (የዝናብ ወቅት) ካለቀ በኋላ ይፈካሉ። ይህ ቢጫ አበባ ብርሃንን፣ ፀሐይንና ተሐድሶን ያመለክታል — ልክ መስቀሉ እንደገና እንደተገኘው ሁሉ።',
      descEn:
        'In Ethiopia, the brilliant yellow Adey Abeba flowers bloom every September right as the rainy season (Kiremt) ends. The golden petals symbolize sunshine, renewal, and hope after months of rain.',
    },
    {
      year: 'Living Heritage',
      titleAm: '✝️ ዛሬ ድረስ የሚኖር ጥንታዊ ባህል',
      titleEn: '✝️ A Living Cultural Tradition Today',
      descAm:
        'ዛሬ መስቀል በሚሊዮኖች ኢትዮጵያውያን በታላቅ ደስታ ይከበራል። ከመስቀል አደባባይ ታላቅ ደመራ እስከ ገጠር አካባቢ ችቦ ማብራት ድረስ — ይህ በዓል እምነትን፣ ማህበረሰብንና ጥንታዊ ኢትዮጵያዊ ቅርሳችንን ያድሳል።',
      descEn:
        'Today, Meskel brings millions of Ethiopians together. From the grand UNESCO ceremony at Meskel Square to family Chibo torch lightings, this festival connects generations through faith, unity, and joy.',
    },
  ];

  return (
    <section
      id="story"
      className={`py-20 transition-colors duration-400 ${
        isLight ? 'bg-amber-100/40' : 'bg-gradient-to-b from-[#0d1117] via-[#121824] to-[#0d1117]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
              isLight
                ? 'bg-amber-200 border-amber-400 text-amber-950'
                : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'የበዓሉ ታሪክ' : 'History & Heritage'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-gold'}`}>
            {lang === 'am' ? '📜 የመስቀል በዓል ታሪክና ትርጉም' : '📜 Story & Meaning of Meskel'}
          </h2>

          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isLight ? 'text-amber-900/80' : 'text-stone-400'}`}>
            {lang === 'am'
              ? 'ከንግሥት ዕሌኒ ታላቅ ግኝት እስከ ቢጫው አደይ አበባ ፈገግታ ድረስ ያለው ጥንታዊ ታሪክ'
              : 'From Queen Helena’s 326 AD discovery to the golden blooms of Adey Abeba after the heavy rains'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 space-y-10">
          {steps.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-[#0d1117] shadow-[0_0_12px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform" />

              <div
                className={`p-6 rounded-2xl border transition-all ${
                  isLight
                    ? 'bg-white border-amber-200 shadow-md hover:border-amber-400'
                    : 'bg-white/5 border-white/10 hover:border-amber-500/30 backdrop-blur-md'
                }`}
              >
                <span className="inline-block px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold mb-2">
                  {item.year}
                </span>

                <h3 className={`text-lg sm:text-xl font-extrabold mb-2 ${isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                  {lang === 'am' ? item.titleAm : item.titleEn}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-amber-900/90' : 'text-stone-300'}`}>
                  {lang === 'am' ? item.descAm : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
