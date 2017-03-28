module.exports = {
   entry:  "./browser.js",
   output: {
       filename: "public/javascripts/bundle.js"
   },
   module: {
       loaders: [
           {
               exclude: /(node_modules|app.js)/,
               loader: 'babel-loader',
               query: {
                    presets: ['react']
               }
           }]
   },
   node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};