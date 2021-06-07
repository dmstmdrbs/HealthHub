module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/HealthHub/' : '/',
    outputDir: 'docs',
    transpileDependencies: [
        'vuetify'
    ]
}