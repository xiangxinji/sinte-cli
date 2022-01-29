const { merge } = require("webpack-merge");
const DEFAULT_CONFIG = {};

module.exports = (yargsOptions) => {
  return merge(DEFAULT_CONFIG, yargsOptions);
};
