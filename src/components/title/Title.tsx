import { ComponentProps, FC, ReactNode } from 'react';

type TTitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props<T extends TTitleTags> {
  Tag: T;
  children: ReactNode;
}

export const Title: FC<Props<TTitleTags> & ComponentProps<TTitleTags>> = ({
  Tag,
  children,
  ...rest
}) => {
  return <Tag {...rest}>{children}</Tag>;
};
