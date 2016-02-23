module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'raw-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'raw-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
