module.exports = {
  presets: [
    "@babel/preset-env", //Resp. por alterar as funcionalidades do js que o browser nao entende
    "@babel/preset-react" // Transforma as coisas que o browser nao entende do react como o jsx por ex.
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}