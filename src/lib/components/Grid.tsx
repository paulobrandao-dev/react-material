'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import {
  filterProps,
  gapProperties,
  gridProperties,
  spacingProperties,
} from './commons';
import {
  AttributeQueries,
  GapProps,
  GridColumnSize,
  SpacingProps,
} from './types';

export type GridProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  SpacingProps &
  GapProps & {
    as?: T;
    gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>;
    maxWidth?: 'compact' | 'medium' | 'expanded' | 'large';
  };

export function Grid<T extends ElementType>({
  as,
  className,
  gridColumns,
  maxWidth,
  ...props
}: GridProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GridProps<T>>) {
  const ComponentElement = as || 'div';

  return (
    <ComponentElement
      className={clsx('material-grid', className)}
      data-max-width={maxWidth ?? undefined}
      {...spacingProperties(props)}
      {...gapProperties(props)}
      {...(gridColumns ? gridProperties({ query: gridColumns }) : {})}
      {...filterProps(props)}
    />
  );
}
