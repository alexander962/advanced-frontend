import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

// Функция для создания массива правил загрузчиков (loaders)
export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          [
            "i18next-extract",
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]',
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  // Загрузчик для TypeScript файлов
  // Если не используем ts - нужен babel-loader
  const typescriptLoader = {
    // Проверяем файлы с расширением .ts и .tsx
      test: /\.tsx?$/,
    // Используем ts-loader для компиляции TypeScript в JavaScript
      use: 'ts-loader',
    // Исключаем папку node_modules, чтобы ускорить сборку
      exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    // Добавляем TypeScript загрузчик в массив правил
    typescriptLoader,
    cssLoaders
  ]
}