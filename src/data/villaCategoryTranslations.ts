import { Language } from '../types';

export interface CategoryOverview {
  tag: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface VillasCategoryTranslation {
  all: string;
  villas: string;
  bungalows: string;
  rooms: string;
  categories: {
    all: CategoryOverview;
    villas: CategoryOverview;
    bungalows: CategoryOverview;
    rooms: CategoryOverview;
  };
  ui: {
    prev: string;
    next: string;
    viewCarousel: string;
    viewGrid: string;
    unitCount: (count: number) => string;
    startingFrom: string;
    perNight: string;
    viewDetails: string;
    inquireNow: string;
    page: string;
    of: string;
  };
}

export const VILLA_CATEGORY_TRANSLATIONS: Record<Language, VillasCategoryTranslation> = {
  en: {
    all: 'All Accommodations',
    villas: 'Villas',
    bungalows: 'Bungalows',
    rooms: 'Suites & Rooms',
    categories: {
      all: {
        tag: 'Complete Sanctuary Collection',
        title: 'Eight Distinct Sanctuaries in Kizimkazi',
        description: 'Explore our full array of private sanctuaries along the southern coast of Zanzibar — from beachfront multi-pool residences to tranquil botanical garden bungalows and ocean-facing suites.',
        highlights: ['100% Ocean & Garden Views', 'Private Butler Care', 'Gourmet In-Villa Breakfast', 'High-Speed Starlink Wi-Fi'],
      },
      villas: {
        tag: 'Exclusive Private Pool Sanctuaries',
        title: 'Oceanfront Villas with Private Pools',
        description: 'Designed for sublime coastal living, featuring private fresh water plunge and lap pools, direct beach coves, antique Zanzibari carved doors, and 24/7 dedicated butler service.',
        highlights: ['Private Infinity & Lap Pools', 'Direct Ocean & Beach Access', 'Dedicated 24/7 Butler Service', 'Sunset Observation Lounges'],
      },
      bungalows: {
        tag: 'Artisanal Eco-Luxury Escapes',
        title: 'Traditional Thatched Garden Bungalows',
        description: 'Immersed within fragrant frangipani courtyards and centenary baobab groves. Built with sustainably harvested timber, handwoven makuti thatch, and open-air tropical rain showers.',
        highlights: ['Open-Air Tropical Rain Showers', 'Centenary Baobab Courtyard', 'Handwoven Makuti Thatch', 'Natural Cross-Breeze Cooling'],
      },
      rooms: {
        tag: 'Panoramic Elevated Suites',
        title: 'Ocean Horizon Suites & Pavilions',
        description: 'Minimalist coastal design elevated for panoramic vistas over Menai Bay Marine Reserve. Equipped with private rooftop stargazing daybeds and high-power nautical binoculars for dolphin watching.',
        highlights: ['Rooftop Stargazing Daybed', '180° Dolphin Watching Horizon', 'Minimalist Scandinavian-Swahili Design', 'Bang & Olufsen Acoustics'],
      },
    },
    ui: {
      prev: 'Previous Accommodation',
      next: 'Next Accommodation',
      viewCarousel: 'Horizontal Scroll',
      viewGrid: 'Grid View',
      unitCount: (count: number) => `${count} Sanctuaries`,
      startingFrom: 'From',
      perNight: 'per night',
      viewDetails: 'Explore',
      inquireNow: 'Inquire',
      page: 'Card',
      of: 'of',
    },
  },
  pl: {
    all: 'Wszystkie Apartamenty',
    villas: 'Wille',
    bungalows: 'Bungalowy',
    rooms: 'Pokoje i Apartamenty',
    categories: {
      all: {
        tag: 'Kompletna Kolekcja Rezydencji',
        title: 'Osiem Unikalnych Oaz w Kizimkazi',
        description: 'Odkryj naszą pełną kolekcję prywatnych oaz na południowym wybrzeżu Zanzibaru — od willi z prywatnymi basenami przy plaży, po zaciszne bungalowy w tropikalnym ogrodzie i widokowe apartamenty.',
        highlights: ['Widok na Ocean i Ogród', 'Osobisty Konsjerż', 'Wykwintne Śniadania w Willi', 'Szybki Internet Starlink'],
      },
      villas: {
        tag: 'Ekskluzywne Wille z Basenem',
        title: 'Wille przy Plaży z Prywatnymi Basenami',
        description: 'Zaprojektowane z myślą o najwyższym komforcie i luksusie, z prywatnymi basenami, bezpośrednim zejściem na plażę, zabytkowymi rzeźbionymi drzwiami i całodobową opieką prywatnego kamerdynera.',
        highlights: ['Prywatne Baseny z Widokiem', 'Bezpośrednie Zejście na Plażę', 'Dedykowany Kamerdyner 24/7', 'Taras Zachodzącego Słońca'],
      },
      bungalows: {
        tag: 'Artystyczny Eko-Luksus',
        title: 'Tradycyjne Bungalowy z Dachami Makuti',
        description: 'Otoczone pachnącymi ogrodami plumerii i wiekowymi baobabami. Zbudowane z drewna i strzechy palmowej makuti, z prysznicami pod otwartym niebem.',
        highlights: ['Prysznice pod Gwiazdami', 'Dziedziniec Wiekowiecznych Baobabów', 'Naturalna Strzecha Makuti', 'Ekologiczny Chłód Morskiej Bryzy'],
      },
      rooms: {
        tag: 'Panoramiczne Apartamenty',
        title: 'Apartamenty z Widokiem na Horyzont',
        description: 'Minimalistyczny nadmorski design z widokiem na rezerwat Menai Bay. Z prywatnymi tarasami na dachu do obserwacji gwiazd i lornetkami do podglądania delfinów.',
        highlights: ['Taras Dachowy do Gwiazd', 'Horyzont z Delfinami 180°', 'Skandynawsko-Suahilijski Minimalizm', 'Nagłośnienie Bang & Olufsen'],
      },
    },
    ui: {
      prev: 'Poprzedni Apartament',
      next: 'Następny Apartament',
      viewCarousel: 'Przewijanie Poziome',
      viewGrid: 'Widok Siatki',
      unitCount: (count: number) => `${count} Rezydencji`,
      startingFrom: 'Od',
      perNight: 'za noc',
      viewDetails: 'Odkryj',
      inquireNow: 'Zapytaj',
      page: 'Karta',
      of: 'z',
    },
  },
  sw: {
    all: 'Makazi Yote',
    villas: 'Majumba (Villas)',
    bungalows: 'Bungalow',
    rooms: 'Vyumba na Vyumba Maalum',
    categories: {
      all: {
        tag: 'Mkusanyiko Kamili wa Makazi',
        title: 'Makazi Manane ya Kipekee Kizimkazi',
        description: 'Gundua mkusanyiko wetu kamili wa makazi ya amani pwani ya kusini mwa Zanzibar — kuanzia majumba yenye mabwawa binafsi hadi bungalow za bustani tulivu na vyumba vya ghorofa vinavyotazama bahari.',
        highlights: ['Mandhari ya Bahari na Bustani', 'Mhudumu Binafsi wa 24/7', 'Kiamsha Kinywa cha Kifahari', 'Wi-Fi ya Kasi ya Juu'],
      },
      villas: {
        tag: 'Majumba yenye Mabwawa Binafsi',
        title: 'Majumba ya Pwani yenye Mabwawa Binafsi',
        description: 'Yameundwa kwa maisha bora ya pwani, yakiwa na mabwawa binafsi ya maji baridi, njia ya moja kwa moja ya mchanga ufukweni, na huduma ya mhudumu binafsi saa 24.',
        highlights: ['Bwawa Binafsi la Kuogelea', 'Kuingia Moja kwa Moja Ufukweni', 'Huduma ya Mhudumu 24/7', 'Kilio cha Jua Linapozama'],
      },
      bungalows: {
        tag: 'Ujenzi wa Asili wa Kifahari',
        title: 'Bungalow za Asili zenye Paa la Makuti',
        description: 'Zimezungukwa na miti ya maua na mibaobab ya kale. Zimejengwa kwa mbao za asili na paa la makuti lenye upepo mwanana na bafu za asili za wazi chini ya nyota.',
        highlights: ['Bafu ya Wazi ya Mvua', 'Uwanja wa Mibaobab ya Kale', 'Paa la Asili la Makuti', 'Upepo Mwanana wa Bahari'],
      },
      rooms: {
        tag: 'Vyumba vya Juu vya Mandhari',
        title: 'Vyumba Maalum vya Kutazama Bahari',
        description: 'Muundo wa kisasa wenye mandhari pana ya Hifadhi ya Bahari ya Menai. Vyumba hivi vina sebule ya juu ya kutazama nyota na darubini ya kuangalia pomboo.',
        highlights: ['Tuta la Juu Kutazama Nyota', 'Mandhari ya Pomboo ya 180°', 'Ubunifu Rahisi wa Kisasa', 'Muziki wa Bang & Olufsen'],
      },
    },
    ui: {
      prev: 'Chumba Kilichopita',
      next: 'Chumba Kinachofuata',
      viewCarousel: 'Mzunguko wa Mlalo',
      viewGrid: 'Mpangilio Kamili',
      unitCount: (count: number) => `Makazi ${count}`,
      startingFrom: 'Kuanzia',
      perNight: 'kwa usiku',
      viewDetails: 'Gundua',
      inquireNow: 'Ulizia',
      page: 'Ukurasa',
      of: 'wa',
    },
  },
  fr: {
    all: 'Tous les Hébergements',
    villas: 'Villas',
    bungalows: 'Bungalows',
    rooms: 'Suites & Chambres',
    categories: {
      all: {
        tag: 'Collection Complète des Sanctuaires',
        title: 'Huit Sanctuaires Privés à Kizimkazi',
        description: 'Explorez l’ensemble de nos résidences sur la côte sud de Zanzibar — des villas avec piscine privée face à l’océan aux bungalows intimes nichés dans des jardins tropicaux.',
        highlights: ['Vues Océan & Jardin', 'Majordome Dédié', 'Petit-Déjeuner Inclus', 'Wi-Fi Haut Débit'],
      },
      villas: {
        tag: 'Villas d’Exception avec Piscine',
        title: 'Villas Vue Mer avec Bassin Privé',
        description: 'Offrant un luxe insulaire absolu, avec bassins d’eau douce privés, accès direct à la plage, portes ciselées swahilies et service de majordome personnel 24h/24.',
        highlights: ['Piscines Privées Débordantes', 'Accès Plage Direct', 'Majordome Dédié 24/7', 'Terrasses Coucher de Soleil'],
      },
      bungalows: {
        tag: 'Éco-Luxe Insulaire Artisanal',
        title: 'Bungalows Traditionnels sous Toit de Makuti',
        description: 'Immergés au cœur de jardins tropicaux et de baobabs séculaires. Conçus en bois local avec toits tressés en makuti et douches tropicales à ciel ouvert.',
        highlights: ['Douches Tropicales sous les Étoiles', 'Cour aux Baobabs Centenaires', 'Toiture Artisanale Makuti', 'Ventilation Naturelle Douce'],
      },
      rooms: {
        tag: 'Suites Élevées et Panoramiques',
        title: 'Suites & Pavillons Horizon Marin',
        description: 'Architecture épurée dominant la réserve marine de Menai Bay, dotée de lits de repos sur le toit pour observer les étoiles et de jumelles marines pour apercevoir les dauphins.',
        highlights: ['Toit-Terrasse Astronomique', 'Vue 180° Dauphins en Liberté', 'Design Épuré Swahili', 'Acoustique Bang & Olufsen'],
      },
    },
    ui: {
      prev: 'Hébergement Précédent',
      next: 'Hébergement Suivant',
      viewCarousel: 'Défilement Horizontal',
      viewGrid: 'Vue Grille',
      unitCount: (count: number) => `${count} Sanctuaires`,
      startingFrom: 'À partir de',
      perNight: 'par nuit',
      viewDetails: 'Découvrir',
      inquireNow: 'Réserver',
      page: 'Fiche',
      of: 'sur',
    },
  },
  es: {
    all: 'Todos los Alojamientos',
    villas: 'Villas',
    bungalows: 'Búngalos',
    rooms: 'Suites y Habitaciones',
    categories: {
      all: {
        tag: 'Colección Completa de Santuarios',
        title: 'Ocho Santuarios Exclusivos en Kizimkazi',
        description: 'Descubra nuestra colección completa en la costa sur de Zanzíbar — desde villas frente al océano con piscina privada hasta búngalos botánicos y suites panorámicas.',
        highlights: ['Vistas al Océano y Jardín', 'Mayordomo Personal', 'Desayuno Gourmet en Villa', 'Wi-Fi de Alta Velocidad'],
      },
      villas: {
        tag: 'Villas con Piscina Privada',
        title: 'Villas Frente al Mar con Piscina',
        description: 'Diseñadas para un descanso sublime con piscinas privadas, acceso directo a la arena blanca, puertas talladas en teca y servicio de mayordomo privado 24/7.',
        highlights: ['Piscinas Privadas Exclusivas', 'Acceso Directo a la Playa', 'Mayordomo Dedicado 24/7', 'Terrazas de Atardecer'],
      },
      bungalows: {
        tag: 'Eco-Lujo Tradicional',
        title: 'Búngalos de Jardín con Techo Makuti',
        description: 'Rodeados de flores tropicales y baobabs centenarios. Construidos en madera autóctona, techos de palma makuti y duchas de piedra a cielo abierto.',
        highlights: ['Duchas Abiertas bajo las Estrellas', 'Patio de Baobabs Centenarios', 'Techos de Palma Makuti', 'Ventilación Natural Cruzada'],
      },
      rooms: {
        tag: 'Suites Panorámicas',
        title: 'Suites Elevadas y Pabellones Marinos',
        description: 'Diseño minimalista con vistas a la Reserva Marina de Menai Bay. Disponen de terraza en la azotea para contemplar las estrellas y prismáticos náuticos para avistar delfines.',
        highlights: ['Terraza Superior bajo las Estrellas', 'Horizonte de Delfines en 180°', 'Minimalismo Costero Elegante', 'Acústica Bang & Olufsen'],
      },
    },
    ui: {
      prev: 'Alojamiento Anterior',
      next: 'Alojamiento Siguiente',
      viewCarousel: 'Desplazamiento Horizontal',
      viewGrid: 'Vista Cuadrícula',
      unitCount: (count: number) => `${count} Santuarios`,
      startingFrom: 'Desde',
      perNight: 'por noche',
      viewDetails: 'Descubrir',
      inquireNow: 'Consultar',
      page: 'Ficha',
      of: 'de',
    },
  },
  it: {
    all: 'Tutti gli Alloggi',
    villas: 'Ville',
    bungalows: 'Bungalow',
    rooms: 'Suite e Camere',
    categories: {
      all: {
        tag: 'Collezione Completa dei Rifugi',
        title: 'Otto Santuari Esclusivi a Kizimkazi',
        description: 'Scoprite la nostra collezione sulla costa sud di Zanzibar: dalle sontuose ville con piscina privata fronte mare agli intimi bungalow immersi nei giardini botanici.',
        highlights: ['Vista Mare e Giardini', 'Maggiordomo Dedicato', 'Colazione Gourmet in Villa', 'Wi-Fi ad Alta Velocità'],
      },
      villas: {
        tag: 'Ville con Piscina Privata',
        title: 'Ville sul Mare con Piscina Esclusiva',
        description: 'Create per il massimo comfort balneare, con piscine d’acqua dolce private, accesso diretto alla spiaggia, porte intagliate in tek e maggiordomo privato h24.',
        highlights: ['Piscine a Sfioro Private', 'Accesso Diretto al Mare', 'Maggiordomo Dedicato 24/7', 'Terrazze al Tramonto'],
      },
      bungalows: {
        tag: 'Eco-Lusso Artigianale',
        title: 'Bungalow Tradizionali in Paglia Makuti',
        description: 'Avvolti da giardini di frangipani e baobab secolari. Costruiti in legno sostenibile con tetti in paglia makuti e docce esterne a cielo aperto.',
        highlights: ['Docce Tropicali sotto le Stelle', 'Corte dei Baobab Secolari', 'Copertura in Paglia Makuti', 'Brezza Marina Naturale'],
      },
      rooms: {
        tag: 'Suite Panoramiche',
        title: 'Suite e Padiglioni Vista Oceano',
        description: 'Architettura contemporanea affacciata sulla Riserva Marina di Menai Bay. Terrazza solarium sul tetto per ammirare le stelle e cannocchiali marini per avvistare i delfini.',
        highlights: ['Terrazza Panoramica sul Tetto', 'Orizzonte a 180° con Delfini', 'Design Minimalista d’Autore', 'Acustica Bang & Olufsen'],
      },
    },
    ui: {
      prev: 'Alloggio Precedente',
      next: 'Alloggio Successivo',
      viewCarousel: 'Scorrimento Orizzontale',
      viewGrid: 'Visualizzazione Griglia',
      unitCount: (count: number) => `${count} Santuari`,
      startingFrom: 'Da',
      perNight: 'a notte',
      viewDetails: 'Scopri',
      inquireNow: 'Richiedi',
      page: 'Scheda',
      of: 'di',
    },
  },
  ar: {
    all: 'جميع أماكن الإقامة',
    villas: 'الفلل',
    bungalows: 'البنغلات',
    rooms: 'الأجنحة والغرف',
    categories: {
      all: {
        tag: 'مجموعة الملاذات الكاملة',
        title: 'ثمانية ملاذات استثنائية في كيزيمكازي',
        description: 'استكشف مجموعتنا الفاخرة على الساحل الجنوبي لزنجبار — من الفلل الشاطئية المزودة بمسابح خاصة إلى البنغلات المحاطة بالحدائق الاستوائية والأجنحة المطلة على المحيط.',
        highlights: ['إطلالات على المحيط والحدائق', 'خدمة نادل خاص 24/7', 'إفطار فاخر داخل الفيلا', 'واي فاي فائق السرعة'],
      },
      villas: {
        tag: 'فلل حصرية بمسابح خاصة',
        title: 'فلل على الواجهة البحرية بمسابح خاصة',
        description: 'صُممت لأرقى أوقات الاسترخاء مع مسابح خاصة منعشة، وصول مباشر إلى الشاطئ، أبواب زنجبارية أثرية محفورة، وخدمة نادل شخصي متاح على مدار الساعة.',
        highlights: ['مسابح خاصة مطلة على البحر', 'وصول مباشر للشاطئ الخاص', 'خدمة نادل شخصي 24/7', 'تراس استثنائي للغروب'],
      },
      bungalows: {
        tag: 'فخامة بيئية مستوحاة من التراث',
        title: 'بنغلات حدائق بأسقف الماكوتي التراثية',
        description: 'محاطة بأشجار الباوباب المعمرة وحدائق الياسمين الهندي. بُنيت من الأخشاب المستدامة وأسقف الماكوتي المصنوعة يدويًا مع دش خارجي تحت النجوم.',
        highlights: ['دش استوائي في الهواء الطلق', 'فناء أشجار باوباب معمرة', 'أسقف ماكوتي طبيعية', 'تهوية بحرية طبيعية منعشة'],
      },
      rooms: {
        tag: 'أجنحة بانورامية مرتفعة',
        title: 'أجنحة مطلة على أفق المحيط الهندي',
        description: 'تصميم بسيط راقٍ يمنحك إطلالة مفتوحة بزاوية 180 درجة على محمية خليج ميناي، مع تراس علوي لمراقبة النجوم ومناظير لمشاهدة الدلافين.',
        highlights: ['تراس علوي لمراقبة النجوم', 'أفق الدلافين بزاوية 180°', 'تصميم عصري بسيط', 'نظام صوتي بانغ آند أولوفسن'],
      },
    },
    ui: {
      prev: 'السابق',
      next: 'التالي',
      viewCarousel: 'تمرير أفقي',
      viewGrid: 'عرض شبكي',
      unitCount: (count: number) => `${count} ملاذات فاخرة`,
      startingFrom: 'ابتداءً من',
      perNight: 'لكل ليلة',
      viewDetails: 'استكشاف',
      inquireNow: 'حجز',
      page: 'الوحدة',
      of: 'من',
    },
  },
  zh: {
    all: '全部房型',
    villas: '独栋别墅',
    bungalows: '花园平房',
    rooms: '套房与客房',
    categories: {
      all: {
        tag: '全套奢华私邸系列',
        title: '桑给巴尔基济姆卡济的八处私密谧境',
        description: '探索位于桑给巴尔南部海岸的全部八处隐世谧境——从直通私家沙滩的独栋泳池别墅，到苍翠热带花园平房与高处观海套房。',
        highlights: ['印度洋海景与热带花园', '24/7 专属私人管家', '赠送每日精美别墅早餐', 'Starlink 极速星链网络'],
      },
      villas: {
        tag: '奢华独栋私家泳池居所',
        title: '一线海景私人泳池独栋别墅',
        description: '为极致海岛度假而量身打造，配备私人淡水跳水池与泳道池、直通白色沙滩小径、古董手工黄铜斯瓦希里雕花木门及全天候专属管家贴心呵护。',
        highlights: ['私人无边际海景泳池', '直达私家沙滩海湾', '24/7 专属私人管家', '绝美印度洋日落观景台'],
      },
      bungalows: {
        tag: '手作生态自然奢华',
        title: '传统马库蒂棕榈茅草花园平房',
        description: '隐匿于鸡蛋花香庭院与百年猴面包树林中。采用可持续木材与传统马库蒂棕榈叶手工编织屋顶，配有星空下热带石砌露天雨淋花洒。',
        highlights: ['星空下热带露天石砌淋浴', '百年古猴面包树静谧庭院', '纯手工天然马库蒂茅草顶', '自然海风对流通风设计'],
      },
      rooms: {
        tag: '高空俯瞰海景套房',
        title: '高处观海全景套房与亭楼',
        description: '简约海滨设计，俯瞰米奈湾海洋自然保护区。设有专属屋顶星空躺床与专业航海双筒望远镜，可于晨曦中饱览海豚跃浪胜景。',
        highlights: ['屋顶星空观赏大平榻', '180° 海豚跃浪无遮挡海景', '北欧斯瓦希里极简美学', 'Bang & Olufsen 殿堂声学'],
      },
    },
    ui: {
      prev: '上一间房型',
      next: '下一间房型',
      viewCarousel: '横向滚动浏览',
      viewGrid: '网格视图',
      unitCount: (count: number) => `${count} 处私邸`,
      startingFrom: '起价',
      perNight: '每晚',
      viewDetails: '探索',
      inquireNow: '咨询',
      page: '房型',
      of: '/',
    },
  },
};
