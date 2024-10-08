'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import { SpacingProps } from './types';
import { filterProps, spacingProperties } from './commons';

export type GridProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  SpacingProps & {
    as?: T;
    fluid?: boolean;
  };

export function Grid<T extends ElementType>({
  as,
  className,
  fluid,
  ...props
}: GridProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GridProps<T>>) {
  const ComponentElement = as || 'div';

  return (
    <ComponentElement
      className={clsx('material-grid', className)}
      data-fluid={fluid ? '' : undefined}
      {...spacingProperties(props)}
      {...filterProps(props)}
    />
  );
}
