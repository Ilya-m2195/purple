import { FC } from 'react';
import styles from './comments.module.scss';
import { API } from '@/api/api';
import { Title } from '@/components';
import { IComment } from '@/types';

interface Props {
  id: string;
}

const getComments = async (id: string): Promise<Array<IComment> | null> => {
  const data = await fetch(`${API.URL}/comments?postId=${id}`);

  console.log(JSON.stringify(data), 'id');
  if (!data.ok) {
    return null;
  }

  return data.json();
};

export const Comments: FC<Props> = async ({ id }) => {
  const commentsArray = await getComments(id);

  return (
    <>
      <Title Tag={'h3'} className={styles.subTitle}>
        Комментарии
      </Title>
      {commentsArray ? (
        commentsArray.map(el => (
          <Comment
            key={el.id}
            postId={el.postId}
            id={el.id}
            email={el.email}
            name={el.name}
            body={el.body}
          />
        ))
      ) : (
        <p className={styles.comment}>Пока что нет комментариев.</p>
      )}
    </>
  );
};

const Comment: FC<IComment> = ({ name, email, body }) => {
  return (
    <>
      <div className={styles.personalBlock}>
        <span className={styles.name}>{name}</span>
        <div className={styles.dot}></div>
        <span className={styles.timeLine}>{email}</span>
      </div>
      <p className={styles.comment}>{body}</p>
    </>
  );
};
