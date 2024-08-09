export const details = {
  uid: 'test12',
  name: 'Detailed card test',
  gender: '',
  yearOfBirth: 0,
  placeOfBirth: 'test',
  yearOfDeath: 0,
  performers: [{ uid: 'qwe', dateOfBirth: '2024', name: 'sd', placeOfBirth: 'aaa' }],
  episodes: [{ uid: 'asd', title: 'qqq', episodeNumber: 3 }],
  movies: [{ uid: 'zxc', title: 'qqq', usReleaseDate: '102' }]
};

export const page = {
  pageNumber: 1,
  pageSize: 1,
  numberOfElements: 1,
  totalElements: 1,
  totalPages: 1,
  firstPage: true,
  lastPage: false
};

export const characters = [
  {
    uid: 'ts',
    name: 'Character1',
    gender: 'M',
    yearOfBirth: 2024
  },
  {
    uid: 'ts2',
    name: 'aaa2',
    gender: 'F',
    yearOfBirth: 2024
  }
];

export const data = {
  page,
  characters
};
