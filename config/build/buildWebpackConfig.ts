import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {paths, mode} = options;
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
  }
}