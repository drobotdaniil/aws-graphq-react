const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    historyApiFallback: true,
    hot: true,
    port: 3007,
    host: 'localhost',
  },
};
