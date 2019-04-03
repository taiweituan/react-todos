const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production';

const VENDER_CHUNK = ['react', 'react-dom', 'react-router-dom'];

module.exports = {
    entry: {
        index: [
            './views/index.js', 
            './views/style/main.scss'
        ],
        vender: VENDER_CHUNK    // code splitting / optimization
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/public')
    },
    optimization: {
        splitChunks:{
            chunks: 'all'
        }
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
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'file-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: __dirname + '/views/index.ejs',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        port: 3002,
        proxy: {
            '/': {
                target:'http://localhost:3001'
            }
        }
    }
};