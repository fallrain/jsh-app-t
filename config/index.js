// eslint 注释不要删除
/* eslint-disable import/no-commonjs */
const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
  projectName: 'jsh-app-t',
  date: '2020-7-2',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  onePxTransform: true,
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-sass', // 使用 Sass
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  alias: {
    'jsrc': path.resolve(__dirname, '..', 'src'),
    'root': path.resolve(__dirname, '..', '/'),
    '@/components': path.resolve(__dirname, '..', 'src/components')
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui'],
    webpackChain(chain, webpack) {
      chain.merge({
        plugin: {
          /*install: {
            plugin: require('stylelint-webpack-plugin'),
            args: [{
              files: ['**!/!*.scss'],
              fix: true,
              cache: true,
              emitErrors: true,
              failOnError: false
            }]
          }*/
        }
      });
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
