import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, ChevronDown } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyConfig';

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
  onOpenBooking?: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: `Jambo! My name is Juma, your private concierge at ${PROPERTY_CONFIG.name}. How may I assist your stay in Zanzibar today?`,
      timestamp: 'Just now',
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const quickPrompts = [
    { label: '🏖️ Villa Availability', query: 'Tell me about available villas and rates.' },
    { label: '🚗 Airport Transfer', query: 'How far is Zanzirangi House from Zanzibar Airport?' },
    { label: '🍽️ Dining & Cuisine', query: 'What dining and restaurant options are available?' },
    { label: '⛵ Excursions & Safari', query: 'What experiences and excursions can we arrange?' },
    { label: '🕒 Check-in Times', query: 'What are the check-in and check-out times?' },
  ];

  const generateBotReply = (userQuery: string): { text: string; action?: { label: string; onClick: () => void } } => {
    const q = userQuery.toLowerCase();

    if (q.includes('villa') || q.includes('rate') || q.includes('price') || q.includes('stay') || q.includes('room') || q.includes('availab')) {
      return {
        text: `Zanzirangi House offers 8 private luxury villas including our flagship Royal Presidential Villa, Sultan Oceanfront Villa, and Swahili Garden Sanctuaries. Rates start from $320/night, all featuring private plunge pools, panoramic ocean views, and 24/7 dedicated butler service.`,
        action: onOpenBooking
          ? {
              label: 'Book a Villa Now',
              onClick: () => {
                setIsOpen(false);
                onOpenBooking();
              },
            }
          : undefined,
      };
    }

    if (q.includes('airport') || q.includes('transfer') || q.includes('location') || q.includes('where') || q.includes('car')) {
      return {
        text: `We are located along the serene southern coastline in Kizimkazi Dimbani, Zanzibar. Abeid Amani Karume International Airport (ZNZ) is approximately 55 minutes away. We provide luxury private chauffeur transfers upon request for all guests.`,
      };
    }

    if (q.includes('din') || q.includes('food') || q.includes('restaurant') || q.includes('chef') || q.includes('breakfast') || q.includes('menu')) {
      return {
        text: `Our oceanfront pavilion restaurant serves freshly caught Indian Ocean yellowfin tuna, king prawns, and authentic Swahili spice creations. Private in-villa dining and beach candlelit dinners can also be arranged with our executive chef.`,
      };
    }

    if (q.includes('excursion') || q.includes('safari') || q.includes('dhow') || q.includes('activity') || q.includes('tour') || q.includes('dolphin')) {
      return {
        text: `We curate bespoke private experiences including traditional sunset dhow sails, Menai Bay dolphin safaris, Jozani Forest colobus monkey visits, Stone Town heritage tours, and direct fly-in Serengeti safari expeditions.`,
      };
    }

    if (q.includes('check-in') || q.includes('checkout') || q.includes('time') || q.includes('policy')) {
      return {
        text: `Standard check-in is from 14:00 (2:00 PM) and check-out is until 11:00 AM. Early check-in or late checkout can be accommodated complimentary based on villa availability.`,
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('support')) {
      return {
        text: `You can reach our 24/7 concierge team directly at ${PROPERTY_CONFIG.contact.phone} or via email at ${PROPERTY_CONFIG.contact.email}. We are always here to make your journey extraordinary.`,
      };
    }

    return {
      text: `Thank you for your inquiry regarding ${PROPERTY_CONFIG.name}. Our dedicated concierge team will be delighted to personalize your stay. Would you like to check availability for specific dates?`,
      action: onOpenBooking
        ? {
            label: 'Check Villa Availability',
            onClick: () => {
              setIsOpen(false);
              onOpenBooking();
            },
          }
        : undefined,
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || inputValue;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic bot response delay
    setTimeout(() => {
      const replyData = generateBotReply(messageText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: replyData.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div
      id="customer-support-chat-widget"
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans"
    >
      {/* Expanded Interactive Chat Modal Window */}
      {isOpen && (
        <div
          id="chat-assistant-window"
          className="mb-3 w-[90vw] max-w-[390px] sm:w-[400px] h-[540px] max-h-[82vh] bg-[#141413] border border-[#2C2B28] text-[#FAF8F5] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(196, 162, 122, 0.15)',
          }}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#1C1B1A] to-[#252422] border-b border-[#2C2B28] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Host Avatar with pulse indicator */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C4A27A] bg-[#2C2B28]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
                    alt="Juma - Zanzirangi Concierge Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#141413] shadow-[0_0_6px_#10b981]" />
                </span>
              </div>

              <div className="flex flex-col text-left leading-tight">
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif font-medium text-sm tracking-wider text-[#FAF8F5]">
                    Customer Support
                  </span>
                  <Sparkles className="w-3 h-3 text-[#C4A27A]" />
                </div>
                <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center space-x-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span>Aktif 24/7 • Respon Instan</span>
                </span>
              </div>
            </div>

            <button
              id="close-chat-assistant-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-[#D8CCB8]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#0F0E0E]/90 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end space-x-2 max-w-[85%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-[#B8966C]/20 border border-[#C4A27A]/40 flex items-center justify-center flex-shrink-0 text-[#C4A27A] text-[10px]">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#B8966C] text-[#141413] font-medium rounded-br-none shadow-md'
                        : 'bg-[#1C1B1A] text-[#FAF8F5] border border-[#2C2B28] rounded-bl-none shadow'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {msg.action && (
                      <button
                        onClick={msg.action.onClick}
                        className="mt-3 inline-flex items-center px-3 py-1.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] font-semibold text-[11px] uppercase tracking-wider rounded transition-all shadow"
                      >
                        {msg.action.label} →
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
              <div className="flex items-center space-x-2">
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

          {/* Quick Questions Chips */}
          <div className="px-3.5 py-2 bg-[#171615] border-t border-[#2C2B28] overflow-x-auto flex items-center space-x-2 no-scrollbar">
            {quickPrompts.map((p, idx) => (
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
            className="p-3 bg-[#1C1B1A] border-t border-[#2C2B28] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about your stay..."
              className="flex-1 bg-[#141413] border border-[#2C2B28] rounded-xl px-3.5 py-2.5 text-xs text-[#FAF8F5] placeholder-[#8C8880] focus:outline-none focus:border-[#C4A27A] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-[#B8966C] hover:bg-[#C4A27A] disabled:opacity-40 disabled:cursor-not-allowed text-[#141413] rounded-xl transition-colors flex items-center justify-center flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Avatar Trigger Button in Bottom Left Corner */}
      <button
        id="chat-assistant-avatar-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-3 focus:outline-none"
        aria-label="Open Customer Support Chat Assistant"
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
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B8966C] text-[9px] font-bold text-[#141413] items-center justify-center">
                1
              </span>
            </span>
          )}
        </div>

        {/* Customer Support Tag Pill in Column */}
        <div className="flex items-center space-x-2 px-3.5 sm:px-4 py-2 bg-[#141413]/95 hover:bg-[#1C1B1A] border border-[#C4A27A]/40 rounded-2xl text-[#FAF8F5] shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:border-[#C4A27A]">
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs font-semibold text-[#FAF8F5] tracking-wide">
              Customer Support
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center space-x-1.5 mt-0.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Aktif 24/7</span>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
