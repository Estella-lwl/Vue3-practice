const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}

module.exports = {
  //
  publicPath: "./",
  outputDir: "dist",
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("store", resolve("src/store"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("api", resolve("src/api"))
      .set("utils", resolve("src/utils"))
      .set("model", resolve("src/model"))
      .set("config", resolve("src/config"));
    if (process.env.NODE_ENV !== "production") {
      config.output.chunkFilename(`[name].[chunkhash: 8].js`);
      config.output.filename(`[name].[hash].js`);
    }
  },
};
