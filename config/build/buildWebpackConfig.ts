import path from "path";
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
    // точка входа
    entry: paths?.entry,
    // указываем куда и как будем собирать приложение
    output: {
      // указываем название
      filename: "[name].[contenthash].js",
      // указываем путь
      path: paths?.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // любая обработка файлов, которые выхолят за рамки js (ts, jpeg, png и так далее)
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    // сможем четко видеть, где в коде произошла ошибка
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}