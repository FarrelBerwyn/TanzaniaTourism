import { Language } from '../types';

export interface IntroPillar {
  label: string;
  description: string;
}

export interface RetreatFacet {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface WhyStayPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const PROPERTY_INTRO_TRANSLATIONS: Record<
  Language,
  {
    philosophyTag: string;
    heading: string;
    quote: string;
    body: string;
    locationTag: string;
    photoCaption: string;
    estTag: string;
    solitudeTag: string;
    livingBadge: string;
    craftsmanshipDesc: string;
    completeExperienceTag: string;
    pillarsHeading: string;
    pillars: IntroPillar[];
  }
> = {
  en: {
    philosophyTag: 'The Zanzirangi Philosophy',
    heading: 'MORE THAN A STAY',
    quote: '"Discover a private retreat where the beauty of Zanzibar meets the warmth of authentic island hospitality."',
    body: 'At Zanzirangi House, guests are not merely booking a room. You are stepping into an interconnected Tanzanian journey—from the moment you land on our southern shores to unforgettable days exploring pristine sandbanks, tasting indigenous spices harvested on site, and flying deep into the wild plains of the Serengeti.',
    locationTag: 'Kizimkazi Dimbani • South Coast',
    photoCaption: 'Where ancient baobab groves meet coral lagoons.',
    estTag: 'Est. Zanzibar',
    solitudeTag: 'South Coast Solitude',
    livingBadge: 'Barefoot Oceanfront Living',
    craftsmanshipDesc: 'Designed with respect for Swahili craftsmanship, Zanzirangi House utilizes local coral ragstone, hand-hewn mahogany, and natural thatched makuti roofs that allow warm ocean breezes to flow freely throughout the day.',
    completeExperienceTag: 'The Complete Experience',
    pillarsHeading: 'What Awaits You at Zanzirangi House',
    pillars: [
      {
        label: 'Private Accommodation',
        description: 'Barefoot beachfront villas and garden bungalows nestled beneath ancient baobabs.',
      },
      {
        label: 'Local Dining',
        description: 'From our organic estate gardens to fresh Menai Bay seafood, cooked with coastal Swahili soul.',
      },
      {
        label: 'Island Experiences',
        description: 'Dhow sunset sails, swimming with wild dolphins, and exploring secluded sandbanks.',
      },
      {
        label: 'Curated Tours',
        description: 'Historic Stone Town heritage walks and fragrant organic spice farm discoveries.',
      },
      {
        label: 'Mainland Safari',
        description: 'Direct fly-in bush plane connections to the Serengeti, Ngorongoro, and Tarangire.',
      },
      {
        label: 'Personalized Concierge',
        description: 'Dedicated butler and concierge care crafting every detail of your East African journey.',
      },
    ],
  },
  pl: {
    philosophyTag: 'Filozofia Zanzirangi',
    heading: 'WIĘCEJ NIŻ POBYT',
    quote: '„Odkryj prywatną oazę, w której piękno Zanzibaru łączy się z ciepłem autentycznej wyspiarskiej gościnności.”',
    body: 'W Zanzirangi House goście nie rezerwują jedynie pokoju. Wkraczasz w spójną tanzańską podróż — od momentu wylądowania na naszych południowych wybrzeżach, po niezapomniane dni na dziewiczych mieliznach koralowych, degustację świeżych przypraw z naszej posiadłości i loty w głąb dzikich równin Serengeti.',
    locationTag: 'Kizimkazi Dimbani • Południowe Wybrzeże',
    photoCaption: 'Gdzie stuletnie gaje baobabów spotykają się z lagunami koralowymi.',
    estTag: 'Zanzibar • Tradycja',
    solitudeTag: 'Spokój Południowego Wybrzeża',
    livingBadge: 'Wypoczynek Boso nad Oceanem',
    craftsmanshipDesc: 'Zaprojektowany z głębokim szacunkiem dla suahilijskiego rzemiosła, Zanzirangi House łączy lokalny koralowy kamień wapienny, ręcznie ciosany mahoń i naturalne dachy ze strzechy makuti, które pozwalają oceanicznym bryzom swobodnie przepływać przez cały dzień.',
    completeExperienceTag: 'Pełnia Doświadczeń',
    pillarsHeading: 'Co Czeka na Ciebie w Zanzirangi House',
    pillars: [
      {
        label: 'Prywatne Wille i Bungalowy',
        description: 'Luksusowe wille tuż przy plaży oraz bungalowy ogrodowe w cieniu wiekowych baobabów.',
      },
      {
        label: 'Wykwintna Kuchnia Lokalna',
        description: 'Od ekologicznego ogrodu po świeże owoce morza z Zatoki Menai, z suahilijską duszą.',
      },
      {
        label: 'Wyspiarskie Doświadczenia',
        description: 'Rejsy tradycyjną łodzią dhow o zachodzie słońca, pływanie z delfinami i rajskie mielizny.',
      },
      {
        label: 'Wycieczki z Przewodnikiem',
        description: 'Historyczne Stone Town pod ochroną UNESCO oraz pachnące plantacje przypraw.',
      },
      {
        label: 'Safari na Kontynencie',
        description: 'Bezpośrednie loty awionetką z Zanzibaru do Serengeti, Ngorongoro i Tarangire.',
      },
      {
        label: 'Osobisty Concierge',
        description: 'Dedykowana opieka konsjerska i kamerdyner czuwający nad każdym detalem pobytu.',
      },
    ],
  },
  ar: {
    philosophyTag: 'فلسفة زانزيرانجي',
    heading: 'أكثر من مجرد إقامة',
    quote: '"اكتشف ملاذاً خاصاً يلتقي فيه سحر زنجبار بدفء الضيافة الإفريقية الأصيلة."',
    body: 'في منتجع زانزيرانجي هاوس، لا تقتصر تجربة الضيوف على حجز جناح أو فيلا؛ بل تبدأ رحلة تنزانية متكاملة تأخذكم من شواطئنا الجنوبية الخلابة إلى أروع الجزر الرملية المعزولة، وتذوق التوابل النضرة من مزارعنا، والتحليق في رحلات سفاري فاخرة إلى أعماق سهول سيرينغيتي البرية.',
    locationTag: 'كيزيمكازي ديمباني • الساحل الجنوبي',
    photoCaption: 'حيث تلتقي أشجار الباوباب التاريخية بالبحيرات المرجانية الفيروزية.',
    estTag: 'تأسس في زنجبار',
    solitudeTag: 'سكينة الساحل الجنوبي',
    livingBadge: 'إقامة شاطئية حافية القدمين',
    craftsmanshipDesc: 'صُمم زانزيرانجي هاوس باعتزاز بالحرفية السواحيلية التقليدية، مستخدماً الحجر المرجاني الأصيل، وأخشاب الماهوجني المنحوتة يدوياً، وأسقف الماكوتي الطبيعية التي تسمح لنسائم المحيط الهندي بالتدفق بحرية طوال اليوم.',
    completeExperienceTag: 'التجربة الكاملة',
    pillarsHeading: 'ما ينتظرك في زانزيرانجي هاوس',
    pillars: [
      {
        label: 'أجنحة وفلل خاصة',
        description: 'فلل شاطئية وبنغلوهات تحيط بها بساتين الباوباب القديمة وتوفر الخصوصية المطلقة.',
      },
      {
        label: 'أطباق طازجة ومحلية',
        description: 'من مزارعنا العضوية الخاصة ومأكولات خليج ميناي البحرية الطازجة بنكهات سواحيلية عريقة.',
      },
      {
        label: 'تجارب الجزيرة الساحرة',
        description: 'إبحار بمراكب الداو الخشبية عند الغروب، والسباحة مع الدلافين، واستكشاف الضفاف الرملية.',
      },
      {
        label: 'جولات سياحية حصرية',
        description: 'مسارات تراثية في ستون تاون المصنفة في اليونسكو، ومزارع التوابل العطرية الشهيرة.',
      },
      {
        label: 'رحلات سفاري تنزانيا البرية',
        description: 'طيران خاص مباشر من زنجبار إلى متنزهات سيرينغيتي ونغورونغورو وتارانجيري.',
      },
      {
        label: 'خدمة كونسيرج ونادل خاص',
        description: 'عناية استثنائية متفانية لتصميم وتنسيق كافة تفاصيل رحلتكم في شرق إفريقيا.',
      },
    ],
  },
  zh: {
    philosophyTag: 'Zanzirangi 旅居哲学',
    heading: '超越下榻的非凡体验',
    quote: '“探索一处私属秘境，让桑给巴尔的纯净风光与温润真挚的海岛待客之道在此交融。”',
    body: '在 Zanzirangi House，您所收获的绝不仅仅是一间套房或别墅。从降落坦桑尼亚南部海岸的那一刻起，您便踏入了一场无缝衔接的东非奢享之旅——从私密隐逸的白沙滩洲屿、庄园现采的天然香料饕餮，直至乘专机飞抵塞伦盖蒂大草原深处的狂野追猎。',
    locationTag: '基济姆卡齐·丁巴尼 • 南部海岸',
    photoCaption: '古老猴面包树林与珊瑚礁潟湖在此相遇。',
    estTag: '始于桑给巴尔',
    solitudeTag: '南岸私属幽境',
    livingBadge: '赤足临海私旅生活',
    craftsmanshipDesc: 'Zanzirangi House 怀着对斯瓦希里传统精工的敬意而筑，甄选本土珊瑚石、手工雕琢桃花心木以及天然编织的马库蒂茅草屋顶，令印度洋清澈的微风在厅堂之间整日自然穿行。',
    completeExperienceTag: '全方位私属旅程',
    pillarsHeading: '在 Zanzirangi House 恭候您的非凡礼遇',
    pillars: [
      {
        label: '私属海滨别苑与木屋',
        description: '掩映在百年古老猴面包树林下的独栋海滨泳池别墅与热带花园木屋。',
      },
      {
        label: '庄园有机餐饮风味',
        description: '食材源自庄园有机果蔬园与梅奈湾清晨捕捞的野生海鲜，融汇斯瓦希里烹饪精髓。',
      },
      {
        label: '海岛专属巡弋体验',
        description: '乘坐传统木质帆船追逐金色落日，与野生海豚同游，漫步私属退潮白沙洲。',
      },
      {
        label: '文化与香料寻踪之旅',
        description: '漫步联合国教科文组织石头城古街，探寻古老丁香与肉桂种植庄园的芬芳历史。',
      },
      {
        label: '坦桑尼亚大陆飞掠游猎',
        description: '专享小型越野飞机直飞塞伦盖蒂国家公园、恩戈罗恩戈罗火山口与塔兰吉雷。',
      },
      {
        label: '私人管家与专属礼宾',
        description: '全天候私人管家贴心呵护，为您定制东非之旅的每一处精妙细节。',
      },
    ],
  },
  fr: {
    philosophyTag: 'La Philosophie Zanzirangi',
    heading: 'BIEN PLUS QU’UN SÉJOUR',
    quote: '« Découvrez un sanctuaire privé où la beauté de Zanzibar rencontre la chaleur d’une authentique hospitalité insulaire. »',
    body: 'À Zanzirangi House, vous ne réservez pas simplement une chambre. Vous pénétrez dans un voyage tanzanien d’exception — depuis votre arrivée sur nos rivages du sud jusqu’aux journées inoubliables sur des bancs de sable préservés, la dégustation d’épices cueillies sur le domaine et des vols privés vers les plaines sauvages du Serengeti.',
    locationTag: 'Kizimkazi Dimbani • Côte Sud',
    photoCaption: 'Là où les baobabs séculaires rencontrent les lagons turquoise.',
    estTag: 'Zanzibar • Maison Fondée',
    solitudeTag: 'Sérénité de la Côte Sud',
    livingBadge: 'Art de Vivre Pieds Nus Face à l’Océan',
    craftsmanshipDesc: 'Conçu dans le plus pur respect de l’artisanat swahili, Zanzirangi House utilise la pierre de corail locale, l’acajou sculpté à la main et des toits traditionnels en makuti permettant à la brise marine de circuler en toute liberté.',
    completeExperienceTag: 'L’Expérience Complète',
    pillarsHeading: 'Ce qui vous attend à Zanzirangi House',
    pillars: [
      {
        label: 'Villas & Bungalows Privés',
        description: 'Villas pieds dans l’eau et bungalows de charme abrités sous de majestueux baobabs.',
      },
      {
        label: 'Gastronomie Insulaire',
        description: 'Du potager biologique aux poissons frais de Menai Bay, sublimés par les épices swahilies.',
      },
      {
        label: 'Expériences Marines',
        description: 'Croisières en dhow au crépuscule, nage avec les dauphins et bancs de sable secrets.',
      },
      {
        label: 'Excursions Culturelles',
        description: 'Visite guidée de Stone Town (UNESCO) et découverte des fermes d’épices odorantes.',
      },
      {
        label: 'Safaris Continentaux',
        description: 'Liaisons aériennes directes en avion de brousse vers le Serengeti, Ngorongoro et Tarangire.',
      },
      {
        label: 'Conciergerie Dédiée',
        description: 'Majordome et concierges attentifs orchestrant chaque instant de votre escapade.',
      },
    ],
  },
  sw: {
    philosophyTag: 'Falsafa ya Zanzirangi',
    heading: 'ZAIDI YA MAKAZI',
    quote: '“Gundua kimbilio la faragha ambapo uzuri wa Zanzibar unakutana na ukarimu halisi wa kisiwani.”',
    body: 'Katika Zanzirangi House, wageni hawakodi chumba tu. Unaingia katika safari iliyounganishwa ya Kitanzania—tangu unapowasili pwani yetu ya kusini hadi siku zisizosahaulika ukigundua fungu za mchanga, kuonja viungo vilivyolimwa shambani mwetu, na kupaa kwa ndege hadi tambarare za Serengeti.',
    locationTag: 'Kizimkazi Dimbani • Pwani ya Kusini',
    photoCaption: 'Ambapo miti ya mibuyu ya kale inakutana na rasi za matumbawe.',
    estTag: 'Imeanzishwa Zanzibar',
    solitudeTag: 'Utulivu wa Pwani ya Kusini',
    livingBadge: 'Maisha ya Ufukweni Bila Viatu',
    craftsmanshipDesc: 'Imejengwa kwa heshima ya ufundi stadi wa Waswahili, Zanzirangi House inatumia mawe ya matumbawe, mbao za mahogany zilizochongwa kwa mkono, na mapaa ya makuti yanayoruhusu upepo mwanana wa Bahari ya Hindi kupita mchana kutwa.',
    completeExperienceTag: 'Uzoefu Kamili',
    pillarsHeading: 'Kinachokungoja Zanzirangi House',
    pillars: [
      {
        label: 'Malazi ya Faragha',
        description: 'Villas za ufukweni na vibanda vya bustani vilivyotulia chini ya mibuyu mikubwa ya asili.',
      },
      {
        label: 'Chakula Asilia cha Pwani',
        description: 'Kutoka bustani yetu hai hadi samaki wabichi wa Menai Bay, waliopikwa kwa ladha ya Kiswahili.',
      },
      {
        label: 'Matukio ya Kisiwani',
        description: 'Safari za jahazi machweo, kuogelea na pomboo mwitu, na matembezi kwenye fungu za mchanga.',
      },
      {
        label: 'Ziara za Kiutamaduni',
        description: 'Matembezi ya urithi wa Mji Mkongwe (Stone Town) na mashamba ya viungo yenye manukato.',
      },
      {
        label: 'Safari za Bara Tanzania',
        description: 'Ndege za moja kwa moja kutoka Zanzibar kwenda mbuga za Serengeti, Ngorongoro na Tarangire.',
      },
      {
        label: 'Mhudumu Maalum (Concierge)',
        description: 'Huduma makini na mhudumu binafsi anayeratibu kila hatua ya safari yako ya Afrika Mashariki.',
      },
    ],
  },
  es: {
    philosophyTag: 'La Filosofía Zanzirangi',
    heading: 'MÁS QUE UNA ESTANCIA',
    quote: '«Descubra un refugio privado donde la belleza de Zanzíbar se funde con la calidez de la auténtica hospitalidad isleña.»',
    body: 'En Zanzirangi House, nuestros huéspedes no reservan simplemente una habitación. Se adentran en un viaje tanzano inolvidable: desde el instante en que pisan nuestras costas del sur, hasta jornadas explorando bancos de arena vírgenes, degustando especias de nuestra finca y sobrevolando las llanuras del Serengeti.',
    locationTag: 'Kizimkazi Dimbani • Costa Sur',
    photoCaption: 'Donde los baobabs milenarios se encuentran con las lagunas de coral.',
    estTag: 'Fundado en Zanzíbar',
    solitudeTag: 'Serenidad de la Costa Sur',
    livingBadge: 'Vida Descalza Frente al Océano',
    craftsmanshipDesc: 'Diseñado con reverencia hacia la artesanía suajili, Zanzirangi House combina piedra coralina local, maderas nobles talladas a mano y cubiertas de makuti natural que dejan fluir la brisa del océano Índico.',
    completeExperienceTag: 'La Experiencia Completa',
    pillarsHeading: 'Lo que le Espera en Zanzirangi House',
    pillars: [
      {
        label: 'Alojamiento Exclusivo',
        description: 'Villas frente al mar y bungalows en jardines tropicales bajo la sombra de baobabs ancestrales.',
      },
      {
        label: 'Gastronomía Autóctona',
        description: 'Ingredientes de nuestra huerta orgánica y pesca fresca de Menai Bay con alma suajili.',
      },
      {
        label: 'Experiencias en la Isla',
        description: 'Navegación en dhow al atardecer, nado con delfines salvajes y bancos de arena secretos.',
      },
      {
        label: 'Excursiones Guiadas',
        description: 'Paseos por la histórica Stone Town (UNESCO) y aromas en plantaciones de especias.',
      },
      {
        label: 'Safaris en Tanzania Continental',
        description: 'Vuelos chárter directos a los parques nacionales de Serengeti, Ngorongoro y Tarangire.',
      },
      {
        label: 'Conserjería Personalizada',
        description: 'Mayordomo dedicado y servicio de conserjería cuidando cada instante de su estancia.',
      },
    ],
  },
  it: {
    philosophyTag: 'La Filosofia Zanzirangi',
    heading: 'PIÙ DI UN SOGGIORNO',
    quote: '«Scopri un rifugio privato dove la bellezza di Zanzibar incontra il calore dell’autentica ospitalità isolana.»',
    body: 'A Zanzirangi House gli ospiti non prenotano semplicemente una camera. Si entra in un percorso tanzaniano d’eccellenza: dall’arrivo sulle coste meridionali fino a indimenticabili giornate tra atolli incontaminati, spezie coltivate nella tenuta e voli panoramici verso la savana del Serengeti.',
    locationTag: 'Kizimkazi Dimbani • Costa Sud',
    photoCaption: 'Dove gli antichi baobab incontrano le lagune coralline.',
    estTag: 'Fondata a Zanzibar',
    solitudeTag: 'Pace della Costa Sud',
    livingBadge: 'Vivere a Piedi Nudi sul Mare',
    craftsmanshipDesc: 'Ispirata al raffinato artigianato swahili, Zanzirangi House unisce pietra corallina locale, mogano lavorato a mano e tetti in makuti che lasciano fluire le brezze dell’Oceano Indiano durante tutto il giorno.',
    completeExperienceTag: 'L’Esperienza Completa',
    pillarsHeading: 'Cosa Ti Attende a Zanzirangi House',
    pillars: [
      {
        label: 'Ville e Bungalow Privati',
        description: 'Dimore pied-dans-l’eau e bungalow appartati all’ombra di maestosi baobab.',
      },
      {
        label: 'Cucina Tradizionale e Fresca',
        description: 'Dall’orto botanico della tenuta al pescato fresco di Menai Bay, cucinato con anima swahili.',
      },
      {
        label: 'Esperienze sull’Isola',
        description: 'Veleggiate al tramonto su dhow in legno, nuotate con i delfini e banchi di sabbia incontaminati.',
      },
      {
        label: 'Tour Culturali Esclusivi',
        description: 'Passeggiate nel centro storico di Stone Town (UNESCO) e sentieri tra le piantagioni di spezie.',
      },
      {
        label: 'Safari in Tanzania Continentale',
        description: 'Voli diretti in aereo leggero per il Parco del Serengeti, il Cratere di Ngorongoro e il Tarangire.',
      },
      {
        label: 'Concierge e Maggiordomo Dedicato',
        description: 'Un’assistenza impeccabile per orchestrare ogni singolo dettaglio del vostro viaggio in Africa.',
      },
    ],
  },
};

export const RETREAT_FACETS_TRANSLATIONS: Record<
  Language,
  {
    eyebrow: string;
    heading: string;
    subhead: string;
    description: string;
    listTitle: string;
    facets: RetreatFacet[];
  }
> = {
  en: {
    eyebrow: 'Sanctuary Architecture',
    heading: 'DISCOVER THE RETREAT',
    subhead: 'Inside Zanzirangi House',
    description:
      'An architectural dialogue between traditional Swahili stonework, sustainable makuti thatch, and the vast turquoise expanse of the Indian Ocean.',
    listTitle: 'Explore Property Spaces',
    facets: [
      {
        id: 'villas',
        title: 'Ocean Villas',
        subtitle: 'Barefoot Luxury & Oceanfront Horizons',
        description:
          'Perched along the coral cliff edge, each villa is oriented toward the changing colors of Menai Bay, featuring expansive private sun decks, infinity plunge pools, and open-air bathrooms.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Garden Bungalows',
        subtitle: 'Botanical Seclusion & Natural Thatch',
        description:
          'Immersed within lush tropical flora, our private bungalows offer complete seclusion, outdoor stone showers, and shaded verandahs surrounded by birdsong and flowering frangipani.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Infinity Swimming Pool',
        subtitle: '25 Meters of Freshwater Stillness',
        description:
          'Suspended above the coastal limestone, the freshwater infinity pool seamlessly merges with the turquoise horizon, framed by comfortable double daybeds and attentive poolside service.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Sunset Lounge & Bar',
        subtitle: 'Golden Hour Taarab & Ocean Breezes',
        description:
          'An open-sided coastal pavilion where guests gather for pre-dinner aperitifs, cellar vintages, and peaceful taarab melodies while the sun sinks into the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Organic Botanical Garden',
        subtitle: 'Spices, Chilies & Fragrant Herbs',
        description:
          'Cultivated directly on our estate grounds, our garden supplies the kitchen with organic lemongrass, ginger, chili, mint, and tropical seasonal vegetables every morning.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Makuti Thatched Pavilion',
        subtitle: 'Heritage Swahili & Coastal Dining',
        description:
          'Handcrafted with natural coconut palm thatch (makuti) and local timber, creating a naturally cooled open-air sanctuary for slow farm-to-table dining.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Coral Lagoon & Sea Views',
        subtitle: 'Unobstructed 180° Indian Ocean Vistas',
        description:
          'Watch traditional wooden dhows glide across the coral reef line and spot dolphins playing in the outer waters from our elevated terraces.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Outdoor Terraces & Baobab Groves',
        subtitle: 'Centenary Baobabs & Coral Pathways',
        description:
          'Sculptural centenary baobabs cast peaceful shade across hand-laid coral ragstone pathways leading down to private beach coves.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  pl: {
    eyebrow: 'Architektura Sanktuarium',
    heading: 'ODKRYJ NASZĄ POSIADŁOŚĆ',
    subhead: 'Wnętrza Zanzirangi House',
    description:
      'Architektoniczny dialog tradycyjnego suahilijskiego kamieniarstwa, ekologicznej strzechy makuti i bezkresnego turkusu Oceanu Indyjskiego.',
    listTitle: 'Przestrzenie Posiadłości',
    facets: [
      {
        id: 'villas',
        title: 'Wille z Widokiem na Ocean',
        subtitle: 'Luksus Boso i Panoramiczne Horyzonty',
        description:
          'Usytuowane wzdłuż krawędzi klifu koralowego, każda willa otwiera się na zmieniające się barwy Zatoki Menai, oferując prywatne tarasy słoneczne, baseny infinity i łazienki pod gołym niebem.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Bungalowy Ogrodowe',
        subtitle: 'Botaniczna Oaza i Naturalna Strzecha',
        description:
          'Zanurzone w bujnej tropikalnej florze, nasze prywatne bungalowy gwarantują całkowitą prywatność, zewnętrzne prysznice z kamienia oraz zadaszone werandy otoczone śpiewem ptaków.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Basen Przelewowy Infinity',
        subtitle: '25 Metrów Słodkowodnego Spokoju',
        description:
          'Zawieszony nad wapiennym klifem basen infinity harmonijnie zlewa się z turkusowym horyzontem, w otoczeniu wygodnych leżanek i dedykowanej obsługi.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Lounge & Bar o Zachodzie Słońca',
        subtitle: 'Złota Godzina, Melodie Taarab i Morska Bryza',
        description:
          'Otwarty pawilon, gdzie goście spotykają się na aperitif przed kolacją, wykwintne wina i nastrojową muzykę, gdy słońce powoli znika w Oceanie Indyjskim.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Organiczny Ogród Botaniczny',
        subtitle: 'Świeże Przyprawy, Zioła i Papryczki',
        description:
          'Uprawiany bezpośrednio na terenie posiadłości, nasz ogród zaopatruje kuchnię w świeżą trawę cytrynową, imbir, miętę i tropikalne warzywa każdego poranka.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Pawilon Restauracyjny Makuti',
        subtitle: 'Dziedzictwo Suahili i Kuchnia Nadmorska',
        description:
          'Ręcznie wykonany z naturalnych liści palmowych i lokalnego drewna, tworzy naturalnie chłodzoną przystań dla posiłków prosto z ogrodu na stół.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Laguna Koralowa i Widoki Morskie',
        subtitle: 'Nieprzerwany Widok 180° na Ocean Indyjski',
        description:
          'Podziwiaj tradycyjne drewniane łodzie dhow sunące po rafie i wypatruj skaczących delfinów z naszych podwyższonych tarasów widokowych.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Tarasy i Gaj Stuletnich Baobabów',
        subtitle: 'Pomnikowe Baobaby i Koralowe Ścieżki',
        description:
          'Rzeźbiarskie stuletnie baobaby rzucają kojący cień na ręcznie układane ścieżki z kamienia koralowego prowadzące wprost do zacisznych plaż.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  ar: {
    eyebrow: 'العمارة والتصميم',
    heading: 'استكشف أرجاء المنتجع',
    subhead: 'في قلب زانزيرانجي هاوس',
    description:
      'تناغم معماري أصيل بين البناء الحجري السواحيلية، وأسقف الماكوتي المستدامة، والمياه الفيروزية الرائعة للمحيط الهندي.',
    listTitle: 'مرافق ومساحات المنتجع',
    facets: [
      {
        id: 'villas',
        title: 'الفلل الشاطئية المطلة على المحيط',
        subtitle: 'فخامة حافية القدمين وآفاق ساحلية لا متناهية',
        description:
          'تقع الفلل مباشرة على حافة الجرف المرجاني متجهة نحو تدرجات خليج ميناي، مع شرفات شمسية واسعة وأحواض سباحة خاصة وحمامات في الهواء الطلق.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'بنغلوهات الحدائق الاستوائية',
        subtitle: 'عزلة هادئة بين الأشجار الاستوائية وأسقف القش',
        description:
          'تتوسط الطبيعة الاستوائية الخلابة لتوفر خصوصية تامة، مع دش حجري خارجي وتراسات مظللة على وقع تغريد الطيور وأزهار الفرانجيباني.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'حوض السباحة إنفينيتي المفتوح',
        subtitle: '25 متراً من السكينة العذبة المطلة على الأفق',
        description:
          'معلق فوق الصخور الكلسية الساحلية ليتصل بسلاسة مع الأفق الفيروزي، وتزينه مقاعد استرخاء مريحة مع خدمة ضيافة متفانية بجانب المسبح.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'لاونج الغروب والمشروبات الفاخرة',
        subtitle: 'ساعة الغروب الذهبية ونغمات الطرب ونسيم البحر',
        description:
          'جناح ساحلي مفتوح يجتمع فيه الضيوف لتناول المشروبات المنعشة وسماع الألحان الهادئة بينما تغيب الشمس في أعماق المحيط الهندي.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'الحديقة النباتية العضوية',
        subtitle: 'توابل طازجة وأعشاب عطرية من المزرعة للمائدة',
        description:
          'تزرع في أرض المنتجع لتوفر للمطبخ يومياً أعشاب الليمون والزنجبيل والنعناع والتوابل العطرية والخضروات الاستوائية النضرة.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'مطعم أجنحة الماكوتي الطبيعية',
        subtitle: 'المذاق السواحيلي الأصيل والمأكولات البحرية',
        description:
          'مبني يدوياً بسعف النخيل وأخشاب الغابات المحلية ليوفر بيئة مظللة تهب فيها نسائم البحر أثناء تناول الوجبات الطازجة.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'البحيرة المرجانية وإطلالات المحيط',
        subtitle: 'إطلالة بانورامية 180 درجة بلا عوائق',
        description:
          'مشاهدة قوارب الداو الشراعية تعبر خط الشعب المرجانية ومراقبة الدلافين وهي تلهو في مياه المحيط من التراسات المرتفعة.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'التراسات ومسارات أشجار الباوباب',
        subtitle: 'أشجار باوباب معمرة وممرات حجرية نحو الشاطئ',
        description:
          'أشجار باوباب عملاقة توفر ظلالاً منعشة على ممرات حجر المرجان المؤدية إلى الخلجان والشواطئ الخاصة الهادئة.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  zh: {
    eyebrow: '静修圣地建筑美学',
    heading: '探索别苑秘境',
    subhead: '走进 Zanzirangi House',
    description:
      '斯瓦希里珊瑚石工匠技艺、可持续马库蒂天然茅草与印度洋蔚蓝海景在此形成诗意的建筑对话。',
    listTitle: '探索空间分区',
    facets: [
      {
        id: 'villas',
        title: '海景临海泳池别墅',
        subtitle: '赤足隐逸与浩瀚海洋天际线',
        description:
          '伫立于天然珊瑚礁崖之上，每栋别墅均朝向变幻莫测的梅奈湾海面，配备宽敞私属日光甲板、无边私家泳池与露天星空淋浴浴池。',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: '热带花园木屋',
        subtitle: '植物掩映与天然茅草居所',
        description:
          '深隐于繁茂的热带花木丛中，提供完全隐秘的私属居停体验，配备户外天然石砌淋浴与鸟语花香环绕的凉亭游廊。',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: '25米淡水无边泳池',
        subtitle: '悬浮于珊瑚海崖之上的静谧碧波',
        description:
          '高悬于海岸石灰岩之上，纯净淡水泳池水天一色地融入绿松石般的海平线，环绕双人奢享日光躺榻与池畔侍酒服务。',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: '落日观景酒廊与吧台',
        subtitle: '暮光时刻、斯瓦希里古韵与清冽海风',
        description:
          '全开放式临海观景木质凉亭，宾客可在此品啜餐前开胃美酒与私藏佳酿，伴随悠扬乐声目送夕阳缓缓沉入印度洋。',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: '庄园有机香料草本园',
        subtitle: '现采香茅、有机鲜椒与芳香草药',
        description:
          '于庄园腹地精心培育，每日清晨为后厨直供有机柠檬草、姜、鲜薄荷与当季热带果蔬，赋予餐盘最本真的海岛风味。',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: '马库蒂茅草敞轩餐厅',
        subtitle: '原味斯瓦希里与海洋风味盛宴',
        description:
          '选用纯天然椰叶编织茅草（Makuti）与本土硬木手工构筑，形成自然通透对流的露天餐厅，慢享从农庄至餐桌的舌尖艺术。',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: '珊瑚礁潟湖与180°开阔海景',
        subtitle: '无遮挡尽揽印度洋万千气象',
        description:
          '在露台上凝望古老木质帆船滑过珊瑚礁岸线，时而还能眺见活泼海豚在蔚蓝外海中跃水嬉戏。',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: '观景露台与百年猴面包树林',
        subtitle: '苍劲神木掩映与珊瑚石林荫小径',
        description:
          '百年沧桑的苍劲猴面包树在手工铺就的珊瑚礁石小径上投下宜人清凉，蜿蜒引向隐蔽的私属海湾沙滩。',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  fr: {
    eyebrow: 'Architecture du Sanctuaire',
    heading: 'DÉCOUVREZ LE REFUGE',
    subhead: 'Au Cœur de Zanzirangi House',
    description:
      'Un dialogue architectural harmonieux entre la pierre de corail swahilie, le toit de makuti traditionnel et les reflets turquoise de l’Océan Indien.',
    listTitle: 'Espaces & Pavillons',
    facets: [
      {
        id: 'villas',
        title: 'Villas Vue Océan',
        subtitle: 'Luxe Pieds Nus & Horizons Marins',
        description:
          'Érigées le long de la falaise corallienne face aux nuances de Menai Bay, avec vastes terrasses solarium, piscines à débordement et salles d’eau à ciel ouvert.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Bungalows de Jardin',
        subtitle: 'Intimité Tropicale & Toits de Makuti',
        description:
          'Nidifiés au milieu d’une flore tropicale luxuriante, nos bungalows offrent calme absolu, douches extérieures en pierre et vérandas baignées par le chant des oiseaux.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Piscine à Débordement de 25m',
        subtitle: 'Douceur d’Eau Douce Face à l’Infini',
        description:
          'Suspendue au-dessus des roches côtières, notre piscine d’eau douce fusionne avec l’horizon turquoise, bordée de lits de repos doubles et d’un service soigné.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Lounge Bar du Coucher de Soleil',
        subtitle: 'Heure Dorée, Mélodies Taarab & Brises Marines',
        description:
          'Un pavillon côtier ouvert où les hôtes se retrouvent pour l’apéritif, les grands crus et des airs traditionnels pendant que le soleil plonge dans l’océan.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Potager Botanique Biologique',
        subtitle: 'Épices, Piments & Aromates Frais',
        description:
          'Cultivé au sein du domaine, notre potager fournit chaque matin à la cuisine citronnelle, gingembre, menthe douce et légumes tropicaux de saison.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Pavillon de Table en Makuti',
        subtitle: 'Héritage Swahili & Saveurs de l’Océan',
        description:
          'Artisanat tressé en feuilles de cocotier et bois massif local, offrant une aération naturelle pour savourer une cuisine de la ferme à l’assiette.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Lagon Corallien & Panoramas',
        subtitle: 'Vue Dégagée à 180° sur l’Océan Indien',
        description:
          'Observez les dhows en bois glisser sur le récif et les dauphins évoluer au large depuis nos terrasses en surplomb.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Terrasses & Bosquets de Baobabs',
        subtitle: 'Baobabs Centenaires & Allées Coralliennes',
        description:
          'Des baobabs centenaires ombragent les sentiers pavés de pierre de corail descendant vers les criques de plage préservées.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  sw: {
    eyebrow: 'Usanifu wa Kimbilio',
    heading: 'GUNDUA MAKAZI YETU',
    subhead: 'Ndani ya Zanzirangi House',
    description:
      'Mazungumzo ya kiusanifu kati ya uashi wa jadi wa Waswahili, mapaa ya makuti ya asili, na rangi ya zumaridi ya Bahari ya Hindi.',
    listTitle: 'Maeneo ya Poshoni',
    facets: [
      {
        id: 'villas',
        title: 'Villas za Baharini',
        subtitle: 'Fahari ya Ufukweni na Upeo wa Macho',
        description:
          'Zikiwa juu ya ukingo wa jabali la matumbawe zikitazama ghuba ya Menai, zikiwa na madaraja makubwa ya jua, mabwawa binafsi, na vyumba vya kuogea vya wazi.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Vibanda vya Bustani',
        subtitle: 'Faragha ya Kijani na Mapaa ya Asili',
        description:
          'Katikati ya mimea ya kitropiki, vibanda hivi vinatoa utulivu kamili, bafu za mawe za nje, na baraza zenye kivuli zikizungukwa na ndege wazuri.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Bwawa Kuu la Kuogelea (Infinity)',
        subtitle: 'Mita 25 za Maji Safi na Utulivu',
        description:
          'Likiwa juu ya miamba ya pwani, bwawa hili linaungana na upeo wa bahari ya turquoise, likiwa na vitanda vizuri vya jua na huduma murua.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Baa na Sebule ya Machweo',
        subtitle: 'Wakati wa Dhahabu, Taarab na Upepo wa Bahari',
        description:
          'Banda wazi la pwani ambapo wageni hukusanyika kwa vinywaji kabla ya chakula cha jioni, divai na midundo ya taarab jua linapozama baharini.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Bustani ya Viungo Hai',
        subtitle: 'Mchaichai, Pilipili na Manukato',
        description:
          'Inayolimwa ndani ya eneo letu, bustani hii inapeleka jikoni mchaichai, tangawizi, pilipili, mnanaa na mboga za asili kila asubuhi.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Banda la Kula la Makuti',
        subtitle: 'Ladha ya Kiswahili na Samaki wa Baharini',
        description:
          'Lililojengwa kwa mikono kwa makuti ya minazi na mbao za asili, likitoa ubaridi wa asili wa upepo wa bahari kwa mlo mtamu.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Rasi ya Matumbawe na Mandhari ya Bahari',
        subtitle: 'Mwonekano Kamili wa Digrii 180 wa Bahari',
        description:
          'Tazama majahazi ya kitamaduni yakipita kwenye ukingo wa miamba na kuona pomboo wakicheza baharini kutoka kwenye varanda zetu.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Varanda na Misitu ya Mibuyu',
        subtitle: 'Mibuyu ya Miaka na Njia za Mawe',
        description:
          'Mibuyu mikubwa ya karne nyingi inatoa kivuli tulivu kwenye njia za mawe ya matumbawe zinazoelekea ufukwe wetu mtulivu wa kibinafsi.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  es: {
    eyebrow: 'Arquitectura del Refugio',
    heading: 'DESCUBRA EL RETIRO',
    subhead: 'En el Corazón de Zanzirangi House',
    description:
      'Un diálogo arquitectónico entre el trabajo en piedra suajili, techumbres sostenibles de makuti y las aguas turquesas del océano Índico.',
    listTitle: 'Espacios de la Propiedad',
    facets: [
      {
        id: 'villas',
        title: 'Villas Frente al Océano',
        subtitle: 'Lujo Descalzo y Horizontes Infinitos',
        description:
          'Ubicadas al borde del acantilado de coral con vistas a la bahía de Menai, con amplias terrazas privadas, piscinas plunge y baños al aire libre.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Bungalows en el Jardín',
        subtitle: 'Aislamiento Botánico y Cubiertas de Makuti',
        description:
          'Inmersos en una vegetación tropical exuberante, nuestros bungalows ofrecen total privacidad, duchas exteriores de piedra y porches entre cantos de aves.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Piscina Desbordante Infinity',
        subtitle: '25 Metros de Serenidad de Agua Dulce',
        description:
          'Suspendida sobre la piedra caliza costera, la piscina infinity se funde con el horizonte turquesa, rodeada de tumbonas dobles y servicio atento.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Lounge & Bar al Atardecer',
        subtitle: 'Hora Dorada, Melodías Taarab y Brisas Marinas',
        description:
          'Un pabellón abierto frente al mar donde reunirse para disfrutar de aperitivos, vinos de bodega y música suave mientras el sol se oculta en el océano.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Huerto Botánico Orgánico',
        subtitle: 'Especias, Ajíes y Hierbas Aromáticas',
        description:
          'Cultivado en nuestros terrenos, el huerto provee a la cocina de hierba de limón, jengibre, menta fresca y verduras tropicales cada amanecer.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Pabellón Gastronómico de Makuti',
        subtitle: 'Herencia Suajili y Cocina Marinera',
        description:
          'Elaborado a mano con palma de coco y madera local, creando un ambiente fresco y sombreado para saborear una cocina sincera de la granja a la mesa.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Laguna Coralina y Vistas al Mar',
        subtitle: 'Panorámicas Despejadas de 180°',
        description:
          'Contemple los veleros dhow tradicionales cruzando la línea del arrecife y aviste delfines jugando en aguas abiertas desde nuestras terrazas.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Terrazas y Arboledas de Baobabs',
        subtitle: 'Baobabs Centenarios y Senderos de Coral',
        description:
          'Majestuosos baobabs centenarios proyectan una agradable sombra sobre senderos de piedra coralina que conducen a calas de playa privadas.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  it: {
    eyebrow: 'Architettura del Rifugio',
    heading: 'SCOPRI IL RITIRO',
    subhead: 'Nel Cuore di Zanzirangi House',
    description:
      'Un dialogo architettonico armonioso tra la pietra corallina swahili, i tetti ecosostenibili in makuti e le limpide acque turchesi dell’Oceano Indiano.',
    listTitle: 'Spazi e Ambienti',
    facets: [
      {
        id: 'villas',
        title: 'Ville Fronte Mare',
        subtitle: 'Lusso a Piedi Nudi & Orizzonti Infiniti',
        description:
          'Adagiate sulla scogliera corallina affacciata sulla Baia di Menai, con ampi prendisole privati, piscine infinity e bagni open-air.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'bungalows',
        title: 'Bungalow nel Giardino',
        subtitle: 'Oasi Botanica & Tradizione Makuti',
        description:
          'Immersi in una rigogliosa vegetazione tropicale, offrono totale riservatezza, docce esterne in pietra e verande ombreggiate tra canti di uccelli.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'pool',
        title: 'Piscina a Sfioro di 25 Metri',
        subtitle: 'Serenità d’Acqua Dolce sull’Orizzonte',
        description:
          'Sospesa sulla scogliera calcarea, la piscina si fonde a filo d’acqua con il turchese del mare, contornata da lettini doppi e servizio dedicato.',
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'lounge',
        title: 'Sunset Lounge & Bar',
        subtitle: 'Golden Hour, Musiche Taarab e Brezze Marine',
        description:
          'Un padiglione aperto affacciato sull’oceano per sorseggiare aperitivi, annate pregiate e note tradizionali mentre il sole tramonta all’orizzonte.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'garden',
        title: 'Orto Botanico Biologico',
        subtitle: 'Spezie, Peperoncini ed Erbe Profumate',
        description:
          'Curato direttamente nei terreni della tenuta, rifornisce la cucina con citronella fresca, zenzero, menta ed erbe aromatiche ogni mattina.',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'restaurant',
        title: 'Padiglione Ristorante in Makuti',
        subtitle: 'Tradizione Swahili e Pescato Locale',
        description:
          'Sapientemente intessuto in foglie di palma e legni locali per creare un ambiente naturalmente ventilato dove assaporare pietanze dal campo alla tavola.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'seaview',
        title: 'Laguna Corallina e Orizzonti Marini',
        subtitle: 'Panorama Ininterrotto a 180° sull’Oceano',
        description:
          'Osserva i dhow in legno scivolare lungo la barriera corallina e scorgi i delfini giocare al largo dai nostri terrazzamenti panoramici.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      },
      {
        id: 'outdoor',
        title: 'Terrazze e Boschi di Baobab',
        subtitle: 'Baobab Centenari e Sentieri in Pietra',
        description:
          'Scultorei baobab centenari offrono ombra ristoratrice su sentieri in pietra corallina che scendono dolcemente verso calette di sabbia bianca.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
};

export const WHY_STAY_TRANSLATIONS: Record<
  Language,
  {
    eyebrow: string;
    heading: string;
    description: string;
    pillars: WhyStayPillar[];
  }
> = {
  en: {
    eyebrow: 'The Sanctuary Difference',
    heading: 'WHY ZANZIRANGI HOUSE',
    description:
      'Four guiding values define every moment at our retreat, creating a rare atmosphere of calm, exclusivity, and profound connection to Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'PRIVATE & PEACEFUL',
        tagline: 'A private sanctuary away from the crowds.',
        description:
          'Tucked along the pristine southern coastline of Kizimkazi, far from tourist congestion. Here, time is measured by the tidal ebb and flow, the rustle of palms, and unobstructed ocean horizons.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'AUTHENTIC ZANZIBAR',
        tagline: 'Experience the island through its people, flavours and culture.',
        description:
          'From master Swahili woodcarvers and centuries-old makuti thatched pavilions to organic spices harvested daily from our estate gardens, experience the genuine soul of the Spice Island.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'PERSONAL CONCIERGE',
        tagline: 'From airport arrival to safari planning.',
        description:
          'A dedicated host and concierge team attentive to your every need. Private airport tarmac greetings, chartered boat launches, in-villa dining, and discreet personal hospitality throughout.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'TANZANIA BEYOND',
        tagline: 'Connect your Zanzibar stay with the wonders of mainland Tanzania.',
        description:
          'Seamlessly combine oceanfront rest with chartered fly-in bush safaris to the Serengeti, Ngorongoro Crater, and Tarangire, creating a complete and unforgettable East African journey.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  pl: {
    eyebrow: 'Wyjątkowość Zanzirangi',
    heading: 'DLACZEGO ZANZIRANGI HOUSE',
    description:
      'Cztery fundamentalne wartości definiują każdą chwilę w naszej posiadłości, tworząc rzadką atmosferę spokoju, ekskluzywności i głębokiego kontaktu z Tanzanią.',
    pillars: [
      {
        number: '01',
        title: 'PRYWATNOŚĆ I SPOKÓJ',
        tagline: 'Prywatna oaza z dala od tłumów.',
        description:
          'Położona na dziewiczym południowym wybrzeżu Kizimkazi, z dala od zgiełku turystycznego. Czas płynie tu w rytmie przypływów i odpływów, szumu palm i czystego horyzontu oceanu.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'AUTENTYCZNY ZANZIBAR',
        tagline: 'Poznaj wyspę przez pryzmat jej mieszkańców, smaków i kultury.',
        description:
          'Od mistrzów snycerstwa suahili i pawilonów ze strzechy makuti, po przyprawy zbierane codziennie w naszym ogrodzie — poznaj prawdziwą duszę Wyspy Przypraw.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'OSOBISTY CONCIERGE',
        tagline: 'Od powitania na lotnisku po planowanie safari.',
        description:
          'Dedykowany gospodarz i zespół konsjerski dbający o każdy szczegół: bezpośrednie powitanie na płycie lotniska, prywatne rejsy, kolacje w willi i dyskretna opieka.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'TANZANIA I SAFARI',
        tagline: 'Połącz wypoczynek na Zanzibarze z magią kontynentalnej Tanzanii.',
        description:
          'Bezproblemowo połącz relaks nad brzegiem oceanu z bezpośrednimi lotami na safari do Serengeti, Krateru Ngorongoro i Tarangire.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  ar: {
    eyebrow: 'ما يميز منتجعنا',
    heading: 'لماذا تختار زانزيرانجي هاوس',
    description:
      'أربع ركائز أساسية تجسد كل لحظة في منتجعنا، مانحةً إياكم تجربة نادرة من السكينة والخصوصية والتناغم العميق مع تنزانيا.',
    pillars: [
      {
        number: '01',
        title: 'الخصوصية والسكينة المطلقة',
        tagline: 'ملاذ خاص بعيد عن صخب التجمعات السياحية.',
        description:
          'يقع على الساحل الجنوبي العذري في كيزيمكازي، حيث يقاس الوقت بحركة المد والجزر وحفيف أشجار النخيل وأفق المحيط الممتد بلا حدود.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'أصالة زنجبار العريقة',
        tagline: 'عش روح الجزيرة من خلال ثقافتها وأهلها ونكهاتها الفريدة.',
        description:
          'من الحرفيين السواحيليين المهرة وأجنحة الماكوتي التراثية إلى التوابل العضوية التي تُحصد يومياً من مزارعنا، لتلامس الروح الأصيلة لجزيرة التوابل.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'كونسيرج وخادم شخصي',
        tagline: 'من استقبال المطار حتى تنسيق مغامرات السفاري.',
        description:
          'فريق ضيافة وكونسيرج خاص مكرس لخدمتكم: استقبال VIP على مدرج المطار، ورحلات قوارب خاصة، وعشاء فاخر داخل الفيلا بأعلى درجات الخصوصية.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'تنزانيا البرية وما وراء الجزيرة',
        tagline: 'اربط إقامتك في زنجبار بعجائب الطبيعة في بر تنزانيا الرئيسي.',
        description:
          'ادمج بين الاسترخاء الشاطئي ورحلات السفاري الجوية الخاصة إلى سيرينغيتي وفوهة نغورونغورو وتارانجيري في رحلة أفريقية لا تُنسى.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  zh: {
    eyebrow: '独树一帜的非凡体验',
    heading: '为何选择 ZANZIRANGI HOUSE',
    description:
      '四大核心价值构筑了您在此居停的每分每秒，营造出宁静、奢雅且充满东非风情的独特氛围。',
    pillars: [
      {
        number: '01',
        title: '私属静谧 • 远离喧嚣',
        tagline: '远离大众游客侵扰的私属安宁秘境。',
        description:
          '深隐于基济姆卡齐南部原生态海岸线，时间在这里化作潮汐的起伏、棕榈叶的轻响与无边海平面的从容流转。',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: '地道桑岛 • 文化沉淀',
        tagline: '通过当地风土人情、食材香气与历史文化感知海岛。',
        description:
          '从斯瓦希里工匠精雕的柚木移门，到每日从庄园农田采摘的新鲜香料，感受纯粹的“香料之岛”真挚灵魂。',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: '私人礼宾 • 专属管家',
        tagline: '从机场贵宾停机坪迎接，直至荒野游猎定制。',
        description:
          '专职私人管家与礼宾团队随时待命：机场机坪 VIP 停机坪迎宾、私属帆船出海、别墅内定制烛光晚宴与无微不至的细致侍奉。',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: '纵览坦桑 • 游猎无界',
        tagline: '将桑给巴尔的海滨假日与坦桑尼亚大陆的自然奇观无缝串联。',
        description:
          '将赤足临海的惬意休憩与飞掠塞伦盖蒂、恩戈罗恩戈罗火山口的野性追猎无缝结合，呈现终生难忘的完整东非之旅。',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  fr: {
    eyebrow: 'La Différence Zanzirangi',
    heading: 'POURQUOI ZANZIRANGI HOUSE',
    description:
      'Quatre valeurs directrices façonnent chaque moment au domaine, créant une atmosphère rare de sérénité, d’intimité et d’immersion tanzanienne.',
    pillars: [
      {
        number: '01',
        title: 'INTIMITÉ & TRANQUILLITÉ',
        tagline: 'Un sanctuaire privé loin de la foule.',
        description:
          'Blotti sur la côte sud préservée de Kizimkazi, à l’écart du tourisme de masse. Ici, le temps s’écoule au rythme des marées, du bruissement des palmes et de l’horizon marin.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'AUTHENTICITÉ SWAHILIE',
        tagline: 'Vivez l’île à travers ses habitants, ses saveurs et sa culture.',
        description:
          'Des maîtres sculpteurs swahilis aux toits de makuti séculaires et aux épices fraîches récoltées dans nos jardins, découvrez l’âme véritable de Zanzibar.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'CONCIERGE DÉDIÉ',
        tagline: 'De l’accueil à l’aéroport à l’organisation de vos safaris.',
        description:
          'Une équipe attentive à chacun de vos souhaits : accueil VIP sur le tarmac, sorties privées en mer, dîners en villa et présence discrète.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'AU-DELÀ DE L’ÎLE',
        tagline: 'Reliez votre séjour insulaire aux merveilles de la Tanzanie continentale.',
        description:
          'Associez harmonieusement le repos en bord d’océan et des safaris en avion privé vers le Serengeti, le cratère du Ngorongoro et le Tarangire.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  sw: {
    eyebrow: 'Tofauti ya Kipekee',
    heading: 'KWA NINI ZANZIRANGI HOUSE',
    description:
      'Misingi minne inayoongoza kila wakati kwenye kimbilio letu, ikitengeneza mazingira adimu ya utulivu, hadhi ya juu na uhusiano wa kina na Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'FARAGHA NA UTULIVU',
        tagline: 'Kimbilio la faragha mbali na msongamano.',
        description:
          'Iko katika pwani tulivu ya kusini huko Kizimkazi, mbali na msongamano wa watalii. Hapa muda unahesabiwa na maji kujaa na kupwa, upepo wa mitende na upeo safi wa bahari.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'ZANZIBAR HALISI',
        tagline: 'Pata uzoefu wa kisiwa kupitia watu wake, ladha na tamaduni.',
        description:
          'Kutoka kwa mafundi stadi wa uchongaji na mapaa ya makuti hadi viungo asilia vinavyovunwa kila siku shambani kwetu, onja nafsi halisi ya Kisiwa cha Viungo.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'MHUDUMU BINAFSI (CONCIERGE)',
        tagline: 'Kuanzia kupokelewa uwanja wa ndege hadi kupanga safari za porini.',
        description:
          'Mwenyeji na timu maalum ya wahudumu inayojali kila hitaji lako: mapokezi ya heshima uwanja wa ndege, safari za mashua, chakula villani na ukarimu wa hali ya juu.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'TANZANIA ZAIDI YA VISIWA',
        tagline: 'Unganisha makazi yako ya Zanzibar na maajabu ya Tanzania bara.',
        description:
          'Unganisha utulivu wa ufukweni na safari za ndege za moja kwa moja kuelekea mbuga za Serengeti, Bonde la Ngorongoro na Tarangire.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  es: {
    eyebrow: 'La Diferencia Exclusiva',
    heading: 'POR QUÉ ZANZIRANGI HOUSE',
    description:
      'Cuatro pilares esenciales definen cada momento en nuestro retiro, brindando una atmósfera inigualable de paz, exclusividad y conexión con Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'PRIVACIDAD Y TRANQUILIDAD',
        tagline: 'Un santuario íntimo alejado de las multitudes.',
        description:
          'Ubicado en la idílica costa sur de Kizimkazi, lejos del turismo masivo. Aquí el tiempo se rige por la marea, el rumor de las palmeras y un horizonte sin límites.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'AUTÉNTICO ZANZÍBAR',
        tagline: 'Sienta la isla a través de su gente, aromas y cultura.',
        description:
          'Desde artesanos talladores suajilis y arquitectura tradicional de makuti hasta especias cosechadas a diario en nuestra finca orgánica.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'CONSERJERÍA PERSONALIZADA',
        tagline: 'Desde la recepción en pista aérea hasta la reserva de safaris.',
        description:
          'Un equipo entregado a cada detalle de su viaje: bienvenida VIP en el aeropuerto, navegación privada en velero, cenas en la villa y máxima discreción.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'TANZANIA CONTINENTAL',
        tagline: 'Combine su estancia en la isla con las maravillas del continente.',
        description:
          'Una unión perfecta entre el relax frente al océano y safaris aéreos privados al Serengeti, el cráter de Ngorongoro y Tarangire.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  it: {
    eyebrow: 'L’Eccellenza del Rifugio',
    heading: 'PERCHÉ SCEGLIERE ZANZIRANGI HOUSE',
    description:
      'Quattro valori guida scandiscono ogni momento nel nostro rifugio, creando una rara atmosfera di pace, esclusività e profonda armonia con la Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'RISERVATEZZA & SERENITÀ',
        tagline: 'Un santuario appartato lontano dalla folla.',
        description:
          'Situato lungo la costa meridionale incontaminata di Kizimkazi, lontano dal turismo di massa. Qui il tempo segue il ritmo delle maree e l’orizzonte libero sul mare.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '02',
        title: 'AUTENTICO ZANZIBAR',
        tagline: 'Vivi l’isola attraverso le sue persone, i suoi profumi e la sua cultura.',
        description:
          'Dagli intagliatori swahili e padiglioni in makuti alle spezie biologiche colte ogni giorno nel nostro orto botanico, scopri la vera anima dell’Isola delle Spezie.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '03',
        title: 'CONCIERGE & MAGGIORDOMO',
        tagline: 'Dall’accoglienza all’aeroporto alla pianificazione dei safari.',
        description:
          'Un team dedicato pronto a esaudire ogni desiderio: benvenuto VIP all’aeroporto, escursioni private in dhow, cene servite in villa e massima discrezione.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      },
      {
        number: '04',
        title: 'OLTRE L’ISOLA',
        tagline: 'Unisci il soggiorno a Zanzibar alle meraviglie della Tanzania continentale.',
        description:
          'Combina la pace in riva all’oceano con voli charter privati verso il Serengeti, il Cratere di Ngorongoro e il Tarangire per un’avventura straordinaria.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
};

export const SECOND_BANNER_TRANSLATIONS: Record<
  Language,
  {
    eyebrow: string;
    location: string;
    heading: string;
    description: string;
    reserveBtn: string;
    footerBadges: string;
  }
> = {
  en: {
    eyebrow: 'Private Sanctuary • Oceanfront Sun Deck',
    location: 'Zanzibar South Coast • Kizimkazi',
    heading: 'Where Turquoise Waters Meet Coastal Solitude',
    description:
      'Unwind upon handcrafted teak sun loungers overlooking the calm tides of Menai Bay. An intimate setting engineered for total rejuvenation, bespoke butler care, and unforgettable sunsets.',
    reserveBtn: 'Reserve Your Escape',
    footerBadges: 'Infinity Pool • Private Beach Access • Dedicated Host',
  },
  pl: {
    eyebrow: 'Prywatna Oaza • Nadmorski Taras Słoneczny',
    location: 'Południowe Wybrzeże Zanzibaru • Kizimkazi',
    heading: 'Gdzie Turkusowe Wody Spotykają Nadmorski Spokój',
    description:
      'Zrelaksuj się na ręcznie wykonanych leżankach z drewna tekowego z widokiem na spokojne fale Zatoki Menai. Kameralna przestrzeń stworzona z myślą o pełnej regeneracji, opiece kamerdynera i niezapomnianych zachodach słońca.',
    reserveBtn: 'Zarezerwuj Swój Pobyt',
    footerBadges: 'Basen Infinity • Prywatne Wyjście na Plażę • Dedykowany Gospodarz',
  },
  ar: {
    eyebrow: 'ملاذ خاص • تراس شمسي مطل على المحيط',
    location: 'الساحل الجنوبي لزنجبار • كيزيمكازي',
    heading: 'حيث تلتقي المياه الفيروزية بالسكينة الساحلية',
    description:
      'استرخِ على مقاعد التيك الفاخرة المشرفة على أمواج خليج ميناي الهادئة؛ مساحة مصممة للاستجمام التام مع خدمة نادل خاص وأروع مشاهد الغروب.',
    reserveBtn: 'احجز إقامتك الاستثنائية',
    footerBadges: 'مسبح إنفينيتي • وصول مباشر للشاطئ • مضيف خاص',
  },
  zh: {
    eyebrow: '私享秘境 • 临海日光甲板',
    location: '桑给巴尔南部海岸 • 基济姆卡齐',
    heading: '碧海与私属幽境在此交融',
    description:
      '在手工打磨的柚木躺椅上休憩，俯瞰梅奈湾舒缓的潮起潮落。专属一对一管家服务与绚丽晚霞，令身心在此获得全然焕活。',
    reserveBtn: '预订私属假期',
    footerBadges: '无边泳池 • 直通私属海滩 • 专属管家侍候',
  },
  fr: {
    eyebrow: 'Sanctuaire Privé • Solarium Face à la Mer',
    location: 'Côte Sud de Zanzibar • Kizimkazi',
    heading: 'Là où les Eaux Turquoise Épousent la Sérénité',
    description:
      'Détendez-vous sur des chaises longues en teck avec vue imprenable sur la baie de Menai. Un écrin confidentiel pensé pour la régénération, avec majordome dédié et couchers de soleil inoubliables.',
    reserveBtn: 'Réserver Votre Échappée',
    footerBadges: 'Piscine Infinity • Accès Plage Privée • Majordome Dédié',
  },
  sw: {
    eyebrow: 'Kimbilio la Faragha • Ufukwe wa Jua Baharini',
    location: 'Pwani ya Kusini ya Zanzibar • Kizimkazi',
    heading: 'Ambapo Maji ya Zumaridi Yanakutana na Utulivu',
    description:
      'Pumzika kwenye vitanda vya mbao za teak ukitazama mawimbi tulivu ya Ghuba ya Menai. Mazingira ya faragha yaliyoundwa kwa ajili ya kuburudika, huduma ya mhudumu binafsi na machweo mazuri.',
    reserveBtn: 'Weka Nafasi ya Safari Yako',
    footerBadges: 'Bwawa la Infinity • Ufikiaji wa Ufukwe Binafsi • Mhudumu Maalum',
  },
  es: {
    eyebrow: 'Santuario Privado • Solarium Frente al Mar',
    location: 'Costa Sur de Zanzíbar • Kizimkazi',
    heading: 'Donde las Aguas Turquesas se Funden con la Calma',
    description:
      'Relájese en tumbonas de teca artesanal contemplando las suaves mareas de Menai Bay. Un entorno íntimo concebido para la renovación absoluta, con mayordomo exclusivo y atardeceres mágicos.',
    reserveBtn: 'Reserve su Escapada',
    footerBadges: 'Piscina Infinity • Acceso a Playa Privada • Anfitrión Dedicado',
  },
  it: {
    eyebrow: 'Rifugio Privato • Prendisole sul Mare',
    location: 'Costa Sud di Zanzibar • Kizimkazi',
    heading: 'Dove le Acque Turchesi Incontrano la Serenità',
    description:
      'Rilassati su lettini in teak affacciati sulla quiete della Baia di Menai. Un ambiente intimo concepito per il massimo benessere, con maggiordomo dedicato e tramonti indimenticabili.',
    reserveBtn: 'Prenota il Tuo Soggiorno',
    footerBadges: 'Piscina a Sfioro • Spiaggia Privata • Host Dedicato',
  },
};
