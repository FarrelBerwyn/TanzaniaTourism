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
    welcomeMessage: `Jambo! My name is Juma, your private concierge at ${PROPERTY_CONFIG.name}. How may I assist your stay in Zanzibar today?`,
    inputPlaceholder: 'Ask anything about your stay...',
    justNow: 'Just now',
    bookAction: 'Book a Villa Now',
    checkAvailAction: 'Check Villa Availability',
    quickPrompts: [
      { label: '🏖️ Villa Availability', query: 'Tell me about available villas and rates.' },
      { label: '🚗 Airport Transfer', query: 'How far is Zanzirangi House from Zanzibar Airport?' },
      { label: '🍽️ Dining & Cuisine', query: 'What dining and restaurant options are available?' },
      { label: '⛵ Excursions & Safari', query: 'What experiences and excursions can we arrange?' },
      { label: '🕒 Check-in Times', query: 'What are the check-in and check-out times?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} offers 8 private luxury villas including our flagship Royal Presidential Villa, Sultan Oceanfront Villa, and Swahili Garden Sanctuaries. Rates start from $320/night, all featuring private plunge pools, ocean views, and 24/7 dedicated butler service.`,
      transfer: `We are located along the serene southern coastline in Kizimkazi Dimbani, Zanzibar. Abeid Amani Karume International Airport (ZNZ) is approximately 55 minutes away. We provide luxury private chauffeur transfers upon request for all guests.`,
      dining: `Our oceanfront pavilion restaurant serves freshly caught Indian Ocean seafood, authentic Swahili spice creations, rich Arabic cuisine, and fine beverages. Private in-villa dining and romantic beach dinners are always available.`,
      excursions: `We curate bespoke private experiences including sunset dhow sails, Menai Bay dolphin safaris, Jozani Forest tours, Stone Town heritage walks, and direct fly-in Serengeti safari expeditions.`,
      checkin: `Standard check-in is from 14:00 (2:00 PM) and check-out is until 11:00 AM. Flexible early check-in or late checkout can be accommodated based on villa availability.`,
      contact: `You can reach our 24/7 concierge team directly at ${PROPERTY_CONFIG.phone} or via email at ${PROPERTY_CONFIG.email}. We are always here to make your journey extraordinary.`,
      fallback: `Thank you for your inquiry regarding ${PROPERTY_CONFIG.name}. Our dedicated concierge team will be delighted to personalize your stay. Would you like to check availability for specific dates?`,
    },
  },
  fr: {
    badgeTitle: 'Service Client',
    badgeStatus: 'Actif 24/7',
    headerTitle: 'Service Client',
    headerStatus: 'Actif 24/7 • Réponse Instantanée',
    welcomeMessage: `Jambo ! Je m'appelle Juma, votre concierge privé à ${PROPERTY_CONFIG.name}. Comment puis-je vous aider pour votre séjour à Zanzibar aujourd'hui ?`,
    inputPlaceholder: 'Posez une question sur votre séjour...',
    justNow: "À l'instant",
    bookAction: 'Réserver une villa',
    checkAvailAction: 'Vérifier la disponibilité',
    quickPrompts: [
      { label: '🏖️ Villas & Tarifs', query: 'Parlez-moi des villas disponibles et des tarifs.' },
      { label: '🚗 Transfert Aéroport', query: 'À quelle distance se trouve Zanzirangi House de l\'aéroport ?' },
      { label: '🍽️ Restauration & Menu', query: 'Quelles sont les options de restauration disponibles ?' },
      { label: '⛵ Excursions & Safari', query: 'Quelles expériences et excursions proposez-vous ?' },
      { label: '🕒 Heures d\'Arrivée', query: "Quels sont les horaires d'enregistrement et de départ ?" },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} propose 8 villas de luxe privées, dont notre Villa Présidentielle Royale, la Villa Sultan Face à l'Océan et nos Sanctuaires Swahili. Tarifs à partir de 320 $/nuit avec piscine privée et majordome 24h/24.`,
      transfer: `Nous sommes situés sur la côte sud à Kizimkazi Dimbani, Zanzibar. L'aéroport international Abeid Amani Karume (ZNZ) est à environ 55 minutes. Nous organisons des transferts privés avec chauffeur sur demande.`,
      dining: `Notre restaurant en bord d'océan propose des poissons frais de l'océan Indien, une cuisine swahilie authentique, des spécialités arabes et des boissons raffinées. Dîners privés en villa disponibles.`,
      excursions: `Nous organisons des excursions sur mesure : croisières en boutre au coucher du soleil, safaris dauphins dans la baie de Menai, forêt de Jozani, Stone Town et safaris dans le Serengeti.`,
      checkin: `L'enregistrement s'effectue à partir de 14h00 et le départ jusqu'à 11h00. Une flexibilité d'arrivée anticipée est possible selon les disponibilités.`,
      contact: `Notre conciergerie est joignable 24h/24 au ${PROPERTY_CONFIG.phone} ou par e-mail à ${PROPERTY_CONFIG.email}.`,
      fallback: `Merci pour votre demande concernant ${PROPERTY_CONFIG.name}. Notre équipe de conciergerie sera ravie de personnaliser votre séjour. Souhaitez-vous vérifier les disponibilités ?`,
    },
  },
  sw: {
    badgeTitle: 'Huduma kwa Wateja',
    badgeStatus: 'Wazi 24/7',
    headerTitle: 'Huduma kwa Wateja',
    headerStatus: 'Wazi 24/7 • Majibu Papo Hapo',
    welcomeMessage: `Jambo! Naitwa Juma, mhudumu wako binafsi hapa ${PROPERTY_CONFIG.name}. Nawezaje kukusaidia kuhusu makazi yako Zanzibar leo?`,
    inputPlaceholder: 'Uliza chochote kuhusu makazi yako...',
    justNow: 'Sasa hivi',
    bookAction: 'Weka Villa Sasa',
    checkAvailAction: 'Angalia Upatikanaji wa Villa',
    quickPrompts: [
      { label: '🏖️ Nafasi za Villa', query: 'Niambie kuhusu villa zilizopo na bei zake.' },
      { label: '🚗 Usafiri wa Uwanja wa Ndege', query: 'Zanzirangi House iko umbali gani kutoka uwanja wa ndege?' },
      { label: '🍽️ Chakula na Vinywaji', query: 'Ni vyakula na mikahawa gani inayopatikana?' },
      { label: '⛵ Matembezi na Safari', query: 'Ni shughuli na matembezi gani mnaweza kuandaa?' },
      { label: '🕒 Muda wa Kuingia', query: 'Muda wa kuingia na kuondoka ni saa ngapi?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} ina villa 8 za kifahari ikiwemo Royal Presidential Villa, Sultan Oceanfront Villa, na bustani za Waswahili. Bei zinaanza $320 kwa usiku, zote zikiwa na bwawa binafsi na huduma ya mhudumu binafsi masaa 24.`,
      transfer: `Tupo pwani tulivu ya kusini huko Kizimkazi Dimbani, Zanzibar. Uwanja wa Ndege wa Kimataifa wa Abeid Amani Karume (ZNZ) uko takriban dakika 55. Tunatoa usafiri wa gari binafsi la kifahari kwa wageni wote.`,
      dining: `Mgahawa wetu wa ufukweni unatoa samaki wabichi wa Bahari ya Hindi, vyakula halisi vya Kiswahili, mapishi ya Kiarabu, na vinywaji safi. Chakula cha faragha ndani ya villa kinapatikana pia.`,
      excursions: `Tunaandaa safari maalum kama kusafiri na jahazi wakati wa machweo, kuangalia pomboo Menai Bay, msitu wa Jozani, matembezi ya Stone Town, na safari za ndege kwenda Serengeti.`,
      checkin: `Kuingia ni kuanzia saa 8:00 mchana (14:00) na kuondoka ni hadi saa 5:00 asubuhi (11:00 AM). Kuingia mapema kunawezekana kulingana na nafasi zilizopo.`,
      contact: `Unaweza kuwasiliana na timu yetu masaa 24 kupitia simu ${PROPERTY_CONFIG.phone} au barua pepe ${PROPERTY_CONFIG.email}.`,
      fallback: `Asante kwa kuulizia kuhusu ${PROPERTY_CONFIG.name}. Timu yetu itafurahi kukusaidia kufanya makazi yako yawe ya kipekee. Je, ungependa kuangalia upatikanaji wa tarehe fulani?`,
    },
  },
  es: {
    badgeTitle: 'Atención al Cliente',
    badgeStatus: 'Activo 24/7',
    headerTitle: 'Atención al Cliente',
    headerStatus: 'Activo 24/7 • Respuesta Inmediata',
    welcomeMessage: `¡Jambo! Mi nombre es Juma, su conserje privado en ${PROPERTY_CONFIG.name}. ¿Cómo puedo asistirle hoy con su estadía en Zanzíbar?`,
    inputPlaceholder: 'Consulte lo que desee sobre su estancia...',
    justNow: 'Ahora mismo',
    bookAction: 'Reservar Villa Ahora',
    checkAvailAction: 'Ver Disponibilidad',
    quickPrompts: [
      { label: '🏖️ Disponibilidad de Villas', query: 'Infórmame sobre las villas disponibles y sus tarifas.' },
      { label: '🚗 Traslado al Aeropuerto', query: '¿A qué distancia está Zanzirangi House del aeropuerto?' },
      { label: '🍽️ Gastronomía y Menú', query: '¿Qué opciones de restaurante y gastronomía ofrecen?' },
      { label: '⛵ Excursiones y Safari', query: '¿Qué experiencias y excursiones pueden organizar?' },
      { label: '🕒 Horarios de Check-in', query: '¿Cuáles son los horarios de entrada y salida?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} cuenta con 8 villas privadas de lujo, incluyendo nuestra Villa Presidencial Real, la Villa Frente al Océano Sultán y Santuarios de Jardín Swahili. Tarifas desde $320/noche con piscina privada y servicio de mayordomo 24/7.`,
      transfer: `Nos encontramos en la costa sur en Kizimkazi Dimbani, Zanzíbar. El Aeropuerto Internacional Abeid Amani Karume (ZNZ) está a 55 minutos. Brindamos traslados privados de lujo previa solicitud.`,
      dining: `Nuestro restaurante pabellón frente al mar ofrece mariscos frescos del Océano Índico, cocina tradicional swahili, gastronomía árabe y una exquisita selección de bebidas. Cenas privadas en villa disponibles.`,
      excursions: `Organizamos paseos en dhow al atardecer, safaris de delfines en la bahía de Menai, visitas al bosque de Jozani, recorridos históricos en Stone Town y expediciones directas en avión al Serengeti.`,
      checkin: `El horario de check-in es a partir de las 14:00 y el check-out hasta las 11:00. Disponemos de flexibilidad según la disponibilidad de villas.`,
      contact: `Puede contactar a nuestro equipo de conserjería 24/7 al ${PROPERTY_CONFIG.phone} o por correo a ${PROPERTY_CONFIG.email}.`,
      fallback: `Gracias por su consulta sobre ${PROPERTY_CONFIG.name}. Estaremos encantados de personalizar su experiencia en Zanzíbar. ¿Desea consultar fechas disponibles?`,
    },
  },
  it: {
    badgeTitle: 'Assistenza Clienti',
    badgeStatus: 'Attivo 24/7',
    headerTitle: 'Assistenza Clienti',
    headerStatus: 'Attivo 24/7 • Risposta Istantanea',
    welcomeMessage: `Jambo! Mi chiamo Juma, il tuo concierge privato a ${PROPERTY_CONFIG.name}. Come posso assisterti oggi per il tuo soggiorno a Zanzibar?`,
    inputPlaceholder: 'Chiedi qualsiasi cosa sul tuo soggiorno...',
    justNow: 'Proprio ora',
    bookAction: 'Prenota una Villa',
    checkAvailAction: 'Verifica Disponibilità',
    quickPrompts: [
      { label: '🏖️ Ville e Tariffe', query: 'Parlami delle nostre ville disponibili e delle tariffe.' },
      { label: '🚗 Trasferimento Aeroporto', query: 'Quanto dista Zanzirangi House dall\'aeroporto di Zanzibar?' },
      { label: '🍽️ Ristorazione & Cucina', query: 'Quali opzioni gastronomiche sono disponibili?' },
      { label: '⛵ Escursioni & Safari', query: 'Quali esperienze ed escursioni potete organizzare?' },
      { label: '🕒 Orari di Check-in', query: 'Quali sono gli orari di check-in e check-out?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} offre 8 ville esclusive di lusso, tra cui la Royal Presidential Villa, la Sultan Oceanfront Villa e i rifugi Swahili. Tariffe da $320 a notte con piscina privata e maggiordomo dedicato 24/7.`,
      transfer: `Siamo situati lungo la costa meridionale a Kizimkazi Dimbani, Zanzibar. L'aeroporto internazionale Abeid Amani Karume (ZNZ) dista circa 55 minuti. Offriamo trasferimenti privati con autista su richiesta.`,
      dining: `Il nostro ristorante fronte oceano propone pesce fresco dell'Oceano Indiano, autentica cucina Swahili, specialità arabe e bevande selezionate. Possibilità di cene romantiche private in villa.`,
      excursions: `Organizziamo tour in dhow al tramonto, safari con delfini nella Baia di Menai, escursioni nella foresta di Jozani, tour di Stone Town e safari in volo nel Serengeti.`,
      checkin: `Il check-in standard è dalle 14:00 e il check-out fino alle 11:00. Check-in anticipato flessibile in base alla disponibilità delle ville.`,
      contact: `Puoi contattare il nostro concierge 24/7 al ${PROPERTY_CONFIG.phone} o via email a ${PROPERTY_CONFIG.email}.`,
      fallback: `Grazie per la tua richiesta riguardo a ${PROPERTY_CONFIG.name}. Il nostro team di concierge sarà lieto di personalizzare il tuo soggiorno. Vuoi verificare la disponibilità delle date?`,
    },
  },
  ar: {
    badgeTitle: 'خدمة العملاء',
    badgeStatus: 'نشط 24/7',
    headerTitle: 'خدمة العملاء',
    headerStatus: 'نشط 24/7 • رد فوري',
    welcomeMessage: `جامبو! مرحباً بك، أنا جمعة، كونسيرجك الخاص في ${PROPERTY_CONFIG.name}. كيف يمكنني مساعدتك في التخطيط لإقامتك في زنجبار اليوم؟`,
    inputPlaceholder: 'اسأل عن أي تفاصيل تخص إقامتك...',
    justNow: 'الآن',
    bookAction: 'احجز فيلا الآن',
    checkAvailAction: 'تحقق من التوفر',
    quickPrompts: [
      { label: '🏖️ توفر الفلل والأسعار', query: 'أخبرني عن الفلل المتوفرة والأسعار.' },
      { label: '🚗 التوصيل من المطار', query: 'كم تبعد زانزيرانجي هاوس عن مطار زنجبار؟' },
      { label: '🍽️ المطاعم والمأكولات', query: 'ما هي خيارات المأكولات والمطاعم المتاحة؟' },
      { label: '⛵ الرحلات والسفاري', query: 'ما هي الأنشطة والرحلات البحرية والسفاري المتاحة؟' },
      { label: '🕒 مواعيد تسجيل الوصول', query: 'ما هي مواعيد تسجيل الوصول والمغادرة؟' },
    ],
    replies: {
      villas: `يوفر ${PROPERTY_CONFIG.name} 8 فلل فاخرة خاصة تشمل الفيلا الرئاسية الملكية وفيلا السلطان المطلة مباشرة على المحيط. تبدأ الأسعار من 320 دولاراً لليلة، وجميعها مزودة بمسبح خاص وخدمة الخادم الشخصي على مدار 24 ساعة.`,
      transfer: `يقع المنتجع على الساحل الجنوبي الهادئ في كيزيمكازي ديمباني، زنجبار. يبعد مطار عبيد أماني كرامي الدولي (ZNZ) حوالي 55 دقيقة. نوفر خدمات نقل خاصة بسيارات وسائقين فاخرين لجميع الضيوف.`,
      dining: `يقدم جناح المطعم المطل على المحيط أشهى المأكولات البحرية الطازجة، ونكهات التوابل السواحيلية الأصيلة، والمأكولات العربية الفاخرة، ومجموعة من المشروبات والعصائر الطبيعية. تتوفر أيضاً خدمة العشاء الخاص داخل الفيلا.`,
      excursions: `ننظم تجارب حصرية مصممة خصيصاً تشمل رحلات القوارب الشراعية التقليدية (الداو) عند الغروب، وسفاري الدلافين في خليج ميناي، وغابة جوزاني، وجولات ستون تاون التراثية، ورحلات سفاري طيران مباشرة إلى سيرينجيتي.`,
      checkin: `يبدأ تسجيل الوصول القياسي من الساعة 14:00 (2:00 ظهراً) وتسجيل المغادرة حتى الساعة 11:00 صباحاً. يمكن تلبية تسجيل الوصول المبكر مجاناً حسب توفر الفلل.`,
      contact: `يمكنكم التواصل مع فريق الكونسيرج المتواجد 24/7 مباشرة عبر الهاتف ${PROPERTY_CONFIG.phone} أو البريد الإلكتروني ${PROPERTY_CONFIG.email}.`,
      fallback: `شكراً لاستفساركم عن ${PROPERTY_CONFIG.name}. يسعد فريق الكونسيرج الخاص بنا تصميم إقامة استثنائية تناسب تطلعاتكم. هل ترغبون بالتحقق من التواريخ المتاحة؟`,
    },
  },
  zh: {
    badgeTitle: '客户支持',
    badgeStatus: '24/7 在线',
    headerTitle: '客户支持',
    headerStatus: '24/7 在线 • 即时回复',
    welcomeMessage: `Jambo！您好，我是 Juma，您在 ${PROPERTY_CONFIG.name} 的专属私人管家。请问今天能为您的桑给巴尔奢华假期提供什么协助？`,
    inputPlaceholder: '咨询关于入住的任何问题...',
    justNow: '刚刚',
    bookAction: '立即预订别墅',
    checkAvailAction: '查看空房与价格',
    quickPrompts: [
      { label: '🏖️ 别墅房型与价格', query: '请介绍可预订的别墅房型及价格。' },
      { label: '🚗 机场接送服务', query: 'Zanzirangi House 距离机场有多远？' },
      { label: '🍽️ 餐饮与美食品鉴', query: '度假村提供哪些餐饮与餐厅选择？' },
      { label: '⛵ 游览探索与游猎', query: '可以为我们安排哪些特色体验与萨伐旅？' },
      { label: '🕒 入住与退房时间', query: '入住和退房时间是几点？' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} 拥有8栋独立私密奢华别墅，包括皇家总统别墅、苏丹海景别墅以及斯瓦希里花园秘境别墅。房价每晚320美元起，均配备私人无边泳池、印度洋全景和24小时专属管家服务。`,
      transfer: `我们坐落于桑给巴尔风景秀丽的南部海岸 Kizimkazi Dimbani。距离阿贝德·阿马尼·卡鲁姆国际机场（ZNZ）约55分钟车程。我们为所有贵宾提供豪华专车私人接送机服务。`,
      dining: `我们的海滨水上餐厅甄选印度洋鲜捕海鲜、地道斯瓦希里香料美食、阿拉伯特色佳肴以及精选美酒与鲜榨果汁饮品。亦可由行政总厨为您安排私密别墅晚餐或海滩烛光晚餐。` ,
      excursions: `我们精心策划专属私人定制行程，包括传统单桅帆船日落巡游、梅奈湾海豚寻踪、约扎尼红疣猴森林探秘、石头城文化巡礼，以及直飞塞伦盖蒂大草原的国家公园游猎之旅。`,
      checkin: `标准入住时间为下午 14:00 起，退房时间为上午 11:00 前。视别墅空房情况，我们非常乐意为您提供灵活的提早入住或延迟退房服务。`,
      contact: `您可随时拨打电话 ${PROPERTY_CONFIG.phone} 或发送电邮至 ${PROPERTY_CONFIG.email} 联系我们的24小时管家团队。我们将竭诚为您打造非凡假期。`,
      fallback: `感谢您对 ${PROPERTY_CONFIG.name} 的咨询。我们的专属私人管家团队非常乐意为您定制完美的入住行程。请问您需要查询特定日期的空房状态吗？`,
    },
  },
  pl: {
    badgeTitle: 'Wsparcie Klienta',
    badgeStatus: 'Aktywny 24/7',
    headerTitle: 'Wsparcie Klienta',
    headerStatus: 'Aktywny 24/7 • Błyskawiczna Odpowiedź',
    welcomeMessage: `Jambo! Nazywam się Juma, Twój prywatny konsjerż w ${PROPERTY_CONFIG.name}. W czym mogę Ci pomóc podczas planowania Twojego pobytu na Zanzibarze?`,
    inputPlaceholder: 'Zadaj pytanie o wille, safari, dojazd...',
    justNow: 'Przed chwilą',
    bookAction: 'Zarezerwuj Willę',
    checkAvailAction: 'Sprawdź Dostępność',
    quickPrompts: [
      { label: '🏖️ Dostępność i Ceny', query: 'Jakie wille są dostępne i jakie są stawki za noc?' },
      { label: '🚗 Transfer z Lotniska', query: 'Jak daleko jest z lotniska do Zanzirangi House?' },
      { label: '🍽️ Restauracja i Dania', query: 'Jakie opcje kulinarne i posiłki serwuje restauracja?' },
      { label: '🦁 Safari w Serengeti', query: 'Czy organizujecie loty i safari do Serengeti?' },
      { label: '🕒 Godziny Zameldowania', query: 'Jakie są godziny zameldowania i wymeldowania?' },
    ],
    replies: {
      villas: `${PROPERTY_CONFIG.name} oferuje 8 kameralnych luksusowych rezydencji, w tym Willę Prezydencką, Willę Sułtana z prywatnym basenem oraz zaciszne bungalowy w tropikalnym ogrodzie. Ceny od $320/noc ze śniadaniem i prywatną obsługą lokaja.`,
      transfer: `Znajdujemy się na malowniczym południowym wybrzeżu Zanzibaru w Kizimkazi Dimbani. Lotnisko Abeid Amani Karume (ZNZ) oddalone jest o ok. 55 minut jazdy. Zapewniamy prywatne transfery VIP z powitaniem na lotnisku.`,
      dining: `Nasza restauracja serwuje świeże ryby i owoce morza z Oceanu Indyjskiego, autorskie dania kuchni suahilijskiej oraz ekologiczne warzywa i zioła z własnego ogrodu. Dostępne są również prywatne kolacje w willi lub na plaży.`,
      excursions: `Organizujemy prywatne wyprawy: poranne rejsy z delfinami w zatoce Menai, nurkowanie na rafie koralowej Mnemba, spacer z historykiem po Stone Town oraz czarterowe ekspedycje safari do Serengeti i Ngorongoro.`,
      checkin: `Standardowe zameldowanie odbywa się od godziny 14:00, a wymeldowanie do godziny 11:00. W zależności od dostępności oferujemy bezpłatne wcześniejsze zameldowanie lub późniejszy wyjazd.`,
      contact: `Możesz skontaktować się z nami bezpośrednio pod numerem telefonu ${PROPERTY_CONFIG.phone} lub mailowo pod adresem ${PROPERTY_CONFIG.email}. Z przyjemnością zaplanujemy każdy detal Twojej podróży.`,
      fallback: `Dziękujemy za kontakt z ${PROPERTY_CONFIG.name}. Nasz dedykowany zespół konsjerża z radością odpowie na Twoje pytania i pomoże zaplanować niezapomniany pobyt. Czy chcesz sprawdzić terminy?`,
    },
  },
};
