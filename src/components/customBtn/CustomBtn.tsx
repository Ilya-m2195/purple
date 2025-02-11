'use client';

import { ComponentProps, FC, ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import styles from './customBtn.module.scss';

interface Props extends ComponentProps<'button'> {
  count?: number;
  Icon?: ReactNode;
  viewType: 'primary' | 'circle';
}

export const CustomBtn: FC<Props> = ({ count, Icon, viewType, ...rest }) => {
  const likeHandler = useCallback(async (id: number): Promise<void> => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
      });
      setIsLike(true);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }, []);

  const [isLike, setIsLike] = useState(false);

  return (
    <button
      disabled={isLike}
      {...rest}
      className={clsx(
        styles.btn,
        viewType === 'circle' && styles.borderBtn,
        isLike && viewType === 'circle' && styles.bgBlack,
      )}
      onClick={() => {
        likeHandler(1);
      }}
    >
      {count && <span className={styles.count}>{count}</span>}
      {Icon && Icon}
    </button>
  );
};
