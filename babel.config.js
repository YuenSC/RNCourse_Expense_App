module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@styles": "./styles",
            "@types": "./types",
            "@utils": "./utils",
            "@components": "./components",
          },
        },
      ],
    ],
  };
};
