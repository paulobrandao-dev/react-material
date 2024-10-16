'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import {
  displayClassNames,
  flexClassNames,
  gapClassNames,
  gridColumnsClassNames,
  spacingClassNames,
} from './commons';
import {
  AttributeQueries,
  DisplayValues,
  FlexAlignProps,
  GapProps,
  GridColumnSize,
  MaxWidthValues,
  SpacingProps,
} from './types';

export type CardProps<T extends ElementType> = HTMLAttributes<HTMLElement> &
  FlexAlignProps &
  GapProps &
  SpacingProps & {
    as?: T;
    variant?: 'elevated' | 'filled' | 'outlined';
    display?: DisplayValues | AttributeQueries<DisplayValues>;
    gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>;
    maxWidth?: MaxWidthValues;
    stateLayer?: boolean;
  };

export function Card<T extends ElementType>({
  as,
  variant = 'elevated',
  display,
  flexDirection,
  alignItems,
  justifyContent,
  margin,
  marginBlock,
  marginInline,
  padding,
  paddingBlock,
  paddingInline,
  gap,
  gapColumn,
  gapRow,
  gridColumns,
  maxWidth,
  stateLayer,
  className,
  ...props
}: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
  const Surface = as || 'div';
  return (
    <Surface
      className={clsx(
        'material-card',
        `variant-${variant}`,
        {
          [`max-width-${maxWidth}`]: maxWidth !== undefined,
          'state-layer': stateLayer,
        },
        displayClassNames(display),
        flexClassNames({ alignItems, flexDirection, justifyContent }),
        spacingClassNames({
          margin,
          marginBlock,
          marginInline,
          padding,
          paddingBlock,
          paddingInline,
        }),
        gapClassNames({ gap, gapColumn, gapRow }),
        gridColumnsClassNames(gridColumns),
        className,
      )}
      {...props}
    />
  );
}
