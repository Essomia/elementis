// ------------------------------
// -- Elementis
// ------------------------------

const customConfig = {
    root: {
        src: './src',
        dest: './htdocs/lib'
    },
    ifs: {
        doLinter: true,
        doMinify: true,
        doSourcemaps: false
    },
    sources: {
        images: '/components/**/images/**/*.{jpg,jpeg,png,gif,svg}',
        js: '/components/**/scripts/**/*.js',
        scss: '/components/**/styles/**/*.{sass,scss}'
    },
    tasks: {
        watch: ['js', 'scss'],
        build: ['images', 'js', 'scss']
    }
};

const boilerplate = require('@essomia/gulpflow-starter')(customConfig);
