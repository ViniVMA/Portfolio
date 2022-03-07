module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#793EF9",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#1A1A1A",

          "base-100": "#000000",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
        backgroundImage: {
          "hero-pattern":
            "url('https://blog.icons8.com/wp-content/uploads/2020/02/how-to-create-gradient-article.jpg')",
          "footer-texture": "url('/img/footer-texture.png')",
        },
        maxWidth: {
          200: "200px",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
