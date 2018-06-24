let path = require('path');

let conf = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
           {
             test: /\.js$/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
            }
             //exclude: '/node_modules/'
           },
             { test: /\.css$/,
             use: [
                 'style-loader',
                 'css-loader'

             ]
         }
         ]
    },
    devtool:'eval-sourcemap'

};

module.exports = conf;