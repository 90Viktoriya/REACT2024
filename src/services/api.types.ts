export type Characters = {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
};
export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};
export type Titles = {
  uid: string;
  title: string;
};

export type CharactersResponse = {
  page: Page;
  characters: Characters[];
};
export type Episodes = {
  uid: string;
  title: string;
  episodeNumber: number;
};

export type Movies = {
  uid: string;
  title: string;
  usReleaseDate: string;
};

export type Performers = {
  uid: string;
  name: string;
  dateOfBirth: string;
  placeOfBirth: string;
};

export type Character = {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
  placeOfBirth: string;
  yearOfDeath: number;
  performers: Performers[];
  episodes: Episodes[];
  movies: Movies[];
};

export type CharacterResponse = {
  character: Character;
};
