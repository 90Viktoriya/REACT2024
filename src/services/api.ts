import { BASE_URL, FETCH_ERROR, LIMIT_PARAM, PAGE_LIMIT, PAGE_PARAM, SEARCH, UID_PARAM } from './api.constants';
import { Character, CharacterResponse, CharactersResponse } from './api.types';

export class Connection {
  async getCharacters(searchValue: string, currentPage: string): Promise<CharactersResponse | null> {
    try {
      const response = await fetch(`${BASE_URL}${SEARCH}?${PAGE_PARAM}${currentPage}&${LIMIT_PARAM}${PAGE_LIMIT}`, {
        method: 'POST',
        body: new URLSearchParams({
          name: searchValue
        }),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      if (!response.ok) {
        throw new Error(FETCH_ERROR);
      }
      const data: CharactersResponse = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  }

  async getCharacter(uid: string | undefined): Promise<Character | null> {
    try {
      const response = await fetch(`${BASE_URL}?${UID_PARAM}${uid}`, {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(FETCH_ERROR);
      }
      const data: CharacterResponse = await response.json();
      const character = data.character;
      return character;
    } catch (error) {
      return null;
    }
  }
}

export const connection = new Connection();
