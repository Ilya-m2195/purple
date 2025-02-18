'use client';

import { FC, ReactNode } from 'react';
import { LinkContext } from '@/contexts/LinkContext';

interface Props {
  children: ReactNode;
}

export const LinkProvider: FC<Props> = ({ children }) => {
  return <LinkContext value={'https://github.com/Ilya-m2195'}>{children}</LinkContext>;
};
