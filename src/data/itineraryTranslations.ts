import { Language } from '../types';
import { ItineraryDay, SAMPLE_ITINERARY } from './itinerary';

export interface LocalizedItineraryActivity {
  time: string;
  title: string;
  description: string;
}

export interface LocalizedItineraryDay {
  dayNumber: string;
  dayTitle: string;
  location: string;
  activities: Record<string, LocalizedItineraryActivity>;
}

export const ITINERARY_DAYS_TRANSLATIONS: Record<
  Language,
  Record<string, LocalizedItineraryDay>
> = {
  en: {
    'DAY 01': {
      dayNumber: 'DAY 01',
      dayTitle: 'Arrival & Sanctuary Welcome',
      location: 'Zanzirangi House • South Coast',
      activities: {
        'act-1-1': {
          time: 'Morning / Afternoon',
          title: 'VIP Airport Meet & Chauffeur Transfer',
          description: 'Private air-conditioned shuttle greeting directly upon arrival at Abeid Amani Karume International Airport (ZNZ).',
        },
        'act-1-2': {
          time: 'Afternoon',
          title: 'Check-in & Fresh Coconut Welcome',
          description: 'Settle into your private sanctuary, explore the oceanfront grounds, and enjoy fresh young coconut water under the palms.',
        },
        'act-1-3': {
          time: 'Evening',
          title: 'Sunset Welcome Dinner at Zanzirangi Restaurant',
          description: 'First taste of authentic island hospitality with fresh reef catch and organic garden spices.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'DAY 02',
      dayTitle: 'Culture & Fragrant Spice Heritage',
      location: 'Stone Town & Central Plantations',
      activities: {
        'act-2-1': {
          time: '09:00 AM',
          title: 'UNESCO Stone Town Historical Walking Tour',
          description: 'Private guide through the House of Wonders, Sultan’s Palace, ancient Omani doorways, and narrow historic bazaars.',
        },
        'act-2-2': {
          time: '01:30 PM',
          title: 'Organic Spice Farm Tour & Farmstead Lunch',
          description: 'Smell and taste fresh vanilla, cloves, nutmeg, and cardamom harvested straight from the tropical soil.',
        },
        'act-2-3': {
          time: '07:30 PM',
          title: 'Swahili Tasting Banquet at Zanzirangi House',
          description: 'Executive chef showcase featuring slow-cooked coconut curries, tamarind broths, and saffron pilau.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'DAY 03',
      dayTitle: 'Marine Atoll & Sunset Sailing',
      location: 'Mnemba Atoll & Menai Bay',
      activities: {
        'act-3-1': {
          time: '08:30 AM',
          title: 'Mnemba Island Sandbank & Snorkeling Expedition',
          description: 'Speedboat cruise to electric turquoise waters; snorkel with tropical marine life and relax on disappearing powder sandbanks.',
        },
        'act-3-2': {
          time: '04:30 PM',
          title: 'Private Wooden Dhow Sunset Cruise',
          description: 'Traditional handcrafted Swahili dhow cruise with chilled refreshments, ocean breezes, and panoramic sunset views.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'DAY 04',
      dayTitle: 'Rejuvenation at The Sanctuary',
      location: 'Zanzirangi House Grounds',
      activities: {
        'act-4-1': {
          time: 'All Morning',
          title: 'Slow Breakfast & Oceanfront Poolside Rest',
          description: 'Artisanal tropical fruit boards, coastal coffee, and lazy laps in the 25m ocean-facing infinity pool.',
        },
        'act-4-2': {
          time: '02:00 PM',
          title: 'From Our Garden to Your Table Botanical Walk',
          description: 'Stroll the estate gardens with our head chef, discovering how island herbs and seasonal vegetables are cultivated.',
        },
        'act-4-3': {
          time: '08:00 PM',
          title: 'Candlelit Stargazing & Taarab Music by the Shore',
          description: 'Relax with ambient acoustic melodies beneath the southern cross constellations.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'DAY 05–08',
      dayTitle: 'The Wild Mainland Safari Adventure',
      location: 'Serengeti & Ngorongoro Crater',
      activities: {
        'act-5-1': {
          time: 'Day 05 Morning',
          title: 'Fly-in Bush Flight from Zanzibar to Serengeti',
          description: 'Scenic aerial flight touching down on a remote bush airstrip inside Serengeti National Park.',
        },
        'act-5-2': {
          time: 'Day 05–06',
          title: 'Big Five Game Drives & Luxury Tented Camp',
          description: 'Full-day 4x4 safaris tracking lions, cheetahs, and migrating herds with veteran wilderness guides.',
        },
        'act-5-3': {
          time: 'Day 07',
          title: 'Ngorongoro Crater Floor Expedition',
          description: 'Descend 600 meters into the volcanic caldera for rare black rhino encounters and flamingo lake views.',
        },
        'act-5-4': {
          time: 'Day 08',
          title: 'Return Bush Flight & Farewell Connection',
          description: 'Fly back to Zanzibar or connect seamlessly to international flight departures from Dar es Salaam or Kilimanjaro.',
        },
      },
    },
  },
  pl: {
    'DAY 01': {
      dayNumber: 'DZIEŃ 01',
      dayTitle: 'Przylot i Powitanie w Posiadłości',
      location: 'Zanzirangi House • Południowe Wybrzeże',
      activities: {
        'act-1-1': {
          time: 'Rano / Popołudnie',
          title: 'Prywatny transfer VIP z lotniska',
          description: 'Kierowca z klimatyzowanym busem oczekuje bezpośrednio po wylądowaniu na lotnisku Abeid Amani Karume (ZNZ).',
        },
        'act-1-2': {
          time: 'Popołudnie',
          title: 'Zameldowanie i powitalny orzech kokosowy',
          description: 'Rozgość się w prywatnej willi, poznaj ogród nad oceanem i skosztuj świeżej wody kokosowej w cieniu palm.',
        },
        'act-1-3': {
          time: 'Wieczór',
          title: 'Kolacja powitalna o zachodzie słońca',
          description: 'Pierwsze smaki wyspiarskiej gościnności: świeże ryby z rafy i aromatyczne przyprawy z naszego ogrodu.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'DZIEŃ 02',
      dayTitle: 'Kultura i Dziedzictwo Wyspy Przypraw',
      location: 'Stone Town i Plantacje Przypraw',
      activities: {
        'act-2-1': {
          time: '09:00',
          title: 'Wycieczka z przewodnikiem po Stone Town (UNESCO)',
          description: 'Prywatny przewodnik po Domu Cudów, Pałacu Sułtana, rzeźbionych drzwiach i klimatycznych wąskich zaułkach.',
        },
        'act-2-2': {
          time: '13:30',
          title: 'Farma Przypraw i Tradycyjny Obiad',
          description: 'Poczuj i posmakuj świeżej wanilii, goździków, gałki muszkatołowej i kardamonu prosto z tropikalnej plantacji.',
        },
        'act-2-3': {
          time: '19:30',
          title: 'Uczta degustacyjna kuchni suahili w Zanzirangi',
          description: 'Autorska kolacja szefa kuchni: powoli duszone curry kokosowe, wywary z tamaryndowca i szafranowe pilau.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'DZIEŃ 03',
      dayTitle: 'Atol Morski i Rejs o Zachodzie Słońca',
      location: 'Atol Mnemba i Zatoka Menai',
      activities: {
        'act-3-1': {
          time: '08:30',
          title: 'Wyprawa na Mieliznę Mnemba i Snorkeling',
          description: 'Rejs motorówką w lazurowe wody; nurkowanie z rurką pośród koralowców i relaks na znikających piaszczystych łachach.',
        },
        'act-3-2': {
          time: '16:30',
          title: 'Prywatny rejs tradycyjną łodzią Dhow',
          description: 'Tradycyjny drewniany dhow, chłodne napoje, morska bryza i spektakularne widoki zachodzącego słońca.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'DZIEŃ 04',
      dayTitle: 'Odnowa i Relaks w Posiadłości',
      location: 'Tereny Zanzirangi House',
      activities: {
        'act-4-1': {
          time: 'Cały poranek',
          title: 'Późne śniadanie i odpoczynek przy basenie infinity',
          description: 'Patery tropikalnych owoców, zanzibarska kawa i relaks przy 25-metrowym basenie z widokiem na ocean.',
        },
        'act-4-2': {
          time: '14:00',
          title: 'Spacer botaniczny: z ogrodu prosto na Twój stół',
          description: 'Spacer z szefem kuchni po przyprawowym ogrodzie i poznanie sekretów uprawy lokalnych ziół i warzyw.',
        },
        'act-4-3': {
          time: '20:00',
          title: 'Obserwacja gwiazd przy świecach i muzyka Taarab',
          description: 'Akustyczne melodie suahili i kontemplacja gwiazdozbioru Krzyża Południa na plaży.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'DZIEŃ 05–08',
      dayTitle: 'Przygoda Safari w Kontynentalnej Tanzanii',
      location: 'Serengeti i Krater Ngorongoro',
      activities: {
        'act-5-1': {
          time: 'Dzień 05 Rano',
          title: 'Lot awionetką z Zanzibaru do Serengeti',
          description: 'Malowniczy przelot z lądowaniem na lądowisku w buszu w samym sercu Parku Narodowego Serengeti.',
        },
        'act-5-2': {
          time: 'Dzień 05–06',
          title: 'Safari 4x4 w poszukiwaniu Wielkiej Piątki',
          description: 'Całodniowe safari terenówką: lwy, gepardy, słonie i migrujące stada pod okiem licencjonowanego tropiciela.',
        },
        'act-5-3': {
          time: 'Dzień 07',
          title: 'Wyprawa na dno Krateru Ngorongoro',
          description: 'Zjazd 600 m w głąb wulkanicznej kaldery w poszukiwaniu rzadkiego czarnego nosorożca i jeziora flamingów.',
        },
        'act-5-4': {
          time: 'Dzień 08',
          title: 'Lot powrotny i transfer na rejs lub samolot',
          description: 'Powrót awionetką na Zanzibar lub bezpośrednie połączenie z lotami międzynarodowymi z Dar es Salaam/Kilimandżaro.',
        },
      },
    },
  },
  ar: {
    'DAY 01': {
      dayNumber: 'اليوم 01',
      dayTitle: 'الوصول والاستقبال في المنتجع',
      location: 'زانزيرانجي هاوس • الساحل الجنوبي',
      activities: {
        'act-1-1': {
          time: 'صباحاً / بعد الظهر',
          title: 'استقبال كبار الشخصيات وتوصيل خاص من المطار',
          description: 'سيارة مكيفة خاصة بانتظارك فور وصولك إلى مطار عبيد أماني كرومي الدولي (ZNZ).',
        },
        'act-1-2': {
          time: 'بعد الظهر',
          title: 'تسجيل الوصول ومشروب جوز الهند الترحيبي',
          description: 'استقر في فيلتك الخاصة، وتجول في أرجاء الحديقة الشاطئية مع مشروب جوز الهند الطازج تحت النخيل.',
        },
        'act-1-3': {
          time: 'المساء',
          title: 'عشاء ترحيبي عند الغروب في مطعم زانزيرانجي',
          description: 'أول مذاق لكرم الضيافة الزنجبارية الأصيلة مع صيد اليوم الطازج وتوابل المزرعة العضوية.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'اليوم 02',
      dayTitle: 'التراث الثقافي وعبق التوابل',
      location: 'ستون تاون والمزارع الريفية',
      activities: {
        'act-2-1': {
          time: '09:00 صباحاً',
          title: 'جولة مشي تاريخية في مدينة ستون تاون (اليونسكو)',
          description: 'مرشد خاص يصحبك إلى بيت العجائب، قصر السلطان، الأبواب الخشبية المنحوتة، والأسواق القديمة.',
        },
        'act-2-2': {
          time: '01:30 ظهراً',
          title: 'جولة مزارع التوابل العضوية مع غداء المزرعة',
          description: 'استنشق وتذوق الفانيليا الطازجة والقرنفل وجوزة الطيب والهيل المقطوفة مباشرة من التربة الاستوائية.',
        },
        'act-2-3': {
          time: '07:30 مساءً',
          title: 'وليمة تذوق المأكولات السواحيلية الفاخرة',
          description: 'إبداعات الطاهي التنفيذي: كاري جوز الهند المطبوخ على نار هادئة، وحساء التمر الهندي، وأرز بيلاو بالزعفران.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'اليوم 03',
      dayTitle: 'الحيد البحري والإبحار عند الغروب',
      location: 'حيد منيمبا وخليج ميناي',
      activities: {
        'act-3-1': {
          time: '08:30 صباحاً',
          title: 'رحلة استكشافية إلى جزيرة منيمبا والغطس السطحي',
          description: 'قارب سريع للمياه الفيروزية الساحرة، والسباحة مع الكائنات البحرية والاسترخاء على الضفاف الرملية الناعمة.',
        },
        'act-3-2': {
          time: '04:30 عصراً',
          title: 'رحلة بحرية خاصة بقارب الداو الخشبي التقليدي',
          description: 'إبحار شراعي تقليدي مع المشروبات المنعشة ونسيم المحيط العليل ومشهد الغروب الذهبي الساحر.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'اليوم 04',
      dayTitle: 'الاستجمام والهدوء في قلب الملاذ',
      location: 'أرجاء زانزيرانجي هاوس',
      activities: {
        'act-4-1': {
          time: 'طوال الصباح',
          title: 'إفطار متأخر هادئ واسترخاء بجانب المسبح اللامتناهي',
          description: 'أطباق فواكه استوائية منتقاة، قهوة ساحلية زنجبارية، وسباحة ممتعة في مسبح بطول 25 متراً مواجه للمحيط.',
        },
        'act-4-2': {
          time: '02:00 ظهراً',
          title: 'جولة نباتية من الحديقة إلى مائدتك مع الشيف',
          description: 'جولة في حدائق الملاذ برفقة كبير الطهاة للتعرف على أسرار زراعة الأعشاب الطازجة والخضروات الموسمية.',
        },
        'act-4-3': {
          time: '08:00 مساءً',
          title: 'تأمل النجوم على أضواء الشموع وموسيقى الطرب السواحيلي',
          description: 'استرخِ مع ألحان وترية هادئة تحت نجوم كوكبة الصليب الجنوبي المتلألئة بجانب الشاطئ.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'الأيام 05–08',
      dayTitle: 'مغامرة السفاري الكبرى في بر تنزانيا',
      location: 'سيرينغيتي وفوهة نغورونغورو',
      activities: {
        'act-5-1': {
          time: 'صباح اليوم 05',
          title: 'طيران خاص مباشر من زنجبار إلى سيرينغيتي',
          description: 'رحلة جوية بانورامية تهبط في مهبط ترابي خاص في قلب حديقة سيرينغيتي الوطنية.',
        },
        'act-5-2': {
          time: 'اليومان 05–06',
          title: 'رحلات 4x4 لتتبع الخمسة الكبار والتخييم الفاخر',
          description: 'سفاري متكامل بسيارات الدفع الرباعي لتتبع الأسود والفهود وقطعان الهجرة مع مرشدين بريين محترفين.',
        },
        'act-5-3': {
          time: 'اليوم 07',
          title: 'استكشاف قاع فوهة نغورونغورو البركانية',
          description: 'هبوط لمسافة 600 متر داخل الفوهة لمشاهدة وحيد القرن الأسود النادر وبحيرة طيور الفلامنغو الوردية.',
        },
        'act-5-4': {
          time: 'اليوم 08',
          title: 'طيران العودة والوداع أو الربط بالرحلات الدولية',
          description: 'العودة بطائرة خفيفة إلى زنجبار أو المتابعة لرحلتك الدولية من دار السلام أو كليمنجارو.',
        },
      },
    },
  },
  zh: {
    'DAY 01': {
      dayNumber: '第 01 天',
      dayTitle: '抵达海岛与别苑私享欢迎礼',
      location: 'Zanzirangi House • 南部私密海岸',
      activities: {
        'act-1-1': {
          time: '上午 / 下午',
          title: 'VIP 专属机场接机与专车接送',
          description: '专职司机驾驶空调专车在阿贝德·阿曼尼·卡鲁姆国际机场 (ZNZ) 出口尊享恭候接驾。',
        },
        'act-1-2': {
          time: '下午',
          title: '入住登记与鲜摘天然椰子水迎宾',
          description: '安歇于私享别墅，漫步海滨椰林庄园，在热带微风下品尝刚采摘的天然甘甜椰水。',
        },
        'act-1-3': {
          time: '傍晚',
          title: 'Zanzirangi 餐厅落日海风欢迎晚宴',
          description: '初尝地道群岛待客之道，品味主厨精选的当日现捕珊瑚海鲜与自种有机香料菜肴。',
        },
      },
    },
    'DAY 02': {
      dayNumber: '第 02 天',
      dayTitle: '文化探寻与传世香料庄园之韵',
      location: '石头城 (Stone Town) 与中部香料庄园',
      activities: {
        'act-2-1': {
          time: '上午 09:00',
          title: '联合国教科文组织石头城私家徒步讲解',
          description: '资深私人向导陪同漫步奇迹之屋、苏丹故宫旧址、百年阿曼精雕木门与曲折历史古街。',
        },
        'act-2-2': {
          time: '下午 01:30',
          title: '有机香料庄园采摘游览与田园午宴',
          description: '亲手采摘天然香草、丁香、肉豆蔻与小豆蔻，在林间木屋享用特色香料传统午餐。',
        },
        'act-2-3': {
          time: '晚上 07:30',
          title: 'Zanzirangi 斯瓦希里风味美食品鉴盛宴',
          description: '行政总厨匠心打造慢炖椰浆咖喱、酸甜罗望子海鲜汤与香气馥郁的藏红花抓饭。',
        },
      },
    },
    'DAY 03': {
      dayNumber: '第 03 天',
      dayTitle: '海洋环礁浮潜与木帆船落日巡游',
      location: '姆内姆巴环礁 (Mnemba) 与梅奈海湾',
      activities: {
        'act-3-1': {
          time: '上午 08:30',
          title: '姆内姆巴岛珊瑚浅滩与玻璃海水浮潜',
          description: '乘坐快艇驶向通透的绿松石纯净水域，与热带鱼群、绿海龟共游，在潮退白沙洲漫步。',
        },
        'act-3-2': {
          time: '下午 04:30',
          title: '传统手工木质 Dhow 帆船落日私航',
          description: '乘坐复古木雕帆船破浪出海，伴着冰镇热带特饮与海风，沉醉于印度洋金色晚霞。',
        },
      },
    },
    'DAY 04': {
      dayNumber: '第 04 天',
      dayTitle: '别苑静养与全方位身心疗愈',
      location: 'Zanzirangi House 私享庄园全境',
      activities: {
        'act-4-1': {
          time: '整段清晨',
          title: '闲适迟早点与面海无边泳池悠度晨光',
          description: '品尝手工热带鲜果盘、当地手冲咖啡，在25米一线海景无边泳池中惬意畅游。',
        },
        'act-4-2': {
          time: '下午 02:00',
          title: '“从庄园直达餐桌”主厨植物香草导赏',
          description: '与主厨漫步别苑后花园，了解当地草药、热带果蔬与有机食用花的培育之道。',
        },
        'act-4-3': {
          time: '晚上 08:00',
          title: '海滨烛光观星夜话与 Taarab 乐韵悠扬',
          description: '伴随海浪节拍与传统斯瓦希里弹拨乐，仰望南十字星座闪耀的纯净夜空。',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: '第 05–08 天',
      dayTitle: '坦桑尼亚狂野大陆荒野游猎探险',
      location: '塞伦盖蒂草原与恩戈罗恩戈罗火山口',
      activities: {
        'act-5-1': {
          time: '第05天早晨',
          title: '桑给巴尔直飞塞伦盖蒂轻型丛林飞机',
          description: '乘坐空中观光小飞机，直降塞伦盖蒂国家公园腹地的隐秘红土跑道。',
        },
        'act-5-2': {
          time: '第05–06天',
          title: '全天追踪“非洲五霸”与顶级野奢帐篷营地',
          description: '由资深向导驾乘专业四驱敞篷巡猎车，深入荒原追寻狮群、猎豹与壮观兽群。',
        },
        'act-5-3': {
          time: '第07天',
          title: '深入恩戈罗恩戈罗巨型火山口盆地',
          description: '沿600米悬崖绝壁下潜进入野生动物乐园，寻访濒危黑犀牛与粉红火烈鸟盐湖。',
        },
        'act-5-4': {
          time: '第08天',
          title: '丛林专机返程与国际航班便捷联运',
          description: '乘机返回桑岛继续度假，或在达累斯萨拉姆/乞力马扎罗无缝转接国际返程航线。',
        },
      },
    },
  },
  fr: {
    'DAY 01': {
      dayNumber: 'JOUR 01',
      dayTitle: 'Arrivée & Accueil au Domaine',
      location: 'Zanzirangi House • Côte Sud',
      activities: {
        'act-1-1': {
          time: 'Matin / Après-midi',
          title: 'Accueil VIP à l’aéroport & Chauffeur privé',
          description: 'Accueil personnalisé et navette privée climatisée dès votre arrivée à l’Aéroport International Abeid Amani Karume (ZNZ).',
        },
        'act-1-2': {
          time: 'Après-midi',
          title: 'Installation & Noix de coco fraîche de bienvenue',
          description: 'Prenez vos quartiers dans votre villa, explorez les jardins face à l’océan et savourez une eau de coco fraîche.',
        },
        'act-1-3': {
          time: 'Soirée',
          title: 'Dîner de bienvenue au coucher du soleil à Zanzirangi',
          description: 'Première immersion dans l’hospitalité de l’île avec la pêche du jour et les épices du jardin biologique.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'JOUR 02',
      dayTitle: 'Culture Swahilie & Parfum d’Épices',
      location: 'Stone Town & Plantations Centrales',
      activities: {
        'act-2-1': {
          time: '09h00',
          title: 'Visite historique privée de Stone Town (UNESCO)',
          description: 'Parcours avec guide privé : Maison des Merveilles, Palais des Sultans, portes ouvragées et ruelles pittoresques.',
        },
        'act-2-2': {
          time: '13h30',
          title: 'Ferme d’épices biologique & Déjeuner du terroir',
          description: 'Humez et goûtez vanille fraîche, clous de girofle, muscade et cardamome cueillis directement sur l’arbre.',
        },
        'act-2-3': {
          time: '19h30',
          title: 'Banquet dégustation Swahili à Zanzirangi House',
          description: 'Créations du chef : currys mijotés au lait de coco, bouillons de tamarin et riz pilaf au safran.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'JOUR 03',
      dayTitle: 'Atoll Marin & Voilier Dhow au Crépuscule',
      location: 'Atoll de Mnemba & Baie de Menai',
      activities: {
        'act-3-1': {
          time: '08h30',
          title: 'Banc de sable de Mnemba & Snorkeling',
          description: 'Traversée en bateau rapide vers des eaux turquoise translucides ; nagez au milieu des coraux et bancs de poissons.',
        },
        'act-3-2': {
          time: '16h30',
          title: 'Croisière privée au coucher du soleil en dhow traditionnel',
          description: 'Bateau en bois swahili, boissons fraîches, brise marine et coucher de soleil d’or sur l’océan Indien.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'JOUR 04',
      dayTitle: 'Ressourcement & Sérénité au Domaine',
      location: 'Parc & Jardins de Zanzirangi House',
      activities: {
        'act-4-1': {
          time: 'Toute la matinée',
          title: 'Petit-déjeuner tardif & Détente au bord de la piscine',
          description: 'Plateaux de fruits tropicaux, café insulaire et baignade dans la piscine à débordement de 25 mètres face à la mer.',
        },
        'act-4-2': {
          time: '14h00',
          title: 'Balade botanique : Du potager à votre assiette',
          description: 'Promenade dans le jardin potager avec notre chef pour découvrir les herbes aromatiques et légumes tropicaux.',
        },
        'act-4-3': {
          time: '20h00',
          title: 'Nuit sous les étoiles & Musique Taarab au bord de l’eau',
          description: 'Douceur des mélodies acoustiques swahilies à la lueur des bougies sous la constellation de la Croix du Sud.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'JOURS 05–08',
      dayTitle: 'Grande Expédition Safari sur le Continent',
      location: 'Serengeti & Cratère du Ngorongoro',
      activities: {
        'act-5-1': {
          time: 'Jour 05 Matin',
          title: 'Vol brousse direct de Zanzibar vers le Serengeti',
          description: 'Survol aérien spectaculaire et atterrissage sur une piste privée au cœur du parc national du Serengeti.',
        },
        'act-5-2': {
          time: 'Jours 05–06',
          title: 'Safaris 4x4 à la recherche des Big Five & Camp de luxe',
          description: 'Journées complètes en 4x4 tout-terrain avec rangers spécialistes pour observer lions, guépards et grands troupeaux.',
        },
        'act-5-3': {
          time: 'Jour 07',
          title: 'Descente dans la caldeira du Ngorongoro',
          description: 'Immersion à 600 m au fond du cratère volcanique à la rencontre du rhinocéros noir et du lac aux flamants roses.',
        },
        'act-5-4': {
          time: 'Jour 08',
          title: 'Vol de retour en avionnette ou connexion internationale',
          description: 'Retour à Zanzibar ou correspondance directe pour vos vols internationaux depuis Dar es Salaam ou Kilimandjaro.',
        },
      },
    },
  },
  sw: {
    'DAY 01': {
      dayNumber: 'SIKU YA 01',
      dayTitle: 'Kufika na Mapokezi ya Heshima',
      location: 'Zanzirangi House • Pwani ya Kusini',
      activities: {
        'act-1-1': {
          time: 'Asubuhi / Mchana',
          title: 'Mapokezi ya VIP Uwanja wa Ndege na Usafiri Binafsi',
          description: 'Gari la kibinafsi lenye kiyoyozi likikusubiri mara tu unapowasili Uwanja wa Ndege wa Karume (ZNZ).',
        },
        'act-1-2': {
          time: 'Mchana',
          title: 'Kujiandikisha na Daftari la Karibu na Daafu Safi',
          description: 'Pumzika katika villa yako binafsi, tembea bustanini ufukweni na unywe dafu tamu chini ya minazi.',
        },
        'act-1-3': {
          time: 'Jioni',
          title: 'Chakula cha jioni cha makaribisho wakati wa machweo',
          description: 'Onja ukarimu halisi wa Kizanzibari kwa samaki wabichi wa baharini na viungo safi vya bustanini.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'SIKU YA 02',
      dayTitle: 'Utamaduni na Urithi wa Viungo vya Asili',
      location: 'Mji Mkongwe na Mashamba ya Viungo',
      activities: {
        'act-2-1': {
          time: 'Saa 03:00 Asubuhi',
          title: 'Matembezi ya Kihistoria Mji Mkongwe (UNESCO)',
          description: 'Mwongozo binafsi kupitia Beit-al-Ajaib, Jumba la Sultani, milango ya kale na maduka ya kihistoria.',
        },
        'act-2-2': {
          time: 'Saa 07:30 Mchana',
          title: 'Ziara ya Shamba la Viungo na Chakula cha Mchana',
          description: 'Nusa na uonje vanila, karafuu, kungumanga na iliki zikivunwa moja kwa moja kutoka ardhini.',
        },
        'act-2-3': {
          time: 'Saa 01:30 Usiku',
          title: 'Mlo maalum wa vyakula vya Waswahili Zanzirangi',
          description: 'Chakula cha mchuzi mzito wa nazi, supu ya ukwaju na pilau nzuri ya zafarani iliyopikwa na mpishi mkuu.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'SIKU YA 03',
      dayTitle: 'Kisiwa cha Bahari na Safari ya Jahazi Machweo',
      location: 'Kisiwa cha Mnemba na Ghuba ya Menai',
      activities: {
        'act-3-1': {
          time: 'Saa 02:30 Asubuhi',
          title: 'Safari ya Funguni Mnemba na Kupiga Mbizi (Snorkeling)',
          description: 'Boti ya kasi kwenye maji ya zumaridi; ogolea na samaki wa rangi na pumzika kwenye fungu za mchanga.',
        },
        'act-3-2': {
          time: 'Saa 10:30 Jioni',
          title: 'Safari ya Binafsi ya Jahazi la Mbao Machweo',
          description: 'Jahazi la asili la Kiswahili, vinywaji baridi, upepo mtulivu wa bahari na machweo ya dhahabu.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'SIKU YA 04',
      dayTitle: 'Kupumzika na Kurejesha Utulivu Makazini',
      location: 'Mazingira ya Zanzirangi House',
      activities: {
        'act-4-1': {
          time: 'Asubuhi Yote',
          title: 'Kifungua kinywa cha utulivu na kuogelea bwawani',
          description: 'Matunda matamu ya kitropiki, kahawa ya pwani na kuogelea kwenye bwawa refu la mita 25 linalotazama bahari.',
        },
        'act-4-2': {
          time: 'Saa 08:00 Mchana',
          title: 'Matembezi ya mimea na mboga na Mpishi Mkuu',
          description: 'Tembea kwenye bustani zetu ukijifunza jinsi mimea ya viungo na mboga za asili zinavyolimwa.',
        },
        'act-4-3': {
          time: 'Saa 02:00 Usiku',
          title: 'Kuangalia nyota ufukweni na muziki wa Taarab',
          description: 'Tulia na nyimbo tulivu za ala za asili chini ya mwangaza wa nyota za anga la kusini.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'SIKU YA 05–08',
      dayTitle: 'Safari ya Mbuga za Wanyamapori Bara',
      location: 'Serengeti na Bonde la Ngorongoro',
      activities: {
        'act-5-1': {
          time: 'Siku ya 05 Asubuhi',
          title: 'Ndege ya moja kwa moja kutoka Zanzibar hadi Serengeti',
          description: 'Safari nzuri ya ndege ndogo ikitua kwenye uwanja wa ndege wa porini ndani ya Hifadhi ya Serengeti.',
        },
        'act-5-2': {
          time: 'Siku ya 05–06',
          title: 'Kutafuta Wanyama Wakubwa Watano na Kambi ya Kifahari',
          description: 'Safari za siku nzima za magari ya 4x4 kuangalia simba, chui na makundi ya wanyama wanaohama na waongozaji stadi.',
        },
        'act-5-3': {
          time: 'Siku ya 07',
          title: 'Kuteremka Ndani ya Bonde la Ngorongoro',
          description: 'Shuka mita 600 ndani ya kreta kumwona kifaru mweusi na ziwa kubwa lenye maelfu ya heroe.',
        },
        'act-5-4': {
          time: 'Siku ya 08',
          title: 'Ndege ya Kurudi na Muunganiko wa Safari za Kimataifa',
          description: 'Rudi Zanzibar au unganisha safari yako ya kimataifa kutoka Dar es Salaam au Kilimanjaro.',
        },
      },
    },
  },
  es: {
    'DAY 01': {
      dayNumber: 'DÍA 01',
      dayTitle: 'Llegada y Bienvenida a la Mansión',
      location: 'Zanzirangi House • Costa Sur',
      activities: {
        'act-1-1': {
          time: 'Mañana / Tarde',
          title: 'Recibimiento VIP en el aeropuerto y traslado privado',
          description: 'Vehículo privado con aire acondicionado listo en el Aeropuerto Internacional Abeid Amani Karume (ZNZ).',
        },
        'act-1-2': {
          time: 'Tarde',
          title: 'Check-in y agua de coco fresca de bienvenida',
          description: 'Acomódese en su villa privada, explore las instalaciones frente al mar y disfrute de un coco recién abierto.',
        },
        'act-1-3': {
          time: 'Noche',
          title: 'Cena de bienvenida al atardecer en Zanzirangi',
          description: 'Primer contacto con la calidez isleña: pescado fresco de arrecife y especias de la huerta ecológica.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'DÍA 02',
      dayTitle: 'Cultura Suajili y Ruta de las Especias',
      location: 'Stone Town y Plantaciones Tradicionales',
      activities: {
        'act-2-1': {
          time: '09:00',
          title: 'Visita histórica a pie por Stone Town (UNESCO)',
          description: 'Guía privado por la Casa de las Maravillas, el Palacio del Sultán, portales centenarios y callejuelas.',
        },
        'act-2-2': {
          time: '13:30',
          title: 'Tour por plantación de especias y almuerzo de campo',
          description: 'Huela y pruebe vainilla, clavo, nuez moscada y cardamomo recién recolectados de la tierra.',
        },
        'act-2-3': {
          time: '19:30',
          title: 'Banquete degustación de cocina suajili en la villa',
          description: 'Menú especial del chef ejecutivo con curris suaves de coco, caldos de tamarindo y aromático arroz pilaf.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'DÍA 03',
      dayTitle: 'Atolón Marino y Atardecer en Velero Dhow',
      location: 'Atolón Mnemba y Bahía Menai',
      activities: {
        'act-3-1': {
          time: '08:30',
          title: 'Expedición de esnórquel en la isla Mnemba',
          description: 'Lancha rápida hacia aguas turquesas cristalinas; esnórquel entre arrecifes y descanso en lenguas de arena blanca.',
        },
        'act-3-2': {
          time: '16:30',
          title: 'Paseo privado en velero tradicional dhow al atardecer',
          description: 'Embarcación de madera tradicional, bebidas frías, suave brisa marina y mágicos colores sobre el océano.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'DÍA 04',
      dayTitle: 'Descanso y Bienestar en el Refugio',
      location: 'Instalaciones de Zanzirangi House',
      activities: {
        'act-4-1': {
          time: 'Toda la mañana',
          title: 'Desayuno sosegado y descanso en la piscina infinita',
          description: 'Bandejas de frutas tropicales, café de altura y baños en la piscina de 25 metros frente a las olas.',
        },
        'act-4-2': {
          time: '14:00',
          title: 'Ruta botánica: del huerto a la mesa con el chef',
          description: 'Recorrido por los jardines descubriendo el cultivo de hierbas aromáticas y vegetales de temporada.',
        },
        'act-4-3': {
          time: '20:00',
          title: 'Noche bajo las estrellas con velas y música Taarab',
          description: 'Música acústica suajili a la luz de las velas bajo el manto estelar de la Cruz del Sur.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'DÍAS 05–08',
      dayTitle: 'Safari Salvaje en la Tanzania Continental',
      location: 'Serengeti y Cráter de Ngorongoro',
      activities: {
        'act-5-1': {
          time: 'Día 05 Mañana',
          title: 'Vuelo directo en avioneta de Zanzíbar al Serengueti',
          description: 'Vuelo panorámico con aterrizaje en pista de tierra en pleno corazón del Parque Nacional del Serengueti.',
        },
        'act-5-2': {
          time: 'Días 05–06',
          title: 'Safaris 4x4 en busca de los Cinco Grandes y campamento de lujo',
          description: 'Jornadas completas de safari rastreando leones, guepardos y manadas migratorias con guías expertos.',
        },
        'act-5-3': {
          time: 'Día 07',
          title: 'Expedición al fondo del cráter del Ngorongoro',
          description: 'Descenso de 600 metros a la caldera para avistar rinocerontes negros y lagunas con flamencos.',
        },
        'act-5-4': {
          time: 'Día 08',
          title: 'Vuelo de regreso y conexión con vuelos internacionales',
          description: 'Regreso en avioneta a Zanzíbar o conexión directa con vuelos en Dar es Salaam o Kilimanjaro.',
        },
      },
    },
  },
  it: {
    'DAY 01': {
      dayNumber: 'GIORNO 01',
      dayTitle: 'Arrivo e Benvenuto al Rifugio',
      location: 'Zanzirangi House • Costa Sud',
      activities: {
        'act-1-1': {
          time: 'Mattina / Pomeriggio',
          title: 'Accoglienza VIP in aeroporto e trasferimento privato',
          description: 'Autista privato con navetta climatizzata pronto ad accoglierti all’Aeroporto Internazionale Karume (ZNZ).',
        },
        'act-1-2': {
          time: 'Pomeriggio',
          title: 'Check-in e noce di cocco fresca di benvenuto',
          description: 'Sistemazione nella villa privata, passeggiata nel parco sul mare e acqua di cocco fresca all’ombra delle palme.',
        },
        'act-1-3': {
          time: 'Sera',
          title: 'Cena di benvenuto al tramonto al ristorante Zanzirangi',
          description: 'Primo assaggio dell’ospitalità isolana con pescato fresco del reef e spezie dell’orto biologico.',
        },
      },
    },
    'DAY 02': {
      dayNumber: 'GIORNO 02',
      dayTitle: 'Cultura Swahili e Profumo di Spezie',
      location: 'Stone Town e Piantagioni dell’Entroterra',
      activities: {
        'act-2-1': {
          time: '09:00',
          title: 'Visita guidata a piedi nel cuore di Stone Town (UNESCO)',
          description: 'Guida privata tra il Palazzo delle Meraviglie, il Forte Antico, i portoni intagliati e i vicoli storici.',
        },
        'act-2-2': {
          time: '13:30',
          title: 'Tour delle spezie biologiche e pranzo in fattoria',
          description: 'Annusa e assaggia vaniglia, chiodi di garofano, noce moscata e cardamomo colti freschi dalla pianta.',
        },
        'act-2-3': {
          time: '19:30',
          title: 'Banchetto degustazione Swahili a Zanzirangi House',
          description: 'Menù speciale del nostro chef: curry di latte di cocco a cottura lenta, brodo di tamarindo e riso pilau.',
        },
      },
    },
    'DAY 03': {
      dayNumber: 'GIORNO 03',
      dayTitle: 'Atollo Marino e Veleggiata al Tramonto',
      location: 'Atollo di Mnemba e Baia di Menai',
      activities: {
        'act-3-1': {
          time: '08:30',
          title: 'Escursione alla lingua di sabbia di Mnemba e snorkeling',
          description: 'Motoscafo verso acque turchesi; snorkeling tra coralli variopinti e relax su banchi di sabbia incontaminata.',
        },
        'act-3-2': {
          time: '16:30',
          title: 'Crociera privata al tramonto sul tradizionale dhow',
          description: 'Veleggiata su tradizionale dhow in legno, bevande fresche, brezza marina e tramonto dorato.',
        },
      },
    },
    'DAY 04': {
      dayNumber: 'GIORNO 04',
      dayTitle: 'Rigenerazione e Pace nel Santuario',
      location: 'Tenuta di Zanzirangi House',
      activities: {
        'act-4-1': {
          time: 'Tutta la mattina',
          title: 'Colazione senza fretta e relax a bordo piscina a sfioro',
          description: 'Frutta tropicale appena tagliata, caffè aromatico e nuotate nella piscina di 25 metri affacciata sulle onde.',
        },
        'act-4-2': {
          time: '14:00',
          title: 'Dall’orto alla tavola: passeggiata botanica con lo chef',
          description: 'Passeggiata nell’orto della tenuta per scoprire come vengono coltivate erbe aromatiche e ortaggi biologici.',
        },
        'act-4-3': {
          time: '20:00',
          title: 'Notte di stelle a lume di candela e musica Taarab',
          description: 'Atmosfera intima sul mare con melodie acustiche tradizionali sotto le stelle della Croce del Sud.',
        },
      },
    },
    'DAY 05–08': {
      dayNumber: 'GIORNI 05–08',
      dayTitle: 'La Grande Avventura Safari nella Tanzania Continentale',
      location: 'Serengeti e Cratere di Ngorongoro',
      activities: {
        'act-5-1': {
          time: 'Giorno 05 Mattina',
          title: 'Volo diretto da Zanzibar nel cuore del Serengeti',
          description: 'Volo panoramico e atterraggio su pista sterrata all’interno del Parco Nazionale del Serengeti.',
        },
        'act-5-2': {
          time: 'Giorni 05–06',
          title: 'Safari 4x4 alla ricerca dei Big Five e campo tendato di lusso',
          description: 'Giornate intere di game drive con ranger esperti per avvistare leoni, ghepardi e grandi branchi migratori.',
        },
        'act-5-3': {
          time: 'Giorno 07',
          title: 'Spedizione sul fondo del Cratere di Ngorongoro',
          description: 'Discesa di 600 metri nella caldera per avvistare il raro rinoceronte nero e il lago dei fenicotteri.',
        },
        'act-5-4': {
          time: 'Giorno 08',
          title: 'Volo di rientro o coincidenza per voli internazionali',
          description: 'Rientro in aereo a Zanzibar o coincidenza diretta per il volo di ritorno da Dar es Salaam o Kilimangiaro.',
        },
      },
    },
  },
};

export const ITINERARY_UI_TRANSLATIONS: Record<
  Language,
  {
    eyebrow: string;
    heading: string;
    subhead: string;
    badge: string;
    selectedCount: string;
    customizeCta: string;
    selectAllBtn: string;
    clearAllBtn: string;
    includedTag: string;
    customTag: string;
    whatsappGreeting: string;
    whatsappIntro: string;
    whatsappClosing: string;
  }
> = {
  en: {
    eyebrow: 'Tailor-Made Journey',
    heading: 'CURATE YOUR TANZANIA & ZANZIBAR EXPEDITION',
    subhead: 'Every guest journeys differently. Select the experiences you desire below to customize your bespoke island and safari itinerary with our resident concierge.',
    badge: '8-Day Signature Itinerary',
    selectedCount: 'experiences selected for your custom journey',
    customizeCta: 'PERSONALIZE VIA WHATSAPP CONCIERGE',
    selectAllBtn: 'Select All',
    clearAllBtn: 'Clear Selection',
    includedTag: 'Selected',
    customTag: 'Click to add',
    whatsappGreeting: 'Hello Zanzirangi House Concierge! I would like to plan a custom Tanzania & Zanzibar journey with your team:',
    whatsappIntro: 'Selected Itinerary Highlights:',
    whatsappClosing: 'Please let me know availability, recommended seasons, and how we can personalize this stay. Thank you!',
  },
  pl: {
    eyebrow: 'Podróż Szyta na Miarę',
    heading: 'STWÓRZ SWOJĄ WYPRAWĘ PO TANZANII I ZANZIBARZE',
    subhead: 'Każdy Gość podróżuje inaczej. Wybierz poniższe doświadczenia, aby skomponować spersonalizowany plan wyspy i safari z naszym concierge.',
    badge: '8-dniowy Program Flagowy',
    selectedCount: 'wybranych atrakcji do Twojego planu podróży',
    customizeCta: 'SPERSONALIZUJ PRZEZ WHATSAPP CONCIERGE',
    selectAllBtn: 'Zaznacz wszystko',
    clearAllBtn: 'Wyczyść wybór',
    includedTag: 'Wybrane',
    customTag: 'Kliknij, aby dodać',
    whatsappGreeting: 'Dzień dobry Zanzirangi House Concierge! Chciałbym zaplanować indywidualną wyprawę na Zanzibar i do Tanzanii:',
    whatsappIntro: 'Wybrane punkty programu:',
    whatsappClosing: 'Proszę o informację o dostępności, rekomendowanych terminach oraz możliwościach dopasowania. Dziękuję!',
  },
  ar: {
    eyebrow: 'رحلة مصممة خصيصاً لك',
    heading: 'صمم رحلتك الحصرية في تنزانيا وزنجبار',
    subhead: 'لكل ضيف ذوقه الفريد في السفر. حدد التجارب التي تفضلها أدناه لتنسيق جدول سفرك المخصص بين سحر الجزيرة ومغامرات السفاري مع كونسيرج المنتجع.',
    badge: 'برنامج مميز لمدة 8 أيام',
    selectedCount: 'تجارب مختارة لرحلتك الخاصة',
    customizeCta: 'تنسيق الرحلة عبر واتساب كونسيرج',
    selectAllBtn: 'تحديد الكل',
    clearAllBtn: 'إلغاء التحديد',
    includedTag: 'محدد',
    customTag: 'انقر للإضافة',
    whatsappGreeting: 'مرحباً كونسيرج زانزيرانجي هاوس! أود التنسيق لرحلة خاصة مخصصة في تنزانيا وزنجبار:',
    whatsappIntro: 'التجارب المختارة في البرنامج:',
    whatsappClosing: 'يرجى إفادتي بالمواعيد المناسبة وأفضل المواسم وإمكانية التخصيص. شكراً جزيلاً!',
  },
  zh: {
    eyebrow: '专属定制探索旅程',
    heading: '定制您的坦桑尼亚与桑给巴尔专属游程',
    subhead: '每一位宾客的行止皆独一无二。轻点勾选下方您心仪的体验，即可与别苑专属驻地礼宾团队定制海岛与野奢猎游方案。',
    badge: '8天7晚经典海陆联游',
    selectedCount: '项体验已加入您的专属行程',
    customizeCta: '通过 WHATSAPP 礼宾专员开启定制',
    selectAllBtn: '全选体验',
    clearAllBtn: '清空选项',
    includedTag: '已选择',
    customTag: '点击添加',
    whatsappGreeting: '您好 Zanzirangi House 礼宾团队！我想与贵团队共同定制坦桑尼亚与桑给巴尔专属行程：',
    whatsappIntro: '选定行程亮点：',
    whatsappClosing: '期待收到关于档期、推荐出游季节以及个性化定制细节的建议。十分感谢！',
  },
  fr: {
    eyebrow: 'Voyage sur Mesure',
    heading: 'CRÉEZ VOTRE VOYAGE EN TANZANIE & ZANZIBAR',
    subhead: 'Chaque voyageur est unique. Sélectionnez les expériences souhaitées ci-dessous pour personnaliser votre itinéraire insulaire et safari avec notre conciergerie.',
    badge: 'Itinéraire Signature de 8 Jours',
    selectedCount: 'expériences sélectionnées pour votre voyage',
    customizeCta: 'PERSONNALISER VIA LE CONCIERGE WHATSAPP',
    selectAllBtn: 'Tout sélectionner',
    clearAllBtn: 'Tout désélectionner',
    includedTag: 'Sélectionné',
    customTag: 'Cliquer pour ajouter',
    whatsappGreeting: 'Bonjour le service Concierge de Zanzirangi House ! Je souhaite composer un itinéraire sur mesure en Tanzanie & Zanzibar :',
    whatsappIntro: 'Expériences retenues :',
    whatsappClosing: 'Merci de me préciser les disponibilités, les saisons recommandées et les options de personnalisation. Merci !',
  },
  sw: {
    eyebrow: 'Safari Iliyopangwa Maalum',
    heading: 'PANGA SAFARI YAKO YA TANZANIA NA ZANZIBAR',
    subhead: 'Kila mgeni ana mahitaji ya kipekee. Chagua uzoefu unaopenda hapa chini ili kubinafsisha ratiba yako ya kisiwani na mbugani na mhudumu wetu.',
    badge: 'Ratiba Maalum ya Siku 8',
    selectedCount: 'uzoefu ulioteuliwa kwa ajili ya safari yako',
    customizeCta: 'WASILIANA NA CONCIERGE KUPITIA WHATSAPP',
    selectAllBtn: 'Chagua Zote',
    clearAllBtn: 'Futa Uteuzi',
    includedTag: 'Imechaguliwa',
    customTag: 'Bofya kuongeza',
    whatsappGreeting: 'Habari Zanzirangi House Concierge! Ningependa kupanga safari maalum ya Tanzania na Zanzibar na timu yenu:',
    whatsappIntro: 'Mambo yaliyochaguliwa katika ratiba:',
    whatsappClosing: 'Tafadhali nifahamishe kuhusu nafasi, misimu mizuri ya kusafiri na jinsi tunavyoweza kuibinafsisha. Asante sana!',
  },
  es: {
    eyebrow: 'Viaje a Medida',
    heading: 'DISEÑE SU EXPEDICIÓN POR TANZANIA Y ZANZÍBAR',
    subhead: 'Cada huésped viaja a su propio ritmo. Seleccione abajo las vivencias que desee para personalizar su itinerario de isla y safari con nuestro equipo de conserjería.',
    badge: 'Itinerario Exclusivo de 8 Días',
    selectedCount: 'experiencias seleccionadas para su viaje',
    customizeCta: 'PERSONALIZAR CON EL CONSERJE VÍA WHATSAPP',
    selectAllBtn: 'Seleccionar todo',
    clearAllBtn: 'Borrar selección',
    includedTag: 'Seleccionado',
    customTag: 'Clic para añadir',
    whatsappGreeting: '¡Hola Conserjería de Zanzirangi House! Quisiera organizar un viaje a medida por Tanzania y Zanzíbar con su equipo:',
    whatsappIntro: 'Experiencias destacadas seleccionadas:',
    whatsappClosing: 'Por favor, indíquenme disponibilidad, mejores épocas recomendadas y cómo personalizarlo. ¡Muchas gracias!',
  },
  it: {
    eyebrow: 'Viaggio su Misura',
    heading: 'COMPONI IL TUO ITINERARIO IN TANZANIA E ZANZIBAR',
    subhead: 'Ogni ospite vive il viaggio a modo suo. Seleziona le esperienze desiderate qui sotto per creare il tuo programma personalizzato tra mare e safari con il nostro concierge.',
    badge: 'Itinerario Iconico di 8 Giorni',
    selectedCount: 'esperienze selezionate per il tuo itinerario',
    customizeCta: 'PERSONALIZZA VIA WHATSAPP CON IL CONCIERGE',
    selectAllBtn: 'Seleziona tutto',
    clearAllBtn: 'Deseleziona tutto',
    includedTag: 'Selezionato',
    customTag: 'Clicca per aggiungere',
    whatsappGreeting: 'Buongiorno Concierge di Zanzirangi House! Desidero pianificare un itinerario personalizzato in Tanzania e Zanzibar con voi:',
    whatsappIntro: 'Esperienze selezionate nel programma:',
    whatsappClosing: 'Vi prego di indicarmi disponibilità, stagioni consigliate e come personalizzare il soggiorno. Grazie!',
  },
};

export function getLocalizedSampleItinerary(lang: Language): ItineraryDay[] {
  const dict = ITINERARY_DAYS_TRANSLATIONS[lang] || ITINERARY_DAYS_TRANSLATIONS.en;
  return SAMPLE_ITINERARY.map((day) => {
    const locDay = dict[day.dayNumber];
    if (!locDay) return day;
    return {
      dayNumber: locDay.dayNumber,
      dayTitle: locDay.dayTitle,
      location: locDay.location,
      activities: day.activities.map((act) => {
        const locAct = locDay.activities[act.id];
        if (!locAct) return act;
        return {
          ...act,
          time: locAct.time,
          title: locAct.title,
          description: locAct.description,
        };
      }),
    };
  });
}
