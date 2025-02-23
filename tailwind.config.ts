import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mulish: 'Mulish, sans-serif',
    },
    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-table)',
      desktop: 'var(screen-desktop)'
    },
    spacing: {
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      '6xl': 'var(--spacing-6xl) /* 64px */',
      '8xl': 'var(--spacing-8xl) /* 72px */',
      '10xl': 'var(--spacing-10xl) /* 80px */',
      '12xl': 'var(--spacing-12xl) /* 88px */',
      '14xl': 'var(--spacing-14xl) /* 96px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
      10: 'var(--spacing-6xl) /* 64px */',
      11: 'var(--spacing-8xl) /* 72px */',
      12: 'var(--spacing-10xl) /* 80px */',
      13: 'var(--spacing-12xl) /* 88px */',
      14: 'var(--spacing-14xl) /* 96px */',
    },
    fontSize: {
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      tmd: "var(--title-md)",
      tlg: "var(--title-lg)",
      txl: "var(--title-xl)",
    },
    extend: {
      colors: {
        footer: 'var(--default-footer)',
        success: 'var(--success)',
        error: 'var(--error)',
        alert: 'var(--alert)',
        primary: 'var(--primary)',
        title: 'var(--text-title)',
        subtitle: 'var(--text-subtitle)',
        "light-surface": "var(--light-surface)",
        "medium-surface": "var(--medium-surface)",
        "dark-surface": "var(--dark-surface)",
        "primary-50": 'var(--primary-50)',
        "primary-75": 'var(--primary-75)',
        "primary-100": 'var(--primary-100)',
        "primary-200": 'var(--primary-200)',
        "primary-300": 'var(--primary-300)',
        "primary-400": 'var(--primary-400)',
        "primary-500": 'var(--primary-500)',
        hover: 'var(--hover)',
        click: 'var(--click)',
        icon: 'var(--icon)',
        outline: 'var(--outline)',
      },
      backgroundColor: {
        disabled: 'var(--background-disabled)',
      },
      textColor: {
        disabled: 'var(--text-disabled)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
      borderColor: {
        light: 'var(--primary-50)',
        dark: 'var(--primary-500)',
      },
      borderWidth: {
        1: '1px',
      },
      borderStyle: {
        solid: 'solid',
      },
    },
  },
  plugins: [],
};
export default config;
