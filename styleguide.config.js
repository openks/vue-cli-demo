/* eslint global-require: "off" */
module.exports = {
  components: 'src/lib/*.vue',
  webpackConfig: require('./build/webpack.dev.conf.js'),
  showUsage: true,
  showCode: true,
};
