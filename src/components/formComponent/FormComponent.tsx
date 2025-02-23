import { FC } from 'react';
import clsx from 'clsx';
import Form from 'next/form';
import styles from './formComponent.module.scss';

export const FormComponent: FC = () => {
  return (
    <Form className={styles.form} action={'#'}>
      <input className={styles.input} type='text' placeholder={'Имя'} />
      <textarea
        rows={3}
        className={clsx(styles.input, styles.textarea)}
        maxLength={250}
        placeholder={'Комментарий'}
      />
      <button className={styles.formBtn}>Отправить</button>
    </Form>
  );
};
