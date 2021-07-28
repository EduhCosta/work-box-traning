const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Using Workbox
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
    },
    resolve: {
        modules: [path.resolve('./src/'), 'node_modules'],
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new InjectManifest({
            swSrc: path.join(process.cwd(), '/src/service-worker.js'),
            swDest: 'service-worker.js',
            chunks: ['*.chunk.js'],
            exclude: [
                /\.map$/,
                /manifest$/,
                /\.htaccess$/,
                /service-worker\.js$/,
                /sw\.js$/,
            ],
            include: [path.resolve(process.cwd(), 'dist')],
        }),
    ],
}
