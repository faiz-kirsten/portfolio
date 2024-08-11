/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            display: ["Oswald"],
            body: ['"Open Sans"'],
            lato: ["Lato", "sans-serif"],
            inconsolata: ["Inconsolata", "sans-serif"],
            syne: ["Syne", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
            redHatDisplay: ["Red Hat Display", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
