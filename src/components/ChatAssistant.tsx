import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { CHAT_TRANSLATIONS } from '../data/chatTranslations';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ChatAssistantProps {
  currentLang?: Language;
  onOpenBooking?: () => void;
  isOpen?: boolean;
  onToggleOpen?: (open: boolean) => void;
  externalQuery?: string | null;
  onClearExternalQuery?: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  currentLang = 'en',
  onOpenBooking,
  isOpen: controlledIsOpen,
  onToggleOpen,
  externalQuery,
  onClearExternalQuery,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (nextState: boolean) => {
    if (onToggleOpen) {
      onToggleOpen(nextState);
    }
    setInternalIsOpen(nextState);
  };

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const t = CHAT_TRANSLATIONS[currentLang] || CHAT_TRANSLATIONS.en;
  const isRtl = currentLang === 'ar';

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: t.welcomeMessage,
      timestamp: t.justNow,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'bot',
            text: t.welcomeMessage,
            timestamp: t.justNow,
          },
        ];
      }
      return [
        ...prev,
        {
          id: `lang-switch-${Date.now()}`,
          sender: 'bot',
          text: t.welcomeMessage,
          timestamp: t.justNow,
        },
      ];
    });
  }, [currentLang]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const generateBotReply = (userQuery: string): { text: string; action?: { label: string; onClick: () => void } } => {
    const q = userQuery.toLowerCase();

    // Specific safari destinations
    if (q.includes('serengeti') || q.includes('great migration')) {
      return {
        text: 'Serengeti National Park is an extraordinary safari experience. Zanzirangi House arranges direct chartered fly-in safaris from Zanzibar airport (approx. 1h 45m) with luxury partner tented camps overlooking migration corridors.',
        action: {
          label: 'View Safari Destinations',
          onClick: () => scrollToSection('tanzania'),
        },
      };
    }

    if (q.includes('ngorongoro') || q.includes('crater')) {
      return {
        text: 'Ngorongoro Crater offers Africa’s densest predator populations inside a UNESCO volcanic caldera. We organize chartered fly-in packages combining your beach retreat with panoramic crater floor game drives.',
        action: {
          label: 'Explore Ngorongoro',
          onClick: () => scrollToSection('tanzania'),
        },
      };
    }

    if (q.includes('kilimanjaro')) {
      return {
        text: 'Mount Kilimanjaro expeditions and scenic fly-over safaris are arranged through our certified mainland mountain guide partners. We can curate pre-climb acclimatization stays or relaxing post-climb beach recovery.',
        action: {
          label: 'Plan Safari & Kilimanjaro',
          onClick: () => scrollToSection('tanzania'),
        },
      };
    }

    if (q.includes('tarangire')) {
      return {
        text: 'Tarangire National Park is celebrated for iconic baobab trees and vast elephant herds along the Tarangire River. We arrange chartered flight itineraries directly from Zanzibar.',
        action: {
          label: 'View Tarangire Safaris',
          onClick: () => scrollToSection('tanzania'),
        },
      };
    }

    // Itinerary builder inquiries
    if (q.includes('itinerary') || q.includes('bespoke schedule') || q.includes('journey')) {
      return {
        text: 'I would be delighted to personalize your multi-day Tanzania journey! Our team will harmonize your island villa stay at Zanzirangi House with your chosen excursions and mainland safari flights.',
        action: {
          label: 'Book Dates with Concierge',
          onClick: () => (onOpenBooking ? onOpenBooking() : scrollToSection('stay')),
        },
      };
    }

    // Specific Experiences
    if (q.includes('dolphin') || q.includes('kizimkazi')) {
      return {
        text: 'Kizimkazi is world-renowned for resident bottlenose and spinner dolphins in the Menai Bay Conservation Area right off our doorstep. We provide private dawn boat departures with licensed marine conservation guides.',
        action: {
          label: 'View Experiences',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    if (q.includes('stone town') || q.includes('heritage')) {
      return {
        text: 'Stone Town is a UNESCO World Heritage treasure. We arrange private guided cultural walks through winding alleys, the House of Wonders, Old Fort, and the spice market with an expert Swahili historian.',
        action: {
          label: 'Explore Stone Town',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    if (q.includes('mnemba') || q.includes('snorkeling') || q.includes('diving')) {
      return {
        text: 'Mnemba Island Atoll is Zanzibar’s crown jewel for coral reef biodiversity. We arrange private motorized dhow charters with full snorkeling gear, marine guides, and secluded sandbank picnics.',
        action: {
          label: 'Discover Mnemba',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    if (q.includes('spice')) {
      return {
        text: 'Our Organic Botanical Spice Farm Journey introduces you to cloves, vanilla, nutmeg, and cardamom grown in lush organic plantations, concluded with a fresh coconut tasting and spice-infused lunch.',
        action: {
          label: 'View Spice Journey',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    if (q.includes('dhow') || q.includes('sunset')) {
      return {
        text: 'Nothing rivals a private wooden dhow gliding across the tranquil turquoise Indian Ocean at sunset. Chilled drinks and Swahili canapés are served as the sun dips below the horizon.',
        action: {
          label: 'Sunset Dhow Details',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    if (q.includes('reservation') || q.includes('booking') || q.includes('submitted')) {
      return {
        text: 'Thank you for your reservation inquiry! Our on-site concierge team is reviewing your requested dates and villa preferences. We will confirm availability and bespoke rates directly with you.',
        action: {
          label: 'Check More Rooms',
          onClick: () => scrollToSection('stay'),
        },
      };
    }

    // General categories
    const safariKeywords = ['safari', 'wildlife', 'big five', 'fly-in', 'game drive', 'bush'];
    if (safariKeywords.some((k) => q.includes(k))) {
      return {
        text: 'Zanzirangi House organizes chartered fly-in safaris directly from Zanzibar to Serengeti, Ngorongoro Crater, and Tarangire with luxury partner camps. Would you like to view our safari destinations?',
        action: {
          label: 'View Safari Destinations',
          onClick: () => scrollToSection('tanzania'),
        },
      };
    }

    const villaKeywords = [
      'villa', 'rate', 'price', 'stay', 'room', 'availab', 'suite', 'bungalow',
      'chambre', 'prix', 'tarif', 'nuit',
      'bei', 'ghorofa', 'chumba', 'kulala',
      'precio', 'tarifa', 'habitaci', 'estancia', 'noche',
      'prezzo', 'costo', 'camera', 'notte',
      'فلل', 'فيلا', 'سعر', 'اسعار', 'أسعار', 'غرفة', 'غرف', 'حجز', 'مسبح',
      '别墅', '价格', '房价', '房型', '套房', '空房', '预订',
    ];
    if (villaKeywords.some((k) => q.includes(k))) {
      return {
        text: t.botVillaAnswer || 'Zanzirangi House features 8 handcrafted luxury sanctuaries including oceanfront pool villas and secluded garden bungalows. Would you like to check dates and availability?',
        action: {
          label: t.actionCheckVillas || 'Check Villa Availability',
          onClick: () => (onOpenBooking ? onOpenBooking() : scrollToSection('stay')),
        },
      };
    }

    const transferKeywords = [
      'airport', 'transfer', 'location', 'where', 'car', 'distance', 'arrive', 'driver', 'taxi', 'shuttle',
      'aéroport', 'aeroport', 'transport', 'voiture', 'chauffeur',
      'uwanja', 'ndege', 'usafiri', 'gari', 'umbali',
      'aeropuerto', 'traslado', 'transporte', 'coche',
      'aeroporto', 'trasferimento', 'auto',
      'مطار', 'توصيل', 'نقل', 'سيارة', 'سائق', 'مسافة', 'موقع',
      '机场', '接送', '专车', '距离', '怎么走', '位置',
    ];
    if (transferKeywords.some((k) => q.includes(k))) {
      return {
        text: t.botTransferAnswer || 'We provide private VIP meet-and-greet and chauffeur shuttle transfers from Abeid Amani Karume International Airport (ZNZ) directly to Zanzirangi House in Kizimkazi.',
        action: {
          label: 'View Transfer Details',
          onClick: () => scrollToSection('shuttle'),
        },
      };
    }

    const diningKeywords = [
      'din', 'food', 'restaurant', 'chef', 'breakfast', 'menu', 'lunch', 'dinner', 'eat', 'drink', 'wine', 'beverage', 'juice', 'cuisine', 'garden',
      'manger', 'nourriture', 'repas', 'boisson', 'petit-déjeuner', 'déjeuner',
      'chakula', 'mgahawa', 'vinywaji', 'kula', 'kinywaji',
      'comida', 'restaurante', 'cena', 'desayuno', 'bebida',
      'cibo', 'ristorante', 'pranzo', 'bevande',
      'مطعم', 'مطاعم', 'طعام', 'أكل', 'اكل', 'عشاء', 'غداء', 'إفطار', 'وجبة', 'مشروب', 'عصير', 'مشروبات',
      '餐厅', '餐饮', '美食', '菜', '早餐', '晚餐', '饮料', '酒', '厨师',
    ];
    if (diningKeywords.some((k) => q.includes(k))) {
      return {
        text: t.botDiningAnswer || 'Our gastronomic philosophy embraces organic garden-to-table produce and line-caught seafood with authentic Swahili and fine international dining.',
        action: {
          label: 'Taste Dining & Garden Menu',
          onClick: () => scrollToSection('dining'),
        },
      };
    }

    const excursionKeywords = [
      'excursion', 'dhow', 'activity', 'tour', 'dolphin', 'experience', 'trip', 'adventure', 'mnemba', 'stone town', 'spice', 'jozani',
      'visite', 'croisière', 'dauphin', 'aventure', 'forêt',
      'matembezi', 'pomboo', 'jahazi', 'msitu',
      'excursión', 'excursion', 'delfines', 'paseo', 'selva',
      'escursione', 'delfini',
      'رحلات', 'رحلة', 'دلافين', 'جولة', 'مغامرة', 'غابة', 'قارب',
      '游览', '海豚', '活动', '体验', '森林', '帆船',
    ];
    if (excursionKeywords.some((k) => q.includes(k))) {
      return {
        text: t.botExcursionAnswer || 'We curate 10 signature Zanzibar adventures including wild dolphin cruises in Menai Bay, Mnemba Island snorkeling, Stone Town heritage tours, and sunset dhow sails.',
        action: {
          label: 'Explore Experiences',
          onClick: () => scrollToSection('experiences'),
        },
      };
    }

    const conciergeKeywords = ['speak', 'talk', 'concierge', 'host', 'team', 'call', 'arrange', 'help', 'contact'];
    if (conciergeKeywords.some((k) => q.includes(k))) {
      return {
        text: 'Jambo! I am right here to help you arrange your custom stay and services at Zanzirangi House. Tell me your preferred dates, party size, or experiences and I will tailor everything to your rhythm.',
        action: {
          label: 'Plan Your Stay',
          onClick: () => (onOpenBooking ? onOpenBooking() : scrollToSection('stay')),
        },
      };
    }

    return {
      text: t.botFallbackAnswer || 'I am happy to assist with all your questions regarding your stay, dining, island adventures, and Tanzania safaris at Zanzirangi House.',
      action: {
        label: 'Plan Your Stay',
        onClick: () => (onOpenBooking ? onOpenBooking() : scrollToSection('stay')),
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: reply.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  // Handle external query trigger (from other sections)
  useEffect(() => {
    if (externalQuery && externalQuery.trim()) {
      setIsOpen(true);
      handleSendMessage(externalQuery);
      if (onClearExternalQuery) {
        onClearExternalQuery();
      }
    }
  }, [externalQuery]);

  // Handle global custom DOM event
  useEffect(() => {
    const handleOpenSupportEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ query?: string }>;
      const query = customEvent.detail?.query;
      setIsOpen(true);
      if (query) {
        setTimeout(() => {
          handleSendMessage(query);
        }, 100);
      }
    };
    window.addEventListener('open-customer-support', handleOpenSupportEvent);
    return () => window.removeEventListener('open-customer-support', handleOpenSupportEvent);
  }, []);

  const serviceShortcuts = [
    {
      label: '🛏 Check Villas',
      onClick: () => (onOpenBooking ? onOpenBooking() : scrollToSection('stay')),
    },
    {
      label: '✈ Airport Shuttle',
      onClick: () => scrollToSection('shuttle'),
    },
    {
      label: '🦁 Tanzania Safari',
      onClick: () => scrollToSection('tanzania'),
    },
    {
      label: '🍽 Garden Dining',
      onClick: () => scrollToSection('dining'),
    },
    {
      label: '🗺 Island Experiences',
      onClick: () => scrollToSection('experiences'),
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Customer Support Chat Window */}
      {isOpen && (
        <div
          id="customer-support-chat-window"
          className="mb-3 w-[360px] sm:w-[410px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[82vh] bg-[#141413]/98 backdrop-blur-2xl border border-[#C4A27A]/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn text-[#FAF8F5]"
        >
          {/* Top Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#1C1B1A] via-[#22211F] to-[#1C1B1A] border-b border-[#2C2B28] flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#C4A27A] bg-[#2C2B28] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
                    alt="Juma - Zanzirangi Customer Support"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#141413] shadow-[0_0_6px_#10b981]" />
                </span>
              </div>

              <div className="flex flex-col text-left rtl:text-right leading-tight">
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span className="font-serif font-medium text-base tracking-wider text-[#FAF8F5]">
                    Customer Support
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C4A27A]" />
                </div>
                <span className="text-[11px] text-emerald-400 font-mono tracking-wider flex items-center space-x-1 rtl:space-x-reverse mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span>Juma • Online at Zanzirangi House</span>
                </span>
              </div>
            </div>

            <button
              id="close-chat-assistant-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-[#D8CCB8]/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Service Action Shortcuts */}
          <div className="px-3 py-2 bg-[#171615] border-b border-[#2C2B28] flex items-center space-x-2 overflow-x-auto no-scrollbar">
            {serviceShortcuts.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className="whitespace-nowrap px-3 py-1 bg-white/5 hover:bg-[#B8966C]/20 border border-white/10 hover:border-[#B8966C]/50 rounded-full text-[11px] text-[#D8CCB8] hover:text-[#FAF8F5] transition-all flex-shrink-0"
              >
                {action.label}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#0F0E0E]/95 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user'
                    ? isRtl ? 'items-start' : 'items-end'
                    : isRtl ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`flex items-end space-x-2 rtl:space-x-reverse max-w-[85%] ${
                    msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-[#B8966C]/20 border border-[#C4A27A]/40 flex items-center justify-center flex-shrink-0 text-[#C4A27A] text-[10px]">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#B8966C] text-[#141413] font-semibold rounded-br-none shadow-md'
                        : 'bg-[#1C1B1A] text-[#FAF8F5] border border-[#2C2B28] rounded-bl-none shadow'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {msg.action && (
                      <button
                        onClick={msg.action.onClick}
                        className="mt-3 inline-flex items-center px-3 py-1.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] font-bold text-[11px] uppercase tracking-wider rounded-lg transition-all shadow"
                      >
                        {msg.action.label} {isRtl ? '←' : '→'}
                      </button>
                    )}
                  </div>
                </div>
                <span className="text-[9px] text-[#8C8880] mt-1 px-8 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-6 h-6 rounded-full bg-[#B8966C]/20 border border-[#C4A27A]/40 flex items-center justify-center flex-shrink-0 text-[#C4A27A]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-4 py-2.5 bg-[#1C1B1A] border border-[#2C2B28] rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#C4A27A] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[#C4A27A] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[#C4A27A] rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3.5 py-2 bg-[#171615] border-t border-[#2C2B28] overflow-x-auto flex items-center space-x-2 rtl:space-x-reverse no-scrollbar">
            {t.quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="whitespace-nowrap px-2.5 py-1 bg-white/5 hover:bg-[#C4A27A]/20 hover:border-[#C4A27A]/50 border border-white/10 rounded-full text-[11px] text-[#D8CCB8] hover:text-[#FAF8F5] transition-all flex-shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#1C1B1A] border-t border-[#2C2B28] flex items-center space-x-2 rtl:space-x-reverse"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about Zanzirangi House..."
              className="flex-1 bg-[#141413] border border-[#2C2B28] rounded-xl px-3.5 py-2.5 text-xs text-[#FAF8F5] placeholder-[#8C8880] focus:outline-none focus:border-[#C4A27A] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-[#B8966C] hover:bg-[#C4A27A] disabled:opacity-40 disabled:cursor-not-allowed text-[#141413] rounded-xl transition-colors flex items-center justify-center flex-shrink-0"
              aria-label="Send message"
            >
              <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Avatar Trigger Button in Bottom Left Corner */}
      <button
        id="chat-assistant-avatar-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-3 focus:outline-none"
        aria-label="Open Zanzirangi Customer Support"
      >
        {/* Glowing Circle Avatar with Golden Ring */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#B8966C] via-[#C4A27A] to-[#FAF8F5] shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#141413]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
                alt="Juma - Zanzirangi Customer Support Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Active online pulsing green radar signal */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#141413] shadow-[0_0_8px_#10b981]" />
          </span>

          {/* Unread Message Dot */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8966C] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B8966C] text-[9px] font-bold text-[#141413] flex items-center justify-center">
                1
              </span>
            </span>
          )}
        </div>

        {/* Customer Support Tag Pill */}
        <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#141413]/95 hover:bg-[#1C1B1A] border border-[#C4A27A]/50 rounded-2xl text-[#FAF8F5] shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:border-[#C4A27A]">
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs font-semibold text-[#FAF8F5] tracking-wide">
              Customer Support
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center space-x-1.5 mt-0.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Online • Juma</span>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
