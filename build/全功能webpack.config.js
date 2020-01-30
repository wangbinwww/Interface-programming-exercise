// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "production", //生产模式
    //mode: "development", // 开发模式
    entry: path.resolve(__dirname, "../src/main.js"), // 入口文件
    entry: ["@babel/polyfill,path.resolve(__dirname,'../src/main.js')"],
    output: {
        //filename: 'main_pub.js', // 打包后的文件名称
        filename: "[name].[hash:8].js", // 打包后的文件名称
        path: path.resolve(__dirname, "../dist") // 打包后的目录
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'] // 从右向左解析原则
            },
            {
                test: /\.less$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                }, 'less-loader'] // 从右向左解析原则
            },
            {
                test: /\.(jpe?g|png|gif)$/i, //图片文件
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'media/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },

        ]
    }
};