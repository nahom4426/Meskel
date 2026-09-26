import React, { useState } from 'react';
import { Camera, Play, Video, X, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function MediaGallery({ lang, theme }) {
  const isLight = theme === 'light';
  const [activeMedia, setActiveMedia] = useState(null);

  const mediaItems = [
    {
      id: 'meskel-square',
      type: 'image',
      src: '/meskel_square.png',
      titleAm: 'መስቀል አደባባይ — የደመራ በዓል (ዩኔስኮ)',
      titleEn: 'Meskel Square — The Grand Demera (UNESCO)',
      descAm:
        'በሺዎች የሚቆጠሩ ኢትዮጵያውያን ነጭ የሐበሻ ልብስ ለብሰው፣ ጧፍ ይዘውና በወርቃማ ቬልቬት የተሸፈኑ ካህናት በዓሉን ሲያከብሩ',
      descEn:
        'Thousands of Ethiopians dressed in white Habesha attire holding glowing beeswax candles alongside priests in gold-embroidered robes.',
      badgeAm: 'መስቀል አደባባይ',
      badgeEn: 'Meskel Square',
    },
    {
      id: 'gurage-chibo',
      type: 'image',
      src: '/gurage_chibo.png',
      titleAm: 'ጉራጌ ዞን — የችቦ ማብራትና ባህላዊ ዳንስ',
      titleEn: 'Gurage Zone — Night Chibo Torch Lighting & Dance',
      descAm:
        'ቤተሰቦች በምሽት በችቦ ብርሃን ዙሪያ ተሰባስበው ባህላዊ ዳንስና ደስታ ሲያካሂዱ',
      descEn:
        'Families gathered under warm torchlight sharing traditional circle dances and festive meals.',
      badgeAm: 'ጉራጌ',
      badgeEn: 'Gurage',
    },
    {
      id: 'adey-abeba',
      type: 'image',
      src: '/adey_abeba.png',
      titleAm: 'አደይ አበባ — በኢትዮጵያ ተራሮች ላይ',
      titleEn: 'Adey Abeba — Golden Bloom in the Highlands',
      descAm:
        'ከክረምት በኋላ በመስከረም ወር በኢትዮጵያ ተራሮችና ደጋማ ቦታዎች የሚበቅል ቢጫ አደይ አበባ',
      descEn:
        'Brilliant yellow Adey Abeba flowers blooming across Ethiopian green hills right after the rainy season.',
      badgeAm: 'አደይ አበባ',
      badgeEn: 'Adey Abeba',
    },
  ];

  const videoItems = [
    {
      id: 'video-demera',
      youtubeId: 'DX9NQt3UmhI',
      titleAm: '🎥 የመስቀል አደባባይ ታላቁ ደመራ (የዩኔስኮ ሰነድ)',
      titleEn: '🎥 Meskel Square Grand Demera Ceremony (UNESCO Archive)',
      descAm: 'በዩኔስኮ እውቅና ያገኘው የመስቀል አደባባይ የደመራ በዓል ታሪካዊ የቀጥታ ምስልና ማብራሪያ',
      descEn: 'Official UNESCO world heritage footage documenting the magnificent Demera celebration at Meskel Square.',
    },
    {
      id: 'video-chants',
      youtubeId: 'DX9NQt3UmhI',
      titleAm: '🎶 የደመራ በዓልና የካህናት ዝማሬ (የበዓሉ ትዕይንት)',
      titleEn: '🎶 Demera Procession & Priestly Chants',
      descAm: 'ካህናትና ወጣቶች በወርቃማ አልባሳት አጊጠው የሚያቀርቧቸው ማህሌትና ሃይማኖታዊ ዝማሬዎች',
      descEn: 'Sacred chants and vibrant ceremonial processions by Orthodox priests and Sunday school youth choirs.',
    },
  ];

  return (
    <section
      id="media"
      className={`py-20 transition-colors duration-400 ${
        isLight ? 'bg-amber-50/60' : 'bg-gradient-to-b from-[#0d1117] via-[#151c27] to-[#0d1117]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${
              isLight
                ? 'bg-amber-200/80 border-amber-400 text-amber-950'
                : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'ፎቶዎችና ቪዲዮዎች' : 'Photos & Cultural Videos'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${isLight ? 'text-amber-950' : 'text-gradient-gold'}`}>
            {lang === 'am' ? '📸 የበዓሉ ደማቅ ፎቶዎችና ቪዲዮዎች' : '📸 Vibrant Celebrations in Photos & Videos'}
          </h2>

          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isLight ? 'text-amber-900/80' : 'text-stone-400'}`}>
            {lang === 'am'
              ? 'የኢትዮጵያን ባህላዊ ውበት፣ የመስቀል አደባባይ ታላቅ ደመራ፣ የካህናትን አልባሳትና የህዝቡን ደስታ ይመልከቱ'
              : 'Immerse yourself in the authentic visual splendor of Meskel across Ethiopia'}
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 transform hover:-translate-y-1.5 ${
                isLight
                  ? 'bg-white border-amber-200 shadow-lg hover:shadow-2xl hover:border-amber-400'
                  : 'bg-stone-900/80 border-amber-500/20 shadow-xl hover:border-amber-400/50'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                <img
                  src={item.src}
                  alt={lang === 'am' ? item.titleAm : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-xs shadow-md">
                  {lang === 'am' ? item.badgeAm : item.badgeEn}
                </span>

                {/* Zoom Hint */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-amber-300">
                  <ImageIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5">
                <h3 className={`font-bold text-base mb-1.5 ${isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                  {lang === 'am' ? item.titleAm : item.titleEn}
                </h3>
                <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${isLight ? 'text-amber-900/80' : 'text-stone-300'}`}>
                  {lang === 'am' ? item.descAm : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Video className="w-5 h-5 text-amber-500" />
            <h3 className={`text-xl sm:text-2xl font-bold ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
              {lang === 'am' ? '🎥 የታላቁ ደመራ ቪዲዮዎች' : '🎥 Cultural Video Showcase'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoItems.map((vid) => (
              <div
                key={vid.id}
                className={`rounded-3xl overflow-hidden border p-5 shadow-xl transition-all hover:shadow-2xl ${
                  isLight ? 'bg-white border-amber-200' : 'bg-stone-900/90 border-amber-500/20'
                }`}
              >
                {/* Embed YouTube Video Container */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-4 shadow-md border border-amber-500/20">
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0&autoplay=0&modestbranding=1`}
                    title={lang === 'am' ? vid.titleAm : vid.titleEn}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className={`font-bold text-base leading-snug ${isLight ? 'text-amber-950' : 'text-amber-300'}`}>
                    {lang === 'am' ? vid.titleAm : vid.titleEn}
                  </h4>
                  <a
                    href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs px-3 py-1.5 rounded-full font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 transition-all shadow-sm hover:scale-105"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{lang === 'am' ? 'በዩቲዩብ ክፈት' : 'Open Video'}</span>
                  </a>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isLight ? 'text-amber-900/80' : 'text-stone-400'}`}>
                  {lang === 'am' ? vid.descAm : vid.descEn}
                </p>
                <div className={`text-[11px] px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                  isLight ? 'bg-amber-100/60 border-amber-300/60 text-amber-900' : 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>
                    {lang === 'am'
                      ? 'ቪዲዮው አጫዋች ላይ ካልሰራ "በዩቲዩብ ክፈት" የሚለውን በመጫን በቀጥታ ይመልከቱ'
                      : 'If embed player is restricted by your browser/network, click "Open Video" to watch directly on YouTube.'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Image Modal */}
      {activeMedia && (
        <div
          onClick={() => setActiveMedia(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-stone-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl animate-float"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeMedia.src}
              alt={lang === 'am' ? activeMedia.titleAm : activeMedia.titleEn}
              className="w-full max-h-[60vh] object-cover"
            />

            <div className="p-6">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs mb-3 inline-block">
                {lang === 'am' ? activeMedia.badgeAm : activeMedia.badgeEn}
              </span>
              <h3 className="text-xl font-bold text-amber-300 mb-2">
                {lang === 'am' ? activeMedia.titleAm : activeMedia.titleEn}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                {lang === 'am' ? activeMedia.descAm : activeMedia.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
