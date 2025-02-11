import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Like from 'public/like.svg';
import styles from './card.module.scss';
import { Title, CustomBtn, ArrowLink } from '@/components';

const CARD_TITLE = 'Как работать с CSS Grid';

export const Card: FC = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={'/cardImg.png'}
            alt={'карточка'}
            width={300}
            height={192}
            loading={'lazy'}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoWrapper}>
            <Title Tag={'h6'} className={styles.jobTitle}>
              Front-end
            </Title>
            <div className={styles.dot}> </div>
            <span className={styles.timeLine}>1 месяц назад</span>
          </div>
          <CustomBtn count={4} Icon={<Like />} viewType={'primary'} />
        </div>

        <Title className={styles.title} Tag={'h2'}>
          {CARD_TITLE}
        </Title>
        <p className={styles.description}>
          <Link href='#'>Грид-раскладка (CSS Grid Layout)</Link> представляет собой
          двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей
          страницы..
        </p>
        <div className={styles.timeLinkContainer}>
          <span className={styles.timeLine}>3 минуты</span>
          <ArrowLink link={'#'}>Читать</ArrowLink>
        </div>
      </div>
      <CustomBtn Icon={<Like />} viewType={'circle'} />
    </>
  );
};
