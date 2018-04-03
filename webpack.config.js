const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(gif|png|jpg)$/,use:'url-loader?limit=8912'},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
    ],
    mode:'development'
};