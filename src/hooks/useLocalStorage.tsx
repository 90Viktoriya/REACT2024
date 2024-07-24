import { useState, useEffect } from 'react';
import { Store } from '../store/store';

export function useLocalStorage() {
  const [searchValue, setSearchValue] = useState<string>(() => Store.getSearchValue());
  useEffect(() => {
    if (searchValue === undefined) {
      return;
    }
    Store.setSearchValue(searchValue);
  }, [searchValue]);
  return { searchValue, setSearchValue };
}
