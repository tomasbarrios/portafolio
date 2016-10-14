var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// let extractSCSS = new ExtractTextPlugin('styles/test.scss');

var webpackConfig = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {

  webpackConfig = merge(webpackConfig,{
    devtool: "source-map",
    entry : [
      './src/client/index.js'
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') }
    ]},
    plugins : [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]  
  });

}else{

  webpackConfig = merge(webpackConfig,{
    devtool: 'inline-source-map',
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          optional: ['runtime'],
          stage: 2,
          env: {
            development: {
              plugins: [
                'react-transform'
              ],
              extra: {
                'react-transform': {
                  transforms: [{
                    transform:  'react-transform-hmr',
                    imports: ['react'],
                    locals:  ['module']
                  }]
                }
              }
            }
          }
        }
      },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      
      // { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      // Loader (otro plugin)
      // { test: /\.scss$/, loader: extractSCSS.extract(['css','sass']) }
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass?sourceMap' ] }
      
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') }
      // { test: /\.css$/, loader: 'style-loader!css-loader' } 
    ]},
    entry : [
      'webpack-hot-middleware/client',
      './src/client/index.js'
    ],
    // sassLoader: {
    //     includePaths: [ 'client/style' ]
    // },
    plugins : [
      new webpack.HotModuleReplacementPlugin()
      // extractSCSS,

    ]  
  });
  
}

module.exports = webpackConfig;