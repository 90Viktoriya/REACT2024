import { Result } from '../Result/Result';
import { Search } from '../Search/Search';
import styles from './Main.module.css';
import { CharacterResponse, CharactersResponse } from '../../services/api.types';
import { DetailedCard } from '../DetailedCard/DetailedCard';

export function Main({ data, details }: { data: CharactersResponse; details: CharacterResponse | null }) {
  // const navigate = useNavigate();
  // const location = useLocation();
  //const isDetailed = useMemo(() => location.pathname.includes(RouterPath.DETAILS), [location.pathname]);

  /*const handleOnClick: MouseEventHandler = useCallback(
    (event) => {
      if (event.currentTarget instanceof HTMLElement && event.currentTarget === event.target && isDetailed) {
        navigate(location.pathname.slice(0, location.pathname.indexOf(RouterPath.DETAILS)));
      }
    },
    [isDetailed, location.pathname, navigate]
  );*/
  console.log(data);
  console.log(details);
  const handleOnClick = () => {};

  return (
    <section className={styles.main}>
      <div className={details ? styles.left : styles.center} onClick={handleOnClick}>
        <Search />
        <Result data={data} />
      </div>
      {details && <DetailedCard details={details} />}
    </section>
  );
}
