import React, { useState } from 'react';
import { Play, Pause, Film, Volume2, VolumeX, Sparkles, X, Info } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PromotionalVideoSectionProps {
  currentLang: Language;
}

export const PromotionalVideoSection: React.FC<PromotionalVideoSectionProps> = ({
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const storylineScenes = [
    {
      title: t.video.sceneArrival,
      description: 'Private airport chauffeur arrival & traditional iced lemongrass towel welcome',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      time: '0:00 - 0:15',
    },
    {
      title: t.video.sceneExterior,
      description: 'Makuti timber architecture nestled within ancient baobab groves',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      time: '0:15 - 0:30',
    },
    {
      title: t.video.sceneVilla,
      description: 'Handcrafted teak interiors, floor-to-ceiling glass, and limestone plunge pool',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      time: '0:30 - 0:50',
    },
    {
      title: t.video.scenePool,
      description: 'Freshwater infinity pool overlooking the turquoise Menai Bay reef',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      time: '0:50 - 1:10',
    },
    {
      title: t.video.sceneDining,
      description: 'Farm-fresh Swahili spices, wild yellowfin tuna, and candlelit ocean pavilion',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      time: '1:10 - 1:30',
    },
    {
      title: t.video.sceneSunset,
      description: 'Hand-hewn dhow wooden boat sailing into the Indian Ocean golden twilight',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      time: '1:30 - 1:55',
    },
    {
      title: t.video.sceneSafari,
      description: 'The gateway to the Serengeti & wild Tanzanian mainland expeditions',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
      time: '1:55 - 2:20',
    },
  ];

  const currentScene = storylineScenes[activeSceneIndex];

  return (
    <section id="film" className="relative w-full py-24 md:py-32 bg-[#141413] text-[#FAF8F5] overflow-hidden">
      {/* Full-width visual background container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#C4A27A] font-medium mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Cinematic Brand Reel</span>
            </div>
            <h2
              id="film-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] uppercase text-[#FAF8F5]"
            >
              {t.video.heading}
            </h2>
            <p className="text-[#D8CCB8]/80 text-sm sm:text-base mt-2 max-w-xl">
              {t.video.subhead}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="text-xs text-[#C4A27A] font-mono tracking-wider bg-white/5 border border-[#C4A27A]/30 px-3 py-1.5 rounded">
              4K Ultra HD • Concept Storyboard
            </span>
          </div>
        </div>

        {/* Cinematic Screen Canvas */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#2C2B28] group">
          <img
            key={currentScene.image}
            src={currentScene.image}
            alt={currentScene.title}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-75'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-black/40" />

          {/* Center Play/Pause Trigger */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              id="video-play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B8966C]/90 hover:bg-[#C4A27A] text-[#141413] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl backdrop-blur-md group-hover:ring-8 group-hover:ring-white/10"
              aria-label={isPlaying ? 'Pause film' : 'Play film'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>
          </div>

          {/* Top Video Overlay Details */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-wider">
            <div className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10 flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-[#C4A27A]'}`} />
              <span className="font-mono text-[#FAF8F5] uppercase">
                {isPlaying ? 'Playing Scene' : 'Storyboard Ready'} : {currentScene.title}
              </span>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-black/60 backdrop-blur-md rounded hover:bg-black/80 transition-colors border border-white/10 text-[#FAF8F5]"
              aria-label="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C4A27A]" />}
            </button>
          </div>

          {/* Bottom Scene Indicator Bar */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3">
              <div>
                <span className="text-[10px] font-mono text-[#C4A27A] uppercase tracking-[0.2em]">
                  Timeline {currentScene.time}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light">
                  {currentScene.title}
                </h3>
                <p className="text-xs text-[#D8CCB8]/90 max-w-lg">
                  {currentScene.description}
                </p>
              </div>

              <span className="text-[11px] font-mono text-[#D8CCB8]/80 mt-2 sm:mt-0">
                Scene {activeSceneIndex + 1} of {storylineScenes.length}
              </span>
            </div>

            {/* Interactive Timeline Scrub Bar */}
            <div className="grid grid-cols-7 gap-1.5 h-1.5 bg-white/20 rounded overflow-hidden">
              {storylineScenes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSceneIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`h-full transition-colors ${
                    activeSceneIndex === idx
                      ? 'bg-[#C4A27A]'
                      : activeSceneIndex > idx
                      ? 'bg-white/60'
                      : 'bg-transparent hover:bg-white/40'
                  }`}
                  aria-label={`Jump to scene ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pitching & Production Architecture Disclaimer */}
        <div className="mt-8 p-5 bg-[#1C1B1A] border border-[#2C2B28] rounded-xl flex items-start space-x-4">
          <Info className="w-5 h-5 text-[#C4A27A] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#D8CCB8] space-y-1">
            <p className="font-medium text-[#FAF8F5]">
              Production Architecture & AI Video Pipeline:
            </p>
            <p className="text-[#D8CCB8]/80 leading-relaxed">
              This cinematic module is pre-architected to host an AI-assisted promotional film synthesized from the client’s real high-resolution property photography. Once photography is delivered, footage of the exterior, ocean villas, infinity pool, and sunset sails will be seamlessly compiled into a 4K promotional masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
