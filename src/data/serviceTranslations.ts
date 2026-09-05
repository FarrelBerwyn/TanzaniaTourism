import { Language } from '../types';

/* =========================================================================
 * SHUTTLE SECTION TRANSLATIONS
 * ========================================================================= */
export interface ShuttleTranslations {
  eyebrow: string;
  heading: string;
  subhead: string;
  routeLabel: string;
  routeTitle: string;
  specsEyebrow: string;
  cardTitle: string;
  airportTitle: string;
  airportDesc: string;
  shuttleTitle: string;
  shuttleDesc: string;
  vehicleLabel: string;
  vehicleValue: string;
  vehicleSub: string;
  paxLabel: string;
  paxValue: string;
  paxSub: string;
  safetyNote: string;
  ctaRequest: string;
  ctaAddBooking: string;
  whatsappMessage: string;
}

export const SHUTTLE_TRANSLATIONS: Record<Language, ShuttleTranslations> = {
  en: {
    eyebrow: 'VIP Chauffeur & Transfers',
    heading: "ARRIVE. RELAX. WE'LL TAKE CARE OF THE REST.",
    subhead: 'From the moment your flight touches down in Zanzibar, our private chauffeur service ensures your transition to Zanzirangi House is completely effortless, serene, and secure.',
    routeLabel: "Abeid Amani Karume Int'l (ZNZ) ➔ Zanzirangi House",
    routeTitle: 'Private Coastal Chauffeur Service',
    specsEyebrow: 'Transfer Specifications',
    cardTitle: 'Private Sanctuary Chauffeur',
    airportTitle: 'Airport Transfer',
    airportDesc: 'Direct tarmac welcome and luggage assistance upon arrival.',
    shuttleTitle: 'Private Shuttle',
    shuttleDesc: 'Exclusive vehicles reserved solely for your traveling party.',
    vehicleLabel: 'Vehicle Type',
    vehicleValue: 'Executive SUV / Luxury Van',
    vehicleSub: '(Details available on request)',
    paxLabel: 'Passenger & Luggage',
    paxValue: 'Tailored to group size',
    paxSub: '(Details available on request)',
    safetyNote: 'Complimentary chilled mineral water, cool hand towels, and high-speed in-car Wi-Fi provided for every transfer.',
    ctaRequest: 'REQUEST AIRPORT TRANSFER',
    ctaAddBooking: 'Add to Booking',
    whatsappMessage: 'Hello Zanzirangi House Concierge! I would like to request an airport transfer / private shuttle service for our upcoming trip.',
  },
  pl: {
    eyebrow: 'Prywatny Szofer & Transfery VIP',
    heading: 'PRZYLEĆ. ODPOCZNIJ. MY ZAJMIEMY SIĘ RESZTĄ.',
    subhead: 'Od momentu lądowania na Zanzibarze nasz prywatny szofer sprawi, że podróż do Zanzirangi House będzie całkowicie bezstresowa, płynna i bezpieczna.',
    routeLabel: 'Lotnisko ZNZ ➔ Zanzirangi House',
    routeTitle: 'Prywatny Transfer Wybrzeżem',
    specsEyebrow: 'Szczegóły Transferu',
    cardTitle: 'Prywatny Szofer Posiadłości',
    airportTitle: 'Transfer z Lotniska',
    airportDesc: 'Bezpośrednie powitanie na płycie lotniska i pomoc z bagażem po przylocie.',
    shuttleTitle: 'Dedykowany Bus',
    shuttleDesc: 'Ekskluzywne pojazdy zarezerwowane wyłącznie dla Twojej grupy podróżnych.',
    vehicleLabel: 'Typ Pojazdu',
    vehicleValue: 'Luksusowy SUV / Bus Klasy Executive',
    vehicleSub: '(Szczegóły dostępne na zapytanie)',
    paxLabel: 'Pasażerowie i Bagaż',
    paxValue: 'Dopasowane do wielkości grupy',
    paxSub: '(Szczegóły dostępne na zapytanie)',
    safetyNote: 'W cenie każdego transferu: schłodzona woda mineralna, orzeźwiające ręczniczki i szybkie Wi-Fi w pojeździe.',
    ctaRequest: 'ZAMÓW TRANSFER Z LOTNISKA',
    ctaAddBooking: 'Dodaj do rezerwacji',
    whatsappMessage: 'Dzień dobry Zanzirangi House Concierge! Chciałbym zamówić transfer z lotniska / prywatny transport na naszą podróż.',
  },
  ar: {
    eyebrow: 'سائق خاص وتنقلات كبار الشخصيات',
    heading: 'تفضل بالوصول، واسترخِ.. ودع الباقي علينا تماماً.',
    subhead: 'من لحظة هبوط طائرتك في زنجبار، تضمن خدمة السائق الخاص وصولك إلى زانزيرانجي هاوس بكل سهولة وطمأنينة وأمان فائق.',
    routeLabel: 'مطار عبيد أماني كرومي الدولي (ZNZ) ➔ زانزيرانجي هاوس',
    routeTitle: 'خدمة التوصيل الساحلية الخاصة',
    specsEyebrow: 'مواصفات التوصيل الفاخر',
    cardTitle: 'سائق خاص لخدمة الملاذ',
    airportTitle: 'توصيل المطار',
    airportDesc: 'استقبال شخصي مباشر عند صالة الوصول ومساعدة تامة في نقل الأمتعة.',
    shuttleTitle: 'سيارة تنقل خاصة',
    shuttleDesc: 'مركبات فاخرة مخصصة حصرياً لك ولأفراد عائلتك ومرافقتك.',
    vehicleLabel: 'نوع المركبة',
    vehicleValue: 'سيارة دفع رباعي فارهة / حافلة كبار الشخصيات',
    vehicleSub: '(التفاصيل متاحة عند الطلب)',
    paxLabel: 'الركاب والأمتعة',
    paxValue: 'مهيأة حسب حجم مجموعتكم',
    paxSub: '(التفاصيل متاحة عند الطلب)',
    safetyNote: 'تشمل كل رحلة مياهاً معدنية مثلجة ومناشف منعشة باردة وإنترنت فائق السرعة داخل السيارة مجاناً.',
    ctaRequest: 'طلب خدمة نقل المطار',
    ctaAddBooking: 'إضافة للحجز',
    whatsappMessage: 'مرحباً كونسيرج زانزيرانجي هاوس! أود طلب خدمة توصيل من المطار / سيارة خاصة لرحلتنا القادمة.',
  },
  zh: {
    eyebrow: 'VIP 专属私享专车接送',
    heading: '从容抵步，静享惬意。余下的旅程细节由我们悉心妥帖安排。',
    subhead: '从您的航班降落在桑给巴尔的那一刻起，我们的专属司导团队便将保障您通往 Zanzirangi House 的路途舒心宁静、尊荣无忧。',
    routeLabel: '桑给巴尔阿贝德·阿曼尼·卡鲁姆国际机场 (ZNZ) ➔ Zanzirangi House',
    routeTitle: '海滨风光专车私享接送服务',
    specsEyebrow: '接驳配置规格',
    cardTitle: '别苑驻地专属司乘服务',
    airportTitle: '机场专属贵宾接机',
    airportDesc: '航站楼出口迎接，专人妥善提取与搬运大件行李。',
    shuttleTitle: '专属包车行程',
    shuttleDesc: '全车全程仅供您与随行同伴独立尊享，保障私密。',
    vehicleLabel: '车型配置',
    vehicleValue: '行政级高端全地形 SUV / 豪华商务客车',
    vehicleSub: '（可根据需求定制具体车型）',
    paxLabel: '乘员及行李容积',
    paxValue: '随团队人数与行李规模量身匹配',
    paxSub: '（可根据需求定制具体车型）',
    safetyNote: '全程随车免费提供冰镇高端矿泉水、香氛冰镇毛巾以及车内高速车载无线网络 Wi-Fi。',
    ctaRequest: '立即预约机场接送',
    ctaAddBooking: '加入住宿预约单',
    whatsappMessage: '您好 Zanzirangi House 礼宾团队！我想为即将到来的行程预订机场接送与专属包车服务。',
  },
  fr: {
    eyebrow: 'Chauffeur Privé & Transferts VIP',
    heading: 'ARRIVEZ. DÉTENDEZ-VOUS. NOUS PRENONS SOIN DU RESTE.',
    subhead: 'Dès que votre avion se pose à Zanzibar, notre service de chauffeur privé assure votre transfert vers Zanzirangi House dans le plus grand calme, confort et raffinement.',
    routeLabel: 'Aéroport ZNZ ➔ Zanzirangi House',
    routeTitle: 'Chauffeur Privé Côtier',
    specsEyebrow: 'Détails du Transfert',
    cardTitle: 'Chauffeur Privé du Domaine',
    airportTitle: 'Transfert Aéroport',
    airportDesc: 'Accueil personnalisé dès la sortie de l’avion et prise en charge intégrale de vos bagages.',
    shuttleTitle: 'Navette Privée',
    shuttleDesc: 'Véhicules exclusifs réservés uniquement à votre groupe d’hôtes.',
    vehicleLabel: 'Type de Véhicule',
    vehicleValue: 'SUV Exécutif / Minivan de Grand Luxe',
    vehicleSub: '(Détails disponibles sur simple demande)',
    paxLabel: 'Capacité Passagers & Bagages',
    paxValue: 'Adapté sur mesure à votre groupe',
    paxSub: '(Détails disponibles sur simple demande)',
    safetyNote: 'Eau minérale fraîche, serviettes rafraîchissantes parfumées et connexion Wi-Fi haut débit offertes à bord.',
    ctaRequest: 'RÉSERVER UN TRANSFERT AÉROPORT',
    ctaAddBooking: 'Ajouter à la réservation',
    whatsappMessage: 'Bonjour la Conciergerie Zanzirangi House ! J’aimerais réserver un transfert aéroport / chauffeur privé pour notre voyage.',
  },
  sw: {
    eyebrow: 'Dereva Binafsi & Usafiri wa VIP',
    heading: 'FIKA. PUMZIKA. SISI TUTASHUGHULIKIA YALIYOSALIA.',
    subhead: 'Kuanzia ndege yako inapotua Zanzibar, huduma yetu ya dereva binafsi inakuhakikishia safari tulivu, salama na ya amani kuelekea Zanzirangi House.',
    routeLabel: 'Uwanja wa Ndege wa ZNZ ➔ Zanzirangi House',
    routeTitle: 'Huduma ya Dereva Binafsi Pwani',
    specsEyebrow: 'Maelezo ya Usafiri',
    cardTitle: 'Dereva Binafsi wa Pango la Utulivu',
    airportTitle: 'Usafiri wa Uwanja wa Ndege',
    airportDesc: 'Kupokelewa moja kwa moja ukishuka na kusaidiwa mizigo yako.',
    shuttleTitle: 'Gari Maalum Binafsi',
    shuttleDesc: 'Magari ya hadhi ya juu yaliyotengwa kwa ajili ya kundi lako pekee.',
    vehicleLabel: 'Aina ya Gari',
    vehicleValue: 'SUV ya Kifahari / Van ya Hadhi ya Juu',
    vehicleSub: '(Maelezo yanapatikana ukiomba)',
    paxLabel: 'Abiria na Mizigo',
    paxValue: 'Inapimwa kulingana na idadi ya watu',
    paxSub: '(Maelezo yanapatikana ukiomba)',
    safetyNote: 'Maji ya chupa yaliyopozwa, vitambaa baridi vya kujifutia na intaneti ya kasi ya Wi-Fi vipo ndani ya kila gari bila malipo.',
    ctaRequest: 'OMBA USAFIRI WA UWANJA WA NDEGE',
    ctaAddBooking: 'Ongeza Kwenye Nafasi',
    whatsappMessage: 'Habari Zanzirangi House Concierge! Ningependa kuomba huduma ya usafiri wa uwanja wa ndege kwa ajili ya safari yetu.',
  },
  es: {
    eyebrow: 'Chófer Privado y Traslados VIP',
    heading: 'LLEGUE. DESCANSE. NOSOTROS NOS ENCARGAMOS DE TODO.',
    subhead: 'Desde el instante en que aterriza su vuelo en Zanzíbar, nuestro chófer privado se asegura de que su trayecto a Zanzirangi House sea cómodo, relajante y seguro.',
    routeLabel: 'Aeropuerto Int’l ZNZ ➔ Zanzirangi House',
    routeTitle: 'Servicio de Chófer Privado Costero',
    specsEyebrow: 'Especificaciones del Traslado',
    cardTitle: 'Chófer Privado de la Mansión',
    airportTitle: 'Traslado de Aeropuerto',
    airportDesc: 'Recepción directa a la llegada y asistencia completa con su equipaje.',
    shuttleTitle: 'Transporte Exclusivo',
    shuttleDesc: 'Vehículos reservados únicamente para usted y sus acompañantes.',
    vehicleLabel: 'Tipo de Vehículo',
    vehicleValue: 'SUV Ejecutivo / Furgoneta de Lujo',
    vehicleSub: '(Detalles disponibles previa solicitud)',
    paxLabel: 'Pasajeros y Equipaje',
    paxValue: 'Ajustado al tamaño de su grupo',
    paxSub: '(Detalles disponibles previa solicitud)',
    safetyNote: 'Agua mineral fresca de cortesía, toallas húmedas aromatizadas y Wi-Fi de alta velocidad en todos los trayectos.',
    ctaRequest: 'SOLICITAR TRASLADO DE AEROPUERTO',
    ctaAddBooking: 'Añadir a la Reserva',
    whatsappMessage: '¡Hola Conserjería de Zanzirangi House! Deseo solicitar un traslado de aeropuerto / chófer privado para nuestro viaje.',
  },
  it: {
    eyebrow: 'Autista Privato e Trasferimenti VIP',
    heading: 'ARRIVA. RILASSATI. AL RESTO PENSIAMO NOI.',
    subhead: 'Dal momento in cui il volo atterra a Zanzibar, il nostro servizio di autista privato garantisce un trasferimento impeccabile, sereno e confortevole verso Zanzirangi House.',
    routeLabel: 'Aeroporto ZNZ ➔ Zanzirangi House',
    routeTitle: 'Servizio con Autista Lungo la Costa',
    specsEyebrow: 'Specifiche del Trasferimento',
    cardTitle: 'Autista Privato del Rifugio',
    airportTitle: 'Transfer Aeroporto',
    airportDesc: 'Accoglienza personalizzata in pista e assistenza bagagli all’arrivo.',
    shuttleTitle: 'Navetta Privata',
    shuttleDesc: 'Veicoli esclusivi riservati unicamente al vostro gruppo di viaggio.',
    vehicleLabel: 'Tipologia Veicolo',
    vehicleValue: 'SUV Executive / Van di Gran Lusso',
    vehicleSub: '(Dettagli disponibili su richiesta)',
    paxLabel: 'Passeggeri e Bagagli',
    paxValue: 'Calibrato sul numero di persone',
    paxSub: '(Dettagli disponibili su richiesta)',
    safetyNote: 'Acqua minerale fresca, salviette rinfrescanti profumate e Wi-Fi ad alta velocità inclusi a bordo per ogni viaggio.',
    ctaRequest: 'RICHIEDI TRANSFER AEROPORTO',
    ctaAddBooking: 'Aggiungi alla Prenotazione',
    whatsappMessage: 'Buongiorno Concierge Zanzirangi House! Vorrei richiedere il transfer aeroportuale o navetta privata per il nostro soggiorno.',
  },
};

