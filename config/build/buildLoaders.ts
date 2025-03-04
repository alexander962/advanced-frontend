import { RuleSetRule } from "webpack";

// Функция для создания массива правил загрузчиков (loaders)
export function buildLoaders(): RuleSetRule[] {

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
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

  return [
    // Добавляем TypeScript загрузчик в массив правил
    typescriptLoader,
    cssLoaders
  ]
}