'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import { FlexAlignProps, SpacingProps } from './types';
import { filterProps, flexProperties, spacingProperties } from './commons';

export type FlexboxProps<T extends ElementType> =
  HTMLAttributes<HTMLElement> & { as?: T } & SpacingProps & FlexAlignProps;

export function Flexbox<T extends ElementType>({
  as,
  className,
  ...props
}: FlexboxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FlexboxProps<T>>) {
  const ComponentElement = as || 'div';
  return (
    <ComponentElement
      className={clsx('material-flexbox', className)}
      {...flexProperties(props)}
      {...spacingProperties(props)}
      {...filterProps(props)}
    />
  );
}
