// const { argv, env } = process
// const { VUE_APP_SERVE_URL, NODE_ENV } = env
// const isDev = NODE_ENV === 'development'

// const prodPlugins = []
// const port = 3000;
module.exports = {
    // productionSourceMap: isDev,
    filenameHashing: true,
    assetsDir: 'assets',
    parallel: false,
    publicPath: './',
    outputDir: 'logisticsbigdataplatform',
    devServer: {
        port: 8082,
        // host: '0.0.0.0',
        proxy: {
            '/': {
                target: 'http://43.142.179.198:8081',
                changeOrigin: true,
                ws: false
            },
        },
    },
}

