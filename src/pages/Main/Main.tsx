import { Search } from '../../features/Search/Search';
import { Result } from '../../features/Result/Result';
import { Outlet, useNavigation, useParams } from 'react-router-dom';
import styles from './Main.module.css';
import { Loader } from '../../components/Loader';

export function Main({ searchValue }: { searchValue: string }) {
  const navigation = useNavigation();
  const { uid: currentUID } = useParams();
  if (navigation.state === 'loading' && !currentUID) {
    return <Loader />;
  }
  return (
    <>
      <h1>Characters of Star Trek</h1>
      <section className={styles.main}>
        <section className={currentUID ? styles.left : styles.center}>
          <Search searchValue={searchValue} />
          <Result />
        </section>
        <Outlet />
      </section>
    </>
  );
}
