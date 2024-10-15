'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import {
  AttributeQueries,
  ContainerColors,
  DisplayValues,
  FlexAlignProps,
  GapProps,
  GridColumnSize,
  MaxWidthValues,
  ShapeSize,
  SpacingProps,
  TextAlign,
  TextColors,
  TextScales,
} from './types';
import {
  displayClassNames,
  flexClassNames,
  fontScaleClassNames,
  gapClassNames,
  gridColumnsClassNames,
  spacingClassNames,
} from './commons';

export type BoxProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  FlexAlignProps &
  SpacingProps &
  GapProps & {
    as?: T;
    display?: DisplayValues | AttributeQueries<DisplayValues>;
    fontScale?: TextScales | AttributeQueries<TextScales>;
    gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>;
    shape?: ShapeSize;
    containerColor?: ContainerColors;
    textColor?: TextColors;
    textAlign?: TextAlign;
    elevation?: 1 | 2 | 3 | 4 | 5;
    fullWidth?: boolean;
    maxWidth?: MaxWidthValues;
    stateLayer?: boolean;
  };

export function Box<T extends ElementType>({
  as,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
  gap,
  gapColumn,
  gapRow,
  fontScale,
  gridColumns,
  shape,
  containerColor,
  textColor,
  textAlign,
  elevation,
  fullWidth,
  maxWidth,
  stateLayer,
  className,
  ...props
}: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) {
  const Surface = as || 'div';

  return (
    <Surface
      className={clsx(
        className,
        displayClassNames(display),
        flexClassNames({ flexDirection, alignItems, justifyContent }),
        spacingClassNames({
          margin,
          marginBlock,
          marginInline,
          padding,
          paddingBlock,
          paddingInline,
        }),
        gapClassNames({ gap, gapColumn, gapRow }),
        fontScaleClassNames(fontScale),
        gridColumnsClassNames(gridColumns),
        {
          [`shape-${shape}`]: shape !== undefined,
          [`container-color-${containerColor}`]: containerColor !== undefined,
          [`text-color-${textColor}`]: textColor !== undefined,
          [`text-align-${textAlign}`]: textAlign !== undefined,
          [`elevation-${elevation}`]: elevation !== undefined,
          'state-layer': stateLayer,
          [`max-width-${maxWidth}`]: maxWidth !== undefined,
          'full-width': fullWidth,
        },
      )}
      {...props}
    />
  );
}
