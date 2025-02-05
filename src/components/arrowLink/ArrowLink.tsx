import { ComponentProps, FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './arrowLink.module.scss';

interface Props extends ComponentProps<'a'> {
  link: string;
  children: ReactNode;
}

export const ArrowLink: FC<Props> = ({ link, children, ...rest }) => {
  return (
    <Link className={styles.link} {...rest} href={link}>
      {children} <Image src={'/arrow.svg'} alt={'стрелка'} height={20} width={20} />
    </Link>
  );
};
