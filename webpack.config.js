const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

// entry - primeiro arquivo a ser carregado
// output - pasta onde será gravado o resultado final do processamento do projeto

// webpack.js irá analisar o app.js, detectar suas dependências, gerar os scripts em único bundle (na pasta app/dist) que carregará no navegador

module.exports = { 
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        // caminho absoluto
        clean: true
        // limpa pasta antiga ao gerar outro build
    },
    module: {
        // css-loader - adiciona o css dentro do bundle.js
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerWebpackPlugin()]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}