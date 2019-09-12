const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "production",

    module: {
		strictExportPresence: true,
		rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(ico|gif|png|jpg|svg)(\?.*)?$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 50,
                    name: 'resources/images/[hash].[ext]',
                    mimeType: 'image/[ext]'
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: 'resources/[name]-[contenthash].css'
        })
    ]
};