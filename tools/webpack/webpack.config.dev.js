module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,

    // SPA Routing Setting
    historyApiFallback: { index: "/", disableDotRule: true },
    
    // Dev middleware configuration
    devMiddleware: {
      stats: 'errors-warnings',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
