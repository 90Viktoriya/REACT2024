import { useCallback, useState } from 'react';
import { Store } from '../store/store';

export function useLocalStorage() {
  const [searchValue, setSearchValue] = useState<string>(() => Store.getSearchValue());
  const setValue = useCallback((value: string) => {
    setSearchValue(value);
    Store.setSearchValue(value);
  }, []);
  return { searchValue, setValue };
}
