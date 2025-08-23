import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

// возвращаем список плагинов
export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths?.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // для прокидывания в приложение глобальных переменных
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  // плагин чтобы следить за размером бандла
  plugins.push(new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }));

  // добавляем плагины, нужные только при разработке, чтобы не попали на прод
  if (isDev) {
    // позволяет обновить приложение без обновления страницы
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
