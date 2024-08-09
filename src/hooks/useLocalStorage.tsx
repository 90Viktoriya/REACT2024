import { useState, useEffect, useDebugValue } from 'react';
import { Store } from '../store/store';

export function useLocalStorage() {
  const [searchValue, setSearchValue] = useState<string>('');
  useDebugValue(searchValue);
  useEffect(() => {
    const value = Store.getSearchValue();
    if (value) {
      setSearchValue(value);
    }
  }, []);

  useEffect(() => {
    Store.setSearchValue(searchValue);
  }, [searchValue]);

  return { searchValue, setSearchValue };
}
