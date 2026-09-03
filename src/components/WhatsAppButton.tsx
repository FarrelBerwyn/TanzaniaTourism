import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { PROPERTY_CONFIG } from '../data/propertyConfig';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Jambo! I would like to inquire about staying at The Zanzibar Retreat.');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Concierge Chat Popup Card */}
      {isOpen && (
        <div
          id="whatsapp-concierge-popup"
          className="mb-3 w-80 sm:w-88 bg-[#1C1B1A] border border-[#2C2B28] text-[#FAF8F5] rounded-xl shadow-2xl p-4 sm:p-5 animate-fadeIn"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#2C2B28] mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-xs">
                  ZR
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#1C1B1A]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#FAF8F5]">
                  Private Concierge
                </p>
                <p className="text-[10px] text-[#C4A27A]">
                  Typically replies within minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#D8CCB8] hover:text-white"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSend} className="space-y-3">
            <p className="text-[11px] text-[#D8CCB8] leading-relaxed">
              Karibu! How may our reservation team assist your journey to Zanzibar today?
            </p>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#141413] border border-[#2C2B28] rounded p-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#C4A27A]"
            />
            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase rounded flex items-center justify-center space-x-1.5 transition-colors shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat with Concierge on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline">
          WhatsApp Concierge
        </span>
      </button>
    </div>
  );
};
