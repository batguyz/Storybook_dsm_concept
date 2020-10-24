const DiezWebpackPlugin = require('diez-webpack-plugin');
// Only necessary if you are hosting your Diez project in the same repo:
const { join, resolve } = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new DiezWebpackPlugin({
        sdk: 'diez-my-project',
        // Only necessary if you are hosting your Diez project in the same repo:
        // Denote the relative path to your Diez project. Shown below as a
        // sibling to your application.
        projectPath: join(resolve(__dirname, '..'), 'my-project'),
      }),
    ],
  },
};