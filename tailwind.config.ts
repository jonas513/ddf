import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C14",
        surface: "#12172B",
        surface2: "#1A2035",
        navy: "#1E2D6B",
        accent: "#E8303A",
        text: "#F2F4F8",
        muted: "#8B92A9",
        border: "#1F2640",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 70% 50%, #1E2D6B22 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(180deg, transparent 40%, #0A0C14ee 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
