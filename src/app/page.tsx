import { FC } from 'react';
import styles from './mainLayout.module.scss';
import { Card } from '@/components';

const Home: FC = () => {
  return (
    <div className={styles.mainPage}>
      <Card />
    </div>
  );
};

export default Home;
