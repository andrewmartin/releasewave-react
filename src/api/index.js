import axios from 'axios';

class Fetch {
  constructor(opts) {
    const { API_ROOT, headers } = opts;

    this.instance = axios.create();
    this.instance.defaults.baseURL = API_ROOT;

    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    };
  }
}

export default Fetch;
