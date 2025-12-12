// =========================================
// Base Names
// =========================================
export const BLOG_TITLE = "Blog";
export const COLOR_THEME_COOKIE_NAME = "color-theme";

// =========================================
// Helper Types
// =========================================
type TokenMap = Record<string, string>;
type Theme = TokenMap;

// =========================================
// LIGHT THEME COLORS
// =========================================
export const LIGHT_COLORS: Theme = {
  "--color-text": "hsl(0deg 0% 5%)",

  // Primary
  "--color-primary-100": "hsl(240deg 100% 90%)",
  "--color-primary-300": "hsl(242deg 100% 70%)",
  "--color-primary-500": "hsl(245deg 100% 60%)",
  "--color-primary-700": "hsl(250deg 100% 33%)",
  "--color-primary-900": "hsl(256deg 100% 20%)",
  "--color-primary-contrast": "white",

  // Secondary
  "--color-secondary-500": "hsl(328deg 100% 50%)",

  // Decorative
  "--color-decorative-100": "hsl(50deg 100% 94%)",
  "--color-decorative-200": "hsl(50deg 100% 90%)",
  "--color-decorative-300": "hsl(50deg 100% 85%)",
  "--color-decorative-500": "hsl(50deg 100% 70%)",
  "--color-decorative-600": "hsl(50deg 100% 60%)",
  "--color-decorative-700": "hsl(50deg 100% 50%)",
  "--color-decorative-800": "hsl(50deg 100% 33%)",
  "--color-decorative-900": "hsl(50deg 100% 25%)",

  // Grays
  "--color-gray-0": "white",
  "--color-gray-100": "hsl(50deg 20% 90%)",
  "--color-gray-200": "hsl(50deg 15% 85%)",
  "--color-gray-300": "hsl(50deg 10% 70%)",
  "--color-gray-500": "hsl(50deg 4% 50%)",
  "--color-gray-700": "hsl(50deg 10% 25%)",
  "--color-gray-900": "hsl(50deg 20% 10%)",
  "--color-gray-1000": "black",

  "--color-link-underline": "#ed9b96",

  // Semantic
  "--color-primary": "hsl(245deg 100% 60%)",
  "--color-secondary": "hsl(328deg 100% 50%)",
  "--color-inline-code-bg": "hsl(45deg 74% 85%)",
  "--color-selection-text": "black",
  "--color-selection-background": "hsl(50deg 100% 50%)",
  "--color-backdrop": "hsl(50deg 100% 70%)",
  "--color-backdrop-highlight": "hsl(50deg 100% 85%)",
  "--color-page-background": "hsl(50deg 100% 94%)",
  "--color-page-border": "transparent",
  "--color-card-background": "white",
  "--color-card-border": "transparent",
};

// =========================================
// DARK THEME COLORS
// =========================================
export const DARK_COLORS: Theme = {
  "--color-text": "hsl(0deg 0% 100%)",

  // Primary
  "--color-primary-100": "hsl(50deg 100% 90%)",
  "--color-primary-300": "hsl(50deg 100% 70%)",
  "--color-primary-500": "hsl(50deg 100% 50%)",
  "--color-primary-700": "hsl(50deg 100% 35%)",
  "--color-primary-900": "hsl(50deg 100% 25%)",
  "--color-primary-contrast": "black",

  // Secondary
  "--color-secondary-500": "hsl(328deg 100% 50%)",

  // Decorative
  "--color-decorative-100": "hsl(256deg 20% 4%)",
  "--color-decorative-200": "hsl(256deg 30% 10%)",
  "--color-decorative-300": "hsl(256deg 30% 15%)",
  "--color-decorative-500": "hsl(256deg 40% 30%)",
  "--color-decorative-600": "hsl(256deg 40% 40%)",
  "--color-decorative-700": "hsl(256deg 40% 50%)",
  "--color-decorative-800": "hsl(256deg 45% 65%)",
  "--color-decorative-900": "hsl(256deg 55% 80%)",

  // Grays
  "--color-gray-0": "black",
  "--color-gray-100": "hsl(256deg 20% 10%)",
  "--color-gray-200": "hsl(256deg 15% 15%)",
  "--color-gray-300": "hsl(256deg 10% 30%)",
  "--color-gray-500": "hsl(256deg 4% 50%)",
  "--color-gray-700": "hsl(256deg 10% 75%)",
  "--color-gray-900": "hsl(256deg 20% 90%)",
  "--color-gray-1000": "white",

  "--color-link-underline": "#ffd500",
  "--color-grid-background": "black",

  // Semantic
  "--color-primary": "hsl(50deg 100% 50%)",
  "--color-secondary": "hsl(328deg 100% 50%)",
  "--color-inline-code-bg": "hsl(256deg 30% 22%)",
  "--color-selection-text": "white",
  "--color-selection-background": "hsl(256deg 100% 30%)",
  "--color-backdrop": "hsl(256deg 20% 4%)",
  "--color-backdrop-highlight": "hsl(256deg 40% 30%)",
  "--color-page-background": "transparent",
  "--color-page-border": "hsl(256deg 30% 50% / 0.2)",
  "--color-card-background": "hsl(256deg 20% 4%)",
  "--color-card-border": "hsl(256deg 30% 50% / 0.2)",
};

