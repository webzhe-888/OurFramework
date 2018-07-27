/**
 * Created by xiaohe on 2018/5/7.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,
    context: path.join(__dirname, '../'),
    entry: {
        app: ['babel-polyfill','./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['es3ify-loader','babel-loader'],
                exclude: /node_modules/
            },
            //图片压缩
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:"img/[name].[hash].[ext]",
                            publicpath:'./'
                        }
                    },{
                        loader: 'image-webpack-loader',
                        options: {

                        }
                    }
                ]
            },
            //处理字体
            {
                test: /\.(eot|otf|woff|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:8192,
                            name:"./font/[name].[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};