import React, { useState } from 'react';
import { X, Settings, Database, Image, Calendar, Check, Save, Shield, Globe } from 'lucide-react';
import { Villa } from '../types';
import { PROPERTY_CONFIG } from '../data/propertyConfig';
import { ScrollFadeContainer } from './ScrollFadeContainer';

interface CmsAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  villas: Villa[];
  onUpdateVilla: (id: string, updated: Partial<Villa>) => void;
}

export const CmsAdminModal: React.FC<CmsAdminModalProps> = ({
  isOpen,
  onClose,
  villas,
  onUpdateVilla,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'villas' | 'property' | 'media' | 'inquiries'>('villas');
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  const [propName, setPropName] = useState(PROPERTY_CONFIG.name);
  const [phone, setPhone] = useState(PROPERTY_CONFIG.contact.phone);
  const [email, setEmail] = useState(PROPERTY_CONFIG.contact.email);

  const handleSave = () => {
    setSaveFeedback('Configuration synchronized successfully in demo state.');
    setTimeout(() => setSaveFeedback(null), 3500);
  };

  return (
    <div
      id="cms-admin-demo-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-[#1C1B1A] text-[#FAF8F5] border border-[#2C2B28] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C2B28] bg-[#141413]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#B8966C]/20 border border-[#C4A27A]/30 flex items-center justify-center text-[#C4A27A]">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg tracking-wider text-[#FAF8F5]">
                Luxury Property Management Studio (CMS Concept)
              </h3>
              <p className="text-[11px] font-mono text-[#D8CCB8]">
                Interactive client pitching preview • Clean decoupled architecture
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#FAF8F5] transition-colors"
            aria-label="Close CMS modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation with Dynamic Left & Right Gradient Fade */}
        <ScrollFadeContainer
          className="relative max-w-full overflow-hidden bg-[#181716] border-b border-[#2C2B28]"
          scrollClassName="flex items-center space-x-2 px-6 py-2.5 overflow-x-auto pr-14 no-scrollbar scroll-smooth text-xs font-mono tracking-wider uppercase"
          leftGradientClass="bg-gradient-to-r from-[#181716] via-[#181716]/90 to-transparent"
          rightGradientClass="bg-gradient-to-l from-[#181716] via-[#181716]/90 to-transparent"
          fadeWidth="w-10 sm:w-14"
        >
          <button
            onClick={() => setActiveTab('villas')}
            className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded flex items-center space-x-1.5 transition-colors ${
              activeTab === 'villas'
                ? 'bg-[#B8966C] text-[#141413] font-semibold'
                : 'text-[#D8CCB8]/70 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Villa Inventory (8 Units)</span>
          </button>

          <button
            onClick={() => setActiveTab('property')}
            className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded flex items-center space-x-1.5 transition-colors ${
              activeTab === 'property'
                ? 'bg-[#B8966C] text-[#141413] font-semibold'
                : 'text-[#D8CCB8]/70 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Property Metadata</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded flex items-center space-x-1.5 transition-colors ${
              activeTab === 'media'
                ? 'bg-[#B8966C] text-[#141413] font-semibold'
                : 'text-[#D8CCB8]/70 hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Asset / Photo Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded flex items-center space-x-1.5 transition-colors ${
              activeTab === 'inquiries'
                ? 'bg-[#B8966C] text-[#141413] font-semibold'
                : 'text-[#D8CCB8]/70 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Inquiries Queue (3)</span>
          </button>
        </ScrollFadeContainer>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 text-xs space-y-6">
          {saveFeedback && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 rounded flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{saveFeedback}</span>
            </div>
          )}

          {activeTab === 'villas' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[#D8CCB8] text-xs">
                  Demonstration of how the property owner can adjust live rates, availability flags, and descriptions for all 8 villas without writing code:
                </p>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] font-semibold tracking-wider uppercase rounded flex items-center space-x-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save All Changes</span>
                </button>
              </div>

              <div className="space-y-3">
                {villas.map((villa) => (
                  <div
                    key={villa.id}
                    className="p-4 bg-[#141413] border border-[#2C2B28] rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                  >
                    <div className="sm:col-span-3 flex items-center space-x-2.5">
                      <img
                        src={villa.heroImage}
                        alt={villa.name}
                        className="w-12 h-9 object-cover rounded border border-[#2C2B28]"
                      />
                      <div>
                        <span className="font-mono text-[#C4A27A] text-[10px] block">
                          {villa.roomNumber}
                        </span>
                        <p className="font-serif text-sm font-medium text-[#FAF8F5]">
                          {villa.name}
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="text-[10px] text-[#6B6862] block mb-0.5 uppercase">
                        Rate Per Night
                      </label>
                      <input
                        type="text"
                        value={villa.pricePerNight}
                        onChange={(e) =>
                          onUpdateVilla(villa.id, { pricePerNight: e.target.value })
                        }
                        className="w-full bg-[#1C1B1A] border border-[#2C2B28] rounded px-2.5 py-1 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#C4A27A]"
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <label className="text-[10px] text-[#6B6862] block mb-0.5 uppercase">
                        Short Summary
                      </label>
                      <input
                        type="text"
                        value={villa.shortDescription}
                        onChange={(e) =>
                          onUpdateVilla(villa.id, { shortDescription: e.target.value })
                        }
                        className="w-full bg-[#1C1B1A] border border-[#2C2B28] rounded px-2.5 py-1 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#C4A27A]"
                      />
                    </div>

                    <div className="sm:col-span-2 flex items-center justify-end">
                      <button
                        onClick={() =>
                          onUpdateVilla(villa.id, {
                            isAvailable: !villa.isAvailable,
                          })
                        }
                        className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-wider uppercase transition-colors ${
                          villa.isAvailable
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-red-950 text-red-300 border border-red-800'
                        }`}
                      >
                        {villa.isAvailable ? '● Available' : '○ Booked Out'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'property' && (
            <div className="space-y-4 max-w-2xl">
              <p className="text-[#D8CCB8]">
                Core brand configurations decoupled in data files:
              </p>

              <div>
                <label className="text-[11px] text-[#C4A27A] uppercase font-mono block mb-1">
                  Property Brand Name
                </label>
                <input
                  type="text"
                  value={propName}
                  onChange={(e) => setPropName(e.target.value)}
                  className="w-full bg-[#141413] border border-[#2C2B28] rounded p-2 text-xs text-[#FAF8F5]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-[#C4A27A] uppercase font-mono block mb-1">
                    Direct Telephone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#141413] border border-[#2C2B28] rounded p-2 text-xs text-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#C4A27A] uppercase font-mono block mb-1">
                    Concierge Email
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#141413] border border-[#2C2B28] rounded p-2 text-xs text-[#FAF8F5]"
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] font-semibold tracking-wider uppercase rounded"
              >
                Save Property Details
              </button>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#141413] border border-[#2C2B28] rounded-lg">
                <h4 className="font-serif text-base text-[#FAF8F5] mb-1">
                  Photo Asset Replacement Pipeline
                </h4>
                <p className="text-xs text-[#D8CCB8] leading-relaxed">
                  The website currently utilizes ultra-high-resolution luxury placeholder imagery tagged with <code className="text-[#C4A27A]">CLIENT_PROPERTY_IMAGES</code>. When the client supplies their real professional shoot photography, assets can be uploaded here to automatically swap across the Hero, Villas 1-8, Dining, and Gallery sections with zero code disruption.
                </p>
              </div>

              <div className="border-2 border-dashed border-[#2C2B28] rounded-xl p-10 text-center space-y-3">
                <Image className="w-10 h-10 text-[#C4A27A] mx-auto opacity-70" />
                <div>
                  <p className="text-sm font-medium text-[#FAF8F5]">
                    Client Real Photo Batch Ingestion Ready
                  </p>
                  <p className="text-xs text-[#6B6862]">
                    High resolution (JPEG, WEBP, TIFF) up to 25MB per photograph
                  </p>
                </div>
                <button
                  onClick={() => alert('Photo upload ingestion pipeline simulated for pitch presentation.')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-[#FAF8F5] rounded text-xs uppercase tracking-wider"
                >
                  Select Real Property Photos
                </button>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-3">
              <p className="text-[#D8CCB8]">
                Recent booking inquiries transmitted via the website form:
              </p>

              {[
                {
                  name: 'Lady Claire Montgomery',
                  email: 'c.montgomery@estate.co.uk',
                  villa: 'Villa 01 - Ocean Sultan Villa',
                  dates: '14 Oct - 22 Oct',
                  guests: '2 Guests',
                  status: 'Pending Concierge Review',
                },
                {
                  name: 'Dr. Jean-Pierre Laurent',
                  email: 'jp.laurent@paris.fr',
                  villa: 'Villa 06 - Palm Grove Sanctuary',
                  dates: '01 Nov - 08 Nov',
                  guests: '4 Guests',
                  status: 'Availability Confirmed',
                },
                {
                  name: 'Elena Rostova',
                  email: 'elena@rostova.com',
                  villa: 'Villa 08 - Royal Zanzibar Estate',
                  dates: '20 Dec - 03 Jan',
                  guests: '6 Guests',
                  status: 'VIP Chauffeur Arranged',
                },
              ].map((inq, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#141413] border border-[#2C2B28] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h5 className="font-medium text-sm text-[#FAF8F5]">{inq.name}</h5>
                    <p className="text-xs text-[#6B6862] font-mono">{inq.email}</p>
                    <p className="text-xs text-[#A07E54] mt-1">
                      {inq.villa} • {inq.dates} ({inq.guests})
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase font-mono tracking-wider text-[#C4A27A] self-start sm:self-auto">
                    {inq.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#2C2B28] bg-[#141413] flex items-center justify-between text-xs text-[#6B6862]">
          <span>Zanzirangi House Platform v1.0 • Pitching Demo Build</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-[#FAF8F5] rounded text-xs uppercase tracking-wider font-medium"
          >
            Close Studio
          </button>
        </div>
      </div>
    </div>
  );
};
