module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],

  rules: {
    // правила по ключам - 1 - ворнинг, 2 - правило работает, 3 - правило отключено
    // второй аргумент 2 - колличество отступов
    'react/jsx-indent': [2, 2],
    // отступы для пропсов
    'react/jsx-indent-props': [2, 2],
    // отступы для обычного кода, не jsx
    indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    // отключаем ошибку использования абсолютных путей
    'import/no-unresolved': 'off',
    // отключаем ошибку использования именнового экспорта
    'import/prefer-default-export': 'off',
    // если мы что то объявили но нигде не используем ставим ворнинг
    'no-unused-vars': 'warn',
    // отключаем ошибку обязательного указания дефолтного значения
    'react/require-default-props': 'off',
    // отключаем свойство обязательно прописывания React в компоненте,
    // так как начиная с 17 версии это делать не обязательно
    'react/react-in-jsx-scope': 'off',
    // так как спред оператор для большенства случаев это плохо, то оставим предупреждение
    'react/jsx-props-no-spreading': 'warn',
    // отключаем ошибку, связанную с использованием стрелочных функций
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // отключаем свойства, которое ругается на неиспользование расширений в импорте
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // отключаем запрет на использование нижних подчеркиваний
    'no-underscore-dangle': 'off',
    // делаем, чтобы ругалс на отсутствие переводов только внутри jsx
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
