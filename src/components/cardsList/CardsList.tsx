import { FC } from 'react';
import styles from './cardsList.module.scss';
import { Card } from '@/components';

export const CardsList: FC = () => {
  return (
    <ul className={styles.cardsList}>
      <li className={styles.cardsItem}>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  );
};