// =========================================
// RETRO THEME COLORS
// =========================================
export const RETRO_COLORS: Theme = {
  "--color-text": "hsl(267deg 39% 12%)",

  "--color-page-background": "hsl(48deg 48% 83%)",
  "--color-card-background": "hsl(48deg 48% 83%)",
  "--color-card-border": "transparent",
  "--color-grid-background": "#F8F0E3",
  "--color-link-underline": "#ed9b96",

  // Primary
  "--color-primary-100": "hsl(3deg 71% 94%)",
  "--color-primary-300": "hsl(3deg 71% 82%)",
  "--color-primary-500": "hsl(3deg 71% 76%)",
  "--color-primary-700": "hsl(3deg 71% 60%)",
  "--color-primary-900": "hsl(3deg 71% 45%)",
  "--color-primary": "hsl(3deg 71% 76%)",
  "--color-primary-contrast": "black",

  // Secondary
  "--color-secondary-100": "hsl(159deg 25% 94%)",
  "--color-secondary-300": "hsl(159deg 25% 80%)",
  "--color-secondary-500": "hsl(159deg 25% 73%)",
  "--color-secondary-700": "hsl(159deg 25% 55%)",
  "--color-secondary-900": "hsl(159deg 25% 40%)",
  "--color-secondary": "hsl(159deg 25% 73%)",

  // Decorative
  "--color-decorative-100": "hsl(49deg 67% 94%)",
  "--color-decorative-200": "hsl(49deg 67% 88%)",
  "--color-decorative-300": "hsl(49deg 67% 80%)",
  "--color-decorative-500": "hsl(49deg 67% 73%)",
  "--color-decorative-600": "hsl(49deg 67% 60%)",
  "--color-decorative-700": "hsl(49deg 67% 50%)",
  "--color-decorative-800": "hsl(49deg 67% 40%)",
  "--color-decorative-900": "hsl(49deg 67% 30%)",

  // Grays
  "--color-gray-0": "white",
  "--color-gray-100": "hsl(48deg 48% 90%)",
  "--color-gray-200": "hsl(48deg 48% 85%)",
  "--color-gray-300": "hsl(48deg 48% 70%)",
  "--color-gray-500": "hsl(267deg 39% 30%)",
  "--color-gray-700": "hsl(267deg 39% 20%)",
  "--color-gray-900": "hsl(267deg 39% 12%)",
  "--color-gray-1000": "black",

  // Semantic
  "--color-backdrop": "hsl(49deg 67% 88%)",
  "--color-backdrop-highlight": "hsl(49deg 67% 80%)",
  "--color-inline-code-bg": "hsl(49deg 67% 85%)",
  "--color-selection-text": "black",
  "--color-selection-background": "hsl(49deg 67% 73%)",
};

