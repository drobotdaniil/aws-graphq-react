const commonConfig = require('./common.webpack.config');
const devConfig = require('./dev.webpack.config');

const { merge } = require('webpack-merge');

module.exports = (_env, argv) => {
  const { mode } = argv;

  if (mode === 'development') {
    return merge(commonConfig, devConfig);
  }

  return commonConfig;
};
