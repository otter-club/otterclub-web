export type Locale = "en" | "zh";

export const translations = {
  en: {
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
    tagline: "让胡须与奇遇相遇！",
    intro:
      "我们是水獭开发者小分队，致力于制作温馨的独立游戏——充满趣味解谜、手绘冒险和暖心故事。潜入由爪子、热情与河岸边的顽皮淘气打造的世界！🌊✨",
    outro: "让我们一起，一个游戏一个游戏地掀起波澜！",
    emailUs: "联系我们：",
    footer: "© 2021-{year} Otter Club. 版权所有。",
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
} as const;
