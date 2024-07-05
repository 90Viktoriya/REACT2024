import { BASE_URL, CURRENT_PAGE, LIMIT_PARAM, PAGE_LIMIT, PAGE_PARAM } from './api.constants';

export class Connection {
  async getResult() {
    const response = await fetch(`${BASE_URL}?${PAGE_PARAM}${CURRENT_PAGE}&${LIMIT_PARAM}${PAGE_LIMIT}`, {
      method: 'GET'
    });
    response
      .json()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
}

export const connection = new Connection();
