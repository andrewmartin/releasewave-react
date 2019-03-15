const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const routes = require('./routes');
const nextApp = next({ dev });

// const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const PORT = process.env.PORT || 3000;

const handler = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', require('./api/router'));

  // app.use('/api/data', async (req, res) => {
  //   const data = await getEntries();
  //   res.json(data);
  // });

  app.use(handler);

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
