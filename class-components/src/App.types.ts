export type HandleOnValueChange = (searchValue: string) => void;
export type HandleOnDrawItems = (data: []) => void;

export type Characters = {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
};
