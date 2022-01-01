const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode } = { mode: 'production' }) => {
    console.log(`mode is: ${mode}`)

    return {
        mode,
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts'],
        },
        module: {
            rules: [
                {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ['url-loader', 'file-loader'],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
    }
}
