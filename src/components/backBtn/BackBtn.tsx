'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import styles from './backBtn.module.scss';

export const BackBtn: FC = () => {
  const router = useRouter();

  return (
    <button className={styles.backBtn} onClick={() => router.back()}>
      Назад к постам
    </button>
  );
};
