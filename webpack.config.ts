import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: {
    RANDOM: path.resolve(__dirname, 'src', 'index.ts'),
  },
  // указываем куда и как будем делать сборку приложения
  output: {
    // хеширование файлов
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'build'),
    // чтобы подчищать ненужные файлы
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    // конфигурируем лоэдеры, они обрабатывают файлы, которые выходят за рамки js
    // png, jpeg, svg, css, scss, ts и другие
    rules: [
      // loader для ts
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