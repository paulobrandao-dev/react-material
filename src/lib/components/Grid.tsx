'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

type SpacingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridSpacingQueries {
  compact?: SpacingSizes;
  medium?: SpacingSizes;
  expanded?: SpacingSizes;
  large?: SpacingSizes;
  xlarge?: SpacingSizes;
}

export interface GridProps<T extends ElementType>
  extends HTMLAttributes<HTMLElement> {
  as?: T;
  gap?: SpacingSizes | GridSpacingQueries;
  gapColumn?: SpacingSizes | GridSpacingQueries;
  gapRow?: SpacingSizes | GridSpacingQueries;
  padding?: SpacingSizes | GridSpacingQueries;
  paddingInline?: SpacingSizes | GridSpacingQueries;
  paddingBlock?: SpacingSizes | GridSpacingQueries;
  fluid?: boolean;
}

export function Grid<T extends ElementType>({
  as,
  gap,
  gapColumn,
  gapRow,
  padding,
  paddingBlock,
  paddingInline,
  className,
  fluid,
  ...props
}: GridProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GridProps<T>>) {
  const ComponentElement = as || 'div';

  return (
    <ComponentElement
      className={clsx('material-grid', className)}
      data-fluid={fluid ? '' : undefined}
      data-gap-compact={typeof gap === 'string' ? gap : gap?.compact}
      data-gap-medium={typeof gap !== 'string' ? gap?.medium : undefined}
      data-gap-expanded={typeof gap !== 'string' ? gap?.expanded : undefined}
      data-gap-large={typeof gap !== 'string' ? gap?.large : undefined}
      data-gap-xlarge={typeof gap !== 'string' ? gap?.xlarge : undefined}
      data-column-gap-compact={
        typeof gapColumn === 'string' ? gapColumn : gapColumn?.compact
      }
      data-column-gap-medium={
        typeof gapColumn !== 'string' ? gapColumn?.medium : undefined
      }
      data-column-gap-expanded={
        typeof gapColumn !== 'string' ? gapColumn?.expanded : undefined
      }
      data-column-gap-large={
        typeof gapColumn !== 'string' ? gapColumn?.large : undefined
      }
      data-column-gap-xlarge={
        typeof gapColumn !== 'string' ? gapColumn?.xlarge : undefined
      }
      data-row-gap-compact={
        typeof gapRow === 'string' ? gapRow : gapRow?.compact
      }
      data-row-gap-medium={
        typeof gapRow !== 'string' ? gapRow?.medium : undefined
      }
      data-row-gap-expanded={
        typeof gapRow !== 'string' ? gapRow?.expanded : undefined
      }
      data-row-gap-large={
        typeof gapRow !== 'string' ? gapRow?.large : undefined
      }
      data-row-gap-xlarge={
        typeof gapRow !== 'string' ? gapRow?.xlarge : undefined
      }
      data-padding-compact={
        typeof padding === 'string' ? padding : padding?.compact
      }
      data-padding-medium={
        typeof padding !== 'string' ? padding?.medium : undefined
      }
      data-padding-expanded={
        typeof padding !== 'string' ? padding?.expanded : undefined
      }
      data-padding-large={
        typeof padding !== 'string' ? padding?.large : undefined
      }
      data-padding-xlarge={
        typeof padding !== 'string' ? padding?.xlarge : undefined
      }
      data-padding-block-compact={
        typeof paddingBlock === 'string' ? paddingBlock : paddingBlock?.compact
      }
      data-padding-block-medium={
        typeof paddingBlock !== 'string' ? paddingBlock?.medium : undefined
      }
      data-padding-block-expanded={
        typeof paddingBlock !== 'string' ? paddingBlock?.expanded : undefined
      }
      data-padding-block-large={
        typeof paddingBlock !== 'string' ? paddingBlock?.large : undefined
      }
      data-padding-block-xlarge={
        typeof paddingBlock !== 'string' ? paddingBlock?.xlarge : undefined
      }
      data-padding-inline-compact={
        typeof paddingInline === 'string'
          ? paddingInline
          : paddingInline?.compact
      }
      data-padding-inline-medium={
        typeof paddingInline !== 'string' ? paddingInline?.medium : undefined
      }
      data-padding-inline-expanded={
        typeof paddingInline !== 'string' ? paddingInline?.expanded : undefined
      }
      data-padding-inline-large={
        typeof paddingInline !== 'string' ? paddingInline?.large : undefined
      }
      data-padding-inline-xlarge={
        typeof paddingInline !== 'string' ? paddingInline?.xlarge : undefined
      }
      {...props}
    />
  );
}
