const path = require('path')
const CracoLessPlugin = require('craco-less');

const pathResolve = pathnmae => path.resolve(__dirname, pathnmae)

module.exports = {
  webpack: {
    alias: { // 定义路径别名
      "@": pathResolve("src"),
      "componemts": pathResolve("src/components"),
      "utils": pathResolve("src/utils")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1DA57A' },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
}