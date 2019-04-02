const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: {
        main: [
            './views/index.js', 
            './views/style/main.scss'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader', 
                options: {
                    sourceMap: true
                }
            },{
                loader: 'sass-loader',
                options: {
                    includePaths: ['./node_modules'],
                    sourceMap: true
                },
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            // template: './public/index.html',
            // filename: './index.html'
            // title: 'Output Management',
            template: __dirname + '/views/index.ejs',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        port: 3002
    }
};