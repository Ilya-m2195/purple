import { FC, ReactNode } from 'react';
import styles from './customBtn.module.scss';

interface Props {
  count: number;
  Icon?: ReactNode;
}

export const CustomBtn: FC<Props> = ({ count, Icon }) => {
  return (
    <button className={styles.btn}>
      <span className={styles.count}>{count}</span> {Icon && Icon}
    </button>
  );
};
