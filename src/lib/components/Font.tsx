'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

export interface FontProps<T extends ElementType>
  extends HTMLAttributes<HTMLSpanElement> {
  as?: T;
  variant?: 'display' | 'headline' | 'title' | 'body' | 'label';
  scale?: 'large' | 'medium' | 'small';
  color?:
    | 'inherit'
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
  textAlign?: 'inherit' | 'left' | 'right' | 'center' | 'justify';
}

export function Font<T extends ElementType>({
  as,
  variant = 'body',
  scale = 'large',
  color = 'inherit',
  textAlign = 'inherit',
  className,
  ...props
}: FontProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FontProps<T>>) {
  const ComponentElement = as || 'span';
  return (
    <ComponentElement
      className={clsx(
        'MaterialFont',
        `${variant}-${scale}`,
        `color-${color}`,
        `text-align-${textAlign}`,
        className,
      )}
      {...props}
    />
  );
}
