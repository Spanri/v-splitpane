module.exports = {
  chainWebpack: (config) => {
    config.entryPoints.delete("app");

    config
      .entry("example")
      .add("./src/example/index.ts")
      .end();
  },
};
