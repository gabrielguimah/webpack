const path = require('path')

// entry - primeiro arquivo a ser carregado
// output - pasta onde será gravado o resultado final do processamento do projeto

// webpack.js irá analisar o app.js, detectar suas dependências, gerar os scripts em único bundle (na pasta app/dist) que carregará no navegador

module.exports = { 
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
        // caminho absoluto
    }
}