import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options?.port || 3000,
    // автоматически открывает страницу с нашим приложением
    open: true,
    // позволяет нам находясь на любом роуте открывать страницу
    historyApiFallback: true,
    hot: true,
  };
}
