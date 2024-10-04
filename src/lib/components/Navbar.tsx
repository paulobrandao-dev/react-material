'use client';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, HTMLAttributes } from 'react';

export interface NavbarProps<T extends ElementType>
  extends HTMLAttributes<HTMLElement> {
  as?: T;
  color?:
    | 'primary'
    | 'primary-container'
    | 'secondary'
    | 'secondary-container'
    | 'tertiary'
    | 'tertiary-container'
    | 'inverse-surface';
}

export function Navbar<T extends ElementType>({
  as,
  color,
  className,
  ...props
}: NavbarProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NavbarProps<T>>) {
  const ComponentElement = as || 'nav';

  return (
    <ComponentElement
      className={clsx('material-navbar', className)}
      data-color={color ?? undefined}
      {...props}
    />
  );
}
