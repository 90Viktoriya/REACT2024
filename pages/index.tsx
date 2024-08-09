import { useEffect, useState } from 'react';
import type { GetServerSidePropsContext } from 'next';

import styles from '../src/pages/MainPage/MainPage.module.css';
import { Loader } from '../src/components/Loader/Loader';
import { useAppSelector } from '../src/hooks/ReduxHooks';
import { Flyout } from '../src/features/Flyout/Flyout';
import { ComponentsCaptions } from '../src/data/ComponentsCaptions';
import { SwitchThemeButton } from '../src/features/Theme/SwitchThemeButton/SwitchThemeButton';
import { useTheme } from '../src/hooks/useTheme';
import { Main } from '../src/features/Main/Main';
import { connection } from '../src/services/api';
import { Character, CharactersResponse } from '../src/services/api.types';
import getFirstValue from '../src/utils/getFirstValue';
import Router, { useRouter } from 'next/router';

function Page({ data, details }: { data: CharactersResponse | null; details: Character | null }) {
  const { isDark } = useTheme();
  const selectedCount = useAppSelector((state) => state.selector.count);
  const router = useRouter();
  const isDetails = !!router.query.details;

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    if (!isDetails) {
      Router.events.on('routeChangeStart', start);
    }
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [isDetails]);

  if (isLoading || !data) {
    return (
      <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={`${isDark ? styles.dark : styles.light} ${styles.wrapper}`}>
      <div className={`${styles.top}`}>
        <section className={`${styles.header}`}>
          <h1>{ComponentsCaptions.TITLE}</h1>
          <SwitchThemeButton />
        </section>
        <Main data={data} details={details} />
      </div>
      {!!selectedCount && <Flyout />}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const searchValue = context.query.search ? getFirstValue(context.query.search) : '';
  const page = context.query.page ? getFirstValue(context.query.page) : '0';
  const detailsUid = context.query.details ? getFirstValue(context.query.details) : '';
  const data = await connection.getCharacters(searchValue, page);
  if (detailsUid) {
    const details = await connection.getCharacter(detailsUid);
    return {
      props: {
        data,
        details
      }
    };
  }

  return { props: { data, details: null } };
}

export default Page;
