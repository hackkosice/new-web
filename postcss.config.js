module.exports = {
    plugins: [
        require("postcss-import-url")({}),
        require('cssnano')({
            preset: 'default',
        }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './assets/**/*.md',
                './content/**/*.md',
                './themes/orbitor-hugo/layouts/**/*.html',
                './themes/orbitor-hugo/assets/**/*.js',
                './themes/orbitor-hugo/static/**/*.js',
            ],
            safelist: [
                'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'ul', 'li', 'blockquote',
                "badge", "badge-primary", "badge-secondary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-light", "badge-dark",
            ]
        }),
        require('autoprefixer'),
        require('postcss-csso')
    ],
};
