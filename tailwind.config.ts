import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050816",
          primary: "#1E293B",
          accent: "#6366F1",
          accentSoft: "#4F46E5",
          lightBg: "#F9FAFB"
        }
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, rgba(79,70,229,0.25), transparent 60%)",
        "gradient-tech":
          "linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%)"
      },
      boxShadow: {
        soft: "0 18px 45px -15px rgba(15,23,42,0.4)"
      }
    }
  },
  plugins: []
};

export default config;

