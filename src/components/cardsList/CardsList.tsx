import { FC } from 'react';
import styles from './cardsList.module.scss';
import { API } from '@/api/api';
import { Card } from '@/components';
import { IPost } from '@/types';

const getPostsData = async (): Promise<Array<IPost> | null> => {
  const data = await fetch(`${API.URL}/posts?_limit=5`);

  if (!data.ok) {
    return null;
  }

  return data.json();
};

export const CardsList: FC = async () => {
  const data = await getPostsData();

  if (!data) {
    return <div>Посты не найдены</div>;
  }

  return (
    <ul className={styles.cardsList}>
      {data.map(post => (
        <li className={styles.cardsItem} key={post.id}>
          <Card id={post.id} />
        </li>
      ))}
    </ul>
  );
};
