// ------------------------------
// -- Elementis
// ------------------------------

const customConfig = {
    root: {
        src: './src/',
        dest: './htdocs/lib/'
    },
    ifs: {
        doLinter: true,
        doMinify: true,
        doSourcemaps: false
    },
    linters: {
        eslint: './.eslintrc.yaml',
        stylelint: './.stylelintrc.yaml'
    },
    sources: {
        html: 'components/**/templates/**/*.html',
        images: 'components/**/images/**/*.{jpg,jpeg,png,gif,svg}',
        js: 'components/**/scripts/**/*.js',
        scss: 'components/**/styles/**/*.{sass,scss}'
    },
    destinations: {
        html: '../templates/'
    },
    tasks: {
        watch: ['html', 'js', 'scss'],
        build: ['html', 'images', 'js', 'scss']
    }
};

require('@essomia/gulpflow-starter')(customConfig);
