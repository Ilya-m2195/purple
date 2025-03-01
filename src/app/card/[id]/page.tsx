import { FC } from 'react';
import Image from 'next/image';
import Like from 'public/like.svg';
import styles from './page.module.scss';
import { BackBtn, Comments, CustomBtn, FormComponent, Title } from '@/components';
import { CARD_TITLE } from '@/constants';
import { IPost } from '@/types';

interface Props {
  params: Promise<{ id: string }>;
}

const getPostData = async (id: string): Promise<IPost | null> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!data.ok) {
    return null;
  }

  return data.json();
};

const CardPage: FC<Props> = async ({ params }: Props) => {
  const cardId = (await params).id;
  const postData = await getPostData(cardId);

  return (
    <>
      <BackBtn />
      <Title Tag={'h2'} className={styles.title}>
        {CARD_TITLE} (Пост c id = {postData?.id})
      </Title>
      <div className={styles.infoContainer}>
        <div className={styles.infoWrapper}>
          <Title Tag={'h3'} className={styles.jobTitle}>
            Front-end
          </Title>
          <div className={styles.dot}></div>
          <span className={styles.timeLine}>1 месяц назад</span>
          <div className={styles.dot}></div>
          <span className={styles.timeLine}>3 минуты</span>
          <div className={styles.dot}></div>
          <CustomBtn viewType={'primary'} Icon={<Like />} count={4} />
        </div>
      </div>
      <Image
        className={styles.img}
        src={'/cardImg.png'}
        alt={'card'}
        width={687}
        height={440}
      />
      <p className={styles.description}>
        Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS.
        Гриды подойдут и для верстки основных областей страницы, и небольших элементов
        пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке
        и новой терминологии, которая является частью спецификации CSS Grid Layout Level
        1. Более подробно показанные возможности будут описаны описаны далее в
        руководстве.
      </p>
      <Title Tag={'h3'} className={styles.subTitle}>
        Что такое грид?
      </Title>
      <p className={styles.description}>
        Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий,
        образующих колонки и строки. Элементы могут быть помещены в грид в пределах линий
        этих колонок и строк. Грид имеет следующие особенности:
      </p>
      <div className={styles.likeBlock}>
        <span>Понравилось? Жми </span> <CustomBtn Icon={<Like />} viewType={'circle'} />
      </div>
      <Comments id={cardId} />
      <FormComponent id={cardId} />
    </>
  );
};

export default CardPage;
