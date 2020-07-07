module.exports = {
  extends: ['taro/react'],
  rules: {
    semi: [1, "always"],
    'comma-dangle': 0,//末尾逗号
    'max-len': [1, 150],//最大行
    'eqeqeq': 1,
    'prefer-destructuring': ['warn', {
      'object': false,
      'array': false
    }],//只对象推荐解构
    'no-param-reassign': 0,//vuex不兼容
    'import/extensions': 0,
    'func-names': 0,
    'import/no-unresolved': 0,// ...
    'no-plusplus': 0,//没必要禁止
    'no-bitwise': 0,//没必要禁止
    'no-unused-expressions': 0,//三元表达式、逻辑或没必要禁止
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-lonely-if': 0,
    'consistent-return': 0,
    'no-restricted-properties': 0,
    'object-curly-newline': [
      1,
      {
        'ImportDeclaration': 'always'
      }
    ],
    'no-continue': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'import/first': 0
  },
  globals: {
    module: 'readonly'
  },
}
