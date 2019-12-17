const path = require('path');

module.exports = {
    mode: 'development',
    entry: './rsc/js/data.js',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader : 'babel-loader'
        }
      ]
    },

    output: {
    path:path.join(__dirname, 'dist'),
    filename: 'bundle.js'
    }
  };