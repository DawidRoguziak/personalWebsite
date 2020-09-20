const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../src/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8001'
            }
        }
    },
    "transpileDependencies": [
        "vuetify"
    ],
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/assets/styles/_vars.scss";`
            }
        }
    },
}