// =========================================
// DRACULA THEME COLORS
// =========================================
export const DRACULA_COLORS: Theme = {
  "--color-text": "hsl(60deg 30% 96%)",

  "--color-page-background": "hsl(231deg 15% 17%)",
  "--color-card-background": "hsl(231deg 15% 17%)",
  "--color-card-border": "transparent",

  // Primary
  "--color-primary-100": "hsl(326deg 100% 95%)",
  "--color-primary-300": "hsl(326deg 100% 85%)",
  "--color-primary-500": "hsl(326deg 100% 72%)",
  "--color-primary-700": "hsl(326deg 80% 55%)",
  "--color-primary-900": "hsl(326deg 70% 40%)",
  "--color-primary": "hsl(326deg 100% 72%)",
  "--color-primary-contrast": "black",

  // Secondary
  "--color-secondary-100": "hsl(258deg 94% 95%)",
  "--color-secondary-300": "hsl(258deg 94% 85%)",
  "--color-secondary-500": "hsl(258deg 94% 78%)",
  "--color-secondary-700": "hsl(258deg 80% 65%)",
  "--color-secondary-900": "hsl(258deg 60% 45%)",
  "--color-secondary": "hsl(258deg 94% 78%)",

  // Decorative
  "--color-decorative-100": "hsl(33deg 100% 95%)",
  "--color-decorative-200": "hsl(33deg 100% 90%)",
  "--color-decorative-300": "hsl(33deg 100% 82%)",
  "--color-decorative-500": "hsl(33deg 100% 71%)",
  "--color-decorative-600": "hsl(33deg 90% 60%)",
  "--color-decorative-700": "hsl(33deg 90% 50%)",
  "--color-decorative-800": "hsl(33deg 85% 40%)",
  "--color-decorative-900": "hsl(33deg 80% 30%)",

  // Grays
  "--color-gray-0": "black",
  "--color-gray-100": "hsl(230deg 16% 12%)",
  "--color-gray-200": "hsl(230deg 15% 18%)",
  "--color-gray-300": "hsl(230deg 10% 28%)",
  "--color-gray-500": "hsl(230deg 7% 40%)",
  "--color-gray-700": "hsl(230deg 15% 55%)",
  "--color-gray-900": "hsl(230deg 30% 70%)",
  "--color-gray-1000": "white",

  // Semantic
  "--color-backdrop": "hsl(230deg 15% 14%)",
  "--color-backdrop-highlight": "hsl(230deg 20% 20%)",
  "--color-inline-code-bg": "hsl(230deg 20% 25%)",
  "--color-selection-text": "black",
  "--color-selection-background": "hsl(326deg 100% 72%)",
};

// =========================================
// SHADOWS
// =========================================
export const LIGHT_SHADOWS: Theme = {
  "--shadow-page": `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  "--shadow-card": `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};

export const DARK_SHADOWS: Theme = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

export const RETRO_SHADOWS: Theme = {
  "--shadow-page": `
    0px 1px 2px hsl(48deg 40% 50% / 0.25),
    0px 3px 6px hsl(48deg 40% 50% / 0.25),
    0px 9px 18px hsl(48deg 40% 50% / 0.25),
    0px 18px 36px hsl(48deg 40% 50% / 0.25),
    0px 54px 108px hsl(48deg 40% 50% / 0.25)
  `,
  "--shadow-card": `
    0px 1px 2px hsl(48deg 30% 50% / 0.2),
    0px 2px 4px hsl(48deg 30% 50% / 0.2),
    0px 4px 8px hsl(48deg 30% 50% / 0.2),
    0px 8px 16px hsl(48deg 30% 50% / 0.2)
  `,
};

export const DRACULA_SHADOWS: Theme = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

// =========================================
// FINAL TOKEN EXPORTS
// =========================================
export const LIGHT_TOKENS = { ...LIGHT_COLORS, ...LIGHT_SHADOWS };
export const DARK_TOKENS = { ...DARK_COLORS, ...DARK_SHADOWS };
export const RETRO_TOKENS = { ...RETRO_COLORS, ...RETRO_SHADOWS };
export const DRACULA_TOKENS = { ...DRACULA_COLORS, ...DRACULA_SHADOWS };
