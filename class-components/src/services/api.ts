import { HandleOnDrawItems } from '../App.types';
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

  async search(searchValue: string, callback: HandleOnDrawItems) {
    fetch(`${BASE_URL}?${PAGE_PARAM}${CURRENT_PAGE}&${LIMIT_PARAM}${PAGE_LIMIT}`, {
      method: 'POST',
      body: new URLSearchParams({
        name: searchValue
      }),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.characters);
        callback(data.characters);
      })
      .catch((error) => console.error(error));
  }
}

export const connection = new Connection();
