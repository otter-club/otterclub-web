export type Locale = "en" | "zh" | "zh-TW" | "ja" | "ko" | "fr" | "es";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  zh: "简中",
  "zh-TW": "繁中",
  ja: "日本語",
  ko: "한국어",
  fr: "FR",
  es: "ES",
};

export const translations = {
  en: {
    brandName: "Otter Club",
    tagline: "Where whiskers meet wonder!",
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
      qq: "QQ Group: 831197219",
    },
  },
  zh: {
    brandName: "獭坞工作室",
    tagline: "让胡须与奇遇相遇！",
    intro:
      "我们是水獭开发者小分队，致力于制作温馨的独立游戏——充满趣味解谜、手绘冒险和暖心故事。潜入由爪子、热情与河岸边的顽皮淘气打造的世界！🌊✨",
    outro: "让我们一起，一个游戏一个游戏地掀起波澜！",
    emailUs: "联系我们：",
    footer: "© 2021-{year} 獭屋工作室. 版权所有。",
    titles: {
      website: "官网",
      email: "邮箱",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      qq: "QQ 群：831197219",
    },
  },
  "zh-TW": {
    brandName: "獺屋工作室",
    tagline: "讓鬍鬚與奇遇相遇！",
    intro:
      "我們是水獺開發者小分隊，致力於製作溫馨的獨立遊戲——充滿趣味解謎、手繪冒險和暖心故事。潛入由爪子、熱情與河岸邊的頑皮淘氣打造的世界！🌊✨",
    outro: "讓我們一起，一個遊戲一個遊戲地掀起波瀾！",
    emailUs: "聯絡我們：",
    footer: "© 2021-{year} 獺屋工作室. 版權所有。",
    titles: {
      website: "官網",
      email: "信箱",
      facebook: "Facebook",
      github: "GitHub",
      discord: "Discord",
      twitter: "Twitter",
      qq: "QQ 群：831197219",
    },
  },
  ja: {
    brandName: "Otter Club",
    tagline: "ひげとワクワクの出会い！",
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
      qq: "QQ グループ：831197219",
    },
  },
  ko: {
    brandName: "Otter Club",
    tagline: "수염과 경이로움의 만남!",
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
      qq: "QQ 그룹: 831197219",
    },
  },
  fr: {
    brandName: "Otter Club",
    tagline: "Là où moustaches rencontrent merveilles !",
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
      qq: "Groupe QQ : 831197219",
    },
  },
  es: {
    brandName: "Otter Club",
    tagline: "¡Donde los bigotes encuentran la maravilla!",
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
      qq: "Grupo QQ: 831197219",
    },
  },
} as const satisfies Record<
  Locale,
  {
    brandName: string;
    tagline: string;
    intro: string;
    outro: string;
    emailUs: string;
    footer: string;
    titles: { website: string; email: string; facebook: string; github: string; discord: string; twitter: string; qq: string };
  }
>;
