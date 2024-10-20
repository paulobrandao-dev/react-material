'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { Box } from './Box';

export type NavrailProps<T extends ElementType> =
  HTMLAttributes<HTMLElement> & {
    as?: T;
    hideOnExtraLarge?: boolean;
    startNode?: ReactNode;
    endNode?: ReactNode;
    containerColor?:
      | 'primary'
      | 'primary-container'
      | 'secondary'
      | 'secondary-container'
      | 'tertiary'
      | 'tertiary-container'
      | 'inverse-surface';
  };

export function Navrail<T extends ElementType>({
  as,
  hideOnExtraLarge,
  startNode,
  endNode,
  containerColor,
  className,
  children,
  ...props
}: NavrailProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavrailProps<T>>) {
  const Surface = as || 'nav';

  return (
    <Surface
      className={clsx(
        'material-navrail',
        {
          [`container-color-${containerColor}`]: containerColor !== undefined,
          'hide-on-xlarge': hideOnExtraLarge,
        },
        className,
      )}
      {...props}
    >
      {startNode && (
        <Box
          as="div"
          role="toolbar"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          {startNode}
        </Box>
      )}
      <Box
        as="div"
        role="presentation"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="md"
      >
        {children}
      </Box>
      {endNode && (
        <Box
          as="div"
          role="toolbar"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
        >
          {endNode}
        </Box>
      )}
    </Surface>
  );
}
