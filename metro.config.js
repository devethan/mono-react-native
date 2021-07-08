/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

console.log('metro config init start...');

module.exports = {
  projectRoot: path.resolve(__dirname, './'),
  watchFolders: [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, './packages'),
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
