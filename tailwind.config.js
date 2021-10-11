module.exports = {
    mode: 'jit',
    darkMode: 'class',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,ts}'],
    theme: {
        // theme extensions
    },

    //variants: {
    //    extend: {},
    //},

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
