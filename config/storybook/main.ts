// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: { name: '@storybook/react-webpack5', options: {} },
  webpackFinal: async (cfg) => {
    cfg.resolve ??= {};
    cfg.resolve.plugins ??= [];
    cfg.resolve.plugins.push(new TsconfigPathsPlugin());
    return cfg;
  },
};

export default config;
