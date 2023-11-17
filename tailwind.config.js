/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                'senior': '#0C223f',
                'yellow': '#FFC627',
                'yellow-hover': '#FFd000'
            }
        },
    },
    plugins: [],
}

