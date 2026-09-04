import { Language } from '../types';
import { PROPERTY_CONFIG } from './propertyConfig';

export interface ChatQuickPrompt {
  label: string;
  query: string;
}

export interface ChatLanguageConfig {
  badgeTitle: string;
  badgeStatus: string;
  headerTitle: string;
  headerStatus: string;
  welcomeMessage: string;
  inputPlaceholder: string;
  justNow: string;
  bookAction: string;
  checkAvailAction: string;
  quickPrompts: ChatQuickPrompt[];
  replies: {
    villas: string;
    transfer: string;
    dining: string;
    excursions: string;
    checkin: string;
    wifi: string;
    payment: string;
    contact: string;
    fallback: string;
  };
}

export const CHAT_TRANSLATIONS: Record<Language, ChatLanguageConfig> = {
  en: {
    badgeTitle: 'Customer Support',
    badgeStatus: 'Active 24/7',
    headerTitle: 'Customer Support',
    headerStatus: 'Active 24/7 • Instant Reply',
    welcomeMessage: 'Jambo! My name is Juma, your private concierge. How may I assist your stay in Zanzibar today?',
    inputPlaceholder: 'Ask about check-in, transfers, dining, safari...',
    justNow: 'Just now',
    bookAction: 'Book a Villa Now',
    checkAvailAction: 'Check Villa Availability',
    quickPrompts: [
      { label: '🕒 Check-in & Check-out', query: 'What are the check-in and check-out times?' },
      { label: '🚗 Airport Transfer', query: 'How does the airport transfer work and how far is it?' },
      { label: '🍳 Breakfast & Dining', query: 'Is breakfast included and what dining options are available?' },
      { label: '📶 High-Speed Wi-Fi', query: 'Is there high-speed Wi-Fi available across the property?' },
      { label: '🏊 Private Pool & Beach', query: 'Do all villas have private plunge pools and beach access?' },
      { label: '🦁 Safari & Excursions', query: 'How can we arrange a Serengeti safari or island excursions?' },
      { label: '💳 Payment & Cancellation', query: 'What payment methods and cancellation policies apply?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} offers 8 private luxury villas including our flagship Royal Presidential Villa, Sultan Oceanfront Villa, and Swahili Garden Sanctuaries. Rates start from $320/night, all featuring private plunge pools, ocean views, and 24/7 dedicated butler service.`,
      transfer: `We are located along the serene southern coastline in Kizimkazi Dimbani, Zanzibar. Abeid Amani Karume International Airport (ZNZ) is approximately 55 minutes away. We provide luxury private chauffeur transfers upon request for all guests.`,
      dining: `A gourmet tropical breakfast is included daily with every stay. Our oceanfront pavilion restaurant serves freshly caught Indian Ocean seafood, authentic Swahili spice creations, rich Arabic cuisine, and fine beverages. Private in-villa dining is available upon request.`,
      excursions: `We curate bespoke private experiences including sunset dhow sails, Menai Bay dolphin safaris, Jozani Forest tours, Stone Town heritage walks, and direct fly-in Serengeti safari expeditions.`,
      checkin: `Standard check-in is from 14:00 (2:00 PM) and check-out is until 11:00 AM. Flexible early check-in or late checkout can be accommodated based on villa availability.`,
      wifi: `Yes! High-speed Starlink satellite Wi-Fi (150+ Mbps) is complimentary across all villas, lush gardens, and dining pavilions, ensuring seamless connectivity for streaming or remote work.`,
      payment: `We accept all major credit cards (Visa, MasterCard, American Express), international bank wires, and mobile payments. Bookings offer flexible cancellation up to 14 days prior to arrival.`,
      contact: `You can reach our 24/7 concierge team directly at ${PROPERTY_CONFIG.phone} or via email at ${PROPERTY_CONFIG.email}. We are always here to make your journey extraordinary.`,
      fallback: `Thank you for your inquiry regarding ${PROPERTY_CONFIG.name}. Our dedicated concierge team will be delighted to personalize your stay. Would you like to check availability for specific dates?`,
    },
  },
  fr: {
    badgeTitle: 'Service Client',
    badgeStatus: 'Actif 24/7',
    headerTitle: 'Service Client',
    headerStatus: 'Actif 24/7 • Réponse Instantanée',
    welcomeMessage: "Jambo ! Je m'appelle Juma, votre concierge privé. Comment puis-je vous aider pour votre séjour à Zanzibar aujourd'hui ?",
    inputPlaceholder: 'Posez une question sur les arrivées, transferts, repas...',
    justNow: "À l'instant",
    bookAction: 'Réserver une villa',
    checkAvailAction: 'Vérifier la disponibilité',
    quickPrompts: [
      { label: '🕒 Heures d\'Arrivée', query: "Quels sont les horaires d'enregistrement et de départ ?" },
      { label: '🚗 Transfert Aéroport', query: "Comment fonctionne le transfert depuis l'aéroport et quelle est la distance ?" },
      { label: '🍳 Petit-déjeuner & Repas', query: "Le petit-déjeuner est-il inclus et quelles sont les options de restauration ?" },
      { label: '📶 Connexion Wi-Fi', query: "Y a-t-il une connexion Wi-Fi haut débit disponible ?" },
      { label: '🏊 Piscine & Plage', query: "Toutes les villas disposent-elles d'une piscine privée et d'un accès plage ?" },
      { label: '🦁 Safaris & Excursions', query: "Comment organiser un safari au Serengeti ou des excursions ?" },
      { label: '💳 Paiement & Annulation', query: "Quels sont les moyens de paiement et les conditions d'annulation ?" },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} propose 8 villas de luxe privées avec piscines privées et service de majordome 24h/24.`,
      transfer: `Nous sommes situés à Kizimkazi Dimbani, à environ 55 minutes de l'aéroport ZNZ. Nous assurons un transfert privé VIP avec chauffeur.`,
      dining: `Le petit-déjeuner tropical gastronomique est inclus chaque matin. Notre restaurant en bord d'océan propose fruits de mer frais et saveurs swahilies.`,
      excursions: `Nous organisons des sorties en mer avec dauphins, des croisières au coucher du soleil et des safaris aériens directs au Serengeti.`,
      checkin: `L'enregistrement s'effectue à partir de 14h00 et le départ jusqu'à 11h00. Arrivée anticipée selon les disponibilités.`,
      wifi: `Oui, une connexion satellite Starlink haut débit (150+ Mbps) est offerte dans toutes les villas et espaces communs.`,
      payment: `Nous acceptons Visa, MasterCard, Amex et virements. Annulation gratuite jusqu'à 14 jours avant votre séjour.`,
      contact: `Notre conciergerie est joignable 24h/24 au ${PROPERTY_CONFIG.phone} ou par e-mail à ${PROPERTY_CONFIG.email}.`,
      fallback: `Merci pour votre demande. Notre équipe se fera un plaisir de personnaliser votre séjour.`,
    },
  },
  sw: {
    badgeTitle: 'Huduma kwa Wateja',
    badgeStatus: 'Wazi 24/7',
    headerTitle: 'Huduma kwa Wateja',
    headerStatus: 'Wazi 24/7 • Majibu Papo Hapo',
    welcomeMessage: 'Jambo! Naitwa Juma, mhudumu wako binafsi. Nawezaje kukusaidia kuhusu makazi yako Zanzibar leo?',
    inputPlaceholder: 'Uliza kuhusu muda wa kuingia, usafiri, safari...',
    justNow: 'Sasa hivi',
    bookAction: 'Weka Villa Sasa',
    checkAvailAction: 'Angalia Upatikanaji wa Villa',
    quickPrompts: [
      { label: '🕒 Muda wa Kuingia', query: 'Muda wa kuingia na kuondoka ni saa ngapi?' },
      { label: '🚗 Usafiri wa Uwanja wa Ndege', query: 'Usafiri wa uwanja wa ndege unagharimu vipi na ni umbali gani?' },
      { label: '🍳 Chakula cha Asubuhi', query: 'Je, kifungua kinywa kinajumuishwa na vyakula gani vipo?' },
      { label: '📶 Mtandao wa Wi-Fi', query: 'Je, kuna mtandao wa Wi-Fi wenye kasi ya juu?' },
      { label: '🏊 Bwawa Binafsi na Ufukwe', query: 'Je, kila villa ina bwawa binafsi na njia ya ufukweni?' },
      { label: '🦁 Safari na Matembezi', query: 'Tunawezaje kuweka safari ya Serengeti au matembezi ya kisiwani?' },
      { label: '💳 Malipo na Kughairi', query: 'Ni njia gani za malipo na masharti ya kughairi?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} ina villa 8 za kifahari zenye mabwawa binafsi na mhudumu binafsi masaa 24.`,
      transfer: `Tupo Kizimkazi Dimbani, takriban dakika 55 kutoka uwanja wa ndege ZNZ. Tunatoa usafiri wa gari binafsi la kifahari.`,
      dining: `Kifungua kinywa cha kifahari cha matunda na vyakula vya asili kimejumuishwa kila siku. Mgahawa wetu unatoa samaki wabichi na vyakula halisi vya Kiswahili.`,
      excursions: `Tunaandaa safari za dhow, kuangalia pomboo Menai Bay, na safari za ndege moja kwa moja kwenda Serengeti.`,
      checkin: `Kuingia ni kuanzia saa 8:00 mchana (14:00) na kuondoka ni hadi saa 5:00 asubuhi (11:00 AM).`,
      wifi: `Ndiyo! Wi-Fi ya kasi ya juu kupitia Starlink (150+ Mbps) inapatikana bila malipo katika villa zote na bustani.`,
      payment: `Tunapokea kadi zote kuu za benki (Visa, MasterCard, Amex) na uhamisho wa benki. Kughairi bila malipo hadi siku 14 kabla ya kuwasili.`,
      contact: `Wasiliana nasi masaa 24 kupitia simu ${PROPERTY_CONFIG.phone} au barua pepe ${PROPERTY_CONFIG.email}.`,
      fallback: `Asante kwa kuulizia. Timu yetu itafurahi kukusaidia kufanya makazi yako yawe ya kipekee.`,
    },
  },
  es: {
    badgeTitle: 'Atención al Cliente',
    badgeStatus: 'Activo 24/7',
    headerTitle: 'Atención al Cliente',
    headerStatus: 'Activo 24/7 • Respuesta Inmediata',
    welcomeMessage: '¡Jambo! Mi nombre es Juma, su conserje privado. ¿Cómo puedo asistirle hoy con su estadía en Zanzíbar?',
    inputPlaceholder: 'Consulte sobre check-in, traslados, gastronomía, safaris...',
    justNow: 'Ahora mismo',
    bookAction: 'Reservar Villa Ahora',
    checkAvailAction: 'Ver Disponibilidad',
    quickPrompts: [
      { label: '🕒 Horarios de Check-in', query: '¿Cuáles son los horarios de entrada y salida?' },
      { label: '🚗 Traslado al Aeropuerto', query: '¿Cómo funciona el traslado desde el aeropuerto y cuánto demora?' },
      { label: '🍳 Desayuno y Comidas', query: '¿El desayuno está incluido y qué opciones gastronómicas hay?' },
      { label: '📶 Conexión Wi-Fi', query: '¿Disponen de Wi-Fi de alta velocidad en las villas?' },
      { label: '🏊 Piscina Privada y Playa', query: '¿Todas las villas tienen piscina privada y acceso a la playa?' },
      { label: '🦁 Safaris y Excursiones', query: '¿Cómo podemos reservar un safari al Serengeti o excursiones?' },
      { label: '💳 Pago y Cancelación', query: '¿Qué métodos de pago y políticas de cancelación aplican?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} cuenta con 8 villas privadas de lujo con piscina propia y mayordomo 24/7.`,
      transfer: `Estamos ubicados en Kizimkazi Dimbani, a 55 minutos del aeropuerto ZNZ. Ofrecemos traslados privados con chofer.`,
      dining: `El desayuno gourmet tropical está incluido a diario. Nuestro restaurante ofrece mariscos frescos y cocina swahili.`,
      excursions: `Organizamos paseos en dhow al atardecer, nado con delfines y vuelos directos para safaris en el Serengeti.`,
      checkin: `El check-in es a partir de las 14:00 y el check-out hasta las 11:00.`,
      wifi: `Sí, contamos con internet satelital Starlink de alta velocidad (150+ Mbps) gratuito en toda la propiedad.`,
      payment: `Aceptamos Visa, MasterCard, Amex y transferencias bancarias. Cancelación flexible hasta 14 días antes.`,
      contact: `Contáctenos al ${PROPERTY_CONFIG.phone} o ${PROPERTY_CONFIG.email}.`,
      fallback: `Gracias por su consulta. Estaremos encantados de personalizar su experiencia en Zanzíbar.`,
    },
  },
  it: {
    badgeTitle: 'Assistenza Clienti',
    badgeStatus: 'Attivo 24/7',
    headerTitle: 'Assistenza Clienti',
    headerStatus: 'Attivo 24/7 • Risposta Istantanea',
    welcomeMessage: 'Jambo! Mi chiamo Juma, il tuo concierge privato. Come posso assisterti oggi per il tuo soggiorno a Zanzibar?',
    inputPlaceholder: 'Chiedi informazioni su check-in, transfer, ristorazione...',
    justNow: 'Proprio ora',
    bookAction: 'Prenota una Villa',
    checkAvailAction: 'Verifica Disponibilità',
    quickPrompts: [
      { label: '🕒 Orari di Check-in', query: 'Quali sono gli orari di check-in e check-out?' },
      { label: '🚗 Transfer Aeroporto', query: 'Come funziona il trasferimento dall\'aeroporto e quanto dista?' },
      { label: '🍳 Colazione e Ristorante', query: 'La colazione è inclusa e quali opzioni di ristorazione sono disponibili?' },
      { label: '📶 Connessione Wi-Fi', query: 'È disponibile una connessione Wi-Fi ad alta velocità?' },
      { label: '🏊 Piscina Privata e Spiaggia', query: 'Tutte le ville hanno piscina privata e accesso alla spiaggia?' },
      { label: '🦁 Safari ed Escursioni', query: 'Come possiamo prenotare un safari nel Serengeti o escursioni?' },
      { label: '💳 Pagamenti e Cancellazione', query: 'Quali metodi di pagamento e politiche di cancellazione si applicano?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} offre 8 ville esclusive con piscina privata e maggiordomo 24/7.`,
      transfer: `Siamo a Kizimkazi Dimbani, a circa 55 minuti dall'aeroporto ZNZ. Offriamo trasferimenti privati VIP con autista.`,
      dining: `Colazione gourmet tropicale inclusa ogni giorno. Pesce fresco dell'Oceano Indiano e cucina Swahili nel nostro ristorante fronte mare.`,
      excursions: `Organizziamo escursioni con delfini, crociere al tramonto in dhow e safari in volo nel Serengeti.`,
      checkin: `Check-in dalle 14:00 e check-out fino alle 11:00.`,
      wifi: `Sì, Wi-Fi satellitare Starlink ad alta velocità (150+ Mbps) gratuito in tutte le ville e nei giardini.`,
      payment: `Accettiamo carte Visa, MasterCard, Amex e bonifici bancari. Cancellazione flessibile fino a 14 giorni prima.`,
      contact: `Contattaci 24/7 al ${PROPERTY_CONFIG.phone} o via email a ${PROPERTY_CONFIG.email}.`,
      fallback: `Grazie per la richiesta. Saremo lieti di rendere unico il tuo soggiorno.`,
    },
  },
  ar: {
    badgeTitle: 'خدمة العملاء',
    badgeStatus: 'نشط 24/7',
    headerTitle: 'خدمة العملاء',
    headerStatus: 'نشط 24/7 • رد فوري',
    welcomeMessage: 'جامبو! مرحباً بك، أنا جمعة، كونسيرجك الخاص. كيف يمكنني مساعدتك في التخطيط لإقامتك في زنجبار اليوم؟',
    inputPlaceholder: 'استفسر عن مواعيد الوصول، التوصيل، الإفطار...',
    justNow: 'الآن',
    bookAction: 'احجز فيلا الآن',
    checkAvailAction: 'تحقق من التوفر',
    quickPrompts: [
      { label: '🕒 مواعيد الوصول والمغادرة', query: 'ما هي مواعيد تسجيل الوصول والمغادرة؟' },
      { label: '🚗 التوصيل من المطار', query: 'كيف تعمل خدمة النقل من المطار وكم تستغرق؟' },
      { label: '🍳 الإفطار والمطاعم', query: 'هل وجبة الإفطار مشمولة وما هي خيارات الطعام المتوفرة؟' },
      { label: '📶 الإنترنت والواي فاي', query: 'هل تتوفر شبكة واي فاي عالية السرعة في الفلل؟' },
      { label: '🏊 المسبح الخاص والشاطئ', query: 'هل تحتوي جميع الفلل على مسبح خاص ووصول مباشر للشاطئ؟' },
      { label: '🦁 السفاري والرحلات', query: 'كيف يمكننا حجز رحلة سفاري إلى سيرينجيتي أو الجولات البحرية؟' },
      { label: '💳 الدفع وسياسة الإلغاء', query: 'ما هي طرق الدفع المتاحة وسياسة الإلغاء؟' },
    ],
    replies: {
      villas: `يوفر المنتجع 8 فلل فاخرة خاصة بمسبح خاص وخدمة خادم شخصي 24 ساعة.`,
      transfer: `يقع المنتجع في كيزيمكازي ويبعد 55 دقيقة عن مطار ZNZ مع توفير سائق خاص فاخر.`,
      dining: `الإفطار الاستوائي الفاخر مشمول يومياً مع أشهى المأكولات البحرية الحلال.`,
      excursions: `نوفر رحلات بحرية لمشاهدة الدلافين وسفاري طيران مباشر إلى سيرينجيتي.`,
      checkin: `تسجيل الوصول من 14:00 والمغادرة حتى 11:00 صباحاً.`,
      wifi: `نعم، تتوفر خدمة ستارلينك الفضائية عالية السرعة (150+ ميغابت) مجاناً في جميع الفلل.`,
      payment: `نقبل بطاقات فيزا، ماستركارد، أمريكان إكسبريس والتحويلات البنكية، مع إلغاء مرن حتى 14 يوماً قبل الموعد.`,
      contact: `يمكنكم التواصل معنا عبر ${PROPERTY_CONFIG.phone} أو البريد ${PROPERTY_CONFIG.email}.`,
      fallback: `شكراً لاستفساركم، ويسعدنا تصميم إقامة استثنائية تناسبكم.`,
    },
  },
  zh: {
    badgeTitle: '客户支持',
    badgeStatus: '24/7 在线',
    headerTitle: '客户支持',
    headerStatus: '24/7 在线 • 即时回复',
    welcomeMessage: 'Jambo！您好，我是 Juma，您的专属私人管家。请问今天能为您的桑给巴尔假期提供什么协助？',
    inputPlaceholder: '咨询入住时间、接送机、餐饮、游猎...',
    justNow: '刚刚',
    bookAction: '立即预订别墅',
    checkAvailAction: '查看空房与价格',
    quickPrompts: [
      { label: '🕒 入住与退房时间', query: '入住和退房时间是几点？' },
      { label: '🚗 机场接送服务', query: '机场接送如何安排，车程需要多久？' },
      { label: '🍳 早餐与餐饮美食', query: '是否包含早餐，提供哪些餐饮和餐厅选择？' },
      { label: '📶 高速无线网络', query: '别墅内是否有高速Wi-Fi以供办公或使用？' },
      { label: '🏊 私人泳池与海滩', query: '所有别墅都配有独立私人泳池和海滩通道吗？' },
      { label: '🦁 萨伐旅与海岛游览', query: '如何安排塞伦盖蒂大草原游猎或桑给巴尔特色出海游？' },
      { label: '💳 支付方式与取消条款', query: '支持哪些付款方式，取消政策是怎样的？' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} 拥有8栋配备独立私人泳池与24小时专属管家的奢华海景及花园别墅。`,
      transfer: `我们位于桑给巴尔南部的 Kizimkazi，距国际机场（ZNZ）约55分钟车程，提供尊享豪华专车接送服务。`,
      dining: `每日免费提供精致热带鲜果早餐。海景餐厅提供新鲜捕捞的印度洋海鲜及斯瓦希里香料料理。`,
      excursions: `我们提供私人日落帆船、海豚寻踪及直飞塞伦盖蒂大草原的国家公园野生动物游猎。`,
      checkin: `标准入住时间为 14:00 起，退房时间为上午 11:00 前。`,
      wifi: `全庄园覆盖免费 Starlink 星链高速卫星 Wi-Fi（150+ Mbps），信号畅通。`,
      payment: `支持 Visa、MasterCard、Amex 信用卡及国际电汇。入住前14天可享灵活免费取消政策。`,
      contact: `随时致电 ${PROPERTY_CONFIG.phone} 或发送邮件至 ${PROPERTY_CONFIG.email} 联系管家团队。`,
      fallback: `感谢您的咨询，私人管家团队非常乐意为您量身定制入住行程。`,
    },
  },
  pl: {
    badgeTitle: 'Wsparcie Klienta',
    badgeStatus: 'Aktywny 24/7',
    headerTitle: 'Wsparcie Klienta',
    headerStatus: 'Aktywny 24/7 • Błyskawiczna Odpowiedź',
    welcomeMessage: 'Jambo! Nazywam się Juma, Twój prywatny konsjerż. W czym mogę Ci pomóc podczas planowania Twojego pobytu na Zanzibarze?',
    inputPlaceholder: 'Zapytaj o godziny zameldowania, transfer, safari...',
    justNow: 'Przed chwilą',
    bookAction: 'Zarezerwuj Willę',
    checkAvailAction: 'Sprawdź Dostępność',
    quickPrompts: [
      { label: '🕒 Godziny Zameldowania', query: 'Jakie są godziny zameldowania i wymeldowania?' },
      { label: '🚗 Transfer z Lotniska', query: 'Jak działa transfer z lotniska i ile trwa przejazd?' },
      { label: '🍳 Śniadania i Restauracja', query: 'Czy śniadanie jest w cenie i jakie są opcje kulinarne?' },
      { label: '📶 Szybki Internet Wi-Fi', query: 'Czy w willach jest dostępny szybki internet Wi-Fi?' },
      { label: '🏊 Prywatny Basen i Plaża', query: 'Czy każda willa ma prywatny basen i bezpośrednie wyjście na plażę?' },
      { label: '🦁 Safari w Serengeti', query: 'Jak zorganizować lot i safari w Serengeti lub wycieczki?' },
      { label: '💳 Płatności i Odwołanie', query: 'Jakie są metody płatności i warunki anulacji rezerwacji?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} oferuje 8 luksusowych willi z prywatnymi basenami i dedykowaną obsługą lokaja 24/7.`,
      transfer: `Znajdujemy się w Kizimkazi, ok. 55 minut od lotniska ZNZ. Zapewniamy komfortowy prywatny transfer z kierowcą.`,
      dining: `Wyborne tropikalne śniadanie jest wliczone w cenę każdego pobytu. Restauracja serwuje świeże ryby i lokalne specjały.`,
      excursions: `Organizujemy rejsy z delfinami, wycieczki dhow o zachodzie słońca oraz lotnicze safari do Serengeti.`,
      checkin: `Zameldowanie od 14:00, wymeldowanie do 11:00.`,
      wifi: `Tak, na terenie całego obiektu działa bezpłatny, szybki internet satelitarny Starlink (150+ Mbps).`,
      payment: `Akceptujemy karty Visa, MasterCard, Amex i przelewy bankowe. Bezpłatne odwołanie rezerwacji do 14 dni przed przyjazdem.`,
      contact: `Skontaktuj się z nami: ${PROPERTY_CONFIG.phone} lub ${PROPERTY_CONFIG.email}.`,
      fallback: `Dziękujemy za kontakt. Z przyjemnością odpowiemy na wszelkie pytania.`,
    },
  },
};
