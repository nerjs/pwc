const path = require('path')
const webpack = require('webpack')
const DotEnv = require('dotenv-webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { NODE_ENV } = process.env

const config = {
    context: path.join(__dirname, 'src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: './js/[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/',
    },

    mode: NODE_ENV,
    watch: NODE_ENV !== 'production',
    devtool: NODE_ENV === 'production' ? false : 'inline-source-map',

    optimization: {
        noEmitOnErrors: true,
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                sourceMap: false,
                uglifyOptions: {
                    compress: {
                        pure_funcs: ['console.log', 'console.warn'],
                    },
                    ie8: false,
                    warnings: false,
                    output: {
                        comments: false,
                        webkit: true,
                        max_line_len: 200,
                    },
                },
                extractComments: {
                    condition: () => '',
                },
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            browsers: 'last 3 versions',
                                        },
                                    },
                                ],
                                '@babel/preset-react',
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread',
                                '@babel/plugin-transform-runtime',
                                [
                                    'babel-plugin-styled-components',
                                    {
                                        displayName: true,
                                        fileName: true,
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        alias: {},
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
        new DotEnv(),
    ],
}

module.exports = config
