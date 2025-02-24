'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import GitHubIcon from 'public/gitHubIcon.svg';
import { useGitHubLink } from '@/hooks/useGitHubLink';

export const GitHubLink: FC = () => {
  const url = useGitHubLink();

  return (
    <Link href={url} target={'_blank'}>
      <GitHubIcon />
    </Link>
  );
};
