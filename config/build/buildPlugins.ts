import path from 'path';
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from './types/types';

const buildPlugins = ({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] => {
  const isProd = mode === "production";
  const isDev = mode === "development";

  const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({
    template: paths.html,
  })]

  if (isDev) { }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "styles/[id].[contenthash].css",
    }))
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins;
}

export default buildPlugins;