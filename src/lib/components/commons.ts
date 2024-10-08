'use client';

import { ComponentPropsWithoutRef, ElementType } from 'react';
import { FlexAlignProps, SpacingProps } from './types';

const SPACING_PROPS = [
  'gap',
  'gapColumn',
  'gapRow',
  'padding',
  'paddingBlock',
  'paddingInline',
  'margin',
  'marginBlock',
  'marginInline',
];

const FLEX_PROPS = ['flexDirection', 'alignItems', 'justifyContent'];

export function filterProps<T extends ElementType>(
  props: ComponentPropsWithoutRef<T>,
) {
  return Object.keys(props).reduce((result, current) => {
    if (![...FLEX_PROPS, ...SPACING_PROPS].includes(current)) {
      return { ...result, [current]: props[current] };
    }
    return result;
  }, {});
}

export function spacingProperties({
  gap,
  gapColumn,
  gapRow,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
}: SpacingProps) {
  return {
    'data-gap-compact': typeof gap === 'string' ? gap : gap?.compact,
    'data-gap-medium': typeof gap !== 'string' ? gap?.medium : undefined,
    'data-gap-expanded': typeof gap !== 'string' ? gap?.expanded : undefined,
    'data-gap-large': typeof gap !== 'string' ? gap?.large : undefined,
    'data-gap-xlarge': typeof gap !== 'string' ? gap?.xlarge : undefined,
    'data-column-gap-compact':
      typeof gapColumn === 'string' ? gapColumn : gapColumn?.compact,
    'data-column-gap-medium':
      typeof gapColumn !== 'string' ? gapColumn?.medium : undefined,
    'data-column-gap-expanded':
      typeof gapColumn !== 'string' ? gapColumn?.expanded : undefined,
    'data-column-gap-large':
      typeof gapColumn !== 'string' ? gapColumn?.large : undefined,
    'data-column-gap-xlarge':
      typeof gapColumn !== 'string' ? gapColumn?.xlarge : undefined,
    'data-row-gap-compact':
      typeof gapRow === 'string' ? gapRow : gapRow?.compact,
    'data-row-gap-medium':
      typeof gapRow !== 'string' ? gapRow?.medium : undefined,
    'data-row-gap-expanded':
      typeof gapRow !== 'string' ? gapRow?.expanded : undefined,
    'data-row-gap-large':
      typeof gapRow !== 'string' ? gapRow?.large : undefined,
    'data-row-gap-xlarge':
      typeof gapRow !== 'string' ? gapRow?.xlarge : undefined,
    'data-padding-compact':
      typeof padding === 'string' ? padding : padding?.compact,
    'data-padding-medium':
      typeof padding !== 'string' ? padding?.medium : undefined,
    'data-padding-expanded':
      typeof padding !== 'string' ? padding?.expanded : undefined,
    'data-padding-large':
      typeof padding !== 'string' ? padding?.large : undefined,
    'data-padding-xlarge':
      typeof padding !== 'string' ? padding?.xlarge : undefined,
    'data-padding-block-compact':
      typeof paddingBlock === 'string' ? paddingBlock : paddingBlock?.compact,
    'data-padding-block-medium':
      typeof paddingBlock !== 'string' ? paddingBlock?.medium : undefined,
    'data-padding-block-expanded':
      typeof paddingBlock !== 'string' ? paddingBlock?.expanded : undefined,
    'data-padding-block-large':
      typeof paddingBlock !== 'string' ? paddingBlock?.large : undefined,
    'data-padding-block-xlarge':
      typeof paddingBlock !== 'string' ? paddingBlock?.xlarge : undefined,
    'data-padding-inline-compact':
      typeof paddingInline === 'string'
        ? paddingInline
        : paddingInline?.compact,
    'data-padding-inline-medium':
      typeof paddingInline !== 'string' ? paddingInline?.medium : undefined,
    'data-padding-inline-expanded':
      typeof paddingInline !== 'string' ? paddingInline?.expanded : undefined,
    'data-padding-inline-large':
      typeof paddingInline !== 'string' ? paddingInline?.large : undefined,
    'data-padding-inline-xlarge':
      typeof paddingInline !== 'string' ? paddingInline?.xlarge : undefined,
    'data-margin-compact':
      typeof margin === 'string' ? margin : margin?.compact,
    'data-margin-medium':
      typeof margin !== 'string' ? margin?.medium : undefined,
    'data-margin-expanded':
      typeof margin !== 'string' ? margin?.expanded : undefined,
    'data-margin-large': typeof margin !== 'string' ? margin?.large : undefined,
    'data-margin-xlarge':
      typeof margin !== 'string' ? margin?.xlarge : undefined,
    'data-margin-block-compact':
      typeof marginBlock === 'string' ? marginBlock : marginBlock?.compact,
    'data-margin-block-medium':
      typeof marginBlock !== 'string' ? marginBlock?.medium : undefined,
    'data-margin-block-expanded':
      typeof marginBlock !== 'string' ? marginBlock?.expanded : undefined,
    'data-margin-block-large':
      typeof marginBlock !== 'string' ? marginBlock?.large : undefined,
    'data-margin-block-xlarge':
      typeof marginBlock !== 'string' ? marginBlock?.xlarge : undefined,
    'data-margin-inline-compact':
      typeof marginInline === 'string' ? marginInline : marginInline?.compact,
    'data-margin-inline-medium':
      typeof marginInline !== 'string' ? marginInline?.medium : undefined,
    'data-margin-inline-expanded':
      typeof marginInline !== 'string' ? marginInline?.expanded : undefined,
    'data-margin-inline-large':
      typeof marginInline !== 'string' ? marginInline?.large : undefined,
    'data-margin-inline-xlarge':
      typeof marginInline !== 'string' ? marginInline?.xlarge : undefined,
  };
}

export function flexProperties({
  flexDirection,
  alignItems,
  justifyContent,
}: FlexAlignProps) {
  return {
    'data-direction-compact':
      typeof flexDirection === 'string'
        ? flexDirection
        : flexDirection?.compact,
    'data-direction-medium':
      typeof flexDirection !== 'string' ? flexDirection?.medium : undefined,
    'data-direction-expanded':
      typeof flexDirection !== 'string' ? flexDirection?.expanded : undefined,
    'data-direction-large':
      typeof flexDirection !== 'string' ? flexDirection?.large : undefined,
    'data-direction-xlarge':
      typeof flexDirection !== 'string' ? flexDirection?.xlarge : undefined,
    'data-align-items-compact':
      typeof alignItems === 'string' ? alignItems : alignItems?.compact,
    'data-align-items-medium':
      typeof alignItems !== 'string' ? alignItems?.medium : undefined,
    'data-align-items-expanded':
      typeof alignItems !== 'string' ? alignItems?.expanded : undefined,
    'data-align-items-large':
      typeof alignItems !== 'string' ? alignItems?.large : undefined,
    'data-align-items-xlarge':
      typeof alignItems !== 'string' ? alignItems?.xlarge : undefined,
    'data-justify-content-compact':
      typeof justifyContent === 'string'
        ? justifyContent
        : justifyContent?.compact,
    'data-justify-content-medium':
      typeof justifyContent !== 'string' ? justifyContent?.medium : undefined,
    'data-justify-content-expanded':
      typeof justifyContent !== 'string' ? justifyContent?.expanded : undefined,
    'data-justify-content-large':
      typeof justifyContent !== 'string' ? justifyContent?.large : undefined,
    'data-justify-content-xlarge':
      typeof justifyContent !== 'string' ? justifyContent?.xlarge : undefined,
  };
}