/* =========================================================================
 * CONCIERGE SECTION TRANSLATIONS
 * ========================================================================= */
export interface ConciergeServiceItem {
  title: string;
  desc: string;
}

export interface ConciergeTranslations {
  eyebrow: string;
  heading: string;
  quote: string;
  subhead: string;
  availableLabel: string;
  inquireLabel: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  supportBtn: string;
  phonePrefix: string;
  services: ConciergeServiceItem[];
}

export const CONCIERGE_TRANSLATIONS: Record<Language, ConciergeTranslations> = {
  en: {
    eyebrow: 'Dedicated Butler & Host Care',
    heading: 'YOUR JOURNEY, PERSONALLY ARRANGED',
    quote: '"From airport arrival to private safari, our concierge team can help arrange every part of your Tanzania experience."',
    subhead: 'Our on-site team at Zanzirangi House takes care of every logistic so you can surrender completely to the calm rhythms of the Indian Ocean.',
    availableLabel: 'Available 24/7',
    inquireLabel: '• Inquire',
    bannerEyebrow: 'Bespoke Hosting & Travel Design',
    bannerTitle: 'Ready to Design Your Experience?',
    bannerDesc: 'Connect directly with our dedicated customer support and host team anytime. We will tailor every flight, car, villa, and excursion to your exact rhythm.',
    supportBtn: 'SPEAK WITH CUSTOMER SUPPORT',
    phonePrefix: 'Call Direct:',
    services: [
      {
        title: 'Airport Transfer',
        desc: 'Seamless VIP tarmac meet-and-greet and private transfer from Abeid Amani Karume International Airport (ZNZ).',
      },
      {
        title: 'Shuttle Service',
        desc: 'Private air-conditioned chauffeur vehicles for day trips, beach hops, and Stone Town explorations.',
      },
      {
        title: 'Private Tour Guide',
        desc: 'Accredited local Swahili guides steeped in island botany, maritime traditions, and UNESCO heritage.',
      },
      {
        title: 'Tanzania Safari',
        desc: 'Chartered fly-in bush expeditions to the Serengeti, Ngorongoro, Tarangire, and Selous Game Reserve.',
      },
      {
        title: 'Island Tours & Dhows',
        desc: 'Private wooden dhow charters, sandbank picnics, Mnemba Atoll snorkeling, and sunset golden hour cruises.',
      },
      {
        title: 'Restaurant Reservations',
        desc: 'Securing prime oceanfront tables at iconic Zanzibar venues and orchestrating private in-villa chef dinners.',
      },
      {
        title: 'Private Car & Driver',
        desc: 'Dedicated vehicle and discreet chauffeur at your disposal throughout the duration of your stay.',
      },
      {
        title: 'Curated Activities',
        desc: 'Kite surfing, deep-sea game fishing, yoga salas, aromatherapy massage, and Swahili culinary masterclasses.',
      },
      {
        title: 'Custom Itinerary',
        desc: 'Multi-day bespoke travel designs harmonizing relaxation at Zanzirangi House with mainland safari expeditions.',
      },
    ],
  },
  pl: {
    eyebrow: 'Dedykowana Opieka Gospodarza i Lokaja',
    heading: 'TWOJA PODRÓŻ, INDYWIDUALNIE ZAPLANOWANA',
    quote: '„Od powitania na lotnisku po prywatne safari – nasz zespół concierge pomoże zorganizować każdy etap Twojej wyprawy do Tanzanii.”',
    subhead: 'Nasz zespół w Zanzirangi House zadba o wszelkie detale organizacyjne, abyś mógł bez reszty oddać się kojącemu rytmowi Oceanu Indyjskiego.',
    availableLabel: 'Dostępne 24/7',
    inquireLabel: '• Zapytaj',
    bannerEyebrow: 'Indywidualna Organizacja Podróży',
    bannerTitle: 'Gotowy, by zaprojektować swoje doświadczenie?',
    bannerDesc: 'Skontaktuj się bezpośrednio z naszym zespołem wsparcia i gospodarzami. Dopasujemy każdy lot, samochód, willę i wycieczkę do Twoich potrzeb.',
    supportBtn: 'POROZMAWIAJ ZE WSPARCIEM KLIENTA',
    phonePrefix: 'Zadzwoń bezpośrednio:',
    services: [
      {
        title: 'Transfer z Lotniska',
        desc: 'Płynne powitanie VIP na płycie lotniska i prywatny transfer z lotniska Abeid Amani Karume (ZNZ).',
      },
      {
        title: 'Prywatny Transport',
        desc: 'Klimatyzowane auta z szoferem na wycieczki jednodniowe, wizyty na plażach i zwiedzanie Stone Town.',
      },
      {
        title: 'Prywatny Przewodnik',
        desc: 'Licencjonowani lokalni przewodnicy suahili znający sekrety wyspiarskiej przyrody, tradycji morskich i UNESCO.',
      },
      {
        title: 'Safari w Tanzanii',
        desc: 'Czarterowane loty awionetką do parków Serengeti, Ngorongoro, Tarangire i rezerwatu Selous.',
      },
      {
        title: 'Rejsy Łodzią Dhow',
        desc: 'Prywatne rejsy tradycyjnym dhow, pikniki na mieliznach, snorkeling na Mnemba i rejsy o zachodzie słońca.',
      },
      {
        title: 'Rezerwacje Restauracji',
        desc: 'Rezerwacja najlepszych stolików nad oceanem w kultowych miejscach Zanzibaru i kolacje z prywatnym szefem kuchni.',
      },
      {
        title: 'Auto z Szoferem',
        desc: 'Dedykowany luksusowy samochód i dyskretny kierowca do Twojej wyłącznej dyspozycji przez cały pobyt.',
      },
      {
        title: 'Aktywności na Miarę',
        desc: 'Kitesurfing, wędkarstwo dalekomorskie, sesje jogi, masaże aromaterapeutyczne i warsztaty kulinarne.',
      },
      {
        title: 'Plan Podróży na Zamówienie',
        desc: 'Wielodniowe autorskie programy łączące wypoczynek w willi Zanzirangi z safari na kontynencie afrykańskim.',
      },
    ],
  },
  ar: {
    eyebrow: 'عناية المساعد الشخصي والمضيف الحصري',
    heading: 'رحلتك الاستثنائية.. مُصممة لأجلك بالكامل',
    quote: '"من لحظة وصولك إلى المطار وحتى رحلات السفاري الخاصة، يتولى فريق الكونسيرج تنسيق أدق تفاصيل إقامتك في تنزانيا."',
    subhead: 'يتكفل فريقنا في زانزيرانجي هاوس بجميع الترتيبات اللوجستية لتنعم بالاسترخاء التام مع هدوء أمواج المحيط الهندي.',
    availableLabel: 'متاح على مدار الساعة 24/7',
    inquireLabel: '• استفسار',
    bannerEyebrow: 'ضيافة مخصصة وتصميم رحلات راقٍ',
    bannerTitle: 'هل أنت مستعد لتصميم إقامتك الاستثنائية؟',
    bannerDesc: 'تواصل مباشرة مع فريق خدمة العملاء والمضيفين في أي وقت؛ سنقوم بتهيئة الطيران، السيارات، الفيلات، والجولات وفق جدولك الخاص.',
    supportBtn: 'تحدث مع خدمة العملاء والكونسيرج',
    phonePrefix: 'اتصال مباشر:',
    services: [
      {
        title: 'توصيل المطار VIP',
        desc: 'استقبال شخصي فاخر عند مدرج الطائرات ونقل مباشر وسريع من مطار عبيد أماني كرومي الدولي.',
      },
      {
        title: 'خدمة السيارات الخاصة',
        desc: 'مركبات مكيفة يقودها سائق خاص للجولات النهارية واستكشاف الشواطئ وأزقة ستون تاون التاريخية.',
      },
      {
        title: 'مرشد سياحي خاص',
        desc: 'مرشدون محليون معتمدون متعمقون في تاريخ وثقافة السواحيل ونباتات الجزيرة وتراث اليونسكو.',
      },
      {
        title: 'سفاري البر التنزاني',
        desc: 'رحلات طيران مستأجرة مباشرة لمحميات سيرينغيتي وفوهة نغورونغورو وتارانجيري وسيلوس.',
      },
      {
        title: 'جولات الجزر وقوارب الداو',
        desc: 'إبحار خاص بقوارب الداو الخشبية، ونزهات الضفاف الرملية، وغطس حيد منيمبا، وجولات الغروب.',
      },
      {
        title: 'حجوزات المطاعم الفاخرة',
        desc: 'حجز أفضل الطاولات الشاطئية في أشهر مطاعم زنجبار، أو إعداد عشاء خاص مع طاهٍ داخل فيلتك.',
      },
      {
        title: 'سيارة فاخرة مع سائق خاص',
        desc: 'مركبة حصرية وسائق مؤهل تحت تصرفك ورهن إشارتك طوال فترة إقامتك في المنتجع.',
      },
      {
        title: 'أنشطة وتجارب منتقاة',
        desc: 'ركوب الأمواج الشراعية، والصيد الرياضي في الأعماق، واليوغا، والتدليك العطري، ودروس الطبخ السواحيلي.',
      },
      {
        title: 'برامج سياحية مفصلة',
        desc: 'تصميم مسارات سفر متعددة الأيام تجمع بين فخامة الإقامة في زانزيرانجي ومغامرات سفاري القارة.',
      },
    ],
  },
  zh: {
    eyebrow: '专属管家与驻地礼宾礼遇',
    heading: '悉心定制您的每一段专属旅程',
    quote: '“从降落接机到荒野游猎，我们的专属礼宾团队将为您精心打点坦桑尼亚之行的每一个精彩片段。”',
    subhead: 'Zanzirangi House 驻地专业团队悉心统筹每一步出行后勤，让您全身心沉浸于印度洋轻柔的海风与静谧之中。',
    availableLabel: '全天候 24/7 恭候',
    inquireLabel: '• 咨询详情',
    bannerEyebrow: '定制化款待与私人行程构筑',
    bannerTitle: '准备好开启您的专属定制体验了吗？',
    bannerDesc: '随时与我们的专属客户支持和管家团队直接沟通。我们将根据您的出行节奏，定制每趟航程、车辆、别墅与探索活动。',
    supportBtn: '与客户支持专员在线沟通',
    phonePrefix: '直拨咨询专线：',
    services: [
      {
        title: '贵宾专车接送机',
        desc: '专属司机在阿贝德·阿曼尼·卡鲁姆国际机场 (ZNZ) 专享迎候，无缝尊享私密直达别苑。',
      },
      {
        title: '私人专车服务',
        desc: '全天候配备冷暖空调的专属商务客车，畅游全岛海滩、特色市集与石头城古迹。',
      },
      {
        title: '专属金牌私导',
        desc: '深谙当地斯瓦希里民俗风情、热带雨林植物学与联合国教科文组织遗产的资深向导。',
      },
      {
        title: '坦桑尼亚大陆游猎',
        desc: '轻型飞机直飞塞伦盖蒂大草原、恩戈罗恩戈罗火山口、塔兰吉雷与塞卢斯动物保护区。',
      },
      {
        title: '海岛巡航与木帆船',
        desc: '包租传统木制 Dhow 帆船出海，享白沙洲奢华野餐、姆内姆巴浮潜与落日私航。',
      },
      {
        title: '特色奢华餐厅预订',
        desc: '预订全岛标志性一线海景景观餐厅，或安排名厨在别墅私人露台为您现烹星级晚宴。',
      },
      {
        title: '全天专属座驾与司机',
        desc: '在入住期间为您全程配备一辆高档座驾与谨严礼貌的私人司导，随叫随到。',
      },
      {
        title: '专属主题定制体验',
        desc: '风筝冲浪、深海海钓、清晨海景瑜伽、热带芳香水疗与斯瓦希里私房香料烹饪课。',
      },
      {
        title: '多日定制探险方案',
        desc: '量身定制联运方案，完美平衡 Zanzirangi House 滨海隐逸慢调与大陆狂野巡猎。',
      },
    ],
  },
  fr: {
    eyebrow: 'Majordome Dédié & Accueil Sur Mesure',
    heading: 'VOTRE VOYAGE, ORCHESTRÉ POUR VOUS',
    quote: '« De votre arrivée à l’aéroport à vos safaris privés, notre conciergerie conçoit chaque moment de votre expérience en Tanzanie. »',
    subhead: 'Notre équipe sur place à Zanzirangi House gère chaque aspect logistique afin que vous puissiez vous abandonner aux doux rythmes de l’océan Indien.',
    availableLabel: 'Disponible 24h/24',
    inquireLabel: '• Nous consulter',
    bannerEyebrow: 'Hospitalité Privée & Conception de Voyages',
    bannerTitle: 'Prêt à concevoir votre séjour d’exception ?',
    bannerDesc: 'Échangez directement avec notre équipe d’assistance et nos maîtres de maison. Nous ajusterons chaque vol, véhicule, villa et excursion selon vos désirs.',
    supportBtn: 'ÉCHANGER AVEC LE SERVICE CLIENT',
    phonePrefix: 'Ligne directe :',
    services: [
      {
        title: 'Transfert Aéroport',
        desc: 'Accueil VIP personnalisé à la descente de l’avion et transfert privé depuis l’aéroport Karume (ZNZ).',
      },
      {
        title: 'Service de Navettes',
        desc: 'Véhicules climatisés avec chauffeur pour vos excursions, journées de plage et escapades à Stone Town.',
      },
      {
        title: 'Guide Privé Dédié',
        desc: 'Guides locaux certifiés experts de l’histoire swahilie, de la botanique tropicale et du patrimoine UNESCO.',
      },
      {
        title: 'Safaris en Tanzanie',
        desc: 'Vols charters directs en brousse vers le Serengeti, le Ngorongoro, Tarangire et la réserve de Selous.',
      },
      {
        title: 'Croisières en Voilier Dhow',
        desc: 'Privatisation de dhows traditionnels en bois, pique-niques sur bancs de sable et snorkeling à Mnemba.',
      },
      {
        title: 'Réservations de Tables',
        desc: 'Accès privilégié aux tables en front de mer les plus prisées et dîners gastronomiques en villa par un chef.',
      },
      {
        title: 'Voiture avec Chauffeur Privé',
        desc: 'Véhicule haut de gamme et chauffeur discret mis à votre disposition tout au long de votre séjour.',
      },
      {
        title: 'Activités Choisies',
        desc: 'Kitesurf, pêche au gros, séances de yoga, massages aromathérapie et ateliers de cuisine swahilie.',
      },
      {
        title: 'Itinéraires sur Mesure',
        desc: 'Création de voyages harmonieux combinant retraite balnéaire à Zanzirangi House et safaris continentaux.',
      },
    ],
  },
  sw: {
    eyebrow: 'Mhudumu Maalum & Huduma ya Pango',
    heading: 'SAFARI YAKO, ILIYOPANGWA KIBINAFSI',
    quote: '« Kuanzia kuwasili uwanja wa ndege hadi safari za wanyamapori, timu yetu ya concierge itakusaidia kupanga kila sehemu ya safari yako nchini Tanzania. »',
    subhead: 'Timu yetu hapa Zanzirangi House inashughulikia kila jambo la safari ili upate fursa ya kupumzika na kufurahia upepo mwanana wa Bahari ya Hindi.',
    availableLabel: 'Inapatikana Saa 24/7',
    inquireLabel: '• Ulizia',
    bannerEyebrow: 'Ukarimu wa Kipekee & Mipango ya Safari',
    bannerTitle: 'Uko tayari kupanga safari yako nzuri?',
    bannerDesc: 'Wasiliana moja kwa moja na huduma kwa wateja na wahudumu wetu wakati wowote. Tutarekebisha kila ndege, gari, villa na matembezi kulingana na unavyopenda.',
    supportBtn: 'ONGEA NA HUDUMA KWA WATEJA',
    phonePrefix: 'Piga simu moja kwa moja:',
    services: [
      {
        title: 'Usafiri wa Uwanja wa Ndege',
        desc: 'Kupokelewa kwa heshima kubwa uwanja wa ndege wa kimataifa wa Karume (ZNZ) na kufikishwa moja kwa moja.',
      },
      {
        title: 'Magari ya Matembezi',
        desc: 'Magari yenye kiyoyozi na dereva kwa ajili ya safari za mchana, kutembelea fukwe na Mji Mkongwe.',
      },
      {
        title: 'Mwongozo Binafsi wa Safari',
        desc: 'Waongozaji wazawa walioidhinishwa wenye ujuzi wa mimea ya visiwa, bahari na historia ya UNESCO.',
      },
      {
        title: 'Safari za Mbugani Tanzania',
        desc: 'Ndege za kukodi kuelekea mbuga za Serengeti, Ngorongoro, Tarangire na Selous.',
      },
      {
        title: 'Safari za Majahazi ya Asili',
        desc: 'Kukodi majahazi ya mbao ya kitamaduni, chakula kwenye fungu za mchanga na kupiga mbizi Mnemba.',
      },
      {
        title: 'Nafasi za Migahawa ya Kifahari',
        desc: 'Kuhifadhi meza nzuri zinazotazama bahari au kuandaliwa chakula maalum na mpishi ndani ya villa yako.',
      },
      {
        title: 'Gari na Dereva Binafsi',
        desc: 'Gari maalum na dereva mtulivu aliye tayari kukuhudumia wakati wote wa kukaa kwako.',
      },
      {
        title: 'Shughuli za Kujiburudisha',
        desc: 'Kuteleza kwenye mawimbi (kite surfing), uvuvi wa kina kirefu, yoga, masaji na madarasa ya upishi wa Kiswahili.',
      },
      {
        title: 'Ratiba ya Safari Binafsi',
        desc: 'Mipango ya safari ya siku kadhaa inayounganisha mapumziko ya Zanzirangi House na safari za mbugani.',
      },
    ],
  },
  es: {
    eyebrow: 'Atención Personalizada y Mayordomo',
    heading: 'SU VIAJE, DISEÑADO A SU MEDIDA',
    quote: '«Desde la llegada al aeropuerto hasta un safari privado, nuestro equipo de conserjería coordinará cada instante de su experiencia en Tanzania.»',
    subhead: 'Nuestro equipo en Zanzirangi House se ocupa de cada gestión para que usted disfrute plenamente de los ritmos apacibles del océano Índico.',
    availableLabel: 'Disponible 24/7',
    inquireLabel: '• Consultar',
    bannerEyebrow: 'Hospitalidad Exclusiva y Diseño de Viajes',
    bannerTitle: '¿Listo para diseñar su experiencia soñada?',
    bannerDesc: 'Comuníquese directamente con nuestro equipo de atención y anfitriones cuando lo desee. Adaptaremos vuelos, coches, villas y excursiones a su ritmo.',
    supportBtn: 'HABLAR CON ATENCIÓN AL CLIENTE',
    phonePrefix: 'Llamada directa:',
    services: [
      {
        title: 'Traslado de Aeropuerto VIP',
        desc: 'Recepción preferente en pista y traslado privado directo desde el Aeropuerto Karume (ZNZ).',
      },
      {
        title: 'Servicio de Vehículo Privado',
        desc: 'Coches climatizados con chófer para excursiones, visitas a playas y paseos por Stone Town.',
      },
      {
        title: 'Guía Turístico Privado',
        desc: 'Guías locales oficiales expertos en botánica isleña, historia marinera y patrimonio de la UNESCO.',
      },
      {
        title: 'Safaris en Tanzania',
        desc: 'Expediciones en avioneta a los parques de Serengeti, Ngorongoro, Tarangire y la reserva de Selous.',
      },
      {
        title: 'Travesías en Veleros Dhow',
        desc: 'Alquiler de veleros dhow tradicionales, pícnics en bancos de arena y esnórquel en Mnemba.',
      },
      {
        title: 'Reservas en Restaurantes',
        desc: 'Mesa preferente frente al mar en lugares emblemáticos o cenas privadas en la villa con chef.',
      },
      {
        title: 'Vehículo y Chófer Dedicado',
        desc: 'Coche exclusivo y conductor profesional a su entera disposición durante toda su estancia.',
      },
      {
        title: 'Actividades Exclusivas',
        desc: 'Kitesurf, pesca deportiva, sesiones de yoga, masajes relajantes y clases de cocina suajili.',
      },
      {
        title: 'Itinerarios a Medida',
        desc: 'Diseño de viajes personalizados que aúnan la calma de Zanzirangi House con safaris en el continente.',
      },
    ],
  },
  it: {
    eyebrow: 'Maggiordomo e Accoglienza Dedicata',
    heading: 'IL TUO VIAGGIO, ORGANIZZATO SU MISURA',
    quote: '«Dall’accoglienza in aeroporto al safari privato, il nostro concierge curerà ogni dettaglio della tua avventura in Tanzania.»',
    subhead: 'Il team in loco a Zanzirangi House gestisce ogni aspetto organizzativo per farti vivere appieno la quiete dell’Oceano Indiano.',
    availableLabel: 'Disponibile 24/7',
    inquireLabel: '• Informazioni',
    bannerEyebrow: 'Ospitalità su Misura e Travel Design',
    bannerTitle: 'Pronto a progettare la tua esperienza?',
    bannerDesc: 'Contatta il nostro team di supporto e ospitalità in qualsiasi momento. Personalizzeremo voli, auto, ville ed escursioni sui tuoi desideri.',
    supportBtn: 'PARLA CON IL SERVIZIO CLIENTI',
    phonePrefix: 'Linea diretta:',
    services: [
      {
        title: 'Transfer Aeroporto VIP',
        desc: 'Incontro VIP direttamente al gate e trasferimento privato dall’aeroporto Karume (ZNZ).',
      },
      {
        title: 'Servizio Navetta Privata',
        desc: 'Veicoli climatizzati con autista per gite di un giorno, spiagge esclusive e tour a Stone Town.',
      },
      {
        title: 'Guida Turistica Privata',
        desc: 'Guide locali abilitate esperte di botanica, tradizioni marittime swahili e siti UNESCO.',
      },
      {
        title: 'Safari nella Tanzania Continentale',
        desc: 'Voli bush privati per il Serengeti, il cratere di Ngorongoro, Tarangire e la riserva Selous.',
      },
      {
        title: 'Tour dell’Isola e Veleggiate in Dhow',
        desc: 'Noleggio esclusivo di dhow in legno, picnic su lingue di sabbia, snorkeling a Mnemba e tramonti.',
      },
      {
        title: 'Prenotazioni Ristoranti',
        desc: 'I migliori tavoli vista oceano nei locali storici o cene esclusive con chef privato in villa.',
      },
      {
        title: 'Auto Privata con Conducente',
        desc: 'Veicolo di prestigio e autista dedicato a tua completa disposizione per tutta la permanenza.',
      },
      {
        title: 'Esperienze Selezionate',
        desc: 'Kitesurf, pesca d’altura, yoga panoramico, massaggi con aromaterapia e lezioni di cucina locale.',
      },
      {
        title: 'Itinerari Personalizzati',
        desc: 'Progetti di viaggio su più giorni che armonizzano il relax a Zanzirangi House e le emozioni del safari.',
      },
    ],
  },
};

