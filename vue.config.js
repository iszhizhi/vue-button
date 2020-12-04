module.exports = {
    publicPath: './',
    lintOnSave: 'warning',
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'UI',
        }
    }
}