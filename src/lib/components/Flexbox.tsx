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
  ShapeSize,
  SpacingProps,
} from './types';

export type FlexboxProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  SpacingProps &
  GapProps &
  FlexAlignProps & {
    as?: T;
    gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>;
    maxWidth?: 'compact' | 'medium' | 'expanded' | 'large';
    shape?: ShapeSize;
  };

export function Flexbox<T extends ElementType>({
  as,
  gridColumns,
  maxWidth,
  shape,
  className,
  ...props
}: FlexboxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FlexboxProps<T>>) {
  const ComponentElement = as || 'div';
  return (
    <ComponentElement
      className={clsx('material-flexbox', className)}
      data-max-width={maxWidth ?? undefined}
      data-shape={shape ?? undefined}
      {...flexProperties(props)}
      {...spacingProperties(props)}
      {...gapProperties(props)}
      {...(gridColumns ? gridProperties({ query: gridColumns }) : {})}
      {...filterProps(props)}
    />
  );
}
