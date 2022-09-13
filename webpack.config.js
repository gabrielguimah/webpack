const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

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
        // compacta o css
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            //adiciona o minimizer, porém mantém os outros padrões
            '...'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}

// É a nossa aplicação que dita quais módulos devem ser 
// carregados de maneira lazy. É papel do webpack detectar 
// em nossa apliação quais módulos são carregados de maneira 
// lazy para então realizar o code splitting do módulo.