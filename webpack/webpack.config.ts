import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const prod = process.env.NODE_ENV === 'production'

const config: webpack.Configuration = {
  context: path.resolve(__dirname, '../'),
  mode: prod ? 'production' : 'development',
  target: prod ? 'browserslist' : 'web', // Necessary for bug: https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-730490759
  entry: path.resolve('src', 'index.tsx'),
  output: {
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}

if (!prod) {
  config.plugins?.push(
    new ReactRefreshWebpackPlugin({ overlay: true }),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config
