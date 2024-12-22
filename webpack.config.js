const webpack = require("webpack")
const html = require("html-webpack-plugin")

const port = process.env.PORT || 3000

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[hash].js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new html({
            template: "public/index.html"
        })
    ],
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true
    }
}