/* =========================================================================
 * WHY STAY SECTION TRANSLATIONS
 * ========================================================================= */
export interface WhyStayPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface WhyStayTranslations {
  eyebrow: string;
  heading: string;
  subhead: string;
  pillars: WhyStayPillar[];
}

export const WHY_STAY_TRANSLATIONS: Record<Language, WhyStayTranslations> = {
  en: {
    eyebrow: 'The Sanctuary Difference',
    heading: 'WHY ZANZIRANGI HOUSE',
    subhead: 'Four guiding values define every moment at our retreat, creating a rare atmosphere of calm, exclusivity, and profound connection to Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'PRIVATE & PEACEFUL',
        tagline: 'A private sanctuary away from the crowds.',
        description: 'Tucked along the pristine southern coastline of Kizimkazi, far from tourist congestion. Here, time is measured by the tidal ebb and flow, the rustle of palms, and unobstructed ocean horizons.',
      },
      {
        number: '02',
        title: 'AUTHENTIC ZANZIBAR',
        tagline: 'Experience the island through its people, flavours and culture.',
        description: 'From master Swahili woodcarvers and centuries-old makuti thatched pavilions to organic spices harvested daily from our estate gardens, experience the genuine soul of the Spice Island.',
      },
      {
        number: '03',
        title: 'PERSONAL CONCIERGE',
        tagline: 'From airport arrival to safari planning.',
        description: 'A dedicated host and concierge team attentive to your every need. Private airport tarmac greetings, chartered boat launches, in-villa dining, and discreet personal hospitality throughout.',
      },
      {
        number: '04',
        title: 'TANZANIA BEYOND',
        tagline: 'Connect your Zanzibar stay with the wonders of mainland Tanzania.',
        description: 'Seamlessly combine oceanfront rest with chartered fly-in bush safaris to the Serengeti, Ngorongoro Crater, and Tarangire, creating a complete and unforgettable East African journey.',
      },
    ],
  },
  pl: {
    eyebrow: 'Wyjątkowość Naszej Posiadłości',
    heading: 'DLACZEGO ZANZIRANGI HOUSE',
    subhead: 'Cztery przewodnie wartości definiują każdą chwilę w naszej posiadłości, tworząc atmosferę spokoju, wyłączności i głębokiego kontaktu z Tanzanią.',
    pillars: [
      {
        number: '01',
        title: 'PRYWATNOŚĆ I SPOKÓJ',
        tagline: 'Prywatna oaza z dala od tłumów.',
        description: 'Położona na dziewiczym południowym wybrzeżu Kizimkazi, z dala od zgiełku turystycznego. Czas mierzą tu odpływy i przypływy, szum palm i bezkresny horyzont oceanu.',
      },
      {
        number: '02',
        title: 'AUTENTYCZNY ZANZIBAR',
        tagline: 'Poznaj wyspę poprzez jej ludzi, smaki i kulturę.',
        description: 'Od mistrzów rzeźbiarstwa suahili i pawilonów krytych strzechą makuti, po przyprawy zbierane każdego poranka w naszym ogrodzie – poczuj prawdziwą duszę Wyspy Przypraw.',
      },
      {
        number: '03',
        title: 'INDYWIDUALNY CONCIERGE',
        tagline: 'Od powitania na lotnisku po planowanie safari.',
        description: 'Dedykowany zespół gospodarzy i concierge czuwający nad każdym życzeniem. Powitanie VIP na lotnisku, rejsy łodziami, kolacje w willi i dyskretna troska o Twój komfort.',
      },
      {
        number: '04',
        title: 'TANZANIA POZA ZANZIRANGI',
        tagline: 'Połącz pobyt na Zanzibarze z cudami kontynentalnej Tanzanii.',
        description: 'Płynnie połącz relaks nad oceanem z lotami awionetką na safari do Serengeti, Krateru Ngorongoro i Tarangire, tworząc niezapomnianą podróż po Afryce Wschodniej.',
      },
    ],
  },
  ar: {
    eyebrow: 'ما يميز ملاذنا الاستثنائي',
    heading: 'لماذا تختار زانزيرانجي هاوس؟',
    subhead: 'أربع ركائز أصيلة تُحدد كل لحظة في ملاذنا، لترسم أجواء نادرة من السكينة التامة والخصوصية الفائقة والارتباط العميق بأرض تنزانيا.',
    pillars: [
      {
        number: '01',
        title: 'خصوصية وسكينة تامة',
        tagline: 'ملاذ خاص واستثنائي بعيداً عن صخب الزحام.',
        description: 'يقع في بقعة هادئة على الساحل الجنوبي البكر في كيزيمكازي بعيداً عن حشود السياح، حيث يُقاس الوقت بإيقاع المد والجزر وحفيف النخيل وأفق المحيط المفتوح.',
      },
      {
        number: '02',
        title: 'زنجبار الأصيلة بعراقتها',
        tagline: 'عش تجربة الجزيرة عبر أهلها ونكهاتها وتراثها الأصيل.',
        description: 'من إبداعات حرفيي الخشب السواحيلية والمظلات المسقوفة بسعف الماكوتي التقليدي، إلى التوابل العضوية التي تُقطف يومياً من حديقتنا، لتستشعر الروح الحقيقية لجزيرة التوابل.',
      },
      {
        number: '03',
        title: 'كونسيرج شخصي مخصص',
        tagline: 'من استقبال المطار وحتى تنسيق رحلات السفاري.',
        description: 'فريق مضيفين وكونسيرج مخصص يلبي أدق متطلباتك؛ استقبال خاص في المطار، رحلات بحرية حصرية، وتناول الطعام في الفيلا مع ضيافة شخصية راقية.',
      },
      {
        number: '04',
        title: 'روائع تنزانيا الكبرى',
        tagline: 'اجمع بين إقامتك في زنجبار وعجائب بر تنزانيا.',
        description: 'امزج بسلاسة بين الاسترخاء الشاطئي الفاخر ورحلات الطيران الخاص إلى سفاري سيرينغيتي وفوهة نغورونغورو وتارانجيري لتعيش رحلة إفريقية لا تُنسى.',
      },
    ],
  },
  zh: {
    eyebrow: '别苑的核心卓越之道',
    heading: '为何选择 ZANZIRANGI HOUSE',
    subhead: '四大核心哲学定义了别苑隐逸时光的每一刻，构筑出远离纷扰的静谧、专属尊贵以及与坦桑尼亚这片神奇土地的深层连接。',
    pillars: [
      {
        number: '01',
        title: '纯粹私密与极致静谧',
        tagline: '远离游人尘嚣的私密海滨避世圣殿。',
        description: '依偎于基济姆卡齐（Kizimkazi）南端未被开发的纯美海岸。在这里，时光由潮起潮落、椰林微风与毫无遮蔽的无垠海平线轻声丈量。',
      },
      {
        number: '02',
        title: '原汁原味的桑岛人文',
        tagline: '通过当地人民、地道风味与文化，深度触碰海岛灵魂。',
        description: '从斯瓦希里非遗木雕大师的巧思、传承百年的马库蒂棕榈编织坡屋顶，到每日清晨自庄园采摘的鲜有机香料，沉浸体验纯正香料之岛的深厚底蕴。',
      },
      {
        number: '03',
        title: '无微不至的专属礼宾',
        tagline: '从机场贵宾专车接机到国家公园游猎全程策划。',
        description: '由资深驻地管家与礼宾团队竭诚照料您的每一项需求。包括机场迎宾、私人木帆船出海、别墅名厨现烹与无处不在却恰到好处的私享款待。',
      },
      {
        number: '04',
        title: '纵览坦桑尼亚全貌',
        tagline: '将海岛悠然假期与坦桑尼亚大陆旷野奇迹完美相连。',
        description: '无缝串联印度洋岸边的赤足慢活与飞往塞伦盖蒂、恩戈罗恩戈罗火山口及塔兰吉雷的轻型飞机野奢游猎，缔造毕生难忘的东非探险传奇。',
      },
    ],
  },
  fr: {
    eyebrow: 'La Singularité du Domaine',
    heading: 'POURQUOI ZANZIRANGI HOUSE',
    subhead: 'Quatre piliers essentiels définissent notre retraite, tissant une atmosphère rare de quiétude, d’intimité et de lien profond avec la Tanzanie.',
    pillars: [
      {
        number: '01',
        title: 'INTIMITÉ & SÉRÉNITÉ',
        tagline: 'Un sanctuaire privé à l’abri des foules.',
        description: 'Niché le long de la côte sud préservée de Kizimkazi, loin de l’agitation touristique. Ici, le temps s’écoule au rythme des marées, du murmure des palmiers et de l’horizon infini.',
      },
      {
        number: '02',
        title: 'ZANZIBAR AUTHENTIQUE',
        tagline: 'Vivez l’île à travers ses habitants, ses saveurs et sa culture.',
        description: 'Des maîtres sculpteurs sur bois swahilis aux toitures traditionnelles en makuti, en passant par les épices récoltées chaque jour au potager, touchez l’âme de l’Île aux Épices.',
      },
      {
        number: '03',
        title: 'CONCIERGE DÉDIÉ',
        tagline: 'De l’arrivée à l’aéroport à la planification des safaris.',
        description: 'Une équipe de majordomes attentive à vos moindres désirs : accueil VIP sur le tarmac, sorties nautiques privées, repas gastronomiques en villa et discrétion absolue.',
      },
      {
        number: '04',
        title: 'LA TANZANIE AU-DELÀ',
        tagline: 'Reliez votre séjour insulaire aux merveilles du continent.',
        description: 'Associez la douceur de l’océan Indien à des safaris aériens exclusifs vers le Serengeti, le Ngorongoro et le Tarangire pour un périple inoubliable en Afrique de l’Est.',
      },
    ],
  },
  sw: {
    eyebrow: 'Utofauti wa Makazi Yetu',
    heading: 'KWA NINI UCHAGUE ZANZIRANGI HOUSE',
    subhead: 'Maadili manne makuu yanaongoza kila wakati kwenye makazi yetu, yakitengeneza mazingira adimu ya amani, upekee na uhusiano wa kina na nchi ya Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'UTULIVU NA USALAMA',
        tagline: 'Makazi binafsi mbali na mikusanyiko ya watu.',
        description: 'Iko kando ya pwani tulivu ya kusini ya Kizimkazi, mbali na maeneo ya watalii wengi. Hapa, muda unapimwa na maji kujaa na kupwa, upepo wa minazi na upeo wa bahari.',
      },
      {
        number: '02',
        title: 'ZANZIBAR YA ASILI',
        tagline: 'Furahia kisiwa kupitia watu wake, vyakula na utamaduni.',
        description: 'Kuanzia mafundi stadi wa uchongaji wa Waswahili na mapaa ya makuti, hadi viungo vya asili vinavyovunwa kila siku bustanini, utaonja roho halisi ya Kisiwa cha Viungo.',
      },
      {
        number: '03',
        title: 'MHUDUMU BINAFSI (CONCIERGE)',
        tagline: 'Kuanzia kufika uwanja wa ndege hadi safari za mbugani.',
        description: 'Timu ya wahudumu waliojitolea kukuhudumia kwa kila hitaji. Mapokezi ya heshima uwanja wa ndege, safari za boti, vyakula vya villa na ukarimu wa hali ya juu.',
      },
      {
        number: '04',
        title: 'TANZANIA BARA',
        tagline: 'Unganisha kukaa kwako Zanzibar na maajabu ya Tanzania bara.',
        description: 'Unganisha mapumziko ya ufukweni na safari za ndege za moja kwa moja mbuga za Serengeti, Ngorongoro na Tarangire, ukitengeneza safari isiyosahaulika.',
      },
    ],
  },
  es: {
    eyebrow: 'La Distinción de Nuestro Santuario',
    heading: 'POR QUÉ ELEGIR ZANZIRANGI HOUSE',
    subhead: 'Cuatro principios guían cada instante en nuestra mansión, creando una atmósfera de serenidad, exclusividad y honda conexión con Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'PRIVACIDAD Y CALMA',
        tagline: 'Un refugio íntimo lejos de las aglomeraciones.',
        description: 'Emplazada en la costa virgen del sur de Kizimkazi, lejos del turismo masivo. Aquí el tiempo se rige por las mareas, el susurro de las palmeras y la inmensidad del mar.',
      },
      {
        number: '02',
        title: 'AUTÉNTICO ZANZÍBAR',
        tagline: 'Descubra la isla a través de sus gentes, aromas y cultura.',
        description: 'Desde maestros ebanistas suajilis y techumbres tradicionales de makuti, hasta especias frescas cosechadas a diario en la finca: viva el alma de la Isla de las Especias.',
      },
      {
        number: '03',
        title: 'CONSERJE PERSONAL',
        tagline: 'Desde la llegada al aeropuerto hasta el diseño del safari.',
        description: 'Un equipo de conserjes y anfitriones pendiente de cada preferencia: traslados VIP, barcos privados, cenas en la villa y una atención cálida y discreta en todo momento.',
      },
      {
        number: '04',
        title: 'LA GRAN TANZANIA',
        tagline: 'Combine su estancia en la isla con las maravillas del continente.',
        description: 'Una armoniosa unión entre descanso frente al océano y safaris aéreos directos al Serengueti, Ngorongoro y Tarangire, conformando un viaje inolvidable por África Oriental.',
      },
    ],
  },
  it: {
    eyebrow: 'La Differenza del Nostro Santuario',
    heading: 'PERCHÉ SCEGLIERE ZANZIRANGI HOUSE',
    subhead: 'Quattro valori guidano ogni momento nella nostra tenuta, creando una rara atmosfera di pace, riservatezza e profondo legame con la Tanzania.',
    pillars: [
      {
        number: '01',
        title: 'PRIVACY E TRANQUILLITÀ',
        tagline: 'Un santuario privato lontano dalla folla.',
        description: 'Situato lungo la costa meridionale incontaminata di Kizimkazi, lontano dal turismo di massa. Qui il tempo è scandito dalle maree, dal fruscio delle palme e dall’orizzonte marino.',
      },
      {
        number: '02',
        title: 'AUTENTICA ZANZIBAR',
        tagline: 'Vivi l’isola attraverso la sua gente, i suoi profumi e la sua cultura.',
        description: 'Dagli intagliatori swahili ai padiglioni in paglia di makuti, fino alle spezie biologiche colte ogni giorno nell’orto della tenuta: scopri la vera essenza dell’Isola delle Spezie.',
      },
      {
        number: '03',
        title: 'CONCIERGE DEDICATO',
        tagline: 'Dall’arrivo in aeroporto alla pianificazione dei safari.',
        description: 'Un team di maggiordomi e concierge a tua completa disposizione: accoglienza VIP, barche private, cene gourmet in villa e un’ospitalità discreta e calorosa.',
      },
      {
        number: '04',
        title: 'LA TANZANIA OLTRE L’ISOLA',
        tagline: 'Collega il soggiorno a Zanzibar con i grandi parchi del continente.',
        description: 'Combina il riposo fronte oceano con voli diretti per safari nel Serengeti, nel cratere di Ngorongoro e a Tarangire per un’esperienza memorabile in Africa Orientale.',
      },
    ],
  },
};

