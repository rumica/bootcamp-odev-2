const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");


module.exports = {
    
    entry: "./src/index.js", 
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/bundle.js',
      },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: { 
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              
        ]
    }
}