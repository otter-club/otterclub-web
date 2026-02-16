export type Locale =
  | "en"
  | "zh"
  | "zh-TW"
  | "ja"
  | "ko"
  | "fr"
  | "es"
  | "es-419"
  | "ru"
  | "vi"
  | "th"
  | "id"
  | "de"
  | "pt-BR"
  | "pt"
  | "it"
  | "pl"
  | "tr"
  | "ar"
  | "nl";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  fr: "Français",
  es: "Español",
  "es-419": "Español (Latinoamérica)",
  ru: "Русский",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  de: "Deutsch",
  "pt-BR": "Português (Brasil)",
  pt: "Português",
  it: "Italiano",
  pl: "Polski",
  tr: "Türkçe",
  ar: "العربية",
  nl: "Nederlands",
};

export const translations = {
  en: {
    brandName: "Otter Club",
    tagline: "Where whiskers meet wonder!",
    greeting: "Hello to all the adorable otters around the world! 🦦",
    intro:
      "We're a splashy squad of otter developers crafting cozy indie games—full of playful puzzles, hand-painted adventures, and heartwarming stories. Dive into worlds made with paws, passion, and a pinch of riverbank mischief! 🌊✨",
    outro: "Let's make waves, one game at a time!",
    emailUs: "Email us:",
    footer: "© 2021-{year} Otter Club. All rights reserved.",
    titles: {
      website: "Website",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ Group: 831197219",
    },
  },
  zh: {
    brandName: "獭坞工作室",
    tagline: "让胡须与奇遇相遇！",
    greeting: "向全世界的水獭们问好呀～🦦",
    intro:
      "我们是水獭开发者小分队，致力于制作温馨的独立游戏——充满趣味解谜、手绘冒险和暖心故事。潜入由爪子、热情与河岸边的顽皮淘气打造的世界！🌊✨",
    outro: "让我们一起，一个游戏一个游戏地掀起波澜！",
    emailUs: "联系我们：",
    footer: "© 2021-{year} 獭坞工作室 版权所有",
    titles: {
      website: "官网",
      email: "邮箱",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "哔哩哔哩",
      qq: "QQ 群：831197219",
    },
  },
  "zh-TW": {
    brandName: "獺塢工作室",
    tagline: "讓鬍鬚與奇遇相遇！",
    greeting: "向全世界的水獺們問好呀～🦦",
    intro:
      "我們是水獺開發者小分隊，致力於製作溫馨的獨立遊戲——充滿趣味解謎、手繪冒險和暖心故事。潛入由爪子、熱情與河岸邊的頑皮淘氣打造的世界！🌊✨",
    outro: "讓我們一起，一個遊戲一個遊戲地掀起波瀾！",
    emailUs: "聯絡我們：",
    footer: "© 2021-{year} 獺塢工作室 版權所有",
    titles: {
      website: "官網",
      email: "信箱",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "哔哩哔哩",
      qq: "QQ 群：831197219",
    },
  },
  ja: {
    brandName: "Otter Club",
    tagline: "ひげとワクワクの出会い！",
    greeting: "世界中のカワウソのみんな、こんにちは～！🦦",
    intro:
      "私たちは水獺好きの開発者チームです。温かみのあるインディーゲームを制作しています——パズル、手描きの冒険、心温まるストーリーが満載。爪と情熱と川辺のいたずらで作られた世界に飛び込みましょう！🌊✨",
    outro: "一作ずつ、波を起こしていきましょう！",
    emailUs: "お問い合わせ：",
    footer: "© 2021-{year} Otter Club. All rights reserved.",
    titles: {
      website: "ウェブサイト",
      email: "メール",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ グループ：831197219",
    },
  },
  ko: {
    brandName: "Otter Club",
    tagline: "수염과 경이로움의 만남!",
    greeting: "전 세계 수달 친구들, 반가워요! 🦦",
    intro:
      "저희는 따뜻한 인디 게임을 만드는 수달 개발자 팀입니다. 재미있는 퍼즐, 핸드페인팅 어드벤처, 감동적인 스토리가 가득한 세계로 빠져보세요! 발바닥, 열정, 강둑의 장난기로 만들어진 세계로요. 🌊✨",
    outro: "한 게임씩 파도를 만들며 나아가요!",
    emailUs: "문의하기:",
    footer: "© 2021-{year} Otter Club. All rights reserved.",
    titles: {
      website: "웹사이트",
      email: "이메일",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ 그룹: 831197219",
    },
  },
  fr: {
    brandName: "Otter Club",
    tagline: "Là où moustaches rencontrent merveilles !",
    greeting: "Coucou à toutes les adorables loutres du monde ! 🦦",
    intro:
      "Nous sommes une équipe de développeurs passionnés de loutres, créant des jeux indés cosy—pleins de puzzles ludiques, d'aventures peintes à la main et d'histoires réconfortantes. Plongez dans des mondes faits de pattes, de passion et d'une pincée de malice riveraine ! 🌊✨",
    outro: "Faisons des vagues, un jeu à la fois !",
    emailUs: "Contactez-nous :",
    footer: "© 2021-{year} Otter Club. Tous droits réservés.",
    titles: {
      website: "Site web",
      email: "E-mail",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Groupe QQ : 831197219",
    },
  },
  es: {
    brandName: "Otter Club",
    tagline: "¡Donde los bigotes encuentran la maravilla!",
    greeting: "¡Hola a todas las adorables nutrias del mundo! 🦦",
    intro:
      "Somos un equipo de desarrolladores amantes de las nutrias, creando acogedores juegos indie—llenos de rompecabezas divertidos, aventuras pintadas a mano e historias conmovedoras. ¡Sumérgete en mundos hechos con patas, pasión y una pizca de travesura ribereña! 🌊✨",
    outro: "¡Hagamos olas, un juego a la vez!",
    emailUs: "Contáctenos:",
    footer: "© 2021-{year} Otter Club. Todos los derechos reservados.",
    titles: {
      website: "Sitio web",
      email: "Correo",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Grupo QQ: 831197219",
    },
  },
  "es-419": {
    brandName: "Otter Club",
    tagline: "¡Donde los bigotes encuentran la maravilla!",
    greeting: "¡Hola a todas las adorables nutrias del mundo! 🦦",
    intro:
      "Somos un equipo de desarrolladores amantes de las nutrias, creando juegos indie acogedores—llenos de rompecabezas divertidos, aventuras pintadas a mano e historias conmovedoras. ¡Sumérgete en mundos hechos con patitas, pasión y una pizca de travesura ribereña! 🌊✨",
    outro: "¡Hagamos olas, un juego a la vez!",
    emailUs: "Contáctanos:",
    footer: "© 2021-{year} Otter Club. Todos los derechos reservados.",
    titles: {
      website: "Sitio web",
      email: "Correo",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Grupo QQ: 831197219",
    },
  },
  ru: {
    brandName: "Otter Club",
    tagline: "Где усы встречаются с чудом!",
    greeting: "Привет всем очаровательным выдрам по всему миру! 🦦",
    intro:
      "Мы — команда разработчиков, влюблённых в выдр, создаём уютные инди-игры — полные занимательных головоломок, нарисованных вручную приключений и тёплых историй. Нырните в миры, созданные лапками, страстью и щепоткой речной озорства! 🌊✨",
    outro: "Давайте творить волны, одна игра за раз!",
    emailUs: "Напишите нам:",
    footer: "© 2021-{year} Otter Club. Все права защищены.",
    titles: {
      website: "Сайт",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ группа: 831197219",
    },
  },
  vi: {
    brandName: "Otter Club",
    tagline: "Nơi râu ria gặp gỡ điều kỳ diệu!",
    greeting: "Xin chào tất cả những chú rái cá đáng yêu trên toàn thế giới! 🦦",
    intro:
      "Chúng tôi là đội ngũ nhà phát triển yêu thích rái cá, tạo ra những game indie ấm áp—đầy câu đố vui nhộn, phiêu lưu vẽ tay và câu chuyện ấm lòng. Hãy lặn vào thế giới được tạo nên bằng móng vuốt, đam mê và một chút tinh nghịch bên bờ sông! 🌊✨",
    outro: "Hãy tạo sóng, từng game một!",
    emailUs: "Liên hệ:",
    footer: "© 2021-{year} Otter Club. Bảo lưu mọi quyền.",
    titles: {
      website: "Trang web",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ Group: 831197219",
    },
  },
  th: {
    brandName: "Otter Club",
    tagline: "ที่ซึ่งหนวดพบกับความมหัศจรรย์!",
    greeting: "สวัสดีทุกนากน้อยน่ารักทั่วโลก! 🦦",
    intro:
      "เราเป็นทีมนักพัฒนาที่รักนาก สร้างเกมอินดี้อบอุ่น—เต็มไปด้วยปริศนาแสนสนุก การผจญภัยวาดมือ และเรื่องราวอบอุ่นหัวใจ ดำดิ่งสู่โลกที่สร้างด้วยอุ้งเท้า ความหลงใหล และความซุกซนริมแม่น้ำนิดหน่อย! 🌊✨",
    outro: "มาสร้างคลื่นกันเถอะ ทีละเกม!",
    emailUs: "ติดต่อเรา:",
    footer: "© 2021-{year} Otter Club. สงวนลิขสิทธิ์",
    titles: {
      website: "เว็บไซต์",
      email: "อีเมล",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ Group: 831197219",
    },
  },
  id: {
    brandName: "Otter Club",
    tagline: "Tempat kumis bertemu keajaiban!",
    greeting: "Halo untuk semua berang-berang menggemaskan di seluruh dunia! 🦦",
    intro:
      "Kami adalah tim pengembang penggemar berang-berang, menciptakan game indie yang nyaman—penuh teka-teki menyenangkan, petualangan lukisan tangan, dan cerita yang menghangatkan hati. Selami dunia yang dibuat dengan cakar, gairah, dan sedikit kenakalan tepi sungai! 🌊✨",
    outro: "Mari buat gelombang, satu game pada satu waktu!",
    emailUs: "Hubungi kami:",
    footer: "© 2021-{year} Otter Club. Hak cipta dilindungi.",
    titles: {
      website: "Situs web",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ Group: 831197219",
    },
  },
  de: {
    brandName: "Otter Club",
    tagline: "Wo Schnurrhaare auf Wunder treffen!",
    greeting: "Hallo an alle entzückenden Otter auf der ganzen Welt! 🦦",
    intro:
      "Wir sind ein quirliges Team von Otter-Entwicklern, die gemütliche Indie-Spiele kreieren—voller verspielter Rätsel, handgezeichneter Abenteuer und herzerwärmender Geschichten. Taucht ein in Welten, die mit Pfoten, Leidenschaft und einer Prise Flussufer-Mut gemacht sind! 🌊✨",
    outro: "Lasst uns Wellen schlagen, ein Spiel nach dem anderen!",
    emailUs: "Kontakt:",
    footer: "© 2021-{year} Otter Club. Alle Rechte vorbehalten.",
    titles: {
      website: "Webseite",
      email: "E-Mail",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ-Gruppe: 831197219",
    },
  },
  "pt-BR": {
    brandName: "Otter Club",
    tagline: "Onde bigodes encontram maravilhas!",
    greeting: "Olá para todas as lontras adoráveis ao redor do mundo! 🦦",
    intro:
      "Somos uma equipe de desenvolvedores apaixonados por lontras, criando jogos indie aconchegantes—cheios de quebra-cabeças divertidos, aventuras pintadas à mão e histórias que aquecem o coração. Mergulhe em mundos feitos com patinhas, paixão e um pouquinho de travessura à beira do rio! 🌊✨",
    outro: "Vamos fazer ondas, um jogo de cada vez!",
    emailUs: "Contate-nos:",
    footer: "© 2021-{year} Otter Club. Todos os direitos reservados.",
    titles: {
      website: "Site",
      email: "E-mail",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Grupo QQ: 831197219",
    },
  },
  pt: {
    brandName: "Otter Club",
    tagline: "Onde os bigodes encontram a maravilha!",
    greeting: "Olá a todas as lontras adoráveis pelo mundo! 🦦",
    intro:
      "Somos uma equipa de desenvolvedores apaixonados por lontras, a criar jogos indie acolhedores—cheios de puzzles divertidos, aventuras pintadas à mão e histórias que aquecem o coração. Mergulha em mundos feitos com patas, paixão e uma pitada de travessura ribeirinha! 🌊✨",
    outro: "Vamos fazer ondas, um jogo de cada vez!",
    emailUs: "Contacte-nos:",
    footer: "© 2021-{year} Otter Club. Todos os direitos reservados.",
    titles: {
      website: "Site",
      email: "E-mail",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Grupo QQ: 831197219",
    },
  },
  it: {
    brandName: "Otter Club",
    tagline: "Dove i baffi incontrano la meraviglia!",
    greeting: "Ciao a tutte le adorabili lontre nel mondo! 🦦",
    intro:
      "Siamo un team di sviluppatori appassionati di lontre, che crea accoglienti giochi indie—pieni di puzzle giocosi, avventure dipinte a mano e storie che scaldano il cuore. Tuffati in mondi fatti di zampe, passione e un pizzico di birichinaggio fluviale! 🌊✨",
    outro: "Facciamo onde, un gioco alla volta!",
    emailUs: "Contattaci:",
    footer: "© 2021-{year} Otter Club. Tutti i diritti riservati.",
    titles: {
      website: "Sito web",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Gruppo QQ: 831197219",
    },
  },
  pl: {
    brandName: "Otter Club",
    tagline: "Gdzie wąsy spotykają się z cudem!",
    greeting: "Cześć wszystkim uroczym wydrom na świecie! 🦦",
    intro:
      "Jesteśmy zespołem deweloperów zafascynowanych wydrami, tworzących przytulne gry indie—pełne zabawnych łamigłówek, ręcznie malowanych przygód i wzruszających historii. Zanurz się w światach stworzonych z łapek, pasji i szczypty rzecznej psoty! 🌊✨",
    outro: "Róbmy fale, jedna gra na raz!",
    emailUs: "Skontaktuj się:",
    footer: "© 2021-{year} Otter Club. Wszelkie prawa zastrzeżone.",
    titles: {
      website: "Strona",
      email: "Email",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "Grupa QQ: 831197219",
    },
  },
  tr: {
    brandName: "Otter Club",
    tagline: "Bıyıkların harika ile buluştuğu yer!",
    greeting: "Dünyadaki tüm sevimli su samurlarına merhaba! 🦦",
    intro:
      "Su samuru tutkunu geliştiricilerden oluşan ekibimiz, sıcacık indie oyunlar yaratıyor—eğlenceli bulmacalar, el çizimi maceralar ve yürek ısıtan hikâyelerle dolu. Patiler, tutku ve biraz nehir kenarı yaramazlığıyla yapılan dünyalara dalın! 🌊✨",
    outro: "Hadi dalga yaratalım, bir oyun bir oyun!",
    emailUs: "Bize ulaşın:",
    footer: "© 2021-{year} Otter Club. Tüm hakları saklıdır.",
    titles: {
      website: "Web sitesi",
      email: "E-posta",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ Grubu: 831197219",
    },
  },
  ar: {
    brandName: "Otter Club",
    tagline: "حيث يلتقي الشارب بالعجائب!",
    greeting: "مرحباً بجميع ثعالب الماء اللطيفة حول العالم! 🦦",
    intro:
      "نحن فريق من المطورين المتحمسين لثعالب الماء، نصنع ألعاب إندي مريحة—مليئة بالألغاز المرحة والمغامرات المرسومة يدوياً والقصص الدافئة. انغمس في عوالم مصنوعة من الأقدام والشغف وقليل من مرح ضفاف الأنهار! 🌊✨",
    outro: "لنصنع أمواجاً، لعبة واحدة في كل مرة!",
    emailUs: "تواصل معنا:",
    footer: "© 2021-{year} Otter Club. جميع الحقوق محفوظة.",
    titles: {
      website: "الموقع",
      email: "البريد",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "مجموعة QQ: 831197219",
    },
  },
  nl: {
    brandName: "Otter Club",
    tagline: "Waar snorharen wonder ontmoeten!",
    greeting: "Hallo aan alle schattige otters over de hele wereld! 🦦",
    intro:
      "Wij zijn een enthousiaste groep otter-ontwikkelaars die gezellige indie-games maken—vol speelse puzzels, handgeschilderde avonturen en hartverwarmende verhalen. Duik in werelden gemaakt met pootjes, passie en een vleugje rivieroever-maligheid! 🌊✨",
    outro: "Laten we golven maken, één game tegelijk!",
    emailUs: "Neem contact op:",
    footer: "© 2021-{year} Otter Club. Alle rechten voorbehouden.",
    titles: {
      website: "Website",
      email: "E-mail",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      bilibili: "Bilibili",
      qq: "QQ-groep: 831197219",
    },
  },
} as const satisfies Record<
  Locale,
  {
    brandName: string;
    tagline: string;
    greeting: string;
    intro: string;
    outro: string;
    emailUs: string;
    footer: string;
    titles: {
      website: string;
      email: string;
      facebook: string;
      github: string;
      discord: string;
      twitter: string;
      bilibili: string;
      qq: string;
    };
  }
>;
