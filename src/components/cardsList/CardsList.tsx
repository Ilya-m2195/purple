import { FC } from 'react';
import styles from './cardsList.module.scss';
import { Card } from '@/components';

interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const getPostsData = async (): Promise<Array<IPost> | null> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

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
          <Card />
        </li>
      ))}
    </ul>
  );
};
