import { useContext } from 'react';
import { LinkContext } from '@/contexts/LinkContext';

export const useGitHubLink = (): string => {
  const link = useContext(LinkContext);

  if (!link) {
    throw new Error('useGitHubLink must be used within the context');
  }

  return link;
};
