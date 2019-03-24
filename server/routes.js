const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('releases', '/releases')
  .add('artists', '/artists')
  .add('artist', '/artists/:name')
  .add('release', '/releases/:name')
  .add('admin/releases', '/admin/releases/:name')
  .add('admin/artists', '/admin/artists/:name');
