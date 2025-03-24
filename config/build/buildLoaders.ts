import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

// Функция для создания массива правил загрузчиков (loaders)
export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const cssLoaders = buildCssLoaders(isDev);

  // Загрузчик для TypeScript файлов
  // Если не используем ts - нужен babel-loader
  const typescriptLoader = {
    // Проверяем файлы с расширением .ts и .tsx
    test: /\.tsx?$/,
    // Используем ts-loader для компиляции TypeScript в JavaScript
    use: 'ts-loader',
    // Исключаем папку node_modules, чтобы ускорить сборку
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    // Добавляем TypeScript загрузчик в массив правил
    typescriptLoader,
    cssLoaders,
  ];
}
