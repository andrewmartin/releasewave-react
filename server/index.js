const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const routes = require('./routes');
const nextApp = next({ dev });

// const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const PORT = process.env.PORT || 3002;

const handler = routes.getRequestHandler(nextApp);

// const contentfulApi = require('./api/contentful');

// const getEntries = async () => {
//   try {
//     const data = contentfulApi.get(`/spaces/${SPACE_ID}/environments/master/entries`);
//     return data;
//   } catch (err) {
//     return {};
//   }
// };

nextApp.prepare().then(async () => {
  // const data = await getEntries();

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', require('./api/router'));

  app.use(handler);

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
