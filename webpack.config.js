const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

let landing = {
  mode: "development",
  watch: true,
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'public/dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './node_modules/bootstrap/dist/', to: './vendors/bootstrap' },
        { from: './node_modules/typeface-quicksand/files/', to: './vendors/typeface-quicksand' },
        { from: './node_modules/@fortawesome/fontawesome-free/', to: './vendors/fontawesome-free' },
      ]
    })
  ]
};

module.exports = [
  landing
];
  