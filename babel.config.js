module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          animations: './src/animations',
          components: './src/components',
          config: './src/config',
          modules: './src/modules',
          services: './src/services',
          store: './src/store',
          theme: './src/theme',
          helpers: './src/helpers',
        },
      },
    ],
  ],
};
