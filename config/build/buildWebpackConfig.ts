import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {paths, mode, isDev} = options;
  return {
    mode: mode,
    // Точка входа в приложение
    entry: paths?.entry,
    // Выходные файлы сборки
    output: {
      // Генерируем файлы с уникальным хэшем для кэширования
      filename: "[name].[contenthash].js",
      // Путь для сборки проекта
      path: paths?.build,
      // Очищаем папку перед новой сборкой
      clean: true,
    },
    // Подключаем плагины Webpack
    plugins: buildPlugins(options),
    module: {
      // Определяем правила загрузки различных типов файлов
      rules: buildLoaders(options),
    },
    // Настройка резолверов (расширения, алиасы и пр.)
    resolve: buildResolvers(),
    // сможем четко видеть, где в коде произошла ошибка
    devtool: isDev ? "inline-source-map" : undefined,
    // Конфигурация dev-сервера (если режим разработки)
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}