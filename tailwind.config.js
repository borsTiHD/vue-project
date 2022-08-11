/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    // prefix: 'tw-',
    important: true,
    darkMode: 'class',
    plugins: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#ff0071',
                    DEFAULT: '#E20074',
                    dark: '#af0059'
                },
                secondary: {
                    light: '#5e5e5e',
                    DEFAULT: '#383838',
                    dark: '#040404'
                }
            }
        }
    }
}
