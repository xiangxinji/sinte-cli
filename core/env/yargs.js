const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const schame = yargs(hideBin(process.argv))
  .options("mode", {
    alias: "m",
    type: "string",
    description: "构建环境",
    default: "development",
  })
  .options("serve", {
    type: "boolean",
    default: false,
    description: "是否启用开发服务器",
  });

function resetUserParams(params) {
  params.m = params.mode =
    params.mode === "production" ? params.mode : "development";
  return params;
}

module.exports = resetUserParams(schame.parse());
