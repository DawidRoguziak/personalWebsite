module.exports = {
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