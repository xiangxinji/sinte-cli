#!/usr/bin/env node
const webpack = require("webpack");
const { getConfig: getWebpackConfig } = require("../core/config/webpack");
const userParams = require("../core/env/yargs");
const sinteConfig = require("../core/config/sinte")(userParams);

const cwd = process.cwd();
const mode = sinteConfig.mode;

const webpackConfig = getWebpackConfig({ cwd, mode, sinteConfig });

if (sinteConfig.serve) {
  require("./sinte-cli-serve");
  return 0;
}

// 运行 webpack
webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
