const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('releases', '/releases')
  .add('artist', '/artists/:name')
  .add('release', '/releases/:name')
  .add('admin', '/admin/:page');
