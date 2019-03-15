import Fetch from './index';

class ApiService {
  constructor() {
    this.localApi = new Fetch({
      API_ROOT: `${process.env.SITE_ROOT}/api/`,
    });

    this.api = new Fetch({
      API_ROOT: process.env.API_ROOT,
    });
  }
}

const service = new ApiService();

export default service;
