export type HandleOnSearch = (isLoadedValue: boolean) => void;
export type HandleOnDrawItems = (data: []) => void;

export type Animals = {
  uid: string;
  name: string;
  gender: string;
  yearOfBirth: number;
};
