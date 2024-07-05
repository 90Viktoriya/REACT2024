import { SEARCH_KEY } from './store.constants';

export class Store {
  static setSearchValue(searchValue: string) {
    localStorage.setItem(SEARCH_KEY, JSON.stringify(searchValue));
  }
  static getSearchValue() {
    return JSON.parse(localStorage.getItem(SEARCH_KEY) || '[]');
  }
}
