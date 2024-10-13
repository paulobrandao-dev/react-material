'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import {
  filterProps,
  flexProperties,
  gapProperties,
  gridProperties,
  spacingProperties,
} from './commons';
import {
  AttributeQueries,
  FlexAlignProps,
  GapProps,
  GridColumnSize,
  SpacingProps,
} from './types';

export type CardProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  FlexAlignProps &
  GapProps &
  SpacingProps & {
    as?: T;
    variant?: 'elevated' | 'filled' | 'outlined';
    flexbox?: boolean;
    grid?: boolean;
    gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>;
    maxWidth?: 'compact' | 'medium' | 'expanded' | 'large';
  };

export function Card<T extends ElementType>({
  as,
  variant = 'elevated',
  flexbox,
  grid,
  gridColumns,
  maxWidth,
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
      data-max-width={maxWidth ?? undefined}
      {...flexProperties(props)}
      {...spacingProperties(props)}
      {...gapProperties(props)}
      {...(gridColumns ? gridProperties({ query: gridColumns }) : {})}
      {...filterProps(props)}
    />
  );
}
