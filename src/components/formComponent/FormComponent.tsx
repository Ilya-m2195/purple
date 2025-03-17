'use client';

import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import Form from 'next/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './formComponent.module.scss';
import { API } from '@/api/api';
import { Notification } from '@/components';

interface Props {
  id: string;
}

interface IFormData {
  name: string;
  comment: string;
}

type status = 'success' | 'error';

export const FormComponent: FC<Props> = ({ id }) => {
  const [status, setStatus] = useState<status | ''>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const onSubmit: SubmitHandler<IFormData> = async (data): Promise<void> => {
    try {
      const resp = await fetch(`${API.URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        throw new Error('Ошибка при обновлении поста');
      }

      reset();
      setStatus('success');
    } catch (error) {
      console.error('Ошибка:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <>
      <Form className={styles.form} action={'#'} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={clsx(styles.input, errors.name?.message && styles.errorBorder)}
          type='text'
          placeholder={'Имя'}
          {...register('name', {
            required: 'Обязательное поле',
            minLength: {
              message: 'Имя должно содержать минимум 2 символа',
              value: 2,
            },
            maxLength: {
              message: 'Имя должно содержать максимум 20 символов',
              value: 20,
            },
          })}
        />
        <p className={styles.errorMessage}>{errors.name?.message}</p>
        <textarea
          rows={3}
          className={clsx(
            styles.input,
            styles.textarea,
            errors.comment?.message && styles.errorBorder,
          )}
          placeholder={'Комментарий'}
          {...register('comment', {
            required: 'Обязательное поле',
            maxLength: {
              message: 'Максимум 250 симоволов',
              value: 250,
            },
          })}
        />
        <p className={styles.errorMessage}>{errors.comment?.message}</p>
        <button className={styles.formBtn}>Отправить</button>
      </Form>
      {status && <Notification status={status} />}
    </>
  );
};
