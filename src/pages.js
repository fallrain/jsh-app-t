const pages = [
  'pages/views/index/index',
  'pages/containers/login/LoginContainer'
];

if (process.env.NODE_ENV === 'development') {
  pages.unshift('pages/views/nav/index');
}
module.exports= pages;
