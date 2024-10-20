'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Box } from './Box';
import { Divider } from './Divider';

export type NavdrawerProps<T extends ElementType> = Omit<
  HTMLAttributes<HTMLElement>,
  'id'
> & {
  id: string;
  as?: T;
  header?: ReactNode;
  standard?: boolean;
};

export function Navdrawer<T extends ElementType>({
  id,
  as,
  header,
  standard,
  children,
  className,
  ...props
}: NavdrawerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof NavdrawerProps<T>>) {
  const Surface = as || 'nav';
  const media = useMediaQuery();

  return (
    <Surface
      className={clsx('material-navdrawer', { standard }, className)}
      id={id}
      popover={
        (standard && media.isLessThanExtraLarge) || !standard ? '' : undefined
      }
      {...props}
    >
      {header && (
        <Box as="header" paddingInline="md">
          {header}
        </Box>
      )}
      <Box as="div" role="presentation" paddingInline="md">
        {children}
      </Box>
    </Surface>
  );
}

export function NavdrawerHeadline({
  text,
  divider,
}: Readonly<{ text: string; divider?: boolean }>) {
  return (
    <Box
      as="div"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      paddingInline="lg"
      className="material-navdrawer-headline"
    >
      {divider && <Divider />}
      <Box
        as="span"
        fontScale="title-small"
        textColor="on-surface-variant"
        paddingBlock="lg"
      >
        {text}
      </Box>
    </Box>
  );
}
