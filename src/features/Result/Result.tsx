import { useCallback, useEffect, useState } from 'react';
import { connection } from '../../services/api';
import { Characters } from '../../App.types';
import styles from './Result.module.css';
import { Loader } from '../../components/Loader';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';

export function Result({ searchValue }: { searchValue: string }) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadData = useCallback((): Promise<void> => {
    setIsLoaded(false);
    return connection.search(searchValue, handleOnDrawItems);
  }, [searchValue]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleOnDrawItems = (data: []) => {
    setData(data);
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return <Loader />;
  }
  if (!data.length) {
    return <h2 className={styles.nothing}>{ComponentsCaptions.NOTHING_FOUND}</h2>;
  }
  return (
    <section className={styles.main}>
      {data.map((item: Characters) => (
        <div key={item.uid} className={styles.card}>
          <p className={styles.title}>{item.name}</p>
          <div className={styles.description}>
            <p>
              Gender: <span className={styles.span}>{item.gender ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
            </p>
            <p className={styles.description}>
              Year of birthday:{' '}
              <span className={styles.span}>{item.yearOfBirth ?? ComponentsCaptions.UNKNOWN_VALUE}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
