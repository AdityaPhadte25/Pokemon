const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: "./src/index.js",
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'main.js'
 },
 resolve: {
  extensions: ['.ts', '.js','.jsx','.tsx'],
},
 devServer: {
   port: 3000,
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[hash][ext][query]'
      }
    },
     {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}