const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#F7362D',
      '@link-color': '#F7362D',
      '@heading-color': '#0D0C22',
      '@text-color': '#0D0C22',
      '@font-size-base': '16px'
    },
  }),
);
