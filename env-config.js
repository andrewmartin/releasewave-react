const parsedEnv = require('dotenv').config().parsed;

module.exports = {
  'process.env.API_ROOT': parsedEnv.API_ROOT,
  'process.env.SITE_ROOT': parsedEnv.SITE_ROOT,
  'process.env.GOOGLE_ANALYTICS_ID': parsedEnv.GOOGLE_ANALYTICS_ID,
};
