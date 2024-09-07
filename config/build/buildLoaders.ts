import { RuleSetRule } from "webpack";

export const buildLoaders = (): RuleSetRule[] => {
  
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    // loader для ts
    typescriptLoader,
  ]
}