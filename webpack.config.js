var webpack = require('webpack');
var path = require('path');
module.exports = {
    mode: 'development',
    context: path.join(__dirname,'src', 'js'),
    entry: {
        notepad : './notepad.js',
    },
    output:{
        path: path.join(__dirname,'dist','js'),
        filename: '[name].bundle.js',
    },
    module: {
        rules:[{
            // test describes which file are quilified for a specific loader
            // we use regular expression here
            test: /\.js$/,//$ specifies .js is the end of the file
            // what directory to include and exclude for loader to work
            include: path.join(__dirname,'src'),
            exclude: path.join(__dirname,'node_modules'),
            use:{
                //name of the loader to use for above specific files
                // babel loader contain jsx loader as well
                loader: 'babel-loader',}
            
        }, {
          test: /\.css$/,//$ specifies .css is the end of the file
            // what directory to include and exclude for loader to work
            include: path.join(__dirname,'src','css'),
            exclude: path.join(__dirname,'node_modules'),
            use:['style-loader', 'css-loader'],
        }]
    },
    devServer: {
        // need to mention the entry point of the application
        // contentBase: path.join(__dirname),
        port:9091,
        //host: '0.0.0.0',
        historyApiFallback : {
            index: 'index.html',
        },
        inline: true,
        https: true,
        open:false,
        publicPath: path.join(__dirname,'dist','js'),
        //stats: 'errors-only',
    },
}