import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5EDE4",
        blush: "#F9D5D3",
        rose: "#D991A6",
        taupe: "#A89F91",
        charcoal: "#2D2D2D",
        cream: "#FDF8F4",
        ivory: "#FEFCF9",
        "rose-light": "#F3C5D0",
        "rose-dark": "#B5708A",
        "gold-soft": "#C4A96A",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, #F5EDE4 0%, #F9D5D3 50%, #F5EDE4 100%)",
        "gradient-rose":
          "linear-gradient(135deg, #D991A6 0%, #F9D5D3 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
      },
      boxShadow: {
        luxury: "0 4px 30px rgba(45, 45, 45, 0.06)",
        "luxury-lg": "0 10px 60px rgba(45, 45, 45, 0.08)",
        "luxury-xl": "0 20px 80px rgba(45, 45, 45, 0.1)",
        soft: "0 2px 15px rgba(217, 145, 166, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;