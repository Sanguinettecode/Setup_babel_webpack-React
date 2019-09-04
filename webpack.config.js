const {resolve} = require('path')
module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bandle.js'
  },
  devServer:{
    contentBase: resolve(__dirname, 'public')
  },
  module: {
    rules: [
      // informa ao webpack , para cada tipo de arquivo, oque ele vai utilizar (Babal -> js *)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 
          { loader: 'style-loader'}, //O style loader serve basicamente para pegar os arquivos css e importalos para o componente pricipal do nosso app 
          { loader: 'css-loader'} // O css-loader serve para que o webpack entenda a sintaxe de importações dentro do arquivo css. como importações de imagens, bibliotecas de terceitos e outros arquivos css com @import
        ]
      },
      {
        test: /.*\.(gif|png|jpg|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
  
}