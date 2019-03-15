const contentful = require('contentful');

class Contentful {
  constructor() {
    this.client = contentful.createClient({
      environment: 'master',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      space: process.env.CONTENTFUL_SPACE_ID,
    });
  }

  getContentType(id) {
    return this.client.getContentType(id);
  }

  getEntries(content_type, query = {}) {
    return this.client.getEntries({
      content_type,
      ...query,
    });
  }
}

module.exports = new Contentful();
