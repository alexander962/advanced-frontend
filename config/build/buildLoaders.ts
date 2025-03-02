import { RuleSetRule } from "webpack";

// Функция для создания массива правил загрузчиков (loaders)
export function buildLoaders(): RuleSetRule[] {

  // Загрузчик для TypeScript файлов
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
  ]
}