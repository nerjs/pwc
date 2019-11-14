const webpackConfig = require('@pw/webpack')

const path = require('path')

module.exports = webpackConfig(
    path.join(__dirname, 'src'),
    'main',
    './index.js',
    path.join(__dirname, 'build'),
)
