const webpackConfig = require('@pw/webpack')
const path = require('path')

module.exports = webpackConfig({
    context: path.join(__dirname, 'src'),
    name: 'main',
    entryPath: './index.js',
    outputPath: path.join(__dirname, 'build'),
    alias: {
        '@comp': path.join(__dirname, 'src', 'components'),
        '@data': path.join(__dirname, 'src', 'data'),
        '@styled': path.join(__dirname, 'src', 'styled'),
        '@hooks': path.join(__dirname, 'src', 'hooks'),
        '@lib': path.join(__dirname, 'src', 'lib'),
    },
})
