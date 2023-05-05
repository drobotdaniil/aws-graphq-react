const path = require('path');

module.exports = {
  devtool: 'eval',

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    hot: true,
    port: 3007,
    host: 'localhost',
  },
};
