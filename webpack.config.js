module.exports = {
  // other webpack configuration options...
  externals: {
      'mock-aws-s3': 'commonjs mock-aws-s3',
      'aws-sdk': 'commonjs aws-sdk',
      'nock': 'commonjs nock'
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            use: 'html-loader'
        }
    ]
}
};