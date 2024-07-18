import { ReactNode } from 'react';

type KeysWithReactValues<T> = {
  [K in keyof T]: T[K] extends ReactNode ? K : never;
}[keyof T];

export type ListItem = {
  uid: string;
};

type DetailsItem<T> = {
  title: string;
  key: KeysWithReactValues<T>;
};

export type DetailsBlockProps<T extends ListItem> = {
  title: string;
  itemsList: T[];
  detailsList: DetailsItem<T>[];
};
