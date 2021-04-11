module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extensions: [".ts", ".tsx", ".ios.ts", ".android.ts"],
          alias: {
            navigation: "./src/navigation",
            screens: "./src/screens",
            component: "./src/components",
            constants: "./src/constants",
            assets: "./src/assets",
            api: "./src/api",
            action: "./src/redux/action",
            style: "./src/assets/styles",
            types: "./src/types.tsx",
            hooks: "./src/hooks",
            storage: "./src/storage",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
