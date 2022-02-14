const path = require('path');
module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    devtool: 'source-map',
    resolve: {
        extensions: [".jsx", ".js", "..."],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}