/* =========================================================================
 * PROPERTY EXPERIENCE SECTION TRANSLATIONS
 * ========================================================================= */
export interface PropertyFacet {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PropertyExperienceTranslations {
  eyebrow: string;
  heading: string;
  subhead: string;
  facets: Record<string, PropertyFacet>;
}

export const PROPERTY_EXPERIENCE_TRANSLATIONS: Record<
  Language,
  PropertyExperienceTranslations
> = {
  en: {
    eyebrow: 'Architecture & Grounds',
    heading: 'A SANCTUARY CARVED INTO THE COASTLINE',
    subhead: 'Discover the distinct spaces of Zanzirangi House: from private coral cliff villas and freshwater infinity swimming pools to our organic spice gardens.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Ocean Villas',
        subtitle: 'Barefoot Luxury & Oceanfront Horizons',
        description: 'Perched along the coral cliff edge, each villa is oriented toward the changing colors of Menai Bay, featuring expansive private sun decks, infinity plunge pools, and open-air bathrooms.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Garden Bungalows',
        subtitle: 'Botanical Seclusion & Natural Thatch',
        description: 'Immersed within lush tropical flora, our private bungalows offer complete seclusion, outdoor stone showers, and shaded verandahs surrounded by birdsong and flowering frangipani.',
      },
      pool: {
        id: 'pool',
        title: 'Infinity Swimming Pool',
        subtitle: '25 Meters of Freshwater Stillness',
        description: 'Suspended above the coastal limestone, the freshwater infinity pool seamlessly merges with the turquoise horizon, framed by comfortable double daybeds and attentive poolside service.',
      },
      lounge: {
        id: 'lounge',
        title: 'Sunset Lounge & Bar',
        subtitle: 'Golden Hour Taarab & Ocean Breezes',
        description: 'An open-sided coastal pavilion where guests gather for pre-dinner aperitifs, cellar vintages, and peaceful taarab melodies while the sun sinks into the Indian Ocean.',
      },
      garden: {
        id: 'garden',
        title: 'Organic Botanical Garden',
        subtitle: 'Spices, Chilies & Fragrant Herbs',
        description: 'Cultivated directly on our estate grounds, our garden supplies the kitchen with organic lemongrass, ginger, chili, mint, and tropical seasonal vegetables every morning.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Makuti Thatched Pavilion',
        subtitle: 'Heritage Swahili & Coastal Dining',
        description: 'Handcrafted with natural coconut palm thatch (makuti) and local timber, creating a naturally cooled open-air sanctuary for slow farm-to-table dining.',
      },
      seaview: {
        id: 'seaview',
        title: 'Coral Lagoon & Sea Views',
        subtitle: 'Unobstructed 180° Indian Ocean Vistas',
        description: 'Watch traditional wooden dhows glide across the coral reef line and spot dolphins playing in the outer waters from our elevated terraces.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Outdoor Terraces & Baobab Groves',
        subtitle: 'Centenary Baobabs & Coral Pathways',
        description: 'Sculptural centenary baobabs cast peaceful shade across hand-laid coral ragstone pathways leading down to private beach coves.',
      },
    },
  },
  pl: {
    eyebrow: 'Architektura i Przestrzeń Posiadłości',
    heading: 'SANKTUARIUM WPROJEKTOWANE W WYBRZEŻE',
    subhead: 'Odkryj niezwykłe zakątki Zanzirangi House: od willi na koralowym klifie i basenu infinity ze słodką wodą, po nasz ogród ziół i przypraw.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Wille nad Oceanem',
        subtitle: 'Luksus na bosaka i horyzont oceanu',
        description: 'Usytuowane na krawędzi koralowego klifu wille zwrócone są ku barwom Zatoki Menai. Oferują obszerne tarasy słoneczne, prywatne baseny i łazienki na świeżym powietrzu.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Bungalowy w Ogrodzie',
        subtitle: 'Botaniczne odosobnienie i strzecha makuti',
        description: 'Zanurzone w bujnej tropikalnej roślinności bungalowy zapewniają prywatność, prysznice z kamienia pod gołym niebem i werandy pośród kwitnącej plumerii.',
      },
      pool: {
        id: 'pool',
        title: 'Basen Infinity',
        subtitle: '25 metrów słodkowodnego ukojenia',
        description: 'Zawieszony nad wapiennym klifem basen infinity łączy się optycznie z lazurowym horyzontem, otoczony podwójnymi leżankami i dyskretnym serwisem.',
      },
      lounge: {
        id: 'lounge',
        title: 'Lounge & Bar o Zachodzie Słońca',
        subtitle: 'Złota godzina, muzyka taarab i morska bryza',
        description: 'Otwarty nadmorski pawilon, w którym goście spotykają się na aperitif, wyborne wina i kojące melodie suahili, gdy słońce chowa się w falach Oceanu Indyjskiego.',
      },
      garden: {
        id: 'garden',
        title: 'Ogród Botaniczny i Przyprawowy',
        subtitle: 'Świeże zioła, papryczki i zanzibarskie przyprawy',
        description: 'Uprawiany na terenie posiadłości ogród zaopatruje naszą kuchnię w trawę cytrynową, imbir, miętę i tropikalne warzywa zbierane każdego ranka.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Restauracja pod Strzechą Makuti',
        subtitle: 'Kulinaria suahili w formule od ogrodu do stołu',
        description: 'Ręcznie tkana ze strzechy palmowej i lokalnego drewna przestrzeń tworzy naturalnie wentylowany pawilon do powolnego celebrowania posiłków.',
      },
      seaview: {
        id: 'seaview',
        title: 'Laguna Koralowa i Widok na Morze',
        subtitle: 'Panoramiczny 180° widok na Ocean Indyjski',
        description: 'Obserwuj tradycyjne drewniane łodzie dhow przesuwające się wzdłuż linii rafy i wypatruj dzikich delfinów z naszych tarasów widokowych.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Tarasy i Gaj Baobabów',
        subtitle: 'Stuletnie baobaby i koralowe ścieżki',
        description: 'Rzeźbiarskie wiekowe baobaby dają kojący cień wzdłuż kamiennych alejek prowadzących bezpośrednio do kameralnych zatoczek plażowych.',
      },
    },
  },
  ar: {
    eyebrow: 'الهندسة المعمارية وأرجاء الملاذ',
    heading: 'ملاذ منحوت في قلب الساحل الصخري المرجاني',
    subhead: 'اكتشف أرجاء زانزيرانجي هاوس: من الفيلات المعلقة على الجرف المرجاني، والمسابح اللامتناهية بالمياه العذبة، إلى مزارع التوابل العطرية.',
    facets: {
      villas: {
        id: 'villas',
        title: 'فيلات مطلة على المحيط',
        subtitle: 'فخامة حافية الأقدام وآفاق شاطئية ساحرة',
        description: 'تقع على حافة الجرف المرجاني وتطل على ألوان خليج ميناي المتغيرة، مع تراسات تشميس فسيحة، ومسابح غطس خاصة، وحمامات مفتوحة في الهواء الطلق.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'أكواخ الحديقة الاستوائية',
        subtitle: 'عزلة نباتية وسقوف القش الطبيعية',
        description: 'محاطة بالنباتات الاستوائية الغناء، وتوفر خصوصية مطلقة ودشاً حجرياً خارجياً وشرفات مظللة وسط زقزقة الطيور وعبق أزهار الفرانجيباني.',
      },
      pool: {
        id: 'pool',
        title: 'المسبح اللامتناهي',
        subtitle: '25 متراً من مياه عذبة تعانق السكينة',
        description: 'مسبح معلق فوق الصخور الساحلية يندمج بسلاسة مع الأفق الفيروزي، تحيط به أسرّة استرخاء مزدوجة وخدمة متميزة بجانب المسبح.',
      },
      lounge: {
        id: 'lounge',
        title: 'استراحة وردهة الغروب',
        subtitle: 'ألحان الطرب السواحيلي ونسيم المحيط العليل',
        description: 'جناح ساحلي مفتوح يجتمع فيه الضيوف لتناول المشروبات المنعشة والاستماع لألحان الطرب السواحيلي بينما تغيب الشمس في أعماق المحيط الهندي.',
      },
      garden: {
        id: 'garden',
        title: 'حديقة التوابل والأعشاب العضوية',
        subtitle: 'توابل وفلفل وأعشاب عطرية استوائية',
        description: 'تُزرع مباشرة داخل أرض المنتجع، وتزود مطبخنا يومياً بعشب الليمون الطازج، والزنجبيل، والنعناع، والخضروات الموسمية مع إشراقة كل صباح.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'مطعم مظلة الماكوتي التقليدي',
        subtitle: 'مأكولات سواحيلية من المزرعة إلى مائدتك',
        description: 'مصنوع يدوياً من سعف نخيل الماكوتي الطبيعي والأخشاب المحلية، ليخلق ملاذاً مفتوحاً ومكيفاً طبيعياً لتناول أشهى الأطباق المحلية بتؤدة.',
      },
      seaview: {
        id: 'seaview',
        title: 'إطلالات الخليج والحيد المرجاني',
        subtitle: 'مشهد بانورامي بزاوية 180 درجة على المحيط الهندي',
        description: 'تأمل قوارب الداو الخشبية الشراعية وهي تعبر خط الحيد المرجاني وراقب الدلافين وهي تلعب في المياه الهادئة من شرفاتنا العالية.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'الشرفات وبساتين أشجار الباوباب',
        subtitle: 'أشجار باوباب معمرة وممرات حجرية كنز طبيعي',
        description: 'تلقي أشجار الباوباب الضخمة ظلالها الهادئة فوق مسارات حجر المرجان المنحوتة يدوياً التي تقودك إلى خلجان الشاطئ المنعزلة.',
      },
    },
  },
  zh: {
    eyebrow: '建筑美学与庄园格局',
    heading: '雕琢于印度洋海岸岩壁之上的隐逸圣殿',
    subhead: '探索 Zanzirangi House 的多元空间：从私密珊瑚悬崖海景独栋，到25米淡水无边泳池与自种有机香草花园。',
    facets: {
      villas: {
        id: 'villas',
        title: '一线海景独栋别墅',
        subtitle: '赤足隐奢美学与无垠海平线',
        description: '依偎于珊瑚悬崖边缘，每栋别墅皆直面梅奈湾（Menai Bay）变换万千的海水色彩，配有超大私密日光露台、海景温水跃水池与半露天庭院石浴。',
      },
      bungalows: {
        id: 'bungalows',
        title: '私享花园平层木屋',
        subtitle: '雨林草木幽隐与天然马库蒂茅檐',
        description: '深藏于葱郁繁茂的热带植物掩映中，提供极致私密的隐居体验、户外原石淋浴间，以及在清脆鸟鸣与鸡蛋花芳香环抱中的阴凉木质游廊。',
      },
      pool: {
        id: 'pool',
        title: '全景无边际淡水泳池',
        subtitle: '25米长镜面般纯澈的澄澈水境',
        description: '悬挑于沿海岩礁之上，25米淡水镜面泳池与印度洋天际线浑然一体，四周配有舒适的双人遮阳软榻与贴心周到的池畔管家酒水服务。',
      },
      lounge: {
        id: 'lounge',
        title: '黄昏落日酒廊与海风吧',
        subtitle: '日落金时乐韵与印度洋温柔晚风',
        description: '通透开敞的海滨观景凉亭，宾客在此品鉴餐前特调与名庄佳酿，在悠扬的斯瓦希里 Taarab 琴音陪伴下，凝望落日沉入印度洋浩瀚碧波。',
      },
      garden: {
        id: 'garden',
        title: '别苑有机植物与香料园',
        subtitle: '新鲜丁香、柠檬草与热带香氛草本',
        description: '在庄园自属土地悉心培育，每日清晨为主厨厨房直供鲜采天然柠檬草、生姜、小辣椒、薄荷与当季有机热带瓜果蔬菜。',
      },
      restaurant: {
        id: 'restaurant',
        title: '马库蒂编织传统餐厅',
        subtitle: '斯瓦希里非遗传承与海滨风土佳肴',
        description: '由当地工匠精选天然椰棕叶（Makuti）与质朴原木手工编织搭建，打造自然凉爽通风的半露天空间，静享从庄园到餐桌的慢食盛宴。',
      },
      seaview: {
        id: 'seaview',
        title: '珊瑚泻湖与壮阔海景',
        subtitle: '180度开阔无阻的印度洋全景视野',
        description: '伫立于视野开阔的观海露台，远眺传统木质多桅帆船（Dhow）滑过珊瑚礁边缘，或在晨曦微光中捕捉海面跃动的野生海豚矫健身影。',
      },
      outdoor: {
        id: 'outdoor',
        title: '观景露台与千年猴面包树',
        subtitle: '苍劲古老猴面包树与珊瑚石步道',
        description: '树形奇伟的百年猴面包树投下斑驳安详的树荫，手工铺砌的珊瑚石小径蜿蜒穿梭，直引您走向人迹罕至的私密海滩隐秘岩湾。',
      },
    },
  },
  fr: {
    eyebrow: 'Architecture & Domaines',
    heading: 'UN SANCTUAIRE SCULPTÉ DANS LA CÔTE',
    subhead: 'Découvrez les espaces singuliers de Zanzirangi House : de nos villas sur falaise corallienne à notre piscine d’eau douce et nos jardins botaniques.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Villas Vue Océan',
        subtitle: 'Luxe pieds nus & horizons marins',
        description: 'Perchées au sommet de la falaise corallienne, chaque villa fait face aux nuances turquoise de la baie de Menai, avec de vastes terrasses en bois, bassin privé et salles de bain à ciel ouvert.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Bungalows de Jardin',
        subtitle: 'Intimité tropicale & toitures en makuti',
        description: 'Immergés au cœur d’une végétation foisonnante, ces pavillons garantissent une intimité complète avec douches extérieures en pierre et vérandas ombragées bercées par les frangipaniers.',
      },
      pool: {
        id: 'pool',
        title: 'Piscine à Débordement',
        subtitle: '25 mètres de pure quiétude d’eau douce',
        description: 'Suspendu au-dessus des rochers calcaires, ce bassin de 25 mètres se confond avec l’horizon marin, entouré de confortables lits de repos doubles et d’un service attentif.',
      },
      lounge: {
        id: 'lounge',
        title: 'Lounge Bar au Coucher du Soleil',
        subtitle: 'Heure dorée, musique taarab & brise marine',
        description: 'Pavillon ouvert sur la mer où les hôtes se retrouvent pour l’apéritif et des crus choisis, bercés par des notes douces tandis que le soleil s’abîme dans l’océan Indien.',
      },
      garden: {
        id: 'garden',
        title: 'Jardin Botanique Biologique',
        subtitle: 'Épices insulaires, piments & herbes aromatiques',
        description: 'Cultivé au sein même de la propriété, ce potager approvisionne notre chef chaque matin en citronnelle fraîche, gingembre, piment oiseau, menthe et légumes de saison.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Pavillon en Toit de Makuti',
        subtitle: 'Cuisine côtière swahilie & produits du terroir',
        description: 'Bâti de façon artisanale avec des feuilles de cocotier tressées et du bois indigène, créant une atmosphère naturellement fraîche pour de longs repas champêtres.',
      },
      seaview: {
        id: 'seaview',
        title: 'Lagune Corallienne & Vues sur Mer',
        subtitle: 'Panorama à 180° dégagé sur l’océan Indien',
        description: 'Admirez le passage des voiliers dhow traditionnels au-dessus du récif et guettez le saut des dauphins sauvages depuis nos terrasses en surplomb.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Terrasses Extérieures & Baobabs',
        subtitle: 'Baobabs centenaires & sentiers en pierre de corail',
        description: 'De majestueux baobabs centenaires dispensent une ombre bienfaisante sur les allées pavées menant tout droit à des criques de sable blanc désertes.',
      },
    },
  },
  sw: {
    eyebrow: 'Ujenzi na Mazingira ya Pango',
    heading: 'MAKAZI YALIYOCHONGWA KANDO YA PWANI',
    subhead: 'Gundua maeneo mbalimbali ya Zanzirangi House: kuanzia villa za miamba ya matumbawe hadi mabwawa ya kuogelea na mashamba ya viungo vya asili.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Villa za Ukingoni mwa Bahari',
        subtitle: 'Anasa ya utulivu na mandhari ya bahari',
        description: 'Zikiwa zimejengwa ukingoni mwa mwamba wa matumbawe zikitazama Ghuba ya Menai, zikiwa na baraza kubwa za jua, mabwawa binafsi ya kuogelea na bafu za hewa huru.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Bungalow za Bustanini',
        subtitle: 'Utulivu wa mimea na mapaa ya makuti',
        description: 'Zikiwa zimezungukwa na mimea ya kitropiki, zinaleta faragha kamili, mabafu ya nje ya mawe na baraza zilizozungukwa na harufu ya maua ya mawaridi.',
      },
      pool: {
        id: 'pool',
        title: 'Bwawa la Kuogelea (Infinity Pool)',
        subtitle: 'Mita 25 za maji safi na utulivu',
        description: 'Likiwa juu ya mwamba wa pwani, bwawa hili linaungana na upeo wa maji ya zumaridi, likiwa na vitanda vizuri vya kupumzika na huduma bora za kando ya bwawa.',
      },
      lounge: {
        id: 'lounge',
        title: 'Baa na Sebule ya Machweo',
        subtitle: 'Wakati wa jua kuzama na muziki mtulivu wa Taarab',
        description: 'Ukumbi wazi wa pwani ambapo wageni hukusanyika kwa ajili ya vinywaji, wakisikiliza nyimbo za taarab wakati jua likitua kwenye Bahari ya Hindi.',
      },
      garden: {
        id: 'garden',
        title: 'Bustani ya Asili ya Mimea na Viungo',
        subtitle: 'Viungo, pilipili na majani yenye harufu nzuri',
        description: 'Inayolimwa moja kwa moja kwenye ardhi ya makazi yetu, bustani hii inaleta tangawizi mbichi, mchaichai, mnanaa na mboga za asili jikoni kila asubuhi.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Mgahawa wenye Paa la Makuti',
        subtitle: 'Chakula cha asili cha Kiswahili cha shambani hadi mezani',
        description: 'Imejengwa kwa mikono kwa kutumia makuti ya mnazi na mbao za asili, ikitengeneza hewa safi ya kupumzika na kufurahia chakula kitamu bila haraka.',
      },
      seaview: {
        id: 'seaview',
        title: 'Bonde la Matumbawe na Mandhari ya Bahari',
        subtitle: 'Mandhari kamili ya digrii 180 ya Bahari ya Hindi',
        description: 'Tazama majahazi ya mbao yakipita taratibu kando ya miamba ya matumbawe na uone pomboo wakiruka majini kutoka kwenye veranda zetu za juu.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Veranda za Nje na Mibuyu ya Kale',
        subtitle: 'Miti mikubwa ya mibuyu na njia za mawe ya matumbawe',
        description: 'Mibuyu mikubwa ya karne nyingi inatengeneza kivuli tulivu kwenye njia za mawe zinazoelekea kwenye ufukwe mzuri wa faragha.',
      },
    },
  },
  es: {
    eyebrow: 'Arquitectura e Instalaciones',
    heading: 'UN SANTUARIO ESCULPIDO EN LA COSTA',
    subhead: 'Descubra los variados rincones de Zanzirangi House: desde villas sobre acantilados de coral y piscina infinita de agua dulce, hasta huertos de especias aromáticas.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Villas Frente al Mar',
        subtitle: 'Lujo descalzo y horizontes marinos',
        description: 'Suspendidas sobre el cantil de coral y orientadas a la bahía de Menai, con terrazas privadas de solarium, piscinas privadas y baños de piedra al aire libre.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Bungalows en el Jardín',
        subtitle: 'Aislamiento botánico y techos de makuti',
        description: 'Envueltos en exuberante vegetación tropical, proporcionan total sosiego, duchas exteriores de piedra y porches a la sombra rodeados del aroma de las flores.',
      },
      pool: {
        id: 'pool',
        title: 'Piscina Desbordante Infinity',
        subtitle: '25 metros de placidez en agua dulce',
        description: 'Suspendida sobre la roca caliza marina, se funde con el horizonte turquesa con amplias tumbonas dobles y atento servicio junto a la piscina.',
      },
      lounge: {
        id: 'lounge',
        title: 'Lounge y Bar al Atardecer',
        subtitle: 'Hora dorada, notas de taarab y brisa marina',
        description: 'Pabellón costero al aire libre donde compartir un aperitivo o una copa mientras el sol se oculta lentamente en el océano Índico.',
      },
      garden: {
        id: 'garden',
        title: 'Huerto Botánico y de Especias',
        subtitle: 'Especias frescas, chiles y hierbas aromáticas',
        description: 'Cultivado en la propia finca, abastece a diario la cocina con limoncillo, jengibre fresco, chile verde, menta y hortalizas de temporada.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Restaurante con Tejado de Makuti',
        subtitle: 'Cocina suajili costera del huerto a su plato',
        description: 'Elaborado artesanalmente con hojas de palma makuti y madera local, creando un ambiente fresco y natural para gozar de una sobremesa distendida.',
      },
      seaview: {
        id: 'seaview',
        title: 'Laguna de Coral y Vistas al Océano',
        subtitle: 'Panorámica limpia de 180° sobre el Índico',
        description: 'Observe el discurrir pausado de los tradicionales dhows y los saltos de los delfines en alta mar desde las terrazas elevadas de la propiedad.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Terrazas y Arboledas de Baobabs',
        subtitle: 'Baobabs centenarios y senderos de piedra coralina',
        description: 'Escultóricos baobabs de varios siglos proyectan su sombra sobre los senderos empedrados que descienden hasta calas de arena virgen.',
      },
    },
  },
  it: {
    eyebrow: 'Architettura e Spazi della Tenuta',
    heading: 'UN SANTUARIO SCOLPITO LUNGO LA COSTA',
    subhead: 'Scopri i diversi ambienti di Zanzirangi House: dalle ville a picco sulla scogliera corallina alla piscina d’acqua dolce fino all’orto botanico biologico.',
    facets: {
      villas: {
        id: 'villas',
        title: 'Ville Fronte Oceano',
        subtitle: 'Lusso a piedi nudi e orizzonti infiniti',
        description: 'Adagiate sulla scogliera corallina e affacciate sulle sfumature della baia di Menai, dispongono di ampi deck solarium, plunge pool privata e bagni all’aperto.',
      },
      bungalows: {
        id: 'bungalows',
        title: 'Bungalow nel Giardino',
        subtitle: 'Pace botanica e tetti in makuti',
        description: 'Immersi in una rigogliosa vegetazione tropicale, offrono privacy totale, docce esterne in pietra e verande ombreggiate circondate da canti d’uccelli e frangipani in fiore.',
      },
      pool: {
        id: 'pool',
        title: 'Piscina a Sfioro Infinity',
        subtitle: '25 metri di quiete in acqua dolce',
        description: 'Sospesa sopra la roccia costiera, la piscina infinity si fonde con l’orizzonte turchese, corredata da confortevoli lettini doppi e attento servizio a bordo vasca.',
      },
      lounge: {
        id: 'lounge',
        title: 'Lounge Bar al Tramonto',
        subtitle: 'Luce dorata, melodie taarab e brezza marina',
        description: 'Un padiglione aperto sul mare dove degustare un aperitivo o un vino selezionato mentre il sole tramonta nelle acque calde dell’Oceano Indiano.',
      },
      garden: {
        id: 'garden',
        title: 'Orto Botanico e delle Spezie',
        subtitle: 'Spezie fresche, peperoncini ed erbe aromatiche',
        description: 'Coltivato all’interno della tenuta, rifornisce la cucina ogni mattina di lemongrass biologico, zenzero, peperoncino, menta e verdure di stagione.',
      },
      restaurant: {
        id: 'restaurant',
        title: 'Ristorante con Tetto in Makuti',
        subtitle: 'Gastronomia swahili a km zero',
        description: 'Realizzato a mano con foglie intrecciate di palma di cocco e legno locale, assicura una ventilazione naturale ideale per pranzi e cene rilassate.',
      },
      seaview: {
        id: 'seaview',
        title: 'Laguna Corallina e Vista Mare',
        subtitle: 'Visione panoramica a 180° sull’Oceano Indiano',
        description: 'Guarda i dhow tradizionali scivolare oltre la barriera corallina e scorgi i delfini giocare a largo dalle terrazze panoramiche sopraelevate.',
      },
      outdoor: {
        id: 'outdoor',
        title: 'Terrazze all’Aperto e Baobab',
        subtitle: 'Baobab secolari e sentieri in pietra corallina',
        description: 'Sculturali baobab centenari donano una piacevole ombra lungo i vialetti in pietra che scendono fino a calette private di sabbia soffice.',
      },
    },
  },
};
