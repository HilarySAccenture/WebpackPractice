const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { 'main': './wwwroot/source/app.js'},
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'allstyles.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    { 
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    'css-loader'
                ]
            },
            { 
                test: /\.js?$/,
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ] 
                    } 
                }
            },
        ]
    },
    optimization: {
        minimize: true
    }
};