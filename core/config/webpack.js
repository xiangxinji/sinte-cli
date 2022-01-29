const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { cliNodeModules } = require("../../helper/path");

function getConfig({ cwd, mode, sinteConfig }) {
  const join = (p) => path.join(cwd, p);
  const resolve = (p) => path.resolve(cwd, p);
  return {
    target: "web",
    mode,
    entry: resolve("src/main.js"),
    output: {
      path: resolve("dist"),
      filename: "[name].bundle.js",
    },
    resolve: {
      extensions: [".js", ".vue", ".json", ".mjs"],
      alias: {
        "@": resolve("src"),
        vue: path.join(cliNodeModules, "vue"),
      },
      mainFiles: ["index"],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({ template: resolve("public/index.html") }),
    ],
    resolveLoader: {
      modules: [cliNodeModules],
    },
  };
}
module.exports = {
  getConfig,
};
