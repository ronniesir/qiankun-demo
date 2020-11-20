"use strict";
const path = require("path");
const name = require("./package").name;

function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = 7070;
module.exports = {
  // publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    hot: true,
    historyApiFallback: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
