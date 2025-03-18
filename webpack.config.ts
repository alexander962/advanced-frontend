import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

// Экспортируем функцию, которая принимает переменные окружения (env)
export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    // Путь к точке входа приложения
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    // Путь для сборки проекта
    build: path.resolve(__dirname, 'build'),
    // Путь к HTML-шаблону
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3001;

  const isDev = mode === 'development';

  // Создаем конфигурацию Webpack, передавая необходимые параметры
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
