/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                sm: '40rem',
                md: '48rem',
                lg: '64rem',
                xl: '80rem',
                '2xl': '96rem',
            },
        },
    },
    plugins: [],
};
