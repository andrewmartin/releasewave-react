const parsedEnv = require('dotenv').config().parsed;

module.exports = {
  'process.env.CONTENTFUL_API_ROOT': parsedEnv.CONTENTFUL_API_ROOT,
  'process.env.CONTENTFUL_SPACE_ID': parsedEnv.CONTENTFUL_SPACE_ID,
  'process.env.CONTENTFUL_ACCESS_TOKEN': parsedEnv.CONTENTFUL_ACCESS_TOKEN,
  'process.env.API_ROOT': parsedEnv.API_ROOT,
  'process.env.SITE_ROOT': parsedEnv.SITE_ROOT,
  'process.env.GOOGLE_ANALYTICS_ID': parsedEnv.GOOGLE_ANALYTICS_ID,
};
