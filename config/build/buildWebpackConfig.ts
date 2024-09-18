import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: {
      RANDOM: paths.entry,
    },
    // указываем куда и как будем делать сборку приложения
    output: {
      // хеширование файлов
      filename: "[name].[contenthash].js",
      path: paths.build,
      // чтобы подчищать ненужные файлы
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // конфигурируем лоэдеры, они обрабатывают файлы, которые выходят за рамки js
      // png, jpeg, svg, css, scss, ts и другие
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    // сможем четко видеть, где в коде произошла ошибка
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
