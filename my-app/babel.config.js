module.exports = function(api) {
plugins: [
  [
      'react-native-reanimated/plugin',
     {
        globals: ['__labelImage'],
     },
  ],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
