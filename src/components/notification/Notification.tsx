import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './notification.module.scss';

interface Props {
  status: 'success' | 'error';
}

export const Notification: FC<Props> = ({ status }) => {
  const isSuccess = status === 'success';

  return (
    <div
      className={clsx(
        styles.wrapper,
        isSuccess ? styles.successWrapper : styles.errorWrapper,
      )}
    >
      {isSuccess ? 'Данные отправлены!' : 'Что-то пошло не так!'}
    </div>
  );
};
