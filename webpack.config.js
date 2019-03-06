const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: {
        main: [
            './src/index.js', 
            './src/style/main.scss'
        ]
    },
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
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
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};