'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';
import { SpacingProps } from './types';
import { filterProps, spacingProperties } from './commons';

export type FontProps<T extends ElementType> = HTMLAttributes<HTMLSpanElement> &
  SpacingProps & {
    as?: T;
    variant?: 'display' | 'headline' | 'title' | 'body' | 'label';
    scale?: 'large' | 'medium' | 'small';
    color?:
      | 'primary'
      | 'on-primary'
      | 'on-primary-container'
      | 'secondary'
      | 'on-secondary'
      | 'on-secondary-container'
      | 'tertiary'
      | 'on-tertiary'
      | 'on-tertiary-container'
      | 'error'
      | 'on-error'
      | 'on-error-container'
      | 'on-background'
      | 'on-surface'
      | 'on-surface-variant'
      | 'inverse-primary'
      | 'on-inverse-surface';
    textAlign?: 'left' | 'right' | 'center' | 'justify';
  };

export function Font<T extends ElementType>({
  as,
  variant = 'body',
  scale = 'large',
  color,
  textAlign,
  className,
  ...props
}: FontProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FontProps<T>>) {
  const ComponentElement = as || 'span';
  return (
    <ComponentElement
      className={clsx(`material-typography-${variant}-${scale}`, className)}
      data-color={color ?? undefined}
      data-align={textAlign ?? undefined}
      {...spacingProperties(props)}
      {...filterProps(props)}
    />
  );
}
