import { FC } from 'react';
import styles from './mainLayout.module.scss';
import { CardsList } from '@/components';

const Home: FC = () => {
  return (
    <div className={styles.mainPage}>
      <CardsList />
    </div>
  );
};

export default Home;
