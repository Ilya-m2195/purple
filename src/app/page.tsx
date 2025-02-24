import { FC, Suspense } from 'react';
import styles from './mainLayout.module.scss';
import { CardsList } from '@/components';

const Home: FC = () => {
  return (
    <div className={styles.mainPage}>
      <Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center' }}>Loading...</div>
        }
      >
        <CardsList />
      </Suspense>
    </div>
  );
};

export default Home;
