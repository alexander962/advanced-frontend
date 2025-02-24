import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",
  // точка входа
  entry: path.resolve(__dirname, "src", "index.ts"),
  // указываем куда и как будем собирать приложение
  output: {
    // указываем название
    filename: "[name].[contenthash].js",
    // указываем путь
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    // любая обработка файлов, которые выхолят за рамки js (ts, jpeg, png и так далее)
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config;