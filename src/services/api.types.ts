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

export type Response = {
  page: Page;
  characters: Characters[];
};

export type Character = {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  placeOfBirth: string;
  yearOfDeath: number;
  monthOfDeath: number;
  dayOfDeath: number;
  placeOfDeath: string;
  height: number;
  weight: number;
  deceased: boolean;
  bloodType: string;
  maritalStatus: string;
  serialNumber: string;
  hologramActivationDate: string;
  hologramStatus: string;
  hologramDateStatus: string;
  hologram: boolean;
  fictionalCharacter: boolean;
  mirror: boolean;
  alternateReality: boolean;
  performers: [[]];
  episodes: [[]];
  movies: [[]];
  characterSpecies: [[]];
  characterRelations: [[]];
  titles: [[]];
  occupations: [[]];
  organizations: [[]];
};

export type CharacterResponse = {
  character: Character;
};
