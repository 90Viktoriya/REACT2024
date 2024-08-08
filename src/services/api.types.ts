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
  titleGerman: string;
  titleItalian: string;
  titleJapanese: string;
  series: Titles[];
  season: Titles[];
  seasonNumber: number;
  episodeNumber: number;
  productionSerialNumber: string;
  featureLength: false;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  usAirDate: string;
  finalScriptDate: string;
};

export type Movies = {
  uid: string;
  title: string;
  mainDirector: {
    uid: string;
    name: string;
  };
  titleBulgarian: string;
  titleCatalan: string;
  titleChineseTraditional: string;
  titleGerman: string;
  titleItalian: string;
  titleJapanese: string;
  titlePolish: string;
  titleRussian: string;
  titleSerbian: string;
  titleSpanish: string;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  usReleaseDate: string;
};

export type Performers = {
  uid: string;
  name: string;
  birthName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  dateOfDeath: string;
  placeOfDeath: string;
  animalPerformer: boolean;
  disPerformer: boolean;
  ds9Performer: boolean;
  entPerformer: boolean;
  filmPerformer: boolean;
  standInPerformer: boolean;
  stuntPerformer: boolean;
  tasPerformer: boolean;
  tngPerformer: boolean;
  tosPerformer: boolean;
  videoGamePerformer: boolean;
  voicePerformer: boolean;
  voyPerformer: boolean;
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
  performers: Performers[];
  episodes: Episodes[];
  movies: Movies[];
};

export type CharacterResponse = {
  character: Character;
};
