'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import { filterProps, flexProperties, spacingProperties } from './commons';
import { FlexAlignProps, SpacingProps } from './types';

export type CardProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  FlexAlignProps &
  SpacingProps & {
    as?: T;
    variant?: 'elevated' | 'filled' | 'outlined';
    flexbox?: boolean;
    grid?: boolean;
  };

export function Card<T extends ElementType>({
  as,
  variant = 'elevated',
  flexbox,
  grid,
  className,
  ...props
}: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
  const ComponentElement = as || 'div';
  return (
    <ComponentElement
      className={clsx(
        `material-card-${variant}`,
        {
          'material-flexbox': !grid && flexbox,
          'material-grid': !flexbox && grid,
        },
        className,
      )}
      {...flexProperties(props)}
      {...spacingProperties(props)}
      {...filterProps(props)}
    />
  );
